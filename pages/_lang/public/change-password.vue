<template>
  <v-app id="register">
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-flex xs12 sm8 md6 mt-5>
            <v-card class="mate-card1 card-form-center">
              <div class="header-box">
                <h2 class="headline">{{ $t("public.changePW.title") }}</h2>
              </div>
              <v-card-text>
                <v-form v-model="valid" @submit.prevent="onChange">
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
                      v-model="password"
                      :append-icon="show1 ? 'visibility_off' : 'visibility'"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      :hint="$t('public.changePW.hint')"
                      name="input-10-1"
                      :label="$t('public.changePW.current')"
                      @click:append="show1 = !show1"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="newPassword"
                      :append-icon="show2 ? 'visibility_off' : 'visibility'"
                      :rules="[rules.required, rules.min]"
                      :type="show2 ? 'text' : 'password'"
                      :hint="$t('public.changePW.hint')"
                      name="input-10-1"
                      :label="$t('public.changePW.new')"
                      @click:append="show2 = !show2"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="rePassword"
                      :append-icon="show3 ? 'visibility_off' : 'visibility'"
                      :rules="[rules.required, rules.min]"
                      :type="show3 ? 'text' : 'password'"
                      :hint="$t('public.changePW.hint')"
                      name="input-10-1"
                      :label="$t('public.changePW.re')"
                      @click:append="show3 = !show3"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      round
                      color="primary"
                      type="submit"
                      @click.prevent="onChange"
                      :loading="loading"
                      :disabled="loading"
                      >{{ $t("public.changePW.btn") }}</v-btn
                    >
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
// import firebaseApp from "~/firebase/app";

export default {
  layout: "client",
  data({ $store }) {
    let userEmail = "";
    return {
      valid: false,
      show1: false,
      show2: false,
      show3: false,
      password: "",
      newPassword: "",
      rePassword: "",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters"
      },
      loading: false,
      alert: null,
      userEmail
    };
  },
  methods: {
    async onChange() {
      this.loading = true;
      if (this.newPassword !== this.rePassword) {
        this.loading = false;
        return (this.alert = {
          type: "error",
          message: $t("public.changePW.error")
        });
      }

      const password = {
        oldPw: this.password,
        newPw: this.rePassword
      }

      this.alert = await this.$store.dispatch("auth/changeUserPw", password)
      this.loading = false
      setTimeout(() => (this.alert = null), 5000)
    }
  }
};
</script>
