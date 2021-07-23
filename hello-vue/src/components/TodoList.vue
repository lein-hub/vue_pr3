<template>
    <div>
        <bass-input-text v-model="newTodoText" placeholder="New Todo" @addTodo="addTodo" />
        <ul v-if="todos.length">
            <todo-list-item v-for="todo in todos" :key="todo.id" :todo="todo" :bgColor="colorPallete[todo.id % colorPallete.length]" @remove="removeTodo" />
        </ul>
        <p v-else>
            Nothing left in the list. Add a new todo in the input above.
        </p>
    </div>
</template>

<script>
import BassInputText from './BaseInputText.vue'
import TodoListItem from './TodoListItem.vue'

let nextTodoId = 1;


export default {
    components: {
        BassInputText, TodoListItem
    },
    data() {
        return {
            newTodoText: '',
            todos: [],
            colorPallete: [
                'border-red-100 bg-red-50 text-red-800',
                'border-yellow-100 bg-yellow-50 text-yellow-800',
                'border-green-100 bg-green-50 text-green-800',
            ],
        }
    },
    methods: {
        addTodo() {
            const trimmedText = this.newTodoText.trim();
            if (trimmedText) {
                this.todos.push({
                    id: nextTodoId++,
                    text: trimmedText,
                });
                this.newTodoText = '';
            }
        },
        removeTodo(idToRemove) {
            this.todos = this.todos.filter(todo => {
                return todo.id !== idToRemove;
            })
        }
    },
}
</script>