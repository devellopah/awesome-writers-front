<template>
  <b-alert v-if="message" :variant="variant" show>{{ message }}</b-alert>
  <b-alert v-else-if="messages" v-for="(item, index) in messages" :variant="variant" :key="index" show>{{ item }}</b-alert>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
type Variant = 'danger' | 'success'
export default defineComponent({
  name: "Flash",
  props: {
    variant: String as PropType<Variant>,
    message: String,
    messages: Array as PropType<Array<string>>
  },
});
</script>