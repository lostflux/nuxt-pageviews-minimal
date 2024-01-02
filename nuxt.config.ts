// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    'nuxt-pageviews'
  ],
  pageViews: {
    credentials: {
      type: "service_account",
      project_id: "altair-on-the-web",
      private_key_id: "24ca858d3bc888749b71bc9ae8e4999c97f64f4b",

      // disable eslint max-len
      // eslint-disable-next-line max-len
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDThb6MSo7RcHLQ\nwkmdnCRTtivaJmTZ04H44Br05FPn7ATsYy8YHVEC1/7tOOWlFEhQr+Crmw8wF9zL\n+LkdV7wh43W5tvleZL+M7zkLqTWizG/jzovo0CB9pf2BcjfB1af0jy9GGGdnxR/n\nbTLp8e34XCGbqZi9U2FwTmYisna6I3ANhaMHWKGS+RC44xBQBmYKSco0WqOKQPXD\nuVmqDASiF1ogRwYx6vJJn5+Ptk2R43wEsWWYZzD1C8hAR8UJyBG4hTsfDFTUkxwI\nD55w/h+SMKMA1XoSItjQ3eTLuXAzFAQTM21oBm93SXturRKXO3whtLSN4pcb2X+L\nfWYaxXuDAgMBAAECggEALERjvfGGlR9e8ACRLnp0gc5wu/1oAsxIeaDRE2pLgxB6\ncUxKmVXdU+aHU/ch3FvzzGsabl+LnKmJzGg3uYPYfBEh3KWF57LXAbQ48I9PicwW\nKItb7XPNMO6RsMsKDzdbKIvkvVszHNz80c6hJqO6hU0mvXCPZiPykvHdXyqRPV/2\nhq7gj40gb6r48kXxoVebF2qOztGZziDTgEV5ZUaxTOgjpxAslgPam2HkestYS/kT\ne9yKQ1dOlMo40HHShsa6Z8YJLmmmCvMQ4B5OvHWXj4PlyZI39S2O4SEvN6ftQ1kK\nkxnkhEJQkZ/wU3V4hSjH7hypJWzpXfJvpHS+C1WY6QKBgQD8Mt39GIQ/hoAElRkm\n7QsNfLSw/aLcTuYV9T9ga7bpWN0PFZso1Fcctj/04AQDF3VU6NQ6z4gvLsq1MgVt\nVAL4y7uvONHmuPQMDY0tI1Eotg0y3JUt1LPP2nMpXKQEMCA5HOHJ0D8ynYBAGa7E\nY/zovhYayntiTu2t7SAkzzHEOQKBgQDWteyG4CyQ65/Gcwrbvxug151Jyq+9mxN4\nBJY4UTXg6y9mpx2Ki5tFH2rUvC/GLLiLAVJj8s9iwYuCMYPKwmRcz0BBvoMj9/gZ\nCXdUjee4rOhK1LEBhp5z0Pbhm1q6BE8mcjL/ixIPQzcasrk6BVdvlRIfd/B9xiPe\nQcApNOMVmwKBgQCohhEivAw7KtRGu574DPQSyh8wGfyG/M3xJFV6R+ANI81r9AMf\nkGy5ietI5ZyouDc2SvLubZlR9hGMbOWFfdsSh4ld+DkC1Np3Z2LMI8pqyuQc9ZtV\n6clR/mZv4DDVf5c4st0J73cbinWV39OR9kKc/9BjjKRQN+/JBigxkKZvuQKBgQCh\nHnV2pORsf5QvHAcq7VbzNLmANUv5cVSDvJVpf29576JrWr5tR+PlU/Ub3HfRM5/s\nF7rW6886IVjqAvQOBB/CEXf7ndXU+PBBAXx9g9s+FupdtQt6xKVE7atFkwnbCv7G\nL+4bGyYbM+o266TZaEa7odaurJdYGoax8w8bHOfHPwKBgB2UuvLNl/wErrn2+ho9\nc3b3J7mrG0LnsIvS/yWfv+RVA35owD+VThk6gv7aUBdTHzagyc9BOV2KRKFAGQ/G\nAwmme7nbOMlsEAGflxxOsC3VU81g/odkWcp70chYG5I/EZ6O0Zq8kXVaKalgrbDy\nlYx4Kpyue4NuDgkT1F1gpPlL\n-----END PRIVATE KEY-----\n",
      client_email: "analytics-api@altair-on-the-web.iam.gserviceaccount.com",
      client_id: "103470861819219016250",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/analytics-api%40altair-on-the-web.iam.gserviceaccount.com",
      universe_domain: "googleapis.com",
    },
    // propertyId: "6505863097",
    propertyId: "421464525",
    endpoint: "/api/views",
    preload: true, // preload analytics data on startup (default: true)
    exact: false, // if exact is false, merges urls that are the same without trailing slash
    startDate: "2021-01-01", // Get data starting at this date
    cacheTimeout: 15 * 60, // Cache half-life (in seconds)
    debug: false, // Debug mode, will show timings and refreshes
  },
})
