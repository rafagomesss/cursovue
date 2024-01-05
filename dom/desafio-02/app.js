new Vue({
    el: '#desafio',
    data: {
        valor: null
    },
    methods : {
        exibirAlerta() {
            alert('Estou emitindo um alerta!')
        },
        alteraValor(event) {
            this.valor = event.target.value
        }
    }
})