<template>
  <v-app>
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
                <h1>{{ $t('index.title') }}</h1>
                <h2>{{ $t('index.welcome') }}</h2>
                <!-- <v-btn class="ml-0 mt-4 primary--text white elevation-1" large :to="$i18n.path('public/pricing-plan')">{{ $t('index.checkPP') }}</v-btn> -->
              </div>
            </v-layout>
            <div class="bot-dc">
              <v-icon>arrow_forward</v-icon>
            </div>
          </v-card>
          <v-card class="card-form-center">
            <v-card-text class="pt-2 pb-1">
              <v-list three-line class="list-gre-page">
                <v-list-tile v-for="item in items" :key="item.title">
                  <v-list-tile-action>
                    <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card-text>
            <v-divider class="mb-3 mt-3"></v-divider>
            <v-card-text>
              <v-card-actions class="pt-0 pb-0">
                <!-- <v-btn nuxt color="primary" :to="$i18n.path('client/register')">{{ $t('index.createAcc') }}</v-btn> -->
                <v-spacer></v-spacer>
                <v-btn flat color="primary" :to="$i18n.path('login')">{{ $t('index.login') }}</v-btn>
              </v-card-actions>
              <!-- <nuxt-link color="primary" to="/">Terms and Conditions</nuxt-link> -->
            </v-card-text>
          </v-card>
          <div class="page-footer">
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
      imageUrl: require("~/assets/images/bg-hotel1.png"),
      imageUrlIconLg: require("~/assets/images/analytics.png"),
      items: [
        {
          icon: "done",
          iconClass: "",
          title: this.$t("index.collect.main"),
          subtitle: this.$t("index.collect.sub")
        },
        {
          icon: "done",
          iconClass: "",
          title: this.$t("index.support.main"),
          subtitle: this.$t("index.support.sub")
        },
        {
          icon: "done",
          iconClass: "",
          title: this.$t("index.update.main"),
          subtitle: this.$t("index.update.sub")
        },
        {
          icon: "done",
          iconClass: "",
          title: this.$t("index.visualize.main"),
          subtitle: this.$t("index.visualize.sub")
        },
        {
          icon: "done",
          iconClass: "",
          title: this.$t("index.giveRe.main"),
          subtitle: this.$t("index.giveRe.sub")
        },
        {
          icon: "done",
          iconClass: "",
          title: this.$t("index.giveNo.main"),
          subtitle: this.$t("index.giveNo.sub")
        }
      ]
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    }
  }
};
</script>
