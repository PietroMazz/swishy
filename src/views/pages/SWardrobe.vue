<template>
     <v-container fill-height grid-list-md text-xs-center>
        <v-layout row wrap align-content-center>
            <v-flex xs4  v-for="item in categories" :key="item">

                <v-card append :to="item " color="grey lighten-4">
                    <v-responsive :aspect-ratio="1/1">
                      
                        <div style="padding: 10px">
                            <v-icon x-large>fa-star</v-icon>
                        </div>

                        <span>{{item}}</span>

                    </v-responsive>
                </v-card>

            </v-flex>
        </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import ClothCategories from '@/assets/ClothCategories'
export default Vue.extend({
    data()
    {
        return({
            categories: ClothCategories
        })
    }
})
</script>
