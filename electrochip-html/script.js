const form = document.getElementById('form')
const form_emp = document.getElementById('form-emp')



// form.addEventListener('submit', e => {
//     e.preventDefault()
//     let input = document.getElementById('inputState')
//     let inputTurn = document.getElementById('inputStateTurn')
//     let inputDate = document.getElementById('inputDate')
    

// })

form.addEventListener('submit', e => {
    e.preventDefault()
    let input = document.getElementById('inputState')
    let inputTurn = document.getElementById('inputStateTurn')
    let inputDate = document.getElementById('inputDate')
    let div =  document.getElementById('div')
    desenharCards(div, verificarEmpresas( input.value, inputDate.value));
})