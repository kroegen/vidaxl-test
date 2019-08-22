import store from '@/store';

export async function logError(error) {
    try {
        store.commit('SET_ERRORS', error && error.errors ? error.errors : error);

        throw error;
    } catch (err) {
        throw err;
    }
}
