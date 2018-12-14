<template>
    <v-flex
        xs6
        >
        <v-card>
            <v-img
            :src="cloth.image"
            height="200px"
            >
            <v-container
                fill-height
                fluid
                pa-2
            >
                <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                    <span class="headline black--text" v-text="cloth.label"></span>
                </v-flex>
                </v-layout>
            </v-container>
            </v-img>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>favorite</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>bookmark</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>share</v-icon>
            </v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script lang="ts">
import Vue from 'vue'
import Cloth from '@/model/Cloth';

export default Vue.extend({
    props: { cloth: { type: Cloth, required : true}}
})
</script>

