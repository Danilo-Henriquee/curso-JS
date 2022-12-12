function meuEscopo () {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

pessoas = []

    function recebeEventoForm (evento) {
        evento.preventDefault()

        let nome = form.querySelector('.nome');
        let sobrenome = form.querySelector('.sobrenome');
        let peso = form.querySelector('.peso');
        let altura = form.querySelector('.altura');

        pessoas.push ({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas)

        resultado.innerHTML += `<p>
        nome = ${nome.value} 
        sobrenome = ${sobrenome.value}
        peso = ${peso.value} 
        altura = ${altura.value}</p>`

    }
    form.addEventListener('submit', recebeEventoForm)
}
meuEscopo()

``