<template>
<Header />
  <div class="container py-md-5 container--narrow">

  <Flash />

    <h2 class="text-center mb-4" v-if="posts">Latest from those you follow</h2>
    <div class="list-group" v-if="posts">
        <a v-for="post in posts" :href="'/posts/{{ post._id }}'" class="list-group-item list-group-item-action">
          <img class="avatar-tiny" :src="post.author.avatar">
          <strong>{{ post.title }}</strong>
          <span class="text-muted small">by {{ post.author.username }}</span>
          <span class="text-muted small">on {{ post.created_at.getMonth() + 1 }} {{ post.created_at.getDate() }} {{ post.created_at.getFullYear() }}</span>
        </a>
    </div>
    <div class="text-center" v-if="user">
      <h2>Hello <strong>{{ user.username }}</strong>, your feed is empty.</h2>
      <p class="lead text-muted">Your feed displays the latest posts from the
        people you follow. If you don&rsquo;t have any friends to follow
        that&rsquo;s okay; you can use the &ldquo;Search&rdquo; feature in the
        top menu bar to find content written by people with similar interests
        and then follow them.</p>
    </div>
  </div>
<Footer />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Flash from '@/components/Flash.vue'
import { UserType, PostType } from "@/types"

export default defineComponent({
  name: "Dashboard",
  components: {
    Header,
    Footer,
    Flash,
  },
  props: {
    user: Object as PropType<UserType>,
    posts: Array as PropType<Array<PostType>>
  },
});
</script>