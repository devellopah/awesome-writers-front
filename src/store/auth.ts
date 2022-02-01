import axios from "axios"
type AuthToken = null | string
type AuthError = null | string
export interface AuthState {
  isAuth: false,
  token: AuthToken,
  error: AuthError,
}

const auth = {
  namespaced: true,
  state: () : AuthState => ({
    isAuth: false,
    token: null,
    error: null,
  }),
  mutations: {
    loginSuccessed(state: AuthState, token: AuthToken) {
      state.token = token
    },
    loginFailed(state: AuthState, error: AuthError) {
      state.error  = error
    }
  },
  actions: {
    async login({ commit }: { commit: any }) {
      try {
        const response = await axios.post('http://localhost:3000/api/login', {
          username: 'test',
          password: 'testtesttest'
        })
        commit('loginSuccessed', response.data)
        console.log('response', response)

      } catch (e) {
        commit('loginFailed', e)
      }
    }
  },
  getters: {}
}

export default auth