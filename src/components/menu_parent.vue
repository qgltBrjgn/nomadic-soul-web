<template>
  <div>
    menu_parent
    <div class="routerContainer">
      <router-view />
    </div>
    <div>
      <button @click="toMenuChildOne">menu_child_one</button>
    </div>
    <div>
      <button @click="toMenuChildTwo">menu_child_two</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu_parent',
  props: {
    msg: String
  },
  methods: {
    toMenuChildOne () {
      this.$router.push('/menu_child_one')
    },
    toMenuChildTwo () {
      this.$router.push('/menu_child_two')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .routerContainer {
    border: 1px solid green;
    height: 50vh;
    margin: 0;
  }
</style>
