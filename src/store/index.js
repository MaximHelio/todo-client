import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [],
    errorMsg: '',
  },
  getters: {
    getTodoList(state) {
      return state.todoList
    },
  },
  mutations: {
    UPDATE_ERROR(state, errorMsg) {
      state.errorMsg = errorMsg
    },
    CREATE_TODO(state, newTodo) {
      state.todoList.push(newTodo)
    },
    UPDATE_TODO(state, targetTodo) {
      //  todoList에서 targetTodo를 찾고
      // targetTodo의 completed 값을 변경
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === targetTodo.id) {
          // 참이면 거짓으로, 거짓이면 참으로 변경
          todo.completed = !todo.completed
        }
        return todo
      })
    },
    DELETE_TODO(state, targetTodo) {
      const targetTodoIdx = state.todoList.indexOf(targetTodo)
      state.todoList.splice(targetTodoIdx, 1)
    },
  },
  actions: {
  },
  modules: {
  }
})
