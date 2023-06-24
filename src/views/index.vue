<template>
  <v-container>
    <ul>
      <li><router-link to="/ge/list">list</router-link></li>
      <li @click="link('FirstView')">page1</li>
      <li @click="link('SecondView')">page2</li>
      <li @click="link('user')">user</li>
    </ul>
  </v-container>
</template>

<script>
export default {
  name: "IA",
  // props: ['bread'],
  data: () => ({
    path: "",
  }),
  mounted() {
    // console.log(this.bread);
    // this.bread = ['ge', 'list'];
  },
  methods: {
    link(val) {
      this.path = val
      console.log(this.path);
      this.$router.push({
        path: `/ge/${val}`
      });
      // this.$router.replace(val)
      // this.$router.go(-1)
    },
  },
};
</script>
