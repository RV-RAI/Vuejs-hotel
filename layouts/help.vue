<template>
 <v-app>
  <v-toolbar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    color="white"
    light
    app
    fixed
    clipped-right
    class="mate2 w-sl-hotel"
  >
    <v-toolbar-title style="width: 300px" class="ml-0">
      <v-toolbar-side-icon nuxt :to="$i18n.path('client/price/price-table')">
       <v-tooltip bottom>
         <v-icon
           slot="activator"
           dark
         >home</v-icon>
         <span>Back to dashboard</span>
       </v-tooltip>
      </v-toolbar-side-icon>
      <v-btn
        :ripple="false"
        class="lg-on-t ml-0 px-0 transparent"
        flat
        nuxt
        @click="toKpi"
      ><img
        src="/sotetsu-logo.png"
        alt="ELMETRIX"
        height="28"></v-btn>
    </v-toolbar-title>
    <!-- <v-text-field
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="search"
      :label="$t('client.layout.default.search')"
      class="hidden-sm-and-down"
    ></v-text-field> -->
    <v-spacer></v-spacer>
    <!--<v-btn outline v-if="$i18n.locale === 'en'" :to="`/jp` + $route.fullPath.substring(3)">EN</v-btn>-->
    <!--<v-btn outline v-else :to="`/en` + $route.fullPath.substring(3)">JP</v-btn>-->
    <v-menu
     :nudge-width="100"
     transition="slide-y-transition"
     offset-y
     offset-x
     :close-on-content-click="false"
    >
      <v-toolbar-title slot="activator">
       <v-btn large icon class="mr-0 avt-exp">
         <v-avatar color="white" size="32px">
           <img
             src="/sotetsu-icon.png"
             alt="Sotetsu"
           >
         </v-avatar>
       </v-btn>
      </v-toolbar-title>
      <v-list>
       <v-list-tile nuxt :to="$i18n.path('client/profile')">
         <v-list-tile-action>
           <v-icon>assignment_ind</v-icon>
         </v-list-tile-action>
         <v-list-tile-title >{{ $t('client.layout.prof') }}</v-list-tile-title>
       </v-list-tile>
<!--       <v-list-tile nuxt :to="$i18n.path('client/hotel-list')">-->
<!--         <v-list-tile-action>-->
<!--           <v-icon>format_list_bulleted</v-icon>-->
<!--         </v-list-tile-action>-->
<!--         <v-list-tile-title >{{ $t('client.layout.listHot') }}</v-list-tile-title>-->
<!--       </v-list-tile>-->
<!--       <v-list-tile nuxt :to="$i18n.path('terms')">-->
<!--         <v-list-tile-action>-->
<!--           <v-icon>list_alt</v-icon>-->
<!--         </v-list-tile-action>-->
<!--         <v-list-tile-title>{{ $t('client.layout.terms') }}</v-list-tile-title>-->
<!--       </v-list-tile>-->
<!--       <v-list-tile nuxt :to="$i18n.path('privacy-policy')">-->
<!--         <v-list-tile-action>-->
<!--           <v-icon>verified_user</v-icon>-->
<!--         </v-list-tile-action>-->
<!--         <v-list-tile-title>{{ $t('client.layout.privacy') }}</v-list-tile-title>-->
<!--       </v-list-tile>-->
       <v-list-group no-action>
         <v-list-tile slot="activator">
           <v-list-tile-action>
             <v-icon>translate</v-icon>
           </v-list-tile-action>
           <v-list-tile-content>
             <v-list-tile-title>{{ $t('client.layout.language') + $t('client.layout.nation') }}</v-list-tile-title>
           </v-list-tile-content>
         </v-list-tile>
         <v-list-tile v-if="$i18n.locale === 'jp'" nuxt
                      :to="$route.fullPath.substring(0, 3) === '/jp' ?
                       '/en' + $route.fullPath.replace(/^\/[^\/]+/, '') :
                       '/en' + $route.fullPath">
           <v-list-tile-content>
             <v-list-tile-title>English</v-list-tile-title>
           </v-list-tile-content>
         </v-list-tile>
         <v-list-tile v-if="$i18n.locale === 'en'" nuxt
                      :to="$route.fullPath.substring(0, 3) === '/en' ?
                       '/jp' + $route.fullPath.replace(/^\/[^\/]+/, '') :
                       '/jp' + $route.fullPath">
           <v-list-tile-content>
             <v-list-tile-title>日本語</v-list-tile-title>
           </v-list-tile-content>
         </v-list-tile>
       </v-list-group>
       <v-divider></v-divider>
<!--       <v-list-tile nuxt target="_blank" :to="$i18n.path('public/pricing-plan')">-->
<!--         <v-list-tile-action>-->
<!--           <v-icon>attach_money</v-icon>-->
<!--         </v-list-tile-action>-->
<!--         <v-list-tile-title >{{ $t('client.layout.pp') }}</v-list-tile-title>-->
<!--       </v-list-tile>-->
       <v-list-tile nuxt to="/">
         <v-list-tile-action>
           <v-icon>exit_to_app</v-icon>
         </v-list-tile-action>
         <v-list-tile-title @click.prevent="postLogout">{{ $t('client.layout.logout') }}</v-list-tile-title>
       </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
  <div>
   <nuxt/>
  </div>
 </v-app>
</template>

<script>
  export default {
      data () {
        return {
         drawerRight: true,
          items: [
            'Terms of service', 'Privacy'
          ]
        }
      },
    methods: {
      postProfile () {
        this.$router.push('/system/profile')
      },
      postLogout () {
        this.$store.dispatch('auth/logout')
          .then(() => this.$router.push('/'))
          .catch( e => console.log(e))
      },
      toKpi() {
        this.$router.push(this.$i18n.path('client/price/kpi'))
      }
    }
  }
</script>
