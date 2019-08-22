
const mutations = {
    SET_ERRORS(state, data) {
        state.errors = data.length ? [ ...data ] : [ data ];
    },

    SET_CURRENT_MODAL(state, { name, props }) {
        state.modal.name = name;
        state.modal.props = props;
    },
};

export default mutations;

