const fs = require('fs');
const path = require('path');

// Caminho completo para o arquivo dados.json
const filePath = path.join(__dirname, 'dados.json');

let faturamentoDiario;

try {
    // Lendo o arquivo dados.json
    const jsonString = fs.readFileSync(filePath, 'utf8');

    // Convertendo o JSON em um objeto JavaScript
    faturamentoDiario = JSON.parse(jsonString);
} catch (error) {
    if (error.code === 'ENOENT') {
        console.error(`Erro: O arquivo 'dados.json' não foi encontrado em ${filePath}`);
    } else {
        console.error(`Erro ao ler o arquivo: ${error.message}`);
    }
    process.exit(1);
}

console.log("Problema 3: Análise de Faturamento Diário");

const validValues = faturamentoDiario.filter(entry => entry.valor > 0).map(entry => entry.valor);

const minValue = Math.min(...validValues);
const maxValue = Math.max(...validValues);

const meanValue = validValues.reduce((sum, value) => sum + value, 0) / validValues.length;
const daysAboveAverage = validValues.filter(value => value > meanValue).length;

console.log(`Menor valor de faturamento: R$ ${minValue.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$ ${maxValue.toFixed(2)}`);
console.log(`Número de dias acima da média: ${daysAboveAverage}`);

console.log("\nProblema 4: Percentual de Representação por Estado");

const faturamentoEstados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

const faturamentoTotal = Object.values(faturamentoEstados).reduce((sum, value) => sum + value, 0);

const percentuais = {};
for (let estado in faturamentoEstados) {
    percentuais[estado] = (faturamentoEstados[estado] / faturamentoTotal) * 100;
}

for (let estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado].toFixed(2)}%`);
}

console.log("\nProblema 5: Inversão de String");

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const stringOriginal = "Distribuidora";
const stringInvertida = reverseString(stringOriginal);

console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${stringInvertida}`);
