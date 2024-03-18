const { error } = require("console");
const fs = require("fs");
const ruta = "./04-files/tickets.prom.json";
const contenido = JSON.stringify(
  [
    { title: "Shrek 1", play: "Dysney" },
    { title: "Interestelar", play: "HBO" },
  ],
  null,
  2
);

fs.promises
  .writeFile(ruta, contenido)
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error));

fs.promises
  .readFile(ruta, "utf-8")
  .then((respuesta) => console.log(JSON.parse(respuesta)))
  .catch((error) => console.log(error));

fs.promises.unlink(ruta)
.then(() => console.log("archivo eliminado"))
.catch(error => console.log(error));