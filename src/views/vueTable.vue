<!--模板-->
<template>
  <div class="hello">
    <yjTable></yjTable>
  </div>
</template>

<!--Vue-->
<script>
  import yjTable from '../components/table.vue'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your VUE Table'
      }
    },
    components: {yjTable}
  }
</script>

<!--CSS样式：用less-->
<style>

</style>
