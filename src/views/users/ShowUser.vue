<template>
<div class="container py-md-5 container--narrow">
  <Flash v-if="error" :message="error" :variant="'danger'" />
  <Flash v-if="follow.message" :message="follow.message" :variant="'success'" />
  <Flash v-if="follow.errors.length" :messages="follow.errors" :variant="'danger'" />

  <div v-if="profile">
    <h2>
      <img class="avatar-small" :src="profile.avatar">
      <span id="username">{{ profile.username }}</span>
      <div v-if="user.username !== profile.username">
        <form @submit.prevent="onUnFollowSubmit" class="ml-2 d-inline" v-if="profile.isFollowing">
          <button type="submit" class="btn btn-danger btn-sm">Unfollow <i class="fas fa-user-times"></i></button>
        </form>
        <form @submit.prevent="onFollowSubmit" class="ml-2 d-inline" v-else>
          <button type="submit" class="btn btn-primary btn-sm">Follow <i class="fas fa-user-plus"></i></button>
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
    const follow  = computed(() => store.state.profile.follow)
    const error  = computed(() => store.state.profile.error)
    const user  = computed(() => store.state.auth.user)
    onMounted(() => {
      store.dispatch('profile/getProfile', {
        username: route.params.username,
        visitorId: user.value ? user.value._id : null
      })
    })

    const onFollowSubmit = () => {
      store.dispatch('profile/follow', {
        username: route.params.username,
        visitorId: user.value ? user.value._id : null
      })
    }

    const onUnFollowSubmit = () => {
      store.dispatch('profile/unfollow', {
        username: route.params.username,
        visitorId: user.value ? user.value._id : null
      })
    }

    return {
      profile,
      user,
      follow,
      error,
      onFollowSubmit,
      onUnFollowSubmit
    }
  },
})
</script>