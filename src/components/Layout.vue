<template>
  <div class="nav-wrapper">
  <div class="content">
    <slot />
  </div>
   <Nav />
  </div>
</template>

<style lang="scss" scoped>
.nav-wrapper {
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  height: 90vh;
}
.content{
  flex-grow: 1;
  overflow: auto;
}
</style>

