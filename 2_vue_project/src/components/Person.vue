<script>
import Info from "@/components/Info.vue";
import Form from "@/components/Form.vue";

export default {
  name: 'Person',
  data() {
    return {
      name: 'Not defined'
    }
  },
  components: {
    Info,
    Form
  }
}
</script>

<template>
  <div>
    <h2>This is the description of the person: {{ name }}</h2>
    <Info/>
    <Form />
  </div>
</template>

<style scoped>

</style>