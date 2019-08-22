import api          from '@/api';
import { logError } from '@/utils/errorUtils';
import { merge }    from '@/utils/baseUtils';

// initial state
const state = {
    items       : [],
    currentItem : null,
};

// getters
const getters = {
    items       : state => state.items,
    currentItem : state => state.currentItem,
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

    async updateItem({ commit }, { payload, id }) { // eslint-disable-line
        try {
            await api.items.updateItem(`items/${id}`, payload);
        } catch (error) {
            await logError(error);
        }
    },

    async deleteItem({ commit }, id) {
        try {
            await api.items.deleteItem(`items/${id}`);

            await commit('DELETE_ITEM_SUCCESS', id);
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

    CREATE_ITEM_SUCCESS(state, item) {
        state.items = [item, ...state.items];
    },

    DELETE_ITEM_SUCCESS(state, id) {
        state.items = [...state.items.filter(item => item.id !== id)];
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};
