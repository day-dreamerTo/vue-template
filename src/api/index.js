/**
 * Created by admin on 17/11/21.
 */
import fetch from '@/utils/fetch';

// 登录
export function login (data) {
  return fetch({
    url: '/api/getUser',
    method: 'post',
    data
  })
}
