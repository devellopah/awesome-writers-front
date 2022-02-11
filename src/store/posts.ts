import axios from "axios"

export interface AuthorType {
  username: string,
  avatar: string,
}

export interface FeedPostType {
  _id: string,
  title: string,
  created_at: Date,
  author: AuthorType
}
export interface State {
  feed: FeedPostType[]
  error: string | null,
}
export interface FeedResponsePayload {
  feed: FeedPostType[]
}

export interface FeedRequestPayload {
  _id: string,
}

const posts = {
  namespaced: true,
  state: (): State => ({
    feed: [],
    error: null,
  }),
  mutations: {
    feedRequestSuccessed(state: State, payload: FeedResponsePayload) {
      state.feed = payload.feed
      state.error = null
    },
    feedRequestFailed(state: State, error: string) {
      state.feed = []
      state.error = error
    },
  },
  actions: {
    async getFeed({ commit }: { commit: any }, { _id }: FeedRequestPayload) {
      try {
        const endpoint = 'http://localhost:3000/api/feed'
        const response = await axios.get(endpoint, {
          params: {
            _id,
          }
        })
        commit('feedRequestSuccessed', response.data)
        console.log('feed response', response)
      } catch (e) {
        commit('feedRequestFailed', e)
      }
    }
  },
  getters: {
    hasFeed(state: State) {
      return Boolean(state.feed)
    }
  }
}

export default posts