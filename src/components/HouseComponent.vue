<template>
  <div class="HouseComponent ">
    <div class="col-3" v-for="(value, key) in houses">
      <h1>{{key}}</h1>
      <h5>{{value}}</h5>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HouseComponent",
    props: [],
    data() {
      return {}
    },
    computed: {
      houses() {
        return this.$store.state.housePoints
      }
    },
    methods: {},
    components: {}
  }
</script>