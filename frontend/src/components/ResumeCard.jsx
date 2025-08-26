import React, { useEffect, useMemo, useRef, useState } from 'react';

// Lazy-load docx-preview only when needed to keep bundle lean
let renderDocx;
const ensureDocxPreview = async () => {
  if (!renderDocx) {
    const mod = await import('docx-preview');
    renderDocx = mod.renderAsync;
  }
};

const formatBytes = (bytes) => {
  if (bytes === 0 || bytes == null) return '—';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};

const formatDate = (dateLike) => {
  if (!dateLike) return '—';
  const d = typeof dateLike === 'string' ? new Date(dateLike) : dateLike;
  if (Number.isNaN(d.getTime())) return '—';
  return d.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
};

export default function ResumeCard({
  resume,
  onUploadClick,
  title = 'Resume',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [objectUrl, setObjectUrl] = useState(null);
  const docxContainerRef = useRef(null);

  const hasResume = Boolean(resume && resume.url);

  const extension = useMemo(() => {
    if (!hasResume) return null;
    const url = resume.url;
    const match = url.toLowerCase().match(/\.([a-z0-9]+)(?:$|\?|#)/);
    return match ? match[1] : null;
  }, [hasResume, resume]);

  // Cleanup any object URL we might create (for local uploads scenario)
  useEffect(() => {
    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [objectUrl]);

  useEffect(() => {
    const renderDocxIfNeeded = async () => {
      if (!isOpen) return;
      if (extension !== 'docx') return;
      if (!resume?.url) return;

      await ensureDocxPreview();
      if (docxContainerRef.current) {
        docxContainerRef.current.innerHTML = '';
      }
      const response = await fetch(resume.url);
      const blob = await response.blob();
      await renderDocx(blob, docxContainerRef.current, undefined, {
        inWrapper: false,
      });
    };
    renderDocxIfNeeded();
  }, [isOpen, extension, resume?.url]);

  if (!hasResume) {
    return (
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-400">No resume uploaded yet.</p>
          </div>
        </div>
        <div className="mt-4">
          <button
            onClick={onUploadClick}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-5 py-2 rounded-lg font-medium text-white"
          >
            Upload Resume
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-gray-300 mt-2 break-all">{resume.name}</p>
          <div className="text-sm text-gray-400 mt-1">
            <span className="mr-3">{formatBytes(resume.size)}</span>
            <span>Updated {formatDate(resume.updatedAt)}</span>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setIsOpen(true)}
            className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-4 py-2 rounded-lg font-medium transition-all"
          >
            View Resume
          </button>
          <a
            href={resume.url}
            download
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-4 py-2 rounded-lg font-medium text-white text-center"
          >
            Download Resume
          </a>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/70" onClick={() => setIsOpen(false)}></div>
          <div className="relative bg-gray-900 rounded-xl shadow-xl w-[95vw] h-[90vh] max-w-5xl border border-gray-700">
            <div className="flex items-center justify-between p-3 border-b border-gray-800">
              <div className="text-white text-sm sm:text-base truncate pr-4">{resume.name}</div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white px-3 py-1 rounded"
              >
                Close
              </button>
            </div>
            <div className="w-full h-[calc(90vh-56px)]">
              {extension === 'pdf' && (
                <iframe
                  title="Resume PDF Preview"
                  src={resume.url}
                  className="w-full h-full"
                />
              )}
              {extension === 'docx' && (
                <div ref={docxContainerRef} className="w-full h-full overflow-auto px-4 py-6 bg-white" />
              )}
              {extension !== 'pdf' && extension !== 'docx' && (
                <div className="w-full h-full flex items-center justify-center text-gray-300">
                  Preview not available for .{extension}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


