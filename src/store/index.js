import Vue from 'vue'
import Vuex from 'vuex'
// import { heros } from '../apis/home'

// import { removeAllToken, hasToken } from '@/utils/cookie'
import hero from './hero'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: 'myliufan',
  },
  mutations: {
    setLogin(state, isLogin) {
      state.isLogin = isLogin
    },
  },
  actions: {
    // async changeUserInfo({
    //   commit,
    //   state
    // }, reload) {
    //   return new Promise((resolve, reject) => {
    //     if (state.heros.id && !reload) {
    //       resolve(state.heros)
    //     } else {
    //       if (hasToken()) {
    //         heros().then(res => {
    //           commit('setUserInfo', res.body)
    //           commit('setLogin', true)
    //           resolve(res)
    //         }).catch(err => {
    //           if (err.response && err.response.status === 401) {
    //             commit('setLogin', false)
    //             removeAllToken()
    //           }
    //           reject(err)
    //         })
    //       } else {
    //         commit('setLogin', false)
    //         reject(false)
    //       }
    //     }
    //   })
    // }
  },
  modules: {
    hero
  },
  getters: {
    isLogin: state => state.isLogin,
  }
})