<template>
<Header />

<div class="container py-md-5 container--narrow">

  <Flash />

    <div class="d-flex justify-content-between" v-if="post">
      <h2>{{ post.title }}</h2>
      <span class="pt-2" v-if="post.isOwner">
        <a href="/posts/{{post._id}}/edit" class="text-primary mr-2" data-toggle="tooltip" data-placement="top" title="Edit">
          <font-awesome-icon icon="edit" />
        </a>
        <b-form class="delete-post-form d-inline" action="/posts/{{ post._id }}?_method=DELETE" method="POST">
          <input type="hidden" name="_csrf" value="{{ csrfToken }}">
          <button class="delete-post-button text-danger" data-toggle="tooltip" data-placement="top" title="Delete">
          <font-awesome-icon icon="trash" />
          </button>
        </b-form>
      </span>
    </div>

    <p class="text-muted small mb-4" v-if="post">
      <a href="/users/{{ post.author.username }}">
        <img class="avatar-tiny" src="{{ post.author.avatar }}">
      </a>
      Posted by <a href="/users/{{ post.author.username }}">{{ post.author.username }}</a> on {{ post.created_at.getMonth() + 1 }} {{ post.created_at.getDate() }} {{ post.created_at.getFullYear() }}
    </p>

    <div class="body-content">
      <p>{{ post!.body }}</p>
    </div>
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
    csrfToken: String,
    post: Object as PropType<PostType>
  },
  components: {
    Header,
    Footer,
    Flash,
  }
})
</script>