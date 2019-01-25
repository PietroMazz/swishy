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
                        <SWardrobeCard v-for="(item,key) in filteredWardrobe" :key="key" :cloth="item"/>
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
import AllClothes from '@/assets/AllClothes'
import SWardrobeCard from '@/views/components/SWardrobeCard.vue';

export default Vue.extend({
    components: { SWardrobeCard },

    props: ["category"],

    data: () => 
    ({
        wardrobe: AllClothes 
    }),
    computed:
    {
        filteredWardrobe() : Cloth[]
        {
            return this.wardrobe.filter( (c) => c.category === this.category) as any;
        }
    }

})
</script>
