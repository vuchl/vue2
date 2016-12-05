<template>
  <div class="md-card" id="login-card">
    <md-toolbar>
      <h2 class="md-title" style="flex: 1">{{title}}</h2>
    </md-toolbar>
    <div class="md-card-content">

      <md-input-container>
        <label>{{identifiers.name}}</label>
        <md-input></md-input>
      </md-input-container>
      <md-input-container>
        <label>{{identifiers.password}}</label>
        <md-input type="password"></md-input>
      </md-input-container>
      <md-card-actions>
        <md-button class="md-fab md-primary md-fab-bottom-right" @click.stop.prevent="submit">
          <md-icon>send</md-icon>
        </md-button>
      </md-card-actions>
      <span class="md-caption">Version {{version}}</span>
    </div>
    <!--div class="md-card-content">
      TODO Loader
    </div-->
  </div>
</template>

<script>
import { mapState } from 'vuex'

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
  },
  computed: {
    ...mapState([
      'version', 'title'
    ])
  }
}
</script>

<style>
#login-card {
  width: 400px;
}
h2 {
  color: white;
}
button {
  width: 100%;
}
</style>