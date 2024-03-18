const fs = require("fs");

const path = "./04-files/tickets.json";

const movie1 = { title: "HarryPotter 1", place: "hostinger"}
const movie2 = { title: "Las Promesas", place: "netflix"}
const movie3 = { title: "Naufrago", place: "start+"}

if (!fs.existsSync(path)) {
    const array = JSON.stringify([]);
    fs.writeFileSync(path, array);
}

const movies = JSON.parse(fs.readFileSync(path, "utf-8"));
movies.push(movie1);
movies.push(movie2);
movies.push(movie3);
const moviesString = JSON.stringify(movies, null, 2);
fs.writeFileSync(path, moviesString);

// fs.unlinkSync(path);   ELIMINA EL ARCHIVO