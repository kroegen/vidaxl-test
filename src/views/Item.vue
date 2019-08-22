<template>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
        <v-container>
            <h1>{{ title }}</h1>
            <v-text-field
                v-model="name"
                :rules="nameRules"
                :counter="20"
                label="Name"
                required
            />
            <v-textarea
                v-model="description"
                :rules="descriptionRules"
                :counter="750"
                auto-grow
                label="Description"
                required
            />
            <v-btn v-if="edit" class="mr-4" color="indigo" @click.prevent="handleCreate">Update</v-btn>
            <v-btn v-else class="mr-4" color="indigo" @click.prevent="handleCreate">Create</v-btn>
            <v-btn @click.prevent="handleCancel">Cancel</v-btn>
        </v-container>
    </v-form>
</template>

<script>
export default {
    name : 'edit-page',

    props: ['item', 'edit'],

    components: {
    },

    data: () => ({
        valid : false,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => v.length <= 20 || 'Name must be less than 20 characters',
        ],
        description: '',
        descriptionRules: [
            v => !!v || 'Description is required',
            v => v.length <= 750 || 'Description must be less than 750 characters',
        ],
    }),

    computed: {
        title: function() {
            return this.edit ? `Edit item ${this.item.id}` : 'New item';
        },
    },

    created() {
        if (this.edit) {
            this.name        = this.item.name;
            this.description = this.item.description;
        }
    },

    methods: {
        async handleCreate() {
            try {
                if (this.$refs.form.validate()) {
                    const payload = {
                        name        : this.name,
                        description : this.description,
                    };

                    if (this.edit) {
                        await this.$store.dispatch('updateItem', { payload, id: this.item.id });
                    } else {
                        await this.$store.dispatch('createItem', { payload });
                    }

                    this.handleCancel();
                }
            } catch (error) {
                console.warn(error);
                this.handleCancel();
            }
        },

        handleCancel() {
            this.$router.push({ name: 'main' });
        },
    },
};
</script>
