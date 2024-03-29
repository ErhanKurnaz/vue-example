import Vue from 'vue'
import Vuex from 'vuex'
import { User } from '@/entities/user'

Vue.use(Vuex)

interface StoreInterface {
    users: Array<User>
    loggedInUser?: User
}

export default new Vuex.Store<StoreInterface>({
    state: {
        users: [],
        loggedInUser: undefined,
    },
    mutations: {
        addUser({ users }, user: User) {
            users.push(user)
        },

        newCurrentUser(state, user: User) {
            state.loggedInUser = user
        },
    },
    actions: {
        newUser({ commit }, user: User) {
            commit('addUser', user)
        },

        login({ commit }, user: User) {
            commit('newCurrentUser', user)
        },
    },
    modules: {},
    getters: {},
})
