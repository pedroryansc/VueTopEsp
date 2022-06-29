const app = Vue.createApp({
    data(){
        return{
            mensagem: "Olá mundos"
        }
    }
}).mount("#corpo")

const app2 = Vue.createApp({
    data(){
        return{
            palavra: "Virgulino"
        }
    }
}).mount("#exemplo")

const app3 = Vue.createApp({
    data(){
        return{
            mostra: true,
            qnt: 100,
            nomes: ["Beltrano", "Fulano", "Ciclano", "Virgulino"],
            alunos: [{id: 12, nome: "Karin"}, {id: 52, nome: "Ágatha"}, {id: 63, nome: "Leonardo"}, {id: 74, nome: "Gianluca"}],
        }
    }
}).mount("#app")