import axios from '../plugins/axios/index'

export function heros(params) {
  return axios({
    url: '/api/package/get_user_heros/',
    method: 'get',
    params
  })
}