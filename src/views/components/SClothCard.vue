<template>
    <v-flex xs12>
        <v-card color="white" class="black--text">
                <v-layout>
                    <v-flex xs5>
                        <v-img
                            :src="cloth.image"
                            height="125px"
                            contain
                        />
                    </v-flex>
                    <v-flex xs7>
                        <v-card-title primary-title>
                            <div>
                                <div class="headline">{{cloth.label}}</div>
                                <div>{{cloth.brand}}</div>
                                <div>{{cloth.year}}</div>
                            </div>
                            <div>
                                <v-icon v-for="i in cloth.stars" :key="i">star</v-icon>
                                <v-icon v-for="i in (5 - cloth.stars)" :key=" (6 - i)">star_border</v-icon>
                            </div>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider light></v-divider>
                <v-card-actions class="pa-3">
                    <v-layout rown wrap justify-space-around>
                        <v-btn color="orange" round xs4>
                            Amazon
                        </v-btn>
                        <v-btn round xs4>
                            Zalando
                        </v-btn>
                        <v-btn class="white--text" color="black" round xs4>
                            Privalia
                        </v-btn>
                    </v-layout>
                </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script lang="ts">
import Vue      from 'vue'
import Cloth    from '@/model/Cloth'

export default Vue.extend({
    props: { cloth : {type: Cloth, required: true }}
})
</script>

