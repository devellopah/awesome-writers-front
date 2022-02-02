import axios from "axios"
type AuthToken = null | string
type AuthError = null | string
export interface AuthState {
  isAuth: boolean,
  token: AuthToken,
  error: AuthError,
}

export interface Credentials {
  username: string,
  password: string
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
      state.isAuth = true
      state.error = null
      localStorage.setItem('token', JSON.stringify(token))
    },
    loginFailed(state: AuthState, error: AuthError) {
      state.error  = error
    },
    logout(state: AuthState) {
      state.token = null
      state.isAuth = false
      state.error = null
      localStorage.removeItem('token')
    },
  },
  actions: {
    async login({ commit }: { commit: any }, { username, password }: Credentials) {
      try {
        const endpoint = 'http://localhost:3000/api/login'
        const response = await axios.post(endpoint, { username, password })
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