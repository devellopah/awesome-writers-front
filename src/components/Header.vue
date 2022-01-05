<template>
  <header class="header-bar mb-3">
    <div class="container d-flex flex-column flex-md-row align-items-center p-3">
      <h4 class="my-0 mr-md-auto font-weight-normal">
        <a href="/" class="text-white">OurApp</a>
      </h4>
      <div class="flex-row my-3 my-md-0" v-if="user">
        <a href="#" class="text-white mr-2 header-search-icon" title="Search"
          data-toggle="tooltip" data-placement="bottom"><i
            class="fas fa-search"></i></a>
        <span class="text-white mr-2 header-chat-icon" title="Chat"
          data-toggle="tooltip" data-placement="bottom"><i
            class="fas fa-comment"></i></span>
        <a :href="'/users/{{ user.username }}'" class="mr-2">
        <img
          title="My Profile" data-toggle="tooltip"
          data-placement="bottom"
          style="width: 32px; height: 32px; border-radius: 16px;"
          :src="user.avatar"
        ></a>
        <a class="btn btn-sm btn-success mr-2" href="/posts/create">Create
          Post</a>
        <form action="/logout" method="POST" class="d-inline">
          <input type="hidden" name="_csrf" :value="csrfToken">
          <button class="btn btn-sm btn-secondary">Sign Out</button>
        </form>
      </div>
      <form action="/login" method="POST" class="mb-0 pt-2 pt-md-0" v-else>
        <div class="row align-items-center">
          <div class="col-md mr-0 pr-md-0 mb-3 mb-md-0">
            <input name="username" class="form-control form-control-sm input-dark"
              type="text" placeholder="Username" autocomplete="off">
          </div>
          <div class="col-md mr-0 pr-md-0 mb-3 mb-md-0">
            <input name="password" class="form-control form-control-sm input-dark"
              type="password" placeholder="Password">
          </div>
          <input type="hidden" name="_csrf" :value="csrfToken">
          <div class="col-md-auto">
            <button class="btn btn-primary btn-sm">Sign In</button>
          </div>
        </div>
      </form>
    </div>
  </header>

</template>

<script lang="ts">

import { defineComponent, PropType } from "vue";

interface User {
  username: string,
  avatar: string,
}

export default defineComponent({
  name: "Header",
  components: {
  },
  props: {
    user: {
      default: {
        username: 'John',
        avatar: 'https://i.pravatar.cc/100',
      },
      type: Object as PropType<User>,
    },
    csrfToken: {
      default: 'somevalue'
    }
  },
});
</script>