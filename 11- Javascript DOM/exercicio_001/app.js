/* ----------------------------------------------------------------------------

Exercício: 001
Enunciado: CONTADOR
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento. Ao clicar em cada
    um dos botões, o utilizador irá aumentar ou diminuir o valor em uma unidade.

---------------------------------------------------------------------------- */
const number_element = document.getElementById("valor")
const decrement_btn = document.getElementById("btn_decremento")
const increment_btn = document.getElementById("btn_incremento")

decrement_btn.addEventListener('click', (e)=>{
    let number_value = parseInt(number_element.textContent)
    number_value= number_value-1
    number_element.textContent = number_value
})

increment_btn.addEventListener('click', (e)=>{
    let number_value = parseInt(number_element.textContent)
    number_value= number_value+1
    number_element.textContent = number_value
})