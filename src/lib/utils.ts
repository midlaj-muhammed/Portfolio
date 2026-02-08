const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/Portfolio' : '';

/**
 * Prefixes image paths with the basePath for GitHub Pages deployment.
 * Use this for all image src attributes.
 */
export function getImagePath(src: string): string {
    // If src already starts with basePath, return as is
    if (src.startsWith(basePath)) {
        return src;
    }
    // If src starts with /, prefix with basePath
    if (src.startsWith('/')) {
        return `${basePath}${src}`;
    }
    // Otherwise, return the src with basePath prefix
    return `${basePath}/${src}`;
}
