<template>
  <div>
    menu_parent
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu_parent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
