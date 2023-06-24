<template>
  <v-container>
    <ul>
      <li><router-link to="/ge/list">list</router-link></li>
      <li @click="link('FirstView')">page1</li>
      <li @click="link('SecondView')">page2</li>
      <li @click="link('user')">user</li>
    </ul>
    <v-btn @click="alertShow(this.opt)">alert</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "IA",
  props: ['bread', 'alert'],
  data: () => ({
    path: "",
    opt: "인데스에서 실행한다",
  }),
  mounted() {
    console.log(this.alert);
    // this.bread = [];
    // this.update('list');
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
    alertShow(val) {
      this.$emit('alertUpdate', val);
      // console.log(val);
    },
  },
};
</script>
