<template>
  <section class="section">
    <section class="section hero is-fullheight is-error-section">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-two-fifths">
              <div class="card has-card-header-background">
                <header class="card-header">
                  <p class="card-header-title">
                    <span class="icon">
                      <i class="mdi mdi-lock default"></i>
                    </span>
                    <span>Вход для компаний.</span>
                  </p>
                  <figure class="image is-48x48">
                    <img
                      src="https://cdn.tproger.ru/wp-content/themes/bliss/assets/img/tp-circle2.png"
                    />
                  </figure>
                </header>
                <div class="card-content">
                  <figure class="avatar">
                    <img src="https://placehold.it/128x128" />
                  </figure>
                  <b-field label="Логин">
                    <b-input
                      placeholder="Логин"
                      icon="account"
                      v-model="login"
                    ></b-input>
                  </b-field>
                  <b-field label="Пароль">
                    <b-input
                      type="password"
                      icon="lock"
                      password-reveal
                      v-model="password"
                    ></b-input>
                  </b-field>
                  <b-field class="field">
                    <b-checkbox>Запомнить</b-checkbox>
                  </b-field>
                  <hr />
                  <b-field>
                    <div class="buttons">
                      <b-button type="is-dark" @click="signIn">Вход</b-button>
                      <b-button type="is-dark" outlined>Забыли пароль?</b-button
                      >
                    </div>
                  </b-field>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-foot has-text-centered">
        <div class="logo"></div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      login: '',
      password: '',
      error: null,
    }
  },

  methods: {
    async signIn() {      
      try {
        await this.$auth.loginWith('local', {
          data: {
            username: this.login,
            password: this.password,
          }
        })

        this.$router.push('/')
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>
