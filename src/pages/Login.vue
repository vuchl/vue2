<template>
  <el-form :model="login" ref="login" label-position="top">
    <el-form-item :label="identifiers.name">
      <el-input v-model="login.name"></el-input>
    </el-form-item>
    <el-form-item :label="identifiers.password">
      <el-input v-model="login.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">{{identifiers.submit}}</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      login: {
        name: '',
        password: ''
      },
      identifiers: {
        name: 'Kennung',
        password: 'Password',
        submit: 'Login'
      }
    }
  },
  methods: {
    submit () {
      console.log('submitted login click')
    }
  }
}
</script>

<style></style>