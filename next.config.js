/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            // matching all API routes
            source: "/api/:path*",
            headers: [
              { key: "Access-Control-Allow-Credentials", value: "true" },
              { key: "Access-Control-Allow-Origin", value: "*" },
              {
                key: "Access-Control-Allow-Methods",
                value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
              },
              {
                key: "Access-Control-Allow-Headers",
                value:
                  "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, no-cors",
              },
            ],
          },
          
        ];
      },


      images : {
        remotePatterns : [
            {
                protocol: 'https',
                hostname: 'media-4.api-sports.io',
            },
            {
                protocol: 'https',
                hostname: 'media.api-sports.io',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org'
            },
            {
                protocol: 'https',
                hostname: "flagcdn.com"
            },
            {
                protocol: 'https',
                hostname: "brandlogos.net"
            },
            {
                protocol: 'https',
                hostname: "cdn.weatherapi.com"
            },
            {
                protocol: 'https',
                hostname: "placehold.co"
            }
        ]
    },
    env: {
      API_URL: process.env.API_URL,
      RAPID_API_STANDINGS : process.env.RAPID_API_STANDINGS,
      RAPID_API_HOST: process.env.RAPID_API_HOST,
      RAPID_API_KEY: process.env.RAPID_API_KEY,
      RAPID_API_FIXTURES_URL: process.env.RAPID_API_FIXTURES_URL,
      RAPID_API_EVENTS_URL: process.env.RAPID_API_EVENTS_URL
    },
}

module.exports = nextConfig
