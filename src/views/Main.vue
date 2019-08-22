<template>
    <v-simple-table class="table">
        <thead>
            <tr>
                <th class="text-left">Id</th>
                <th class="text-left">Name</th>
                <th class="text-left">Description</th>
                <th class="text-left">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in items" :key="item.id">
                <td>{{ index }}</td>
                <td>{{ item.name }}</td>
                <td class="description">{{ item.description }}</td>
                <td class="actions">
                    <div class="text-left">
                        <v-btn class="ma-2" color="indigo" @click.prevent="handleUpdate(item)">Update</v-btn>
                        <v-btn class="ma-2" @click.prevent="handleDelete(item.id)">Delete</v-btn>
                    </div>
                </td>
            </tr>
        </tbody>
        <v-fab-transition>
            <v-btn
                absolute
                dark
                fab
                right
                bottom
                color="pink"
                class="v-btn--example"
                @click.prevent="handleCreate"
            >
                <v-icon>add</v-icon>
            </v-btn>
        </v-fab-transition>
    </v-simple-table>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name : 'main-page',

    computed: {
        ...mapGetters(['items']),
    },

    data() {
        return {
            loading : true,
        };
    },

    async created() {
        this.toggleLoader();

        try {
            await this.$store.dispatch('fetchItems');

            this.toggleLoader();
        } catch (error) {
            console.warn(error);
            this.toggleLoader();
        }
    },

    methods: {
        toggleLoader() {
            this.loading = !this.loading;
        },

        handleUpdate(item) {
            if (item) {
                this.$router.push({ name: 'edit', params: { id: item.id, item, edit: true } });
            }
        },

        async handleDelete(id = null) {
            if (id) {
                this.toggleLoader();

                try {
                    await this.$store.dispatch('deleteItem', id);

                    this.toggleLoader();
                } catch (error) {
                    console.warn(error);
                    this.toggleLoader();
                }
            }
        },

        handleCreate() {
            this.$router.push({ name: 'create', params: { edit: false } });
        },
    },
};
</script>

<style>
    .app .table .v-btn--example {
        bottom: 0 !important;
        position: absolute;
        margin: 0 0 16px 16px;
    }

    .app .table .description {
        word-break: break-all;
    }

    .app .table .actions {
        min-width: 255px;
    }
</style>
