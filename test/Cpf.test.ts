import Cpf from "../src/Cpf";

test("Deve testar um cpf válido", function () {
    const cpf = new Cpf("962.579.810-26");
    expect(cpf.getValue()).toBe("962.579.810-26");
});

test("Deve testar um cpf inválido com dígitos iguais", function () {
    expect(() => new Cpf("111.111.111-11")).toThrow("CPF inválido");
});

test("Deve testar um cpf inválido com dígitos diferentes", function () {
  expect(() => new Cpf("015.105.160.98")).toThrow("CPF inválido");
});