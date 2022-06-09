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