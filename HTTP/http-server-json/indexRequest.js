const http = require("http");
const { PORT = 8000 } = process.env;

function toJSON(value) {
  return JSON.stringify(value);
}

function onRequest(req, res) {
  if (req.headers["content-type"] !== "application/json") {
    const badRequest = toJSON({
      status: "FAIL",
      message: "Request must be in JSON format",
    });
    res.setHeader("content-type", "application/json");
    res.writeHead(400);
    res.end(badRequest);
    return;
  }
  let requestJSON = "";
  //Dengan mendaftarkan event listener menggunakan req.on, Anda dapat mengontrol alur eksekusi dalam menangani permintaan HTTP, terutama ketika datanya dikirimkan dalam beberapa potongan (chunks) yang terpisah. Hal ini memungkinkan Anda untuk memproses data secara asinkron saat data diterima.
  req.on("data", (chunk) => {
    // 'data': Ini adalah peristiwa yang terjadi setiap kali sejumlah data diterima dari klien. Event ini memungkinkan Anda untuk mengumpulkan data yang diterima dan menggabungkannya menjadi string JSON yang lengkap.
    requestJSON += chunk;
  });

  req.on("end", () => {
    // 'end': Ini adalah peristiwa yang terjadi ketika seluruh data permintaan telah diterima. Setelah event 'end' terjadi, server akan memproses data yang sudah dikumpulkan dan merespons sesuai.
    try {
      requestJSON = JSON.parse(requestJSON);
      if (
        requestJSON.username !== "sabrina" ||
        requestJSON.password !== "123456"
      ) {
        const unauthorizedJSON = toJSON({
          status: "FAIL",
          message: "Invalid Username and Password",
        });
        res.setHeader("content-type", "application/json");
        res.writeHead(401);
        res.end(unauthorizedJSON);
        return;
      }

      const authenticationJSON = toJSON({
        status: "OK",
        message: "Hello Sabrina",
      });

      res.setHeader("content-type", "application/json");
      res.writeHead(200);
      res.end(authenticationJSON);
      return;
    } catch (err) {
      const badRequestJSON = toJSON({
        status: "FAIL",
        message: "Invalid JSON Syntax",
      });

      res.setHeader("content-type", "application/json");
      res.writeHead(400);
      res.end(badRequestJSON);
      return;
    }
  });
}

const server = http.createServer(onRequest);

server.listen(PORT, () => {
  console.log("Server sudah berjalan, silahkan buka http://localhost:%d", PORT);
});
