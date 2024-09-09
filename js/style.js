

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
                    text: "Preferibilmente senza piangere",
                    done: true,
                },
                {
                    text: "Cheering up!",
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