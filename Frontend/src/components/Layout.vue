<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">CRUD Operation</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li>
          <router-link to="/home">
            <a>Home</a>
          </router-link>
        </li>
        <li>
          <router-link to="/addEmployee">
            <a>Add Employee</a>
          </router-link>
        </li>
        <li>
          <router-link to="/addDepartment">
            <a>Add Department</a>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <a @click="logout()">Logout</a>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const router = useRoute();
const logout = () => {
  localStorage.clear();
  router.push({ path: `/` });
};
</script>
