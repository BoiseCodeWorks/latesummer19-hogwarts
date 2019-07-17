<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col">
        <h1>Witchcraft and Wizardry</h1>
      </div>
    </div>

    <houses></houses>

    <div class="row">
      <students v-for="student in students" :student="student" :key="student._id"></students>
    </div>

  </div>
</template>

<script>
  import houses from "@/components/HouseComponent.vue"
  import students from "@/components/StudentComponent.vue"

  export default {
    name: "home",
    mounted() {
      this.$store.dispatch('getStudents')
    },
    props: [],
    data() {
      return {}
    },
    computed: {
      students() {
        return this.$store.state.students.filter(character => character.role == 'student')
      }
    },
    methods: {},
    components: {
      houses,
      students
    }
  }
</script>