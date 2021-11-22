import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = { todos: [] }

const actions = {
    addTodo({commit}, todo) {
        return new Promise (resolve => {
            todo.id = Date.now()
            commit('addTodo', todo)
            resolve(todo)
        })
    },
    toggleTodo({ commit }, todo) {
        commit('toggleTodo', todo)
},
    removeTodo({ commit}, todo) {
        commit('removeTodo', todo)
    }
}

const mutations = {
    addTodo(state, payload){
        state.todos.push(payload)
    },
    toggleTodo(state, payload) {
        const index = state.todos.findIndex(item => item.id === payload.id);
        if (index > -1) {
            const checked = !state.todos[index].checked;
            Vue.set(state.todos, index, { ...state.todos[index], checked });
    }
    },
    removeTodo(state, payload){
        state.todos = state.todos.filter(item => item.id != payload.id)
}
}

const store = new Vuex.Store({
    state,
    actions,
    mutations
})

export default store