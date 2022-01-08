<template>
  <b-alert v-for="item in messages" :variant="variant" show>{{ item }}</b-alert>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
type Variant = 'danger' | 'success'
export default defineComponent({
  name: "Flash",
  props: {
    variant: String as PropType<Variant>,
    messages: Array as PropType<Array<string>>
  },
});
</script>