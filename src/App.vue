<template>
  <div id="app">
    <top/>
    <router-view/>
      
      <bofang/>
  </div>
</template>

<script>
import bofang from './components/audio.vue'
import top from './components/top.vue'
export default {
  name: 'App',
  components: {
    top,
    bofang
  },
  data(){
    return{
      a:1
    }
  },
  created(){

}
}

</script>

<style lang="scss">

</style>
