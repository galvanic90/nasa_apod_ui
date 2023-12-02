<template>
    <div>
        <v-container>
            <v-row align="center">
                <v-col>

                    <ButtonToday />
                </v-col>

                <v-col>
                    <ButtonGallery />
                </v-col>
            </v-row>

        </v-container>
    </div>
</template>

<script setup>
import ButtonToday from '../../components/ButtonToday.vue'
import ButtonGallery from '../../components/ButtonGallery.vue' 
</script>
