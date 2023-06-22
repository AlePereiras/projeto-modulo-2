
const {valida} = require("./css.js")

const assert = require("assert")

describe("Testando campo nome", function() {
    it("Nome tem que ser apenas letras", function(){
        var nome = "Joao";
        assert.ok(valida(nome));
    });
});