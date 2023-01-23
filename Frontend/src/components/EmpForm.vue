<template>
  <div class="mt-24 text-center mx-auto w-1/4">
    <form>
      <div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Name :</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            class="input input-bordered w-full"
            v-model="data.name"
            required
          />
        </div>
      </div>
      <br />
      <div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Contact No. :</span>
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            placeholder="999-999-9999"
            class="input input-bordered w-full"
            v-model="data.contact"
            required
          />
        </div>
      </div>
      <br />
      <div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Department :</span>
          </label>
          <select class="select select-bordered" v-model="data.dept_id">
            <option disabled selected hidden value="">Select Department</option>
            <option v-for="d in dept_data.values" :key="d.id" :value="d.id">
              {{ d.name }}
            </option>
          </select>
        </div>
      </div>
      <br />
      <div>
        <button
          v-if="route.query.id"
          type="submit"
          class="btn w-full btn-outline"
          @click="update()"
        >
          Update
        </button>
        <button
          v-else
          type="submit"
          class="btn w-full btn-outline"
          @click="add()"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import EmployeeInterface from "../util/employeeInterface";
import DepartmentInterface from "../util/departmentInterface";
import { defineComponent, onMounted, reactive } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";

defineComponent({});
const route = useRoute();
const router = useRouter();

const data = reactive<EmployeeInterface>({
  name: "",
  contact: "",
  dept_id: "",
});
const dept_data = reactive<DepartmentInterface[]>([]);

let config = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem(`access_token`),
  },
};

onMounted(() => {
  axios
    .get(`http://localhost:3000/department/`, config)
    .then((response) => (dept_data.values = response.data.data));

  if (route.query.id) {
    console.log(route.query.id);
    axios
      .get(`http://localhost:3000/employee/${route.query.id}`, config)
      .then((response) => {
        data.name = response.data.data.name;
        data.contact = response.data.data.contact;
        data.dept_id = response.data.data.dept_id;
      });
  }
});

const add = () => {
  console.log(data);
  axios.post(`http://localhost:3000/employee/`, data, config);
  router.push({ path: `/home` });
};

const update = () => {
  axios.patch(`http://localhost:3000/employee/${route.query.id}`, data, config);
  router.push({ path: `/home` });
};
</script>
