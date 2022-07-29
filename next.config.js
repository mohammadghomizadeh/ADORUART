/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // exportPathMap: async function() {
  //   return {
  //     '/': {page: '/'}
  //   }; //<--this was missing previously
  // }
}
