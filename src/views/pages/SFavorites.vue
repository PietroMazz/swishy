<template>
    <v-container fill-height fluid grid-list-lg>
        <v-flex class="text-xs-center" v-if="favourites.length === 0">
            <p> &hearts;  No items in your favourite list!</p>
        </v-flex>
    </v-container>
</template>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() 
    {
        return({
            favourites:[]
        });
    }
})
</script>
