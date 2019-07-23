<template>
  <v-app id="register">
    <v-content class="lv1p">
      <v-container fluid fill-height page-w-bg :style="{ backgroundImage: `url(${imageUrl})` }">
        <v-layout justify-center class="center-box f-2sm">
          <v-card class="card-form-center big-box">
            <v-layout align-center justify-start row fill-height>
              <div class="ctn-l">
                <div class="line1">
                  <img :src="imageUrlIconLg" alt="ELPRICE">
                  <h3>ELPRICE</h3>
                </div>
                <h1>
                  Server error occurred,
                </h1>
                <h2>
                  Please login again.
                </h2>
                <v-btn class="ml-0 mt-4" color="white" to="/" flat @click="postLogout"><v-icon left white>arrow_back</v-icon>Login</v-btn>
              </div>
            </v-layout>
            <div class="bot-dc">
              <v-icon>arrow_forward</v-icon>
            </div>
          </v-card>
          <!-- <v-flex xs12 sm8 md5>
            <v-card class="elevation-3 card-form-center confirm-box">
              <div class="header-box">
                <div class="logo">ELPRICE</div>
                <h2 class="headline">Completed! </h2>
                <span class="subheading">
                  Please check your email to activate your account.
                </span>
              </div>
              <v-card-actions>
                <v-btn color="primary" to="/" flat><v-icon left white>arrow_back</v-icon>Back to Homepage</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary" to="/public/signin">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex> -->
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

  export default {
    layout: 'simple',
    created() {
      // setTimeout(() => this.$router.push('/public/signin'), 4000)
    },
    data() {
      return {
        imageUrl: require('~/assets/images/bg-hotel1.png'),
        imageUrlIconLg: require('~/assets/images/analytics.png'),
      }
    },
    methods: {
      postLogout () {
        this.$store.dispatch('auth/logout')
          .then(() => this.$router.push('/login'))
          .catch( e => console.log(e))
      },
    }
  }
</script>
