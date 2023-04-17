// Software desenvolvido por Bruno Braga.
// é um desafio do site FrontEnd Mentor

const formDay = document.getElementById('inputtext-day')
const formMonth = document.getElementById('inputtext-month')
const formYear = document.getElementById('inputtext-year')
const labelDay = document.getElementById('label-day')
const labelMonth = document.getElementById('label-month')
const labelYear = document.getElementById('label-year')
const textResultYears = document.getElementById('text-result-years')
const textResultDays = document.getElementById('text-result-days')
const textResultMonths = document.getElementById('text-result-months')
const textErrorDay = document.getElementById('text-error-day')
const textErrorMonth = document.getElementById('text-error-month')
const textErrorYear = document.getElementById('text-error-year')
let anoBisexto = 0
 // Variaveis para inicializacao do calculo
const currentDate = new Date()
const currentYear = currentDate.getFullYear()
const currentMonth = currentDate.getMonth() + 1
const currentDay = currentDate.getDate() 


let btnCalcular = document.querySelector('.button-enviar')
btnCalcular.addEventListener("click", function(evnt){

    verificarCampos()
    initCalculo()
})

verificarCampos = () => {

    // Validando se campos estao vazios
    if( formDay.value == "" || formDay.value == null ){
        textErrorDay.innerText = "Insira um valor valido"
        formDay.style.border = "1px solid red"
        labelDay.style.color = "red"
        textErrorDay.style.color = "red"
        textResultYears.innerText = "--"
        return 0
    }else{
        textErrorDay.innerText = ""
        formDay.style.border = "1px solid #d6d6d6"
        labelDay.style.color = "#d6d6d6"
    }
    if( formMonth.value == "" || formMonth.value == null ){
        textErrorMonth.innerText = "Insira um valor valido"
        formMonth.style.border = "1px solid red"
        labelMonth.style.color = "red"
        textErrorMonth.style.color = "red"
    }
    else{
        textErrorMonth.innerText = ""
        formMonth.style.border = "1px solid #d6d6d6"
        labelMonth.style.color = "#d6d6d6"
    }
    if( formYear.value == "" || formYear.value == null ){
        textErrorYear.innerText = "Insira um valor valido"
        formYear.style.border = "1px solid red"
        labelYear.style.color = "red"
        textErrorYear.style.color = "red"
    }
    else{
        textErrorYear.innerText = ""
        formYear.style.border = "1px solid #d6d6d6"
        labelYear.style.color = "#d6d6d6"
    }

    // VERIFICACAO DOS DIAS E MESES
    if( formMonth.value == 02 && formDay.value > 28 ){
        formDay.value = 28
    }
    if( formMonth.value == 4 && formDay.value > 30){
        formDay.value = 30
    }
    if( formMonth.value == 6 && formDay.value > 30){
        formDay.value = 30
    }
    if( formMonth.value == 9 && formDay.value > 30 ){
        formDay.value = 30
    }
    if(formMonth.value == 11 && formDay.value > 28){
        formDay.value = 30
    }
}

limitValue = () => {
    // LIMITAR OS VALORES INSERIDOS NOS INPUTS
    if( formDay.value > 31){
        formDay.value = 31
    }
    if( formMonth.value > 12){
        formMonth.value = 12
    }
    if( formYear.value > currentYear){
        formYear.value = currentYear
    }
}

initCalculo = () => {
     
    const anoNascimento = formYear.value
    const mesNascimento = formMonth.value
    const diaNascimento = formDay.value

    let resultYear = 0
    let resultMonth = 0
    let resultDay = 0
    
    if (currentMonth <= mesNascimento && currentDay <= diaNascimento){
        resultYear = Math.abs(anoNascimento - currentYear) - 1
    } 
    else{  
        resultYear = Math.abs(anoNascimento - currentYear)
    }
    // VERIFICANDO SE E O ANIVERSARIO DO USUARIO
    if (diaNascimento == currentDay && mesNascimento == currentMonth){ 
        resultYear = Math.abs(anoNascimento - currentYear)
        alert( "PARABÉNS, É SEU ANIVERSÁRIO HOJE!")
    } 
    // Verificando se o calculo deu algum valor negativo.
    if (resultYear <= 0 ){
        resultYear = 0
    }
    /* 
        INICIANDO CALCULO DA IDADE EM MESES =================================
    */
    if( currentMonth > mesNascimento){
        resultMonth = Math.abs( mesNascimento - currentMonth )
    }
    else{
        resultMonth = Math.abs( (mesNascimento - currentMonth) - 12) 
    }
    if( resultMonth == 12){ // Validando se tem 1 ano completo =====
        resultMonth = 0
    }
    // FIM DO CALCULO DA IDADE ================================================

    // INICIANDO O CALCULO DE DIAS ============================================
    const diasNoMesDeNascimento = new Date(currentYear, currentMonth, 0).getDate()
    let dias = currentDay - diaNascimento
    if (currentDay < diaNascimento) {
        dias += diasNoMesDeNascimento;
      }

    resultDay = dias

    // Verificacao e validacao para aparecer os dados na tela
    if( formYear.value == "" || formYear.value == null ){
        textResultYears.innerText = "--"
    }else{
         textResultYears.innerText = resultYear
    }

    if( formDay.value == "" || formDay.value == null ){
        textResultDays.innerText = "--"
    }else{
         textResultDays.innerText = resultDay
    }

    if( formMonth.value == "" || formMonth.value == null ){
        textResultMonths.innerText = "--"
    }else{
         textResultMonths.innerText = resultMonth    
    }

    // ADICIONANDO ANIMACAO AO TEXTO 
    textResultYears.classList.add("animate")
    textResultMonths.classList.add("animate")
    textResultDays.classList.add("animate")

    // REMOVENDO ANIMACAO DO TEXTO 
    setTimeout( function() {
        textResultYears.classList.remove("animate")
        textResultMonths.classList.remove("animate")
        textResultDays.classList.remove("animate")

    }, 500)
    
}
