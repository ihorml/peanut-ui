/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        WC_PROJECT_ID: process.env.WC_PROJECT_ID,
        SOCKET_API_KEY: process.env.SOCKET_API_KEY,
        PEANUT_API_KEY: process.env.PEANUT_API_KEY,
        GA_KEY: process.env.GA_KEY,
    },
    productionBrowserSourceMaps: true,
}

module.exports = nextConfig
