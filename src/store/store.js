import {createStore} from "vuex";
import axios from "axios";

const _staticModule = {
    namespaced: true,
    state: () => ({
        name: 'Unknown!'
    }),
    mutations: {
        CHANGE(state, _name) {
            state.name = _name;
        }
    },
    getters: {
        name: state => state.name
    }
}

const _dynamicModule = {
    state: {
        users: []
    },
    mutations: {
        SAVE_USERS(state, _users) {
            state.users = _users;
        }
    },
    actions: {
        loadUsers({commit}, userId) {
            axios.get('https://jsonplaceholder.typicode.com/todos/' + userId).then(result => {
                commit('SAVE_USERS', result.data);
            }).catch(error => {
                commit('SAVE_USERS', '[' + error.response.status + '] ' + error.response.statusText);
            });
        }
    },
    getters: {
        users : state => state.users
    }
}

export const repo = createStore({
    modules: {
        staticModule: _staticModule,
        dynamicModule: _dynamicModule
    },
});
