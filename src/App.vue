<template>
  <v-app>
    <v-app-bar
      app
      
    >
      <div class="d-flex align-center">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="@/assets/stockphoto.jpg"
          transition="scale-transition"
          width="40"
        />
        {{$const.APP_NAME}}
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Login</span>
      </v-btn>
      <v-btn text>
        <v-icon>mdi-account-circle </v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
@import url('@/assets/styles.css');
</style>
