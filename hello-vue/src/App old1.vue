<template>
<div>
  <div id="app">
    <h1>My Todo App!</h1>
    <todo-list></todo-list>
  </div>
</div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
  },
  data() {
      return {
      }
  },
  computed: {
  },
  methods: {
  },
}
</script>

<style>
*, *::before, *::after {
  box-sizing: border-box;
}

#app {
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.4;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #32485F;
}

h1 { 
  text-align: center;
}
</style>
