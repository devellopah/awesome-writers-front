import axios from "axios"

interface Profile {
  username: string,
  avatar: string,
  isFollowing: boolean,
  postsCount: number,
  followersCount: number,
  followingCount: number
}

interface Follow {
  message: string,
  errors: string[],
}
interface State {
  data: Profile | null,
  error: string | null,
  follow: Follow

}

export interface ProfileResponsePayload {
  data: Profile
}

export interface ProfileRequestPayload {
  username: string,
  visitorId: string | null,
}

export interface FollowRequestPayload {
  username: string,
  visitorId: string | null,
}

const profile = {
  namespaced: true,
  state: (): State => ({
    data: null,
    error: null,
    follow: {
      message: '',
      errors: [],
    },
  }),
  mutations: {
    profileRequestSuccessed(state: State, payload: Profile) {
      state.data = payload
      state.error = null
    },
    followRequestSuccessed(state: State, payload: string) {
      state.follow.message = payload
      state.follow.errors = []
    },
    followRequestFailed(state: State, errors: string[]) {
      state.follow.message = ''
      state.follow.errors = errors
    },
    profileRequestFailed(state: State, error: string) {
      state.data = null
      state.error = error
    },
  },
  actions: {
    async getProfile({ commit }: { commit: any }, { username, visitorId }: ProfileRequestPayload) {
      try {
        const response = await axios.get(`/users/${username}`, {
          params: { visitorId }
        })
        commit('profileRequestSuccessed', response.data)
        console.log('profile response', response)
      } catch (e: any) {
        commit('profileRequestFailed', e.message)
      }
    },
    async follow({ commit }: { commit: any }, { username, visitorId }: FollowRequestPayload) {
      try {
        const response = await axios.post(`/follow/${username}`, { visitorId })
        commit('followRequestSuccessed', response.data)
        console.log('response', response)
      } catch (e: any) {
        console.log('follow errors', e)
        commit('followRequestFailed', e)
      }
    },
    async unfollow({ commit }: { commit: any }, { username, visitorId }: FollowRequestPayload) {
      try {
        const response = await axios.post(`/unfollow/${username}`, { visitorId })
        commit('followRequestSuccessed', response.data)
        console.log('response', response)
      } catch (e: any) {
        console.log('follow errors', e)
        commit('followRequestFailed', e)
      }
    },
  },
}

export default profile