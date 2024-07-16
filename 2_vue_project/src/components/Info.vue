<script>
export default {
  name: 'Info',
  data() {
    return {
      email: 'chrys.jo@gmail.com',
      is_working: false,
      show_email: true
    }
  }
}
</script>

<template>
    <div>
      <p v-if="is_working">I am working</p>
      <p v-else>I am looking for a job</p>
      <p>I use the following languages</p>
      <ul>
        <li>Python</li>
        <li>Java</li>
        <li>IA</li>
      </ul>
      <p v-show="show_email">Send a message to {{ email }}</p>
    </div>
</template>

<style scoped>

</style>