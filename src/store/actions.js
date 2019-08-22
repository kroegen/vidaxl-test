
const actions = {
    CHANGE_CURRENT_MODAL({ commit }, { name = '', props = null }) {
        commit('SET_CURRENT_MODAL', { name, props });
    },
};

export default actions;
