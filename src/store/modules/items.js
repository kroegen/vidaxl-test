import api          from '@/api';
import { logError } from '@/utils/errorUtils';
import { merge }    from '@/utils/baseUtils';

// initial state
const state = {
    items       : [],
};

// getters
const getters = {
    items       : state => state.items,
};

// actions
const actions = {
    async fetchItems({ commit }) {
        try {
            const data = await api.items.fetchItems('items');

            await commit('FETCH_ITEMS_SUCCESS', data.items);
        } catch (error) {
            await logError(error);
        }
    },

    async createItem({ commit }, { payload }) {
        try {
            const data = await api.items.createItem('items', payload);

            await commit('CREATE_ITEM_SUCCESS', data.item);
        } catch (error) {
            await logError(error);
        }
    },

    async updateTask({}, { payload, id }) { // eslint-disable-line
        try {
            await api.tasks.updateTask(`tasks/${id}`, payload);
        } catch (error) {
            await logError(error);
        }
    },

    async deleteTask({ commit }, id) {
        try {
            await api.tasks.deleteTask(`tasks/${id}`);

            await commit('DELETE_TASK_SUCCESS', id);
        } catch (error) {
            await logError(error);
        }
    },
};

// mutations
const mutations = {
    FETCH_ITEMS_SUCCESS(state, items) {
        state.items = merge(state.items, items);
    },

    FETCH_POST_SUCCESS(state, { post }) {
        state.currentPost = post;
    },

    FETCH_POST_COMMENTS_SUCCESS(state, { comments }) {
        state.comments = comments;
    },

    CLEAR_POST_SUCCESS(state) {
        state.comments    = [];
        state.currentPost = null;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
