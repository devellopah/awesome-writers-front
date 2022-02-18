import axios from "axios"

interface Profile {
  username: string,
  avatar: string,
  isFollowing: boolean,
  postsCount: number,
  followersCount: number,
  followingCount: number
}
interface State {
  profile: Profile | null,
  error: string | null
}

export interface ProfileResponsePayload {
  profile: Profile
}

export interface ProfileRequestPayload {
  username: string,
}

const profile = {
  namespaced: true,
  state: (): State => ({
    profile: {
      username: '',
      avatar: '',
      isFollowing: false,
      postsCount: 0,
      followersCount: 0,
      followingCount: 0,
    },
    error: null,
  }),
  mutations: {
    profileRequestSuccessed(state: State, payload: ProfileResponsePayload) {
      state.profile = payload.profile
      state.error = null
    },
    profileRequestFailed(state: State, error: string) {
      state.profile = null
      state.error = error
    },
  },
  actions: {
    async getProfile({ commit }: { commit: any }, { username }: ProfileRequestPayload) {
      try {
        const response = await axios.get(`/users/${username}`)
        commit('profileRequestSuccessed', response.data)
        console.log('profile response', response)
      } catch (e) {
        commit('profileRequestFailed', e)
      }
    }
  },
}

export default profile