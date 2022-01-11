<template>
<Header />
  <div class="container py-md-5">
    <Flash />
    <div class="row align-items-center">
      <div class="col-lg-7 py-3 py-md-5">
        <h1 class="display-3">Remember Writing?</h1>
        <p class="lead text-muted">Are you sick of short tweets and impersonal
          &ldquo;shared&rdquo; posts that are reminiscent of the late 90&rsquo;s
          email forwards? We believe getting back to actually writing is the key
          to enjoying the internet again.</p>
      </div>
      <div class="col-lg-5 pl-lg-5 pb-3 py-lg-5">
        <b-form action="/register" method="POST" id="registration-form">

          <div v-for="message in errors" class="alert alert-danger small">{{ message }}</div>

          <b-form-group
            label="Username"
            label-class="text-muted mb-1"
            label-for="username-register"
            valid-feedback="Thank you!"
            :invalid-feedback="'Please enter something.'"
          >
            <b-form-input
              id="username-register"
              name="username"
              placeholder="Pick a username"
              autocomplete="off"
            />
          </b-form-group>

          <b-form-group
            label="Email"
            label-class="text-muted mb-1"
            label-for="email-register"
            valid-feedback="Thank you!"
            :invalid-feedback="'Please enter something.'"
          >
            <b-form-input
              id="email-register"
              name="email"
              placeholder="you@example.com"
              autocomplete="off"
            />
          </b-form-group>

          <b-form-group
            label="Password"
            label-class="text-muted mb-1"
            label-for="password-register"
            valid-feedback="Thank you!"
            :invalid-feedback="'Please enter something.'"
          >
            <b-form-input
              id="password-register"
              name="password"
              placeholder="Create a password"
            />
          </b-form-group>

          <input type="hidden" name="_csrf" :value="csrfToken">
          <b-button
            block
            type="submit"
            variant="success"
            size="lg"
            class="py-3 mt-4 btn-block"
          >
            Sign up for OurApp
          </b-button>
        </b-form>
      </div>
    </div>
  </div>
<Footer />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import Header, { User } from '../Header.vue'
import Footer from '../Footer.vue'
import Flash from '../Flash.vue'

export default defineComponent({
  name: 'Guest',
  props: {
    errors: Array as PropType<Array<string>>,
    csrfToken: String,

  },
  components: {
    Header,
    Footer,
    Flash,
  }
})
</script>