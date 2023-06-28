<template>
  <v-container>
    <HTA>
      <template v-slot:htaSlot>
        <div>
          v-slot:htaSlot
        </div>
      </template>
    </HTA>
    <!-- <BC :bread = "locations"></BC> -->
    <v-row class="mt-15">
      layout
      <router-view :alert="alertOpt" @alertUpdate="alertUpdate">
      </router-view>
    </v-row>
  </v-container>
  <Alert :alert="alertOpt"></Alert>
  
</template>

<script>
import HTA from "@/components/hta";
import Alert from "@/components/alert";
// import BC from "@/components/bc";
export default {
  name: "LayoutDefault",
  components: {
    HTA,
    Alert,
    // BC,
  },
  data: () => ({
    alertOpt: {
      show:false,
      text:'aaa'
    }
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
    // locations: ['ge', 'Bar', 'Fizz']
  }),
  mounted() {
    // console.log(this.locations);
  },
  methods: {
    // bcupdate(val) {
    //   // this.locations = [];
    //   // this.locations = val;
    //   console.log(val);
    // }
    alertUpdate(val) {
      this.alertOpt.show = !(this.alertOpt.show);
      this.alertOpt.text = val;
      console.log(val);
    }
  },
};
</script>
<style>
.v-alert {
  position: absolute;
  top: 100px;
  left: 200px;
  z-index: 1000;
  background-color: #fff;
}
</style>
