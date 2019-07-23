<template>
  <v-app>
    <v-navigation-drawer fixed v-model="drawer2" app clipped>
      <v-toolbar class="top-mn-profile" flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              {{ $t("client.layout.title") }}
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list dense class="pt-20 mn-profile-l">
        <sideMenu></sideMenu>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      light
      color="white"
      app
      fixed
      class="mate2 w-sl-hotel kpi"
    >
      <v-toolbar-title class="ml-0">
        <v-toolbar-side-icon
          :ripple="false"
          @click.stop="drawer2 = !drawer2"
        ></v-toolbar-side-icon>
        <v-btn
          :ripple="false"
          class="lg-on-t ml-0 px-0 transparent"
          flat
          nuxt
          @click="toKpi"
          ><img src="/sotetsu-logo.png" alt="ELMETRIX" height="28" />
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu
        :nudge-width="100"
        transition="slide-y-transition"
        offset-y
        offset-x
        :close-on-content-click="false"
      >
        <v-btn large icon class="mr-0 avt-exp" slot="activator">
          <v-avatar color="white" size="32px">
            <img src="/sotetsu-icon.png" alt="Sotetsu" />
          </v-avatar>
        </v-btn>
        <v-list>
          <v-list-tile nuxt :to="$i18n.path('client/profile')">
            <v-list-tile-action>
              <v-icon>assignment_ind</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>{{
              $t("client.layout.prof")
            }}</v-list-tile-title>
          </v-list-tile>
          <v-list-group no-action>
            <v-list-tile slot="activator">
              <v-list-tile-action>
                <v-icon>translate</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{
                  $t("client.layout.language") + $t("client.layout.nation")
                }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-if="$i18n.locale === 'jp'"
              nuxt
              :to="
                $route.fullPath.substring(0, 3) === '/jp'
                  ? '/en' + $route.fullPath.replace(/^\/[^\/]+/, '')
                  : '/en' + $route.fullPath
              "
            >
              <v-list-tile-content>
                <v-list-tile-title>English</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-if="$i18n.locale === 'en'"
              nuxt
              :to="
                $route.fullPath.substring(0, 3) === '/en'
                  ? '/jp' + $route.fullPath.replace(/^\/[^\/]+/, '')
                  : '/jp' + $route.fullPath
              "
            >
              <v-list-tile-content>
                <v-list-tile-title>日本語</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-divider></v-divider>
          <v-list-tile nuxt to="/">
            <v-list-tile-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>
            <v-list-tile-title @click.prevent="postLogout">{{
              $t("client.layout.logout")
            }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <div class="body-w-sl-ht kpi">
      <nuxt />
    </div>
  </v-app>
</template>

<script>
import sideMenu from "@/components/sideMenu.vue";
export default {
  middleware: "admin-auth",
  components: { sideMenu },
  data({ $store, $route }) {
    let hotelList = $store.state.hotelListState;
    const defaultHotel = $store.state.defaultHotel;
    let paramID = $route.params.id;
    let getChoice;
    if (paramID && paramID !== defaultHotel.id) {
      getChoice = _.find(hotelList, i => i.id === Number(defaultHotel.id));
    } else {
      getChoice = defaultHotel.id;
    }

    return {
      timeout: 0,
      drawer: null,
      drawer2: null,
      items: [
        { title: "Terms of service", link: "#" },
        { title: "Privacy", link: "#" }
      ],
      hotelList,
      getChoice
    };
  },
  computed: {
    isKPI() {
      const fullPath = this.$route.path;
      const paramID = this.$route.params.id;
      let routePath;
      if (paramID) {
        routePath = fullPath.substr(0, fullPath.length - paramID.length);
      } else {
        routePath = "/client/price/kpi/";
      }
      const kpiPath = "/client/price/kpi/";
      const requestPath = "/client/request";
      return !!(kpiPath === routePath || fullPath === requestPath);
    }
  },
  methods: {
    postLogout() {
      this.$store.dispatch("auth/logOut");
    },
    onChange(spec) {
      let idLength = this.$route.params.id
        ? this.$route.params.id.length + 1
        : 0;
      let langLen = this.$route.params.lang
        ? this.$route.params.lang.length + 2
        : 1;

      let path = `${this.$route.path.substring(
        langLen,
        this.$route.path.length - idLength
      )}/${spec}`;

      let hotel = _.find(this.hotelList, { id: spec });
      this.$store.commit("setDefaultHotel", hotel);
      return this.$router.push({
        path: this.$i18n.path(path),
        query: this.$root._route.query || {}
      });
    },
    toKpi() {
      this.$router.push(this.$i18n.path("client/price/kpi"));
    }
  }
};
</script>
