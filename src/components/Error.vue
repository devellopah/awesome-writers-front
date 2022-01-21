<template>
<Header />
<div class="container py-md-5 container--narrow">
  <div class="text-center">
    <h2>Whoops, we cannot find that page.</h2>
    <p class="lead text-muted">You can always visit the <a href="/">homepage</a>
      to get a fresh start.</p>
  </div>
</div>
<Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  name: 'Error',
  components: {
    Header,
    Footer,
  }
})
</script>