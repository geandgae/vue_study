<template>
  <v-container>
    <ul>
      <li><router-link to="/FirstView">page2</router-link></li>
      <li @click="link('SecondView')">page2</li>
    </ul>
  </v-container>
</template>

<script>
export default {
  name: "IA",

  data() {
    return {
      path: "",
    };
  },

  methods: {
    link(val) {
      this.path = val
      console.log(this.path);
      this.$router.push({
        path: `/${val}`
      });
      // this.$router.replace(val)
      // this.$router.go(-1)
    },
  },
};
</script>
