/* ----------------------------------------------------------------------------

Exercício: 002
Enunciado: CONTADOR COM INTERVALO DE VALORES
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    O valor nunca poderá ser inferior a -10 ou superior a 10.

---------------------------------------------------------------------------- */
const value_element = document.getElementById('valor')
const decrement_btn = document.getElementById('btn_decremento')
const increment_btn = document.getElementById('btn_incremento')
const container = document.getElementsByClassName('container mt-5')

let number = parseInt(value_element.textContent)

decrement_btn.addEventListener('click',(e)=>{
    if(number <= -10){
        number = -10
        if(container[0].querySelector('#minimum-alert') === null){
            const new_div = document.createElement('div')
            new_div.innerHTML = '<h2> O número não pode ser menor do que -10 </h2>'
            new_div.id = 'minimum-alert'
            new_div.className = 'row justify-content-center mt-5'
            container[0].appendChild(new_div)
        }
    }else{
        if(container[0].querySelector('#maximum-alert') !== null){
            container[0].querySelector('#maximum-alert').remove()
            --number 
        }else{
            --number
        }
    }
    value_element.textContent = number
})

increment_btn.addEventListener('click',(e)=>{
    if(number >= 10){
        number = 10
        if(container[0].querySelector('#maximum-alert') === null){
            const new_div = document.createElement('div')
            new_div.innerHTML = '<h2> O número não pode ser maior do que 10 </h2>'
            new_div.id = 'maximum-alert'
            new_div.className = 'row justify-content-center mt-5'
            container[0].appendChild(new_div)
        }
    }else{
        if(container[0].querySelector('#minimum-alert') !== null){
            container[0].querySelector('#minimum-alert').remove()
            ++number 
        }else{
            ++number
        }
    }
    value_element.textContent = number
})