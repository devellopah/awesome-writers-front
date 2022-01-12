<template>
<Header />
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
      <input type="hidden" name="_csrf" :value="csrfToken">
      <b-button
        variant="primary"
      >
        Save New Post
      </b-button>
    </b-form>
  </div>
<Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Header from '../Header.vue'
import Footer from '../Footer.vue'
import Flash from '../Flash.vue'

export default defineComponent({
  name: 'CreatePost',
  props: {
    csrfToken: String,

  },
  components: {
    Header,
    Footer,
    Flash,
  }
})
</script>