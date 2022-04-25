import axios from '../plugins/axios/index'


export function heros(params={},otherParams={}) {
  return axios({
    url: '/api/admin/checkip/',
    method: 'get',
    params,
    ...otherParams
  })
}

export function qwe(params) {
  return axios({
    url: '/api/package/qwe/',
    method: 'get',
    params,
  })
}