const fs = require("fs");
const crypto = require("crypto");
const { error, log } = require("console");

class NotesManager {
  constructor() {
    this.path = "./04-files/notes/notes.json";
    this.init();
  }
  init() {
    const exists = fs.existsSync(this.path);
    if (!exists) {
      const stringData = JSON.stringify([], null, 2);
      fs.writeFileSync(this.path, stringData);
      console.log("archivo creado");
    } else {
      console.log("archivo ya existe");
    }
  }

  async create(data) {
    try {
      if (!data.text) {
        const error = new Error("Ingrese un texto");
        throw error;
      } else {
        const note = {
          id: crypto.randomBytes(12).toString("hex"),
          text: data.text,
          date: data.date || new Date(),
        };
        let archivo = await fs.promises.readFile(this.path, "utf-8");
        archivo = JSON.parse(archivo);
        archivo.push(note);
        archivo = JSON.stringify(archivo, null, 2);
        await fs.promises.writeFile(this.path, archivo);
        console.log("nota creada");
        return note;
      }
    } catch (error) {
      throw error;
    }
  }

  async read() {
    try {
      let archivo = await fs.promises.readFile(this.path, "utf-8");
      archivo = JSON.parse(archivo);
      if (archivo.length === 0) {
        throw new Error("NO hay NOTAS en el archivo")
      } else {
        console.log(archivo);
        return archivo;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async readOne(id) {
    try {
      let archivo = await fs.promises.readFile(this.path, "utf-8");
      archivo = JSON.parse(archivo);
      const nota = archivo.find((each) => each.id === id);
      if (!nota) {
        throw new Error("NO se encontró el Id: " + id);
      } else {
        console.log("NOTA ENCONTRADA:", nota);
        return nota;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async destroy(id) {
    try {
      let archivo = await fs.promises.readFile(this.path, "utf-8");
      archivo = JSON.parse(archivo);
      const nota = archivo.find((each) => each.id === id);
      if (!nota) {
        throw new Error("NO se encontró la nota: ", id);
      } else {
        let filtradas = archivo.filter((each) => each.id !== id);
        filtradas = JSON.stringify(filtradas, null, 2);
        await fs.promises.writeFile(this.path, filtradas);
        console.log("se borró la NOTA: ", id);
        return nota;
      }
      const notas = archivo.filter()
    } catch (error) {
      console.log(error);
    }
  }
}

async function test() {
  try {
    const notes = new NotesManager();
    await notes.create({text: "mi primer nota"});
    await notes.create({text: "mi segunda nota"});
    await notes.create({text: "mi tercera nota"});
    await notes.read();
    await notes.readOne("07a241b24350bdaf82aa9f30");
    const otraNota = await notes.create({text: "mi cuarta nota"});
    await notes.create({text: "mi quinta nota"});
    await notes.readOne(otraNota.id);
    await notes.destroy(otraNota.id);
  } catch (error) {
    console.log(error);
  }
}

test();
