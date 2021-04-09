<template>
  <div class="person">child vue person <div class="blue">bbbb</div></div>
</template>

<script lang="ts">
export default {
name: "person"
}
</script>

<style scoped lang="scss">

.person {
  color: red;

  .blue {
    color: blue;
  }
}

</style>
