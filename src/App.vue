<template>
  <v-app>
    <SToolbar />

    <v-content>
      <router-view />
    </v-content>

    <SBottomNav />
  </v-app>
</template>

<script>
import SFeed      from './views/pages/SFeed.vue';
import SToolbar   from './views/components/SToolbar.vue';
import SBottomNav from './views/components/SBottomNav.vue';

export default {
  name: 'App',
  components: { SFeed, SToolbar, SBottomNav},
  data()
  {
    return {
      //
    };
  },
  mounted()
  {
    this.$router.push('/feed');
  }
};
</script>
