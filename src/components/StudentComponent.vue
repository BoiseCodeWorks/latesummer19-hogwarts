<template>
  <div class="StudentComponent col-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{student.name}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{student.house}}</h6>
        <button @click="awardHousePoints">award points</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "StudentComponent",
    props: ['student'],
    data() {
      return {}
    },
    computed: {},
    methods: {
      awardHousePoints() {
        this.$store.dispatch('awardHousePoints', this.student.house)
      }
    },
    components: {}
  }
</script>