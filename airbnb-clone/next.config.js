/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  images:{
    domains:['links.papareact.com'],
  },

  env:{
    mapbox_key:'pk.eyJ1IjoibWF0dHBlciIsImEiOiJjbDNwZjQyN3MweG14M3BwN2tyNTJueGY3In0.YlApl-vNjHFqlEvBXhbd2Q'
  }

}

module.exports = nextConfig
