<script>
import Submit from "@/components/form/Submit.vue";
import InputText from "@/components/form/InputText.vue";

export default {
  name: 'Form',
  components: {
    Submit,
    InputText
  }
}
</script>

<template>
  <div>
    <h1>Form</h1>
    <form>
      <div>
        <InputText/>
      </div>
      <div>
        <InputText/>
      </div>
      <div>
        <Submit/>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>