<template>
<Header />

<div class="container py-md-5 container--narrow">

  <Flash />
  <h2>
    <img class="avatar-small" src="{{ avatar }}">
    <span id="username">{{ username }}</span>
    <div v-if="user && user.username !== username">
      <form class="ml-2 d-inline" action="/unfollow/{{ username }}" method="POST" v-if="isFollowing">
        <button class="btn btn-danger btn-sm">Unfollow <i class="fas fa-user-times"></i></button>
      </form>
      <form class="ml-2 d-inline" action="/follow/{{ username }}" method="POST" v-else>
        <button class="btn btn-primary btn-sm">Follow <i class="fas fa-user-plus"></i></button>
      </form>
    </div>
  </h2>

  <div class="profile-nav nav nav-tabs pt-2 mb-4">
    <a href="#" class="profile-nav-link nav-item nav-link active" data-resource="posts" data-url="/users/{{ username }}/posts">Posts: <span id="postsCount">{{ postsCount }}</span></a>
    <a href="#" class="profile-nav-link nav-item nav-link" data-resource="followers" data-url="/users/{{ username }}/followers">Followers: <span id="followersCount">{{ followersCount }}</span></a>
    <a href="#" class="profile-nav-link nav-item nav-link" data-resource="following" data-url="/users/{{ username }}/following">Following: <span id="followingCount">{{ followingCount }}</span></a>
  </div>

  <div id="profileContent"></div>
</div>

<Footer />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Flash from '@/components/Flash.vue'
import { UserType } from "@/types"

export default defineComponent({
  name: 'ShowUser',
  props: {
    user: Object as PropType<UserType>,
    avatar: String,
    username: String,
    isFollowing: Boolean,
    postsCount: String,
    followersCount: String,
    followingCount: String,
  },
  components: {
    Header,
    Footer,
    Flash,
  }
})
</script>