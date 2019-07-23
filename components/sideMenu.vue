<template>
  <div>
    <!-- <v-list-tile class="single-line">
      <nuxt-link :to="$i18n.path(`client/dashboard`)" class="link-item">
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>ダッシュボード</v-list-tile-title>
        </v-list-tile-content>
      </nuxt-link>
    </v-list-tile> -->
    <v-list-tile class="single-line">
      <nuxt-link :to="$i18n.path(`client/price/kpi`)" class="link-item">
        <v-list-tile-action>
          <v-icon>important_devices</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ $t("client.layout.kpi") }}</v-list-tile-title>
        </v-list-tile-content>
      </nuxt-link>
    </v-list-tile>
    <v-list-tile class="single-line">
      <nuxt-link
        :to="$i18n.path(`client/monthly/${$store.state.defaultHotel.id}`)"
        class="link-item"
      >
        <v-list-tile-action>
          <v-icon>today</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>月次データ</v-list-tile-title>
        </v-list-tile-content>
      </nuxt-link>
    </v-list-tile>
    <v-list-tile class="single-line">
      <nuxt-link
        :to="$i18n.path(`client/daily/${$store.state.defaultHotel.id}`)"
        class="link-item"
      >
        <v-list-tile-action>
          <v-icon>update</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>日次データ</v-list-tile-title>
        </v-list-tile-content>
      </nuxt-link>
    </v-list-tile>
    <v-list-tile class="single-line">
      <nuxt-link
        :to="
          $i18n.path(`client/price/price-table/${$store.state.defaultHotel.id}`)
        "
        class="link-item"
      >
        <v-list-tile-action>
          <v-icon>table_chart</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{
            $t("client.layout.priceTab")
          }}</v-list-tile-title>
        </v-list-tile-content>
      </nuxt-link>
    </v-list-tile>
    <v-list-group prepend-icon="assessment" value="true" class="multi-sub">
      <v-list-tile class="parent-node" slot="activator">
        <v-list-tile-title>{{ $t("client.layout.prices") }}</v-list-tile-title>
      </v-list-tile>
      <v-list-tile class="sub-node">
        <nuxt-link
          :to="
            $i18n.path(`client/price/min-price/${$store.state.defaultHotel.id}`)
          "
          class="link-item"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{
              $t("client.layout.minP")
            }}</v-list-tile-title>
          </v-list-tile-content>
        </nuxt-link>
      </v-list-tile>
    </v-list-group>
    <v-list-tile class="single-line">
      <nuxt-link
        :to="$i18n.path(`client/review/${$store.state.defaultHotel.id}`)"
        class="link-item"
      >
        <v-list-tile-action>
          <v-icon>rate_review</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ $t("client.review") }}</v-list-tile-title>
        </v-list-tile-content>
      </nuxt-link>
    </v-list-tile>
    <v-list-tile class="single-line">
      <nuxt-link :to="$i18n.path(`client/request`)" class="link-item">
        <v-list-tile-action>
          <v-icon>chat</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ $t("client.request") }}</v-list-tile-title>
        </v-list-tile-content>
      </nuxt-link>
    </v-list-tile>
    <v-divider class="divi-side"></v-divider>
    <v-list-tile class="single-line">
      <nuxt-link :to="$i18n.path('client/profile')" class="link-item">
        <v-list-tile-action>
          <v-icon>assignment_ind</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ $t("client.layout.prof") }}</v-list-tile-title>
        </v-list-tile-content>
      </nuxt-link>
    </v-list-tile>
  </div>
</template>
