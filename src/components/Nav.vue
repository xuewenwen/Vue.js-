<template>
  <div class="nav" data-v-x1>
    <router-link to="/money">记账</router-link>
    |
    <router-link to="/labels">标签</router-link>
    |
    <router-link to="/statistics">统计</router-link>
  </div>
</template>

<script>
export default {
  name: 'Nav'
};
</script>

<style lang="scss" scoped>
 .nav[data-v-x1]{
   border:1px solid red;
 }

</style>