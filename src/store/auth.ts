import axios from "axios"

export interface UserType {
  username: string,
  avatar: string,
  email: string,
}
export interface AuthState {
  user: UserType | null,
  token: string | null,
  error: string | null,
}
export interface LoginPayload {
  token: string,
  user: UserType
}

export interface Credentials {
  username: string,
  password: string
}

const auth = {
  namespaced: true,
  state: () : AuthState => ({
    user: null,
    token: null,
    error: null,
  }),
  mutations: {
    loginSuccessed(state: AuthState, payload: LoginPayload) {
      state.token = payload.token
      state.user = payload.user
      state.error = null
      localStorage.setItem('token', JSON.stringify(payload.token))
    },
    loginFailed(state: AuthState, error: string) {
      state.token = null
      state.user = null
      state.error  = error
    },
    logout(state: AuthState) {
      state.token = null
      state.user = null
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