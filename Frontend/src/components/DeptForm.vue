<template>
  <div class="mt-24 text-center mx-auto w-1/4">
    <form action="">
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">Department Name :</span>
        </label>
        <input
          type="text"
          placeholder="Department Name"
          class="input input-bordered w-full"
          v-model="deptData.name"
          required
        />
      </div>
      <br />
      <div>
        <button type="submit" class="btn w-full btn-outline" @click="add()">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import DepartmentInterface from "../util/departmentInterfacerface";

const router = useRouter();
const deptData = reactive<DepartmentInterface>({
  name: "",
});

const add = () => {
  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem(`access_token`),
    },
  };
  axios.post(`http://localhost:3000/department/`, deptData, config);
  router.push({ path: `/home` });
};

defineComponent({});
</script>
