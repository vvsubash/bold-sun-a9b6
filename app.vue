<template>
  <div>
    <h1>Hello from cloudflare</h1>
    <!-- <div v-for="todo in data">
        <div>
          <span>{{todo.id}}: {{ todo.task }}</span>
        </div>
      </div> -->
    {{ data }}
    <form @submit.preventDefault="addTodo">
      <fieldset>
        <label for="id">Id</label>
        <input type="text" v-model="taskId">
      </fieldset>
      <fieldset>
        <label for="id">task</label>
        <input type="text" v-model="taskTask">
      </fieldset>
    </form>
    <button @click="addTodo">Add a todo</button>
  </div>
</template>
<script setup lang="ts">
const { data } = await useFetch("/api/todo/todos");

const taskId = ref<string>('');
const taskTask =ref<string>('')

const addTodo = () => {
  useFetch("/api/todo/todos", {
    method: "POST",
    body: {
      id: parseInt(taskId.value),
      task: taskTask.value,
    },
  });
};
</script>
