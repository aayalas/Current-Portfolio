/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n:{
    locales: [ "en", "es" ],
    defaultLocale: "en",
    localeDetection: false // disable automatic language detection as we are using custom server-side routing to
  }
}

module.exports = nextConfig
