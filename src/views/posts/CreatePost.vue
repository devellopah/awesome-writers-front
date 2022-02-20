<template>
<div class="container py-md-5 container--narrow">
  <Flash />
  <b-form action="/posts" method="POST">
    <b-form-group
      label="Title"
      label-class="text-muted mb-1"
      label-for="post-title"
      valid-feedback="Thank you!"
      :invalid-feedback="'Please enter something.'"
    >
      <b-form-input
        required
        size="lg"
        id="post-title"
        name="title"
        placeholder=""
        autocomplete="off"
      />
    </b-form-group>
    <b-form-group
      label="Body Content"
      label-class="text-muted mb-1"
      label-for="post-body"
      valid-feedback="Thank you!"
      :invalid-feedback="'Please enter something.'"
    >
      <b-form-textarea
        required
        id="post-body"
        name="body"
      />
    </b-form-group>
    <b-button
      variant="primary"
    >
      Save New Post
    </b-button>
  </b-form>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Flash from '@/components/Flash.vue'

export default defineComponent({
  name: 'CreatePost',
  components: {
    Flash,
  }
})
</script>