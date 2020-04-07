const Base64 = require('js-base64').Base64

const encoded = Base64.encode(`
ssr://MTM4LjY4LjQ5LjM6ODA4MDphdXRoX3NoYTFfdjQ6Y2hhY2hhMjA6dGxzMS4yX3RpY2tldF9mYXN0YXV0aDpjR0ZyYVhOMFlXNHhNZy8_b2Jmc3BhcmFtPSZncm91cD1kWE5o
ssr://NDcuMjQwLjI1Mi4zMjo4MDphdXRoX3NoYTFfdjQ6Y2hhY2hhMjA6cGxhaW46Y0dGcmFYTjBZVzR4TWcvP29iZnNwYXJhbT0mZ3JvdXA9Ylhr
`)

console.log(encoded)
