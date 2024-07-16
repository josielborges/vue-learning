<template>
  <FirstComponent />
  <LifeCycle />
  <Person />
</template>

<script>
import FirstComponent from './components/FirstComponent.vue'
import LifeCycle from './components/LifeCycle.vue'
import Person from "@/components/Person.vue";

export default {
  name: 'App',
  components: {
    Person,
    FirstComponent,
    LifeCycle
  }
}
</script>