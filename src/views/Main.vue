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
            <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.description }}</td>
                <td>
                    <div class="text-left">
                        <v-btn class="ma-2" color="indigo" @click.prevent="handleUpdate(item.id)">Update</v-btn>
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
export default {
    name : 'main-page',

    components: {
    },

    data() {
        return {
            desserts: [
              {
                id: 1,
                name: 'Frozen Yogurt',
                description: 159,
              },
              {
                name: 'Ice cream sandwich',
                description: 237,
              },
              {
                name: 'Eclair',
                description: 262,
              },
              {
                name: 'Cupcake',
                description: 305,
              },
              {
                name: 'Gingerbread',
                description: 356,
              },
              {
                name: 'Jelly bean',
                description: 375,
              },
              {
                name: 'Lollipop',
                description: 392,
              },
              {
                name: 'Honeycomb',
                description: 408,
              },
              {
                name: 'Donut',
                description: 452,
              },
              {
                name: 'KitKat',
                description: 518,
              },
            ],
        };
    },

    methods: {
        handleUpdate(id = null) {
            if (id) {
                console.log(id);
                this.$router.push({ name: 'edit', params: { id } });
            } else {
                console.log('handleUpdate');
            }
        },

        handleDelete(id = null) {
            if (id) {
                console.log(id);
            } else {
                console.log('handleDelete');
            }
        },

        handleCreate() {
            this.$router.push({ name: 'create' });
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
</style>
