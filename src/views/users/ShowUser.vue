<template>
<div class="container py-md-5 container--narrow">
  <div v-if="profile">
    <h2>
      <img class="avatar-small" :src="profile.avatar">
      <span id="username">{{ profile.username }}</span>
      <div v-if="user.username !== profile.username">
        <form class="ml-2 d-inline" :action="'/unfollow/' + profile.username" method="POST" v-if="profile.isFollowing">
          <button class="btn btn-danger btn-sm">Unfollow <i class="fas fa-user-times"></i></button>
        </form>
        <form class="ml-2 d-inline" :action="'/follow/' + profile.username" method="POST" v-else>
          <button class="btn btn-primary btn-sm">Follow <i class="fas fa-user-plus"></i></button>
        </form>
      </div>
    </h2>

    <div class="profile-nav nav nav-tabs pt-2 mb-4">
      <a href="#" class="profile-nav-link nav-item nav-link active" data-resource="posts" :data-url="'/users/' + profile.username + '/posts'">Posts: <span id="postsCount">{{ profile.postsCount }}</span></a>
      <a href="#" class="profile-nav-link nav-item nav-link" data-resource="followers" :data-url="'/users/' + profile.username + '/followers'">Followers: <span id="followersCount">{{ profile.followersCount }}</span></a>
      <a href="#" class="profile-nav-link nav-item nav-link" data-resource="following" :data-url="'/users/' + profile.username + '/following'">Following: <span id="followingCount">{{ profile.followingCount }}</span></a>
    </div>

    <div id="profileContent"></div>
  </div>

  <Flash v-else-if="error" :message="error" />

  <div v-else>Loading...</div>
</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue"
import Flash from '@/components/Flash.vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'ShowUser',
  components: {
    Flash,
  },
  setup() {
    const route = useRoute()
    const store = useStore()

    const profile  = computed(() => store.state.profile.data)
    const error  = computed(() => store.state.profile.error)
    const user  = computed(() => store.state.auth.user)
    onMounted(() => {
      store.dispatch('profile/getProfile', {
        username: route.params.username
      })
    })

    return {
      profile,
      user,
      error,
    }
  },
})
</script>