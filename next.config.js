/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // env: {
  //   AUTH_URL: 'http://127.0.0.1:8000/api/auth',
  //   BASE_URL: 'http://127.0.0.1:8000/api',
  // },
  // exportPathMap: async function() {
  //   return {
  //     '/': {page: '/'}
  //   }; //<--this was missing previously
  // }
}
