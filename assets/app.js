const app = new Vue({
    el: '#app',
    data: {
        title: 'Simple To Do List',
        newTodo: '',
        todos: []
    },
    methods: {
        addTodo() {                                           //add a new todo
            this.todos.push({           
                title: this.newTodo,
                done: false
            });
            this.newTodo = '';                                //make the textbox empty after submit
        },
        removeTodo(todo) {                                    //delete todo
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
        },
        allDone() {                                           //mark all as 'done'
            this.todos.forEach(todo => {
                todo.done = true;
            });
        }
    }
});