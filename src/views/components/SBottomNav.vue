<template>
    <v-bottom-nav
      :active.sync="active"
      :value="true"
      app
      fixed
      color="teal lighten-2"
    >
      <v-btn
        color="white"
        flat
        value="feed"
      >
        <span>Feed</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn
        color="white"
        flat
        value="favorites"
      >
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn
        color="white"
        flat
        value="explore"
      >
        <span>Explore</span>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn
        color="white"
        flat
        value="wardrobe"
      >
        <span>Wardrobe</span>
        <v-icon>inventory</v-icon>
      </v-btn>
    </v-bottom-nav>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data()
    {
        return({
          active: 'feed'
        });
    },

    watch:
    {
        active(value)
        {
            this.$router.push(`/${value}`);
        }
    }
});
</script>

