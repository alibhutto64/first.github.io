const Base64 = require('js-base64').Base64

const encoded = Base64.encode(`
    {
        "remarks" : "",
        "id" : "826963D2EB1B0093FB9E49048A92A5F5",
        "server" : "138.68.49.3",
        "server_port" : 8080,
        "server_udp_port" : 0,
        "password" : "pakistan12",
        "method" : "chacha20",
        "protocol" : "auth_sha1_v4",
        "protocolparam" : "",
        "obfs" : "tls1.2_ticket_fastauth",
        "obfsparam" : "",
        "remarks_base64" : "",
        "group" : "usa",
        "enable" : true,
        "udp_over_tcp" : false
    },
    {
        "remarks" : "",
        "id" : "0CC4DB1D4CD102549080FC2BBAD343EF",
        "server" : "47.240.252.32",
        "server_port" : 80,
        "server_udp_port" : 0,
        "password" : "pakistan12",
        "method" : "chacha20",
        "protocol" : "auth_sha1_v4",
        "protocolparam" : "",
        "obfs" : "plain",
        "obfsparam" : "",
        "remarks_base64" : "",
        "group" : "usa",
        "enable" : true,
        "udp_over_tcp" : false
    }
`)

console.log(encoded)

