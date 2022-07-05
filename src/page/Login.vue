<template>
  <n-space justify="center" align="center" style="width: 100%;height: 100%;">
    <n-card style="width: 400px;height: 400px">
      <div style="width: 100%;height: 100%;float: left">
        <div style="width: 100%;height: 10%;font-size: 20px;color: #606266;">
          欢迎来到404Lab
        </div>
        <div>
          <div style="width: 100%;height: 50%;margin-top: 20%">
            <el-input size="large" v-model="username" placeholder="用户名"/>
          </div>
          <div style="width: 100%;height: 50%;margin-top: 20px">
            <el-input size="large" v-model="password" placeholder="密码"/>
          </div>
        </div>
        <div style="width: 100%;height: 12%;margin-top: 10%">
          <div>
            <el-button @click="login" size="large" type="primary" style="width: 100px;">
              登录
            </el-button>
          </div>
        </div>
      </div>
    </n-card>
  </n-space>
  <h1 v-if="loginStatus === '200'">
    <n-alert title="登录成功" type="success">
      自动跳转至后台界面
    </n-alert>
  </h1>
  <h1 v-else-if="loginStatus !== ''">
    <n-alert title="登录失败" type="error">
      请检查帐号密码是否正确
    </n-alert>
  </h1>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import store from "@/store";
import {LoginData} from '@/store/modules/user';

export default defineComponent({
  data() {
    return {
      loginStatus: '',
      UserData: {
        name: '',
        password: ''
      }
    };
  },
  methods: {
    async login() {
      let data: LoginData = {
        name: this.username,
        password: this.password
      }
      let res = await store.dispatch("LoginByUserName", data);
      this.loginStatus = res;
      if (res === '200') {
        console.log(res);
      }
    }
  },
  setup() {
    return {
      username: ref(''),
      password: ref(''),
    };
  },
  name: 'Login',
});
</script>

<style scoped>

</style>
