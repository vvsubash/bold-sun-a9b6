<template>
  <div>
    <h1>Hello from cloudflare</h1>
    <!-- <div v-for="todo in data">
        <div>
          <span>{{todo.id}}: {{ todo.task }}</span>
        </div>
      </div> -->
    {{ data }}
    <v-spacer> </v-spacer>
    <v-btn elevation="1" @click="addTodo">Add a todo</v-btn>
  </div>
</template>
<script setup lang="ts">
const { data } = await useFetch("/api/todo/todos");

const addTodo = () => {
  useFetch("/api/todo/todos", {
    method: "POST",
    body: {
      id: 4,
      task: "Love thy Bunty",
    },
  });
};
</script>
