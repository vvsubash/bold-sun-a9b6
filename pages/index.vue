<template>
    <div>
      <h1>Hello from cloudflare</h1>
      <!-- {{ data }} -->
      <form @submit.preventDefault="addTodo">
        <fieldset>
          <label for="name">employee name</label>
          <input type="text" v-model="employeeName">
        </fieldset>
        <fieldset>
          <label for="id">Id</label>
          <input type="text" v-model="aadharCardNumber">
        </fieldset>
      </form>
      <button @click="addTodo">Add a todo</button>
    </div>
  </template>
  <script setup lang="ts">
  // const { data } = await useFetch("/api/todo/todos");
  
  const employeeName = ref<string>('');
  const aadharCardNumber =ref<string>('')
  
  const addTodo = () => {
    useFetch("/api/employee/add", {
      method: "POST",
      body: {
        name: employeeName.value,
        aadhar_card_number: aadharCardNumber.value,
      },
    });
  };
  </script>
  