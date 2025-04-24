const http = require('node:http')
const data = require('./data.js')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })

  res.end(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>${data.title}</title>
      <style>
        body { font-family: sans-serif; padding: 2rem; background: #f3f3f3; }
        h1 { color: #333; }
        h2 { color: #555; }
      </style>
    </head>
    <body>
      <h1>${data.title}</h1>
      <h2>${data.subtitle}</h2>
      <p>${data.description}</p>
      <p><strong>Autor:</strong> ${data.author}</p>
      <p><strong>Fecha:</strong> ${data.date}</p>
    </body>
    </html>
  `)
})

server.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000")
})
