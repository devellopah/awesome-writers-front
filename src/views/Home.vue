<template>
<Header />
  <div :class="['container', 'py-md-5', { user: 'container--narrow' }]">
  <Flash />
  <Dashboard v-if="user" />
  <Guest v-else />
  </div>
<Footer />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Flash from '@/components/Flash.vue'
import Dashboard from '@/components/home/Dashboard.vue'
import Guest from '@/components/home/Guest.vue'

import { UserType, PostType } from "@/types"

export default defineComponent({
  name: "Home",
  components: {
    Header,
    Footer,
    Flash,
    Dashboard,
    Guest,
  },
  props: {
    user: {
      // default() {
      //   return {
      //     username: 'John',
      //     avatar: 'https://i.pravatar.cc/100',
      //   }
      // },
      default: null,
      type: Object as PropType<UserType>,
    },
    posts: Array as PropType<Array<PostType>>
  },
});
</script>