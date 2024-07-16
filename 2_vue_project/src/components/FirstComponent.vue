<script>
export default {
  name: 'FirstComponent',
  data() {
    return {
      name: 'Josiel',
      profession: 'Programmer'
    }
  }
}
</script>

<template>
  <div>
    <h1>Hello Vue!</h1>
    <p>My name is {{ name }} and I am a {{ profession }}</p>
  </div>
</template>

<style scoped>

</style>