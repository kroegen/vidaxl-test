import Vue          from 'vue';
import Vuex         from 'vuex';
import modules      from './modules';
import actions      from './actions';
import mutations    from './mutations';
import getters      from './getters';
import state        from './state';

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    mutations,
    getters,
    state,
    modules : {
        ...modules
    },
});
