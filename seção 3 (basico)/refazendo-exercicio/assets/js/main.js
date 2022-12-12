// Adicionar um escutar para previnir o envio de formulario
const form = document.querySelector('#form')

form.addEventListener('submit', function (event){
    event.preventDefault();
    console.log('Evento previnido.')
})