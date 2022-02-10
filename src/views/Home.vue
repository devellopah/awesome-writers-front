<template>
<Header />
  <div :class="['container', 'py-md-5', { 'container--narrow': isAuth }]">
  <Flash />
  <Dashboard v-if="isAuth" />
  <Guest v-else />
  </div>
<Footer />
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Flash from '@/components/Flash.vue'
import Dashboard from '@/components/home/Dashboard.vue'
import Guest from '@/components/home/Guest.vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: "Home",
  components: {
    Header,
    Footer,
    Flash,
    Dashboard,
    Guest,
  },
  setup() {
    const store = useStore()
    const isAuth = computed(() => store.getters['auth/isAuth'])

    return {
      isAuth
    }
  }
});
</script>