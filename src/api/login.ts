import axios from 'axios';
import { LoginData } from '@/store/modules/user';

export function login(data: LoginData) {
  return axios({
    method: 'post',
    url: 'http://*********/lab/login',
    headers: { 'content-type': 'application/json' },
    data: JSON.stringify(data),
  });
}
