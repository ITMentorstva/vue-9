<template>
  <h1>Hello world</h1>

  <form @submit.prevent="addTask">
    <input v-model="title" type="text" placeholder="Unesite naslov zadatka" required />
    <input v-model="description" type="text" placeholder="Unesite text zadatka" required />
    <input v-model="dueDate" type="date" required />
    <select v-model="priority">
      <option>Hitan</option>
      <option>Vazan</option>
      <option>Nije toliko vazan</option>
      <option>Nebitan</option>
    </select>
    <button>Snimi zadatak</button>
  </form>

  <div>
    <div v-for="(task, index) in tasks" :key="index">
      <p>{{ task.title }}</p>
      <p>{{ task.description }}</p>
      <p>Rok: {{ task.dueDate }}</p>
      <p>Priority: {{ task.priority }}</p>
      <button @click="deleteTask(index)">Delete task</button>
    </div>
  </div>

</template>

<script lang="ts">


import { defineComponent } from "vue";
import FormTaskType from "@/Types/FormTaskType";

  export default defineComponent({
    name: "TodoList",
    data(): FormTaskType {
      return {
        title: '',
        description: '',
        dueDate: '',
        priority: null,
        tasks: []
      }
    },
    methods: {
      addTask() {

        const taskExists = this.tasks.some(task => task.title === this.title.trim());

        if(taskExists) {
          alert("Zadatak sa ovim imenom vec postoji");
          return;
        }

        this.tasks.push({
          title: this.title,
          description: this.description,
          dueDate: this.dueDate,
          priority: this.priority
        });

        this.resetFields();

      },

      resetFields() {
        this.title = '';
        this.description = '';
        this.dueDate = '';
        this.priority = null;
      },

      deleteTask(index: number) {
        this.tasks.splice(index, 1);
      }
    }
  });

</script>