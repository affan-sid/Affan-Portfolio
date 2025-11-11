/** @type {import('next').NextConfig} */
const nextConfig = {
  // --- START OF REQUIRED ADDITIONS FOR GITHUB PAGES ---
  // 1. Force the build output to be static HTML/CSS/JS files
  output: 'export', 

  // 2. Set the base path to your repository name
  // This ensures assets (like CSS, images) load correctly on the subpath URL
  basePath: '/Affan-Portfolio', 
  // --- END OF REQUIRED ADDITIONS FOR GITHUB PAGES ---

  allowedDevOrigins: ["*.preview.same-app.com"],
  images: {
    // This is already set correctly, as image optimization isn't supported for static export
    unoptimized: true, 
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
        
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
