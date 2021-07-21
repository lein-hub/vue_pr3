<template>
    <div>
        <bass-input-text v-model="newTodoText" placeholder="New Todo" @keydown.enter="addTodo" />
        <ul v-if="todos.length">
            <todo-list-item v-for="todo in todos" :key="todo.id" :todo="todo" @remove="removeTodo" />
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