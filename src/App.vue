<template>
  <div class id="app">
    <Kanban/>

    <router-view class="pt-2"/>
  </div>
</template>

<script>
import Kanban from '@/components/Header'

export default {
  components:{
    Kanban,
  }
}
</script>

<style>
.bg_Color{
  background-color: #17202A;
}
</style>
