<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>

          <v-flex xs12 sm8 md6 mt-5>
            <v-card class="mate-card1 card-form-center">
              <v-alert
                v-if="alert"
                :type="alert.type"
                value="true"
                outline
                dismissible
                class="log-alert"
              >
                {{alert.message}}</v-alert>
              <div class="header-box">
                <h2 class="headline">{{ $t('client.reqRemove.title') }}</h2>
              </div>
              <v-card-text>
               <span>
                {{ $t('client.reqRemove.sub') }}
               </span>
              </v-card-text>
              <v-card-actions>
                <v-btn round color="primary" :loading="loading" @click.prevent="postReq">{{ $t('client.reqRemove.btn') }}</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

  export default {
    layout: 'back',
    data() {
      return {
        alert: null,
        loading: false
      }
    },
    methods: {
      postReq () {
        this.$axios.setToken('Bearer ' + localStorage.getItem('token'));
        this.$axios.$post('/client/account/removal_request')
          .then(() => {
          this.loading = false;
          this.alert = {type: 'success', message: 'Success!'}
        }).catch(e => {
          console.log(e);
          this.loading = false;
          this.alert = {type: 'error', message: 'Fail!'}
        })
      }
    }
  }
</script>
