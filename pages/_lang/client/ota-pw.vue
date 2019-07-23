<template>
  <v-app id="register">
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-flex xs12 sm8 md6 mt-5>
            <v-card class="mate-card1 card-form-center">
              <div class="header-box">
                <h2 class="headline">
                  {{ groupName }} {{ $t("public.changePW.title") }}
                </h2>
              </div>
              <v-card-text>
                <v-form
                  v-model="valid"
                  @submit.prevent="onChange"
                  autocomplete="off"
                >
                  <v-alert
                    v-if="alert"
                    :type="alert.type"
                    value="true"
                    outline
                    dismissible
                    class="log-alert"
                  >
                    {{ alert.message }}</v-alert
                  >
                  <v-flex xs12>
                    <v-text-field
                      v-model="rakutenUser"
                      name="input-10-1"
                      label="楽天 ログインID"
                      :disabled="disable"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="rakutenPW"
                      :append-icon="show1 ? 'visibility_off' : 'visibility'"
                      :type="show1 ? 'text' : 'password'"
                      :hint="$t('public.changePW.hint')"
                      name="input-10-1"
                      label="楽天 ログインPW"
                      @click:append="show1 = !show1"
                      :disabled="disable"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="jalanUser"
                      name="input-10-1"
                      label="じゃらん ログインID"
                      :disabled="disable"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="jalanPW"
                      :append-icon="show2 ? 'visibility_off' : 'visibility'"
                      :type="show2 ? 'text' : 'password'"
                      :hint="$t('public.changePW.hint')"
                      name="input-10-1"
                      label="じゃらん ログインPW"
                      @click:append="show2 = !show2"
                      :disabled="disable"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="expediaUser"
                      name="input-10-1"
                      label="Expedia ログインID"
                      :disabled="disable"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="expediaPW"
                      :append-icon="show3 ? 'visibility_off' : 'visibility'"
                      :type="show3 ? 'text' : 'password'"
                      :hint="$t('public.changePW.hint')"
                      name="input-10-1"
                      label="Expedia ログインPW"
                      @click:append="show3 = !show3"
                      :disabled="disable"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="bookingUser"
                      name="input-10-1"
                      label="Booking.com ログインID"
                      :disabled="disable"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="bookingPW"
                      :append-icon="show4 ? 'visibility_off' : 'visibility'"
                      :type="show4 ? 'text' : 'password'"
                      :hint="$t('public.changePW.hint')"
                      name="input-10-1"
                      label="Booking.com ログインPW"
                      @click:append="show4 = !show4"
                      :disabled="disable"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="agodaUser"
                      name="input-10-1"
                      label="Agoda ログインID"
                      :disabled="disable"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="agodaPW"
                      :append-icon="show5 ? 'visibility_off' : 'visibility'"
                      :type="show5 ? 'text' : 'password'"
                      :hint="$t('public.changePW.hint')"
                      name="input-10-1"
                      label="Agoda ログインID"
                      @click:append="show5 = !show5"
                      :disabled="disable"
                    ></v-text-field>
                  </v-flex>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      v-if="disable"
                      round
                      color="primary"
                      type="submit"
                      @click.prevent="openForm"
                      :loading="loading"
                      :disabled="loading"
                    >
                      {{ $t("public.changePW.btn") }}
                    </v-btn>
                    <v-btn
                      v-if="!disable"
                      round
                      color="primary"
                      type="submit"
                      @click.prevent="onChange"
                      :loading="loading"
                      :disabled="loading"
                    >
                      編集する
                    </v-btn>
                  </v-card-actions>
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
function idFilter(value) {
  if (value === "fressain") {
    return 89;
  } else if (value === "sunroute") {
    return 70;
  } else if (value === "pockethotel") {
    return 177;
  } else {
    return "";
  }
}
export default {
  watchQuery: "group",
  layout: "client",
  async asyncData({ $axios, query }) {
    let data;
    try {
      if (query.group) {
        let res = await $axios.post("/group", {
          id: idFilter(query.group)
        });
        data = res.data;
      }
    } catch (e) {
      console.log(e);
    }
    return {
      rakutenUser: data.rakuten_login_id || "",
      rakutenPW: data.rakuten_login_pw || "",
      jalanUser: data.jalan_login_id || "",
      jalanPW: data.jalan_login_pw || "",
      expediaUser: data.expedia_login_id || "",
      expediaPW: data.expedia_login_pw || "",
      bookingUser: data.booking_login_id || "",
      bookingPW: data.booking_login_pw || "",
      agodaUser: data.agoda_login_id || "",
      agodaPW: data.agoda_login_pw || "",
      qr: query.group
    };
  },
  created() {
    let group = this.$route.query.group;
    if (group === "sunroute") {
      this.groupName = "サンルート";
    }
    if (group === "fressain") {
      this.groupName = "フレッサイン";
    }
    if (group === "pockethotel") {
      this.groupName = "ポケットホテル";
    }
  },
  data() {
    return {
      valid: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      password: "",
      newPassword: "",
      rePassword: "",
      loading: false,
      alert: null,
      disable: true
    };
  },
  methods: {
    async onChange() {
      this.loading = true;
      let id = idFilter(this.$route.query.group);
      try {
        await this.$axios.patch("/group_hotels/" + id, {
          rakuten_login_id: this.rakutenUser,
          rakuten_login_pw: this.rakutenPW,
          jalan_login_id: this.jalanUser,
          jalan_login_pw: this.jalanPW,
          expedia_login_id: this.expediaUser,
          expedia_login_pw: this.expediaPW,
          booking_login_id: this.bookingUser,
          booking_login_pw: this.bookingPW,
          agoda_login_id: this.agodaUser,
          agoda_login_pw: this.agodaPW
        });
        this.alert = { type: "success", message: "更新に成功" };
        this.loading = false;
        return (this.disable = true);
      } catch (e) {
        console.log(e);
        this.alert = { type: "error", message: "アップデートに失敗しました" };
        this.loading = false;
      }
    },
    openForm() {
      return (this.disable = false);
    }
  }
};
</script>
