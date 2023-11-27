
const { teste } = require('/home/alisson/teste');

describe('Função de Somatório', () => {
  test('Somatório para 10 deve ser 23', () => {
    const resultado = teste(10);
    expect(resultado).toBe(23);
  });

  test('Somatório para 15 deve ser 45', () => {
    const resultado = teste(15);
    expect(resultado).toBe(45);
  });

  // Adicione mais testes conforme necessário
});
