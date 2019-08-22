
const mutations = {
    SET_CURRENT_MODAL(state, { name, props }) {
        state.modal.name = name;
        state.modal.props = props;
    },
};

export default mutations;

