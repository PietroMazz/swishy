<template>
    <v-container fluid grid-list-lg>

        <v-layout row wrap>
            <SClothCard v-for="c in clothes" :cloth="c" :key="c.label" />
        </v-layout>

    </v-container>
</template>

<script lang="ts">
import SClothCard from './../components/SClothCard.vue';
import Cloth from '@/model/Cloth';
import AllClothes from '@/assets/AllClothes';

export default {
  components: { SClothCard },

  data() 
  {
      return({
          clothes: AllClothes
      });
  }
};
</script>

<style>

</style>
