const Base64 = require('js-base64').Base64

const encoded = Base64.encode(`ssr://NDcuMjQwLjI1Mi4zMjo4MDphdXRoX3NoYTFfdjQ6Y2hhY2hhMjA6cGxhaW46Y0dGcmFYTjBZVzR4TWcvP29iZnNwYXJhbT0mZ3JvdXA9ZFhOaA
ssr://NDcuMjQwLjI1Mi4zMjo0NDM6YXV0aF9zaGExX3Y0OmNoYWNoYTIwOnBsYWluOmNHRnJhWE4wWVc0eE1nLz9vYmZzcGFyYW09Jmdyb3VwPWRYTmg
`)

console.log(encoded)

