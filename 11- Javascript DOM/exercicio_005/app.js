/* ----------------------------------------------------------------------------

Exercício: 005
Enunciado: TRÊS SLIDERS COM VALORES INDEPENDENTES - VERSÃO CÓDIGO REDUZIDO
    
    O exercício anterior, mas com quantidade de código JS reduzida.

---------------------------------------------------------------------------- */
const range_1 = document.getElementById('range_1')
const range_2 = document.getElementById('range_2')
const range_3 = document.getElementById('range_3')

const showValue = (range,val)=>{
    range.setAttribute('min',0)
    range.setAttribute('max',100)
    range.value = 0

    range.addEventListener('input',(event)=>{
        document.getElementById(val).textContent = event.target.value
    })
}

showValue(range_1,'value_1')
showValue(range_2,'value_2')
showValue(range_3,'value_3')