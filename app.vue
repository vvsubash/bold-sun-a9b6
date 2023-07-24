<template>
  <div>

    <h1>Hello from cloudflare</h1>
    <!-- <div v-for="todo in data">
      <div>
        <span>{{todo.id}}: {{ todo.task }}</span>
      </div>
    </div> -->
    {{ data }}

  </div>
</template>
<script setup lang="ts">

  const {data} = await useFetch('/api/todo/todos')
</script>
