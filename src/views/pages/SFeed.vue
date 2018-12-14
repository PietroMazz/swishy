<template>
    <v-container fluid grid-list-lg>

        <v-layout row wrap>
            <SClothCard :cloth="fila_disruptor"/>
            <SClothCard :cloth="fila_disruptor"/>
            <SClothCard :cloth="fila_disruptor"/>
        </v-layout>

    </v-container>
</template>

<script lang="ts">
import SClothCard from './../components/SClothCard.vue';
import Cloth from '@/model/Cloth';

export default {
  components: { SClothCard },

  data() 
  {
      return({
          fila_disruptor: new Cloth('Disruptor', 'Fila', 2018, 2, "https://www.fila.de/out/pictures/master/product/1/fila_disruptor_low_wmn_white_1715092_1133.jpg") 
      });
  }
};
</script>

<style>

</style>
