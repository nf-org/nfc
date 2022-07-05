import {login} from '@/api/login';

const user = {
    state: {
        status: '',
        name: '',
        token: '',
    },
    mutations: {
        Login(state: any, token: string) {
            state.token = token;
        }
    },

    actions: {
        async LoginByUserName({commit}: { commit: Function }, userInfo: LoginData) {
            let res = await login(userInfo)
            if (res.data.code === '200') {
                commit('Login', res.data.token);
                return Promise.resolve('200')
            } else {
                return Promise.resolve(res.data.code)
            }
        },
    },
};

export interface LoginData {
    name: string,
    password: string
}


export default user;
