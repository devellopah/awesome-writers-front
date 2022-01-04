<template>
  <Header />
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    Footer,
  },
  props: {
    message: {
      default: 'Hello World!'
    },
  },
  setup(props) {
    console.log(props.message)
  }
});
</script>
