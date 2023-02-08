import fs from 'node:fs/promises';

const databasePath = new URL('./db.json', import.meta.url) // get URL file in directory node

export class Database {
  #database = {}

  constructor() {
    fs.readFile(databasePath, 'utf-8').then((response) => {
      this.#database = JSON.parse(response)
    })
    .catch(() => {
      this.#persist()
    })
  }

  #persist(){
    fs.writeFile(databasePath, JSON.stringify(this.#database))
  }

  insert(table, data) {
    if(Array.isArray(this.#database[table])) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data];
    }

    this.#persist();

    return data
  }

  select(table) {
    const data = this.#database[table] ?? [];

    return data
  }

  delete(table, id) {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id)

    if(rowIndex > -1) {
      this.#database[table].splice(rowIndex, 1);
      this.#persist()
    }
  }
  
  update(table, id, userData) {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id)

    if(rowIndex > -1) {
      this.#database[table].splice(rowIndex, 1, { id, ...userData });
      this.#persist()
    }
  }
}