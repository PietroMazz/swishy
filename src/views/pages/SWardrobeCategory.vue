<template>
    <v-container fluid grid-list-lg>
        <v-layout justify-center>
            <v-flex xs12 sm6>
                <v-card>
                    <v-container
                    fluid
                    grid-list-md
                    >
                    <v-layout row wrap>
                        <SWardrobeCard v-for="(item,key) in wardrobe" :key="key" :cloth="item"/>
                    </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Cloth from '@/model/Cloth';
import SWardrobeCard from '@/views/components/SWardrobeCard.vue';

export default Vue.extend({
    components: { SWardrobeCard },

    data: () => ({
        wardrobe: [ 
            new Cloth('Disruptor', 'Fila', 2018, 2, "https://www.fila.de/out/pictures/master/product/1/fila_disruptor_low_wmn_white_1715092_1133.jpg"), 
            new Cloth('Disruptor', 'Fila', 2018, 2, "https://www.fila.de/out/pictures/master/product/1/fila_disruptor_low_wmn_white_1715092_1133.jpg"), 
            new Cloth('Disruptor', 'Fila', 2018, 2, "https://www.fila.de/out/pictures/master/product/1/fila_disruptor_low_wmn_white_1715092_1133.jpg"), 
            ]
    })
})
</script>
