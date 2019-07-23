<template>
  <v-app>
    <v-toolbar
      color="white"
      dark
      fixed
      app
      class="mate2"
    >
      <v-btn icon nuxt @click="backPage">
        <v-icon>arrow_back</v-icon>
      </v-btn>

      <v-toolbar-title>{{ $t('client.layout.back') }}</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-toolbar>
    <div>
      <nuxt/>
    </div>
  </v-app>
</template>

<script>
  export default {
    middleware: 'authenticated',
    methods: {
      backPage() {
        this.$router.go(-1)
      }
    }
  }
</script>
