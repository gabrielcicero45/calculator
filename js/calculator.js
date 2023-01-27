const resultElement = document.querySelector('#result')
const numbers = document.querySelectorAll('.number-button')
const clearButton = document.querySelector('#AC')
const additionButton = document.querySelector('#addition')
const subtractionButton = document.querySelector('#subtraction')
const equalsButton = document.querySelector('#equals')

clearButton.addEventListener('click', ()=>{
  resultElement.textContent = ''
})
numbers.forEach(item =>{
  item.addEventListener('click', ()=>{
  resultElement.textContent = resultElement.textContent.concat(item.innerText)
  })
})
additionButton.addEventListener('click', () => {
  let previousValue = resultElement.textContent
  resultElement.textContent = resultElement.textContent.concat('+')
})
equalsButton.addEventListener('click', () => {
  resultElement.textContent = eval(resultElement.textContent)
})