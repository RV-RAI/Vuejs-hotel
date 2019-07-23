<template>
  <v-app id="register">
    <v-content>
      <v-container fluid full-content>
        <div class="inside">
          <div class="page-header">
            {{ $t("client.profile.personal.title") }}
          </div>
          <div class="page-content">
            <v-card class="mate-card1 card-form-center card-sm mt-3">
              <div class="section-ctn" id="passwordOption">
                <h3 class="title-block">
                  {{ $t("client.profile.recovery.title") }}
                </h3>
                <v-flex sec-ctn-ins>
                  <div class="c-l">
                    <div class="des">
                      {{ $t("client.profile.recovery.title1") }}
                      <br/><br/>
                      <strong>{{
                        $t("client.profile.recovery.subTitle")
                        }}</strong>
                      <br/><br/>
                      {{ $t("client.profile.recovery.subTitle1") }}
                    </div>
                  </div>
                  <div class="c-r">
                    <div class="l-ctn">
                      <!--<v-card>-->
                        <!--<v-list three-line class="l-items">-->
                          <!--<v-list-tile class="item head-box">-->
                            <!--<v-list-tile-content>-->
                              <!--<v-list-tile-title-->
                              <!--&gt;<label>Select image to upload</label></v-list-tile-title-->
                              <!--&gt;-->
                            <!--</v-list-tile-content>-->
                          <!--</v-list-tile>-->
                          <!--<v-divider></v-divider>-->
                          <!--<v-list-tile-->
                            <!--nuxt-->
                            <!--@click='pickFile'-->
                            <!--class="item"-->
                          <!--&gt;-->
                            <!--<div class="a-link upload-avt">-->
                              <!--<div class="upload-avt__left">-->
                                <!--<div class="img-link">-->
                                  <!--<v-text-field-->
                                    <!--label="Choose image"-->
                                    <!--v-model='imageName'-->
                                    <!--prepend-icon='cloud_upload'-->
                                    <!--:messages="['Image should be in .jpg or .png format, with a minimum size of 120x120 or 1x1 scale']"-->
                                    <!--&gt;-->
                                  <!--</v-text-field>-->
                                  <!--<input-->
                                    <!--type="file"-->
                                    <!--style="display: none"-->
                                    <!--ref="image"-->
                                    <!--accept="image/*"-->
                                    <!--@change="onFilePicked"-->
                                  <!--&gt;-->
                                <!--</div>-->
                                <!--<v-btn @click="uploadImage">Upload</v-btn>-->
                              <!--</div>-->
                              <!--<div class="upload-avt__right">-->
                               <!--<div class="img-holder">-->
                                <!--<img class="img-responsive" :src="imageUrl" v-if="imageUrl"/>-->
                               <!--</div>-->
                              <!--</div>-->
                              <!--&lt;!&ndash;                              <v-list-tile-action>&ndash;&gt;-->
                              <!--&lt;!&ndash;                                <label>{{&ndash;&gt;-->
                              <!--&lt;!&ndash;                                  $t("client.profile.recovery.pw")&ndash;&gt;-->
                              <!--&lt;!&ndash;                                }}</label>&ndash;&gt;-->
                              <!--&lt;!&ndash;                              </v-list-tile-action>&ndash;&gt;-->
                              <!--&lt;!&ndash; <v-list-tile-content>-->
                                <!--<v-list-tile-title>Select Image</v-list-tile-title>-->
                              <!--</v-list-tile-content>-->
                              <!--<v-list-tile-action>-->
                                <!--<v-icon>chevron_right</v-icon>-->
                              <!--</v-list-tile-action> &ndash;&gt;-->
                              <!--&lt;!&ndash; <v-list-tile-content>-->
                                <!--<img :src="imageUrl" height="150" v-if="imageUrl"/>-->
                                <!--<v-text-field-->
                                  <!--label="Image Name"-->
                                  <!--v-model='imageName'-->
                                  <!--prepend-icon='attach_file'>-->
                                <!--</v-text-field>-->
                                <!--<input-->
                                  <!--type="file"-->
                                  <!--style="display: none"-->
                                  <!--ref="image"-->
                                  <!--accept="image/*"-->
                                  <!--@change="onFilePicked"-->
                                <!--&gt;-->
                              <!--</v-list-tile-content> &ndash;&gt;-->

                            <!--</div>-->
                          <!--</v-list-tile>-->
                        <!--</v-list>-->
                      <!--</v-card>-->
                      <v-card>
                        <v-list three-line class="l-items">
                          <v-list-tile class="item head-box">
                            <v-list-tile-content>
                              <v-list-tile-title
                              ><label>{{
                                $t("client.profile.recovery.control")
                                }}</label></v-list-tile-title
                              >
                              <v-list-tile-sub-title
                              ><strong>{{
                                $t("client.profile.recovery.note")
                                }}</strong>
                                {{ $t("client.profile.recovery.subNote") }}
                              </v-list-tile-sub-title>
                            </v-list-tile-content>
                          </v-list-tile>
                          <v-divider></v-divider>
                          <v-list-tile
                            nuxt
                            :to="$i18n.path('public/change-password')"
                            class="item"
                          >
                            <div class="a-link">
                              <v-list-tile-action>
                                <label>{{
                                  $t("client.profile.recovery.pw")
                                  }}</label>
                              </v-list-tile-action>
                              <v-list-tile-content>
                                <v-list-tile-title>{{
                                  $t("client.profile.recovery.changePW")
                                  }}
                                </v-list-tile-title>
                                <!--<v-list-tile-sub-title class="sml">Last changed: December 11, 2017</v-list-tile-sub-title>-->
                              </v-list-tile-content>
                              <v-list-tile-action>
                                <v-icon>chevron_right</v-icon>
                              </v-list-tile-action>
                            </div>
                          </v-list-tile>
                        </v-list>
                      </v-card>
                      <v-card>
                        <v-list three-line class="l-items">
                          <v-list-tile class="item head-box">
                            <v-list-tile-content>
                              <v-list-tile-title
                              ><label
                              >販売チャンネルログイン情報</label
                              ></v-list-tile-title
                              >
                              <v-list-tile-sub-title>
                                グループごとの販売チャネルログイン情報を更新できます
                              </v-list-tile-sub-title>
                            </v-list-tile-content>
                          </v-list-tile>
                          <v-divider></v-divider>
                          <v-list-tile
                            nuxt
                            :to="$i18n.path('client/ota-pw?group=fressain')"
                            class="item"
                          >
                            <div class="a-link">
                              <v-list-tile-action>
                                <label>フレッサイン</label>
                              </v-list-tile-action>
                              <v-list-tile-content>
                                <v-list-tile-title></v-list-tile-title>
                              </v-list-tile-content>
                              <v-list-tile-action>
                                <v-icon>chevron_right</v-icon>
                              </v-list-tile-action>
                            </div>
                          </v-list-tile>
                          <v-divider></v-divider>
                          <v-list-tile
                            nuxt
                            :to="$i18n.path('client/ota-pw?group=sunroute')"
                            class="item"
                          >
                            <div class="a-link">
                              <v-list-tile-action>
                                <label>サンルート</label>
                              </v-list-tile-action>
                              <v-list-tile-content>
                                <v-list-tile-title></v-list-tile-title>
                              </v-list-tile-content>
                              <v-list-tile-action>
                                <v-icon>chevron_right</v-icon>
                              </v-list-tile-action>
                            </div>
                          </v-list-tile>
                          <v-divider></v-divider>
                          <v-list-tile
                            nuxt
                            :to="$i18n.path('client/ota-pw?group=pockethotel')"
                            class="item"
                          >
                            <div class="a-link">
                              <v-list-tile-action>
                                <label>ポケットホテル</label>
                              </v-list-tile-action>
                              <v-list-tile-content>
                                <v-list-tile-title></v-list-tile-title>
                              </v-list-tile-content>
                              <v-list-tile-action>
                                <v-icon>chevron_right</v-icon>
                              </v-list-tile-action>
                            </div>
                          </v-list-tile>
                        </v-list>
                      </v-card>
                    </div>
                  </div>
                </v-flex>
              </div>
            </v-card>
          </div>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    layout: "client",
    async asyncData({store, $axios}) {

      return {
        user: "",
        pricing_plan_name: "",
        pricing_plan_list: "",
        pricing_plan_list_name: "",
        pricing_plan_list_id: ""
      };
    },
    data() {
      return {
        email: "",
        organization: "",
        phone: "",
        address: "",
        emailDialog: false,
        phonelDialog: false,
        organDialog: false,
        addressDialog: false,
        planDialog: false,
        p1: "",
        rules: {
          required: value => !!value || "Required.",
          min: v => v.length >= 8 || "Min 8 characters",
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(value) || "Invalid e-mail.";
          }
        },
        imageName: '',
        imageUrl: '',
        imageFile: ''
      };
    },
    methods: {
      onPhone({number, isValid, country}) {
        let countryCode = "+" + country.dialCode;
        let numbWithoutCode = number.substr(
          countryCode.length + 1,
          number.length
        );
        let pureNumb = numbWithoutCode.replace(/ /g, "");
        let numbWithSpace = pureNumb.replace(/(\d{3})/g, "$1 ");
        let phoneValue = countryCode + " " + numbWithSpace.trim();
        if (isValid) {
          this.phone = phoneValue;
        }
      },
      postUpdate() {
        this.$axios.setToken("Bearer " + localStorage.getItem("token"));

        this.$axios
          .$patch("/client/account/me", {
            email: this.email ? this.email : this.user.email,
            phone: this.phone ? this.phone : this.user.phone,
            organization: this.organization
              ? this.organization
              : this.user.organization,
            address: this.address ? this.address : this.user.address
          })
          .then(() => {
            this.user.email = this.email ? this.email : this.user.email;
            this.user.phone = this.phone ? this.phone : this.user.phone;
            this.user.organization = this.organization
              ? this.organization
              : this.user.organization;
            this.user.address = this.address ? this.address : this.user.address;

            this.emailDialog = false;
            this.phonelDialog = false;
            this.organDialog = false;
            this.addressDialog = false;
          })
          .catch(e => console.log(e));
      },
      postPlan() {
        let found = this.pricing_plan_list.data.findIndex(
          p => p.name === this.p1
        );
        let plan_id = this.pricing_plan_list_id[found];

        this.$axios.setToken("Bearer " + localStorage.getItem("token"));
        this.$axios
          .$post("/client/pricing", {
            pricing_plan_id: plan_id ? plan_id : ""
          })
          .then(() => {
            this.planDialog = false;
            this.pricing_plan_name = this.p1;
          })
          .catch(e => console.log(e));
      },
      pickFile() {
        this.$refs.image.click()
      },
      onFilePicked(e) {
        const files = e.target.files
        if (files[0] !== undefined) {
          this.imageName = files[0].name
          if (this.imageName.lastIndexOf('.') <= 0) {
            return
          }
          const fr = new FileReader()
          fr.readAsDataURL(files[0])
          fr.addEventListener('load', () => {
            this.imageUrl = fr.result
            this.imageFile = files[0] // this is an image file that can be sent to server...
          })
        } else {
          this.imageName = ''
          this.imageFile = ''
          this.imageUrl = ''
        }
      },
      uploadImage() {
        this.$store.dispatch("auth/uploadProfImage", this.imageFile)
      }
    }
  }
</script>
