<template>
  <v-app id="register">
    <v-content>
      <v-container fluid full-content>
        <div class="inside">
          <div class="page-header">
            Account Settings
          </div>
          <div class="page-content">
            <div class="section-ctn ctn-l-basic">
              <v-layout align-center>
                <v-flex lg12 xl8>
                  <v-card class="elevation-1 card-form-center mt-5 mb-5">
                    <v-alert
                      v-if="alert"
                      :type="alert.type"
                      value="true"
                      outline
                      dismissible
                      class="log-alert"
                    >
                      {{alert.message}}</v-alert>
                    <div>
                      <h5 class="title mb-0">Profile Infomations</h5>
                    </div>
                    <v-card-text>
                      <v-layout class="ins-pro" row wrap>
                        <v-flex xs3><label>Organization</label></v-flex>
                        <v-flex xs9>
                          <div class="ctn">
                            <v-text-field
                              :value="acc.organization"
                              type="organization"
                              disabled
                            ></v-text-field>
                          </div>
                        </v-flex>
                        <v-flex xs3>
                          <label>Phone Number</label>
                        </v-flex>
                        <v-flex xs9>
                          <div class="ctn">
                            <v-text-field
                              :value="acc.phone"
                              disabled
                            ></v-text-field>
                          </div>
                        </v-flex>
                        <v-flex xs3>
                          <label>Email</label>
                        </v-flex>
                        <v-flex xs9>
                          <div class="ctn">
                            <v-text-field
                              :value="acc.email"
                              type="email"
                              disabled
                            ></v-text-field>
                          </div>
                        </v-flex>

                        <v-flex xs3>
                          <label>Confirm</label>
                        </v-flex>
                        <v-flex xs9>
                          <div class="ctn">
                            <span class="block line">{{ confirm }}</span>
                          </div>
                        </v-flex>
                        <v-flex xs3>
                          <label>Locked</label>
                        </v-flex>
                        <v-flex xs9>
                          <div class="ctn">
                            <v-switch
                              v-model="acc.locked"
                              color="success"
                              hide-details
                            ></v-switch>
                          </div>
                        </v-flex>

                      </v-layout>
                    </v-card-text>
                    <v-divider class="mb-4"></v-divider>

                    <v-card-text>
                      <v-layout class="ins-pro" row wrap>
                        <!--<v-flex xs3><label>Plan</label></v-flex>-->
                        <!--<v-flex xs9>-->
                          <!--<div class="ctn">-->
                            <!--<v-select-->
                              <!--:items="plans"-->
                              <!--value="Daily"-->
                            <!--&gt;</v-select>-->
                          <!--</div>-->
                        <!--</v-flex>-->
                        <v-flex xs3>
                          <label>Scraper Locked</label>
                        </v-flex>
                        <v-flex xs9>
                          <div class="ctn">
                            <v-switch
                              v-model="switch3"
                              color="success"
                              hide-details
                            ></v-switch>
                          </div>
                        </v-flex>
                        <v-flex xs3>
                          <label>Updated at</label>
                        </v-flex>
                        <v-flex xs9>
                          <div class="ctn">
                            <span class="block line">{{ getDate(acc.modified_at) }}</span>
                          </div>
                        </v-flex>
                      </v-layout>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn color="primary" :loading="loading" @click.prevent="editItem">Update</v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
            </div>
          </div>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import dateFormat from 'dateformat'

  export default {
    layout: 'admin',
    middleware: ['check-auth', 'auth'],
    async asyncData ({store, params, $axios}) {

      let tk = store.state.auth.token;
      $axios.setToken('Bearer ' + tk);
      let user = await $axios.$get('/system/client_account/' + params.id);

      return {
        acc: user,
        // plan_data_id: plan_data_id,
        // plan_data_name: plan_data_name
      }
    },
    computed: {
      confirm () {
        if (this.acc.confirmation_at) {
          return 'Yes'
        } else {
          return 'No'
        }
      },
      scraper_locked () {
        if (this.acc.scraper_locked) {
          return false
        } else {
          return true
        }
      }
    },
    data() {
      return {
        switch1: true,
        switch2: false,
        switch3: true,
        alert: null,
        loading: false,
        roles: [
          'Administrator',
          'Seller',
          'Financer'
        ],
        plans: [
          'Daily',
          'Weekly',
          'Monthly'
        ],
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          }
        }
      }
    },
    methods: {
      getDate (date) {
        return dateFormat(date);
      },
      editItem () {
        let tk = this.$store.state.auth.tokenValue;
        this.$axios.setToken('Bearer ' + tk);
        this.$axios.$patch('/system/client_account/' + this.acc.id, {
          scraper_locked: this.switch3,
          locked: this.acc.locked
        }).then(() => {
          this.loading = false;
          this.alert = {type: 'success', message: 'Update success!'}
        }).catch(e => {
          console.log(e);
          this.loading = false;
          this.alert = {type: 'error', message: 'Update fail!'}
        })

      }
    }
  }
</script>
