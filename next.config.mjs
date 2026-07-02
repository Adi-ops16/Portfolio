/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  // Lock external image sources to only the domains actually used
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
    ],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevent clickjacking
          { key: 'X-Frame-Options', value: 'DENY' },
          // Prevent MIME sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Control referrer information
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Disable legacy XSS auditor (modern browsers ignore it; setting to 0 avoids bypass issues)
          { key: 'X-XSS-Protection', value: '0' },
          // Restrict browser features
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
          // Force HTTPS for 1 year, include subdomains
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          // Prevent DNS prefetching to avoid info leaks
          { key: 'X-DNS-Prefetch-Control', value: 'off' },
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Scripts: self + Next.js inline scripts + Google/Vercel analytics if needed
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              // Styles: self + inline (Tailwind generates inline styles) + Google Fonts
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              // Fonts: self + Google Fonts CDN
              "font-src 'self' https://fonts.gstatic.com",
              // Images: self + data URIs + ImgBB CDN (project screenshots)
              "img-src 'self' data: https://i.ibb.co.com https://i.ibb.co",
              // Connections: self only (contact form posts to same origin)
              "connect-src 'self'",
              // No frames allowed
              "frame-src 'none'",
              // No object/embed tags
              "object-src 'none'",
              // Base URI locked to self
              "base-uri 'self'",
              // Form submissions only to self
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
