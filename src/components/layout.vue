<template>
  <v-container>
    <HTA></HTA>
    <!-- <BC :bread = "locations"></BC> -->
    <v-row class="mt-15">
      layout
      <router-view></router-view>
    </v-row>
  </v-container>
</template>

<script>
import HTA from "@/components/hta";
// import BC from "@/components/bc";
export default {
  name: "LayoutDefault",
  components: {
    HTA,
    // BC,
  },
  data: () => ({
    // locations: [
    //   {
    //     title: "ge",
    //     disabled: false,
    //     href: "/ge/",
    //   },
    //   {
    //     title: "Link 1",
    //     disabled: false,
    //     href: "breadcrumbs_link_1",
    //   },
    //   {
    //     title: "Link 2",
    //     disabled: true,
    //     href: "breadcrumbs_link_2",
    //   },
    // ],
    locations: ['ge', 'Bar', 'Fizz']
  }),
};
</script>
