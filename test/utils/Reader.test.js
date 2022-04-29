const  reader = require("../../lib/utils/Reader");//seeguro
describe("test para Reader",() => {
    test("1) recibir lista de explorers", () => {
        const explorers = reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo
        //expect(reader.readJsonFile("explorers.json")).toStrictEqual(explorers);
        expect(explorers.length).toBe(15);
    });
});

//TDD Test Driven Develpment
//1) escribir una prueba de lo que quieres modelar
//2) correr la prueba vacia y que truene
//3) escribir el código para hacer que la prueba pase

