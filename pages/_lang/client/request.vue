<template>
  <v-app>
    <v-content>
      <v-container fluid full-content>
        <div class="inside">
          <!--<div class="page-header">{{$t('client.request')}}</div>-->
          <div class="page-content">
            <div class="section-ctn ctn-l-basic">
              <v-layout align-center>
                <v-flex lg12>
                  <v-card class="mate-card1 card-form-center card-sm mt-3">
                    <div class="el-t-default">
                      <v-alert
                        v-if="alert.msg"
                        :type="alert.type"
                        value="true"
                        outline
                        dismissible
                        class="log-alert"
                      >
                        {{alert.msg}}
                      </v-alert>
                      <div class="box-filter mb-4">
                        <div class="box-inchannel mb-3">
                          <label class="subheading lbl-ft mb-3">リクエストを送ってください</label>
                          <v-textarea
                            v-model="content"
                            outline
                            name="input-7-4"
                          ></v-textarea>
                          <v-btn
                            round
                            depressed
                            color="primary"
                            style="margin-left:0;"
                            @click="sendReq">
                            {{$t('client.requestSend')}}
                          </v-btn>
                        </div>
                      </div>
                    </div>
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
  export default {
    layout: "client",
    data() {
      return {
        content: "",
        alert: {
          type: "",
          msg: ""
        }
      }
    },
    methods: {
      async sendReq() {
        if(this.content) {
          const url = "/requests"

          const req = {
            hotel_id: this.$store.state.auth.hotelID,
            content: this.content,
            tag: "",
            category: "sotetsu"
          }

          try {
            await this.$axios.post(url, req)
            this.alert = {
              type: "success",
              msg: "リクエストを送信しました。"
            }
            await setTimeout(() => {
              this.alert.msg = null
            }, 5000)
          } catch (e) {
            console.log(e)
            this.alert = {
              type: "error",
              msg: "送信に失敗しました。"
            }
            await setTimeout(() => (this.alert = null), 5000)
          }
        }
      }
    }
  }
</script>
<style lang="stylus" scoped>
</style>
