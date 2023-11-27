function teste(numero) {
    return Array.from({ length: numero - 1 }, (_, i) => i + 1)
        .filter((num) => num % 3 === 0 || num % 5 === 0)
        .reduce((acc, num) => acc + num, 0);
}

const resultado = teste(10);
console.log(resultado);
