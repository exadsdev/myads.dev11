/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'myads.dev', pathname: '/**' },
      { protocol: 'https', hostname: 'www.myads.dev', pathname: '/**' },
      // ถ้าคุณมีรูปจาก YouTube thumbnails หรือโดเมนอื่นๆ เพิ่มที่นี่ได้
      { protocol: 'https', hostname: 'i.ytimg.com', pathname: '/**' }
    ],
  },
};

module.exports = nextConfig;
