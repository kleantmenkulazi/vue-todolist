

const { createApp } = Vue

createApp({

    data() {
        return {
            todos: {
                text: "Finire l'esercizio",
                done: "true"
            }
        }
    },

    method() {

    }
}).mount('#app')