/* ----------------------------------------------------------------------------

Exercício: 003
Enunciado: CONTADOR COM CORES PARA NEGATIVOS, ZERO E POSITIVOS
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    No caso do valor ser zero o texto deve ser branco.
    No caso do valor ser negativo o texto deve ser vermelho puro.
    No caso do valor ser positivo o texto deve ser verde puro.

---------------------------------------------------------------------------- */
const number_text = document.getElementById('valor')
const de_btn = document.getElementById('btn_decremento')
const in_btn = document.getElementById('btn_incremento')
let number_value = parseInt(number_text.textContent)

const checkColorValue = (num)=>{
    if(num === 0){
        number_text.style.color = '#ffffff'
    }
    else if(num < 0){
        number_text.style.color = '#ff0000'
    }
    else{
        number_text.style.color = '#00ff00'
    }
}

de_btn.addEventListener('click',(e)=>{
    --number_value
    checkColorValue(number_value)
    number_text.textContent = number_value
})

in_btn.addEventListener('click',(e)=>{
    ++number_value
    checkColorValue(number_value)
    number_text.textContent = number_value
})
