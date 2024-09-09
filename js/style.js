

const { createApp } = Vue

createApp({

    data() {
        return {
            todos: [
                {
                    text: "Finire l'esercizio",
                    done: true,
                },
                {
                    text: "se possibile",
                    done: true,
                },
                {
                    text: "Festeggiare",
                    done: true,
                },
            ],
            inputTodo: ""
        }
    },

    methods: {
        deleteTodo(i) {
            
            this.todos.splice(i, 1);
        },
        createTodo() {
            this.todos.push(this.inputTodo)
        }
    },

}).mount('#app')