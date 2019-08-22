<template>
    <v-app class="app">
        <v-app-bar app>
            <v-toolbar-title class="headline">
                VidaXL Test
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>

        <v-content>
            <v-container
                fluid
            >
                <transition name="fade" mode="out-in">
                    <router-view :key="$route.path"></router-view>
                </transition>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: 'App',
    components: {
    },
    data: () => ({
    //
    }),
    created () {
        this.$vuetify.theme.dark = true;
    },
};
</script>

<style>
    @import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons';

    .app .v-btn--example {
        bottom: 0;
        position: absolute;
        margin: 0 0 16px 16px;
    }
</style>
