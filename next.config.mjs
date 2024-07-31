/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: '/my-profile/',
    basePath: '/my-profile',
    images: {
        loader: 'imgix',
        path: '/',
    },
    output: "export",
    reactStrictMode: true, 
};

export default nextConfig;
