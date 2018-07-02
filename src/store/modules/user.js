/**
 * Created by admin on 17/11/9.
 */
import {
  login
} from '@/api';
import Cookies from 'js-cookie';
const user = {
  state: {
    token: '',
    name: '',
    avatar: '',
    roles: ''
  },
  mutations: {
    SET_NAME: (state, name) => {
      state.name = name;
    }
  },
  actions: {
    // commit(type, payload, options)
    // state = user.state
    login ({
      commit,
      state
    }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then((res) => {
          Cookies.set('name', res);
          commit('SET_NAME', res);
          resolve(res);
        }).catch((error) => {
          reject(error);
        })
      })
    }
  }
}

export default user;
