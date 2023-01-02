<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
@use '../src/assets/scss/main' as *;
header{
  @include FlexDisplay(row, center, center, 100%, 20vh);
  .wrapper{
    nav{
    @include FlexDisplay(row, space-evenly, center, 100%, 100%);
    color: white;
  }
  }
}

</style>
