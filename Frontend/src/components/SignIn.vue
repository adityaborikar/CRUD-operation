<template>
  <div
    class="card absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-center w-1/3 bg-base-100 drop-shadow-2xl"
  >
    <div class="card-body">
      <div class="">
        <p class="text-3xl">Login</p>
        <div class="mt-16 text-center">
          <form>
            <div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Username :</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Type Username"
                  class="input input-bordered w-full"
                  v-model="data.username"
                  required
                />
              </div>
            </div>
            <br />
            <div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Password :</span>
                </label>
                <input
                  type="password"
                  id="contact"
                  name="contact"
                  placeholder="Type Password"
                  class="input input-bordered w-full"
                  v-model="data.password"
                  required
                />
              </div>
            </div>
            <br />
            <div>
              <button
                type="submit"
                class="btn w-full btn-outline"
                @click.prevent="signIn()"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";

defineComponent({});

const router = useRouter();
const data = reactive({ username: "", password: "" });

const signIn = () => {
  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem(`access_token`),
    },
  };
  axios.post(`http://localhost:3000/auth/login`, data).then((response) => {
    console.log(response);
    router.push({ path: `/home` });
    localStorage.setItem("access_token", response.data.access_token);
    console.log(response.data.access_token);
  });
};
</script>

<style>
.img {
  position: relative;
  text-align: center;
  color: white;
}
.text {
  position: absolute;
  top: 80%;
  left: 34%;
  color: white;
}
</style>
