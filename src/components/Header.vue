<template>
  <header class="header-bar mb-3">
    <div class="container d-flex flex-column flex-md-row align-items-center p-3">
      <h4 class="my-0 mr-md-auto font-weight-normal">
        <a href="/" class="text-white">OurApp</a>
      </h4>
      <div class="flex-row my-3 my-md-0" v-if="user">
        <a href="#" class="text-white mr-2 header-search-icon" title="Search" data-toggle="tooltip" data-placement="bottom">
          <font-awesome-icon icon="search" />
        </a>
        <span class="text-white mr-2 header-chat-icon" title="Chat" data-toggle="tooltip" data-placement="bottom">
          <font-awesome-icon icon="comment" />
        </span>
        <a :href="'/users/{{ user.username }}'" class="mr-2">
          <img
            title="My Profile" data-toggle="tooltip"
            data-placement="bottom"
            style="width: 32px; height: 32px; border-radius: 16px;"
            :src="user.avatar"
          >
        </a>
        <b-button class="btn-success mr-2" variant="link" size="sm">Create Post</b-button>
        <form action="/logout" method="POST" class="d-inline">
          <input type="hidden" name="_csrf" :value="csrfToken">
          <b-button size="sm">Sign Out</b-button>
        </form>
      </div>
      <b-form action="/login" method="POST" class="mb-0 pt-2 pt-md-0" v-else>
        <div class="row align-items-center">
          <div class="col-md mr-0 pr-md-0 mb-3 mb-md-0">
            <b-form-input
              name="username"
              class="form-control form-control-sm input-dark"
              type="text"
              placeholder="Username"
              autocomplete="off"
            />
          </div>
          <div class="col-md mr-0 pr-md-0 mb-3 mb-md-0">
            <b-form-input
              name="password"
              class="form-control form-control-sm input-dark"
              type="password"
              placeholder="Password"
            />
          </div>
          <input
            type="hidden"
            name="_csrf"
            :value="csrfToken"
          />
          <div class="col-md-auto">
            <b-button variant="primary" size="sm">Sign In</b-button>
          </div>
        </div>
      </b-form>
    </div>
  </header>

</template>

<script lang="ts">

import { defineComponent, PropType } from "vue";
import { UserType } from "@/types";

export default defineComponent({
  name: "Header",
  components: {
  },
  props: {
    user: {
      default() {
        return {
          username: 'John',
          avatar: 'https://i.pravatar.cc/100',
        }
      },
      // default: null,
      type: Object as PropType<UserType>,
    },
    csrfToken: {
      default: 'somevalue'
    }
  },
});
</script>