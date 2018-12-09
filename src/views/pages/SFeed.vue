<template>
    <v-container fluid grid-list-lg>

        <v-layout row wrap>
            <SClothCard />
            <SClothCard />
            <SClothCard />
        </v-layout>

    </v-container>
</template>

<script lang="ts">
import SClothCard from './../components/SClothCard.vue';

export default {
  components: { SClothCard }
};
</script>

<style>

</style>
