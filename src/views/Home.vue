<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="test()" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    test() {
      console.log("$route", this.$route);
      console.log("$router", this.$router);
      console.log("this", this);

      // @ts-ignore
      console.log("$gtm", this.$gtm);
      // console.log("Vue.gtm", Vue.gtm);
    },
  },
});
</script>
