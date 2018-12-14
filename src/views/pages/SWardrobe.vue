<template>
     <v-container fill-height grid-list-md text-xs-center>
        <v-layout row wrap align-content-center>
            <v-flex xs4  v-for="item in categories" :key="item">

                <v-card append :to="item " color="grey lighten-4">
                    <v-responsive :aspect-ratio="1/1">
                      
                        <div style="padding: 10px">
                            <v-icon x-large>fa-tshirt</v-icon>
                        </div>

                        <span>T-Shirt</span>

                    </v-responsive>
                </v-card>

            </v-flex>
        </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data()
    {
        return({
            categories: ['t-shirts','hats','blouses','jumpers', 'jeans','jackets','glasses','underwears','shoes']
        })
    }
})
</script>

