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
  data: Profile | null,
  error: string | null
}

export interface ProfileResponsePayload {
  data: Profile
}

export interface ProfileRequestPayload {
  username: string,
}

const profile = {
  namespaced: true,
  state: (): State => ({
    data: null,
    error: null,
  }),
  mutations: {
    profileRequestSuccessed(state: State, payload: ProfileResponsePayload) {
      state.data = payload.data
      state.error = null
    },
    profileRequestFailed(state: State, error: string) {
      state.data = null
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