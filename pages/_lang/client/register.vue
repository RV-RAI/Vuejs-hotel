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
            <h1>
             {{ $t('client.register.hello') }}
            </h1>
            <h2>
              {{ $t('client.register.nice') }}
            </h2>
            <v-btn class="ml-0 mt-4 primary--text white elevation-1" large to="/public/pricing-plan">{{ $t('client.register.checkPP') }}</v-btn>
           </div>
          </v-layout>
          <div class="bot-dc">
           <v-icon>arrow_forward</v-icon>
          </div>
         </v-card>
         <v-card class="card-form-center">
           <div class="header-box">
             <h2 class="headline">{{ $t('client.register.request') }}</h2>
             <span class="subheading">
               {{ $t('client.register.explore') }}
             </span>
           </div>
           <v-card-text class="pb-0">
             <v-form v-model="valid" @submit.prevent="postSignUp">
               <v-alert
                 v-if="alert"
                 :type="alert.type"
                 value="true"
                 outline
               >{{alert.message}}</v-alert>
              <v-flex xs12>
                <v-text-field
                  v-model="email"
                  :rules="[rules.required, rules.email]"
                  :label="$t('client.register.email')"
                  :hint="$t('client.register.emailHint')"
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 class="box-input-phone">
                <vue-tel-input
                  v-model="phone"
                  class="select-phone-ctry v-input"
                  @onInput="onPhone"
                  :placeholder="$t('client.register.num')"
                  :preferredCountries="['jp', 'vn', 'us']">
                </vue-tel-input>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  :label="$t('client.register.org')"
                  :hint="$t('client.register.orgHint')"
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>
               <v-flex xs12>
                <v-text-field
                  v-model="address"
                  :rules="addressRules"
                  :label="$t('client.register.add')"
                  :hint="$t('client.register.addHint')"
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
               <v-text-field
                 v-model="password"
                 :append-icon="show1 ? 'visibility_off' : 'visibility'"
                 :rules="[rules.required, rules.min]"
                 :type="show1 ? 'text' : 'password'"
                 :hint="$t('client.register.pw')"
                 persistent-hint
                 name="input-10-1"
                 :label="$t('client.register.pwHint')"
                 @click:append="show1 = !show1"
                 required
               ></v-text-field>
              </v-flex>
              <v-flex xs12>
               <v-text-field
                 v-model="rePassword"
                 :append-icon="show2 ? 'visibility_off' : 'visibility'"
                 :rules="[rules.required, rules.min]"
                 :type="show2 ? 'text' : 'password'"
                 :hint="$t('client.register.cfPW')"
                 persistent-hint
                 name="input-10-1"
                 :label="$t('client.register.pwHint')"
                 @click:append="show2 = !show2"
                 required
               ></v-text-field>
              </v-flex>
              <v-card-actions class="pb-0">
                <v-btn flat color="primary" :to="$i18n.path('login')">{{ $t('client.register.instead') }}</v-btn>
                <v-spacer></v-spacer>
                <v-btn class="btn-a1" color="primary" type="submit" :loading="loading" :disabled="loading"><span>{{ $t('client.register.reg') }}<v-icon right dark>arrow_forward</v-icon></span></v-btn>
              </v-card-actions>
             </v-form>
           </v-card-text>
         </v-card>
         <div class="page-footer">
           <router-link
             v-if="$i18n.locale === 'jp'" nuxt
             :to="$route.fullPath.substring(0, 3) === '/jp' ?
             '/en' + $route.fullPath.replace(/^\/[^\/]+/, '') :
             '/en' + $route.fullPath"><i class="ico-lang"><img src="/us.png"></i> <span>English</span></router-link>
           <router-link
             v-if="$i18n.locale === 'en'" nuxt
             :to="$route.fullPath.substring(0, 3) === '/en' ?
             '/jp' + $route.fullPath.replace(/^\/[^\/]+/, '') :
             '/jp' + $route.fullPath"><i class="ico-lang"><img src="/jp.png"></i> <span>日本語</span></router-link>
         </div>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import errorStatus from '~/assets/js/errorStatus';

  export default {
    layout: 'simple',
    data() {
      return {
        imageUrl: require('~/assets/images/bg-hotel1.png'),
        imageUrlIconLg: require('~/assets/images/analytics.png'),
        show1: false,
        show2: false,
        email: "",
        password:"",
        rePassword:"",
        phone: "",
        address: "",
        rules: {
          required: value => !!value || this.$t('client.register.required'),
          min: v => v.length >= 8 || this.$t('client.register.min8'),
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || this.$t('client.register.invalidEmail')
          },
        },
        valid: false,
        name: "",
        nameRules: [
          v => !!v || this.$t('client.register.orgReq'),
          v => v.length <= 128 || this.$t('client.register.orgErr')
        ],
        addressRules: [
          v => !!v || this.$t('client.register.addReq'),
          v => v.length <= 128 || this.$t('client.register.addErr')
        ],
        alert: null,
        loading: false,
      }
    },
    methods: {
      onPhone({ number, isValid, country }) {
        let countryCode = '+' + country.dialCode;
        let numbWithoutCode = number.substr(countryCode.length + 1, number.length);
        let pureNumb = numbWithoutCode.replace(/ /g,'');
        let numbWithSpace = pureNumb.replace(/(\d{3})/g, '$1 ');
        let phoneValue = countryCode + ' ' + numbWithSpace.trim();
        if(isValid){
          this.phone = phoneValue;
        }
      },
      postSignUp() {
        this.alert = null;
        this.loading = true;
        if (this.password !== this.rePassword) {
          this.loading = false;
          return this.alert = {type: 'error', message: this.$t('client.register.err')}
        }
        this.$store.dispatch("auth/authenticateUser", {
          isLogin: false,
          email: this.email,
          password: this.rePassword,
          phone: this.phone,
          organization: this.name,
          address: this.address
        })
          .then(() => {
            this.loading=false;
            this.alert = {type: 'success', message: this.$t('client.register.scs')};
          })
          // .then(() => {
          //   setTimeout(() => this.$router.push('/'), 5000);
          // })
          .catch(error => {
            this.loading = false;
            this.alert = {type: 'error', message: errorStatus(error)}
        })
      }
    }
  }
</script>
