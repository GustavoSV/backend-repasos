const fs = require("fs");
const path = "./04-files/tickets-cb.json"
const contenido = JSON.stringify([], null, 2);

fs.writeFile(path, contenido, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("creado");
    }
});

fs.readFile(path, "utf-8", (error, exito) => {
    if (error) {
        console.log(error);
    } else {
        console.log("se han leído películas");
        console.log(exito);
    }
})

fs.unlink(path, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("eliminado");
    }
})