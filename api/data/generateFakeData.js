

const fs = require("fs")
const numTables = Math.floor(Math.random() * 10) + 16

let fakeTables = []
for (let i = 0; i < numTables; i++) {
    const chair = Math.floor(Math.random() * 6) + 2
    const name = `Table ${i}`
    const location = ["Any Location", "Patio", "Inside", "Bar"][Math.floor(Math.random() * 3)]
    fakeTables.push({
        name: name,
        capacity: chair,
        isAvailable: true,
        location: location
    });
    
}

let data = JSON.stringify({
    tables: fakeTables
});
fs.writeFileSync(__dirname + "/allTables.json", data)