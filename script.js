alert("Vamos calcular dois números da sua escolha?")
let numberOne = prompt("Escolha o primeiro número.")
let numberTwo = prompt("Escolha o segundo número.")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${mult}`)
alert(`A divisão dos dois números é: ${div.toFixed(2)}`)
alert(`O resto da divisão dos dois números é: ${restDiv.toFixed(1)}`)

if (sum % 2 == 0) {
  alert("O soma dos dois números é um número par.");
} else {
  alert("O soma dos dois números é um número ímpar.");
}

if ( numberOne == numberTwo) {
  alert("os dois números inseridos são iguais.");
} else {
  alert("os dois números inseridos são diferentes.");
}