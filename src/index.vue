<template>
  <div>
    index vue
    <person></person>
  </div>
</template>

<script lang="ts">
import person from './person.vue'
export default {
  name: 'App',
  components: {
    person
  }
}
</script>
