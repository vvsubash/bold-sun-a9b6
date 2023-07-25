<template>
  <div>

    <h1>Hello from cloudflare</h1>
    <!-- <div v-for="todo in data">
      <div>
        <span>{{todo.id}}: {{ todo.task }}</span>
      </div>
    </div> -->
    {{ data }}
    <button @click="addTodo">Add a todo</button>

  </div>
</template>
<script setup lang="ts">

  const {data} = await useFetch('/api/todo/todos')
  const addTodo = () => {
    useFetch('/api/todo/todos',{
      method: "POST"
    })
  }
</script>
