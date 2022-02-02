<template>
<Header />

<div class="container py-md-5 container--narrow">

  <Flash />

  <a class="small font-weight-bold" href="/posts/{{ post._id }}">&laquo; back to post</a>

  <b-form class="mt-3" action="/posts/{{ post._id }}" method="POST">
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
          :value="post!.title"
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
          :value="post!.body"
        />
      </b-form-group>
    <b-button
      variant="primary"
    >
      Save Updated Post
    </b-button>
  </b-form>
</div>

<Footer />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Flash from '@/components/Flash.vue'
import { PostType } from "@/types"

export default defineComponent({
  name: 'EditPost',
  props: {
    post: Object as PropType<PostType>
  },
  components: {
    Header,
    Footer,
    Flash,
  }
})
</script>