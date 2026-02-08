'use client'

export default function myImageLoader({ src, width, quality }: { src: string, width: number, quality?: number }) {
    if (src.startsWith('https://') || src.startsWith('http://')) {
        return src
    }

    const isProd = process.env.NODE_ENV === 'production'
    const repoName = "Portfolio" // Must match the repository name exactly

    return isProd ? `/${repoName}${src}` : src
}
