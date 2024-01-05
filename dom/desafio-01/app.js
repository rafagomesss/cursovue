new Vue({
    el: '#desafio',
    data: {
        nome: 'Rafael Gomes de Souza',
        idade: 35,
        sourceImage: 'https://img.freepik.com/fotos-gratis/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo_188544-9126.jpg?w=1380&t=st=1702857400~exp=1702858000~hmac=9011e03b3a45d7896545e70753052039af03430106d332de1543b6336cf42e1c'
    },
    methods: {
        multiplyAgeByThree() {
            return this.idade * 3
        },
        randomNumber() {
            return Math.random()
        }
    }
})