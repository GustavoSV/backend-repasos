class NotesManager {
  static #notes = [];
  create(data) {
    try {
      const nota = {
        id:
          NotesManager.#notes.length === 0
            ? 1
            : NotesManager.#notes[NotesManager.#notes.length - 1].id + 1,
        type: data.type || "To do",
        text: data.text,
        date: data.date || new Date(),
      };
      if (!data.text) {
        throw new Error("Ingrese Texto en la Nota");
      } else {
        NotesManager.#notes.push(nota);
        console.log("Nota creada");
      }
    } catch (error) {
      console.log(error);
    }
  }

  read() {
    try {
      if (NotesManager.#notes.length === 0) {
        throw new Error("NO HAY NOTAS");
      } else {
        return NotesManager.#notes;
      }
    } catch (error) {
      console.log(error);
    }
  }

	readOne(id) {
		try {
			const nota = NotesManager.#notes.find((each) => each.id === id)
			if (!nota) {
				throw new Error("NO EXISTE la nota " + id)
			} else {
				return nota;
			}
		} catch (error) {
			console.log(error);
		}
	}

	destroy(id) {
		try {
			const notaExiste = this.readOne(id);
			if (notaExiste) {
				const notasSin = NotesManager.#notes.filter((each) => each.id !== id);
				NotesManager.#notes = notasSin;
				console.log("Eliminada la nota", id);
			}
		} catch (error) {
			console.log(error);
		}
	}
}

const nota1 = new NotesManager();
console.log(nota1.read());
nota1.create({ text: "primer nota" });
nota1.create({ text: "segunda nota" });
nota1.create({ text: "tercer nota" });
nota1.create({ text: "cuarta nota" });
console.log(nota1.read());
console.log(nota1.readOne(12));
console.log(nota1.readOne(3));
nota1.destroy(2);
nota1.destroy(20);
console.log(nota1.read());