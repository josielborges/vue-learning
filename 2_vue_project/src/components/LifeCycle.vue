<script>
export default {
  name: 'LifeCycle',
  data() {
    return {
      name: 'Not defined'
    }
  },
  created() {
    setTimeout(() => {
      this.name = 'Josiel'
    }, 1000)
  },
  mounted() {
    setTimeout(() => {
      this.name = 'Jussara'
    }, 2000)
  }
}
</script>

<template>
  <h1>
    My name is: {{ name }}
  </h1>
</template>

<style scoped>

</style>