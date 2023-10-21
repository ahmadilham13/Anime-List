/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: process.env.NEXT_PUBLIC_API_IMAGE_HOSTNAME
            }
        ]
    }
}

module.exports = nextConfig
