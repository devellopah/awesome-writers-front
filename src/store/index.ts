import { createStore } from "vuex";
import auth from "./auth";
import posts from "./posts"
import profile from "./profile"


export default createStore({
  modules: {
    auth,
    posts,
    profile,
  }
});
