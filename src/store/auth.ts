import axios from "axios"

export interface UserType {
  _id: string,
  username: string,
  avatar: string,
  email: string,
}
export interface AuthState {
  user: UserType | null,
  token: string | null,
  error: string | null,
}
export interface LoginResponsePayload {
  token: string,
  user: UserType
}

export interface LoginRequestPayload {
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
    loginSuccessed(state: AuthState, payload: LoginResponsePayload) {
      state.token = payload.token
      state.user = payload.user
      state.error = null
      localStorage.setItem('aw_token', JSON.stringify(payload.token))
      localStorage.setItem('aw_user', JSON.stringify(payload.user))

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
      localStorage.removeItem('aw_token')
      localStorage.removeItem('aw_user')
    },
  },
  actions: {
    async login({ commit }: { commit: any }, { username, password }: LoginRequestPayload) {
      try {
        const response = await axios.post('/login', { username, password })
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        commit('loginSuccessed', response.data)
        console.log('response', response)

      } catch (e) {
        commit('loginFailed', e)
      }
    }
  },
  getters: {
    isAuth(state: AuthState) {
      return Boolean(state.user)
    }
  }
}

export default auth