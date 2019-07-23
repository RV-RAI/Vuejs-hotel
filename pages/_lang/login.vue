<template>
  <v-app id="register">
    <v-content class="lv1p">
      <v-container fluid fill-height page-w-bg :style="{ backgroundImage: `url(${imageUrl})` }">
        <v-layout justify-center class="center-box f-2sm">
          <v-card class="card-form-center">
            <v-layout align-center justify-start row fill-height>
              <div class="ctn-l">
                <div class="line1">
                  <img :src="imageUrlIconLg" alt="El-Price">
                  <h3>ELPRICE</h3>
                </div>
                <h1>{{ $t('login.hello') }}</h1>
                <h2>{{ $t('login.welcome') }}</h2>
              </div>
            </v-layout>
            <div class="bot-dc">
              <v-icon>arrow_forward</v-icon>
            </div>
          </v-card>
          <v-card class="card-form-center">
            <div class="header-box">
              <h2 class="headline">{{ $t('login.signIn') }}</h2>
              <span class="subheading">{{ $t('login.toUse') }}</span>
            </div>
            <v-card-text class="pb-0">
              <v-form @submit.prevent="postLogin">
                <v-alert
                  v-if="alert"
                  :type="alert.type"
                  value="true"
                  outline
                  color="error"
                  icon="warning"
                  dismissible
                  class="log-alert"
                >{{alert.message}}
                </v-alert>
                <v-flex xs12>
                  <v-text-field
                    :label="$t('login.email')"
                    :rules="[rules.required, rules.email]"
                    :disabled="loading"
                    v-model="email"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'visibility_off' : 'visibility'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    :disabled="loading"
                    name="input-10-1"
                    :label="$t('login.pw')"
                    @click:append="show1 = !show1"
                    required
                  ></v-text-field>
                </v-flex>
                <v-card-actions class="pt-0 pb-1">
                  <v-spacer></v-spacer>
                  <v-btn
                    class="btn-a1"
                    color="primary"
                    type="submit"
                    :loading="loading"
                    :disabled="loading"
                  >
                    <span>
                      {{ $t('index.login') }}
                      <v-icon right dark>arrow_forward</v-icon>
                    </span>
                  </v-btn>
                </v-card-actions>
<!--                <v-card-actions class="mt-3 ftfbg justify-center">-->
<!--                  <span class="grey&#45;&#45;text darken-1">{{ $t('login.cantLogin') }}</span>-->
<!--                  <nuxt-link-->
<!--                    :to="$i18n.path('public/request-reset-password')"-->
<!--                  >{{ $t('login.forget') }}-->
<!--                  </nuxt-link>-->
<!--                  &lt;!&ndash; | <nuxt-link :to="$i18n.path('client/register')">{{ $t('login.reg') }}</nuxt-link> &ndash;&gt;-->
<!--                </v-card-actions>-->
              </v-form>
            </v-card-text>
          </v-card>
          <div class="page-footer" style="display:flex; width:100%; padding-left:12px;padding-right:12px;">
            <router-link class="link-simple" style="background-color:transparent; color:#FFF;" target="_blank" :to="$i18n.path('terms')">
             条項
            </router-link>
            <v-divider
              class="mx-3"
              vertical
              dark
              style="width: 2px;border-color: rgba(256,256,256,.45);height: 26px;"
            ></v-divider>
            <router-link class="link-simple" style="background-color:transparent; color:#FFF;" target="_blank" :to="$i18n.path('privacy-policy')">
             プライバシー
            </router-link>
            <div class="spacer"></div>
            <router-link
              v-if="$i18n.locale === 'jp'"
              nuxt
              :to="$route.fullPath.substring(0, 3) === '/jp' ?
              '/en' + $route.fullPath.replace(/^\/[^\/]+/, '') :
              '/en' + $route.fullPath"
            >
              <i class="ico-lang">
                <img src="/us.png">
              </i>
              <span>English</span>
            </router-link>
            <router-link
              v-if="$i18n.locale === 'en'"
              nuxt
              :to="$route.fullPath.substring(0, 3) === '/en' ?
              '/jp' + $route.fullPath.replace(/^\/[^\/]+/, '') :
              '/jp' + $route.fullPath"
            >
              <i class="ico-lang">
                <img src="/jp.png">
              </i>
              <span>日本語</span>
            </router-link>
          </div>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

  export default {
    layout: "simple",
    data() {
      return {
        drawer: null,
        show1: false,
        email: "",
        password: "",
        imageUrl: require("~/assets/images/bg-hotel1.png"),
        imageUrlIconLg: require("~/assets/images/analytics.png"),
        rules: {
          required: value => !!value || "Required.",
          min: v => v.length >= 8 || "At least 8 characters",
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(value) || "Invalid e-mail.";
          }
        },
        alert: null,
        loading: false,
      };
    },
    methods: {
      async postLogin() {
        this.alert = null;
        this.loading = true;
        if(this.email && this.password) {
          await this.$store.dispatch("auth/emailLogin", {email: this.email, password: this.password})
        }
        // this.$router.go({ path: "client/price/kpi", force: true })
        setTimeout(() => this.$router.push({ path: "client/price/kpi"}), 600)
        this.alert = this.$store.state.auth.errMsg
        this.alert ? this.loading = false : this.loading = true
      }
    }
  };
</script>
