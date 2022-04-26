import app from 'app.js'

test('1) Create a new object pokemon', () => {
    const rawdata = fs.readFileSync("explorers.json");
    const explorers = JSON.parse(rawdata);
    expect(app.explorers).toBe(explorers); // Corrige esta prueba
  });
  //TDD Test Driven Develpment
//1) escribir una prueba de lo que quieres modelar
//2) correr la prueba vacia y que truene
//3) escribir el código para hacer que la prueba pase