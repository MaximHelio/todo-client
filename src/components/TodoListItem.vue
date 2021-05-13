<template>
  <div class="list-item todo-list-item my-2 d-flex align-items-center justify-content-between">
    <input class="m-0 ms-1 form-check-input" type="checkbox" v-model="todo.completed">
    <span 
      :class="{ completed: todo.completed }"
      class="d-block w-100 text-start ps-3"
    >
      {{ todo.content }}
    </span>
    <button @click="onDelete" class="btn btn-danger btn-custom-sm">
      DELETE
    </button>
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onClick() {
      // 1. mutation 호출
      this.$store.commit('UPDATE_TODO', this.todo)
      // 2. store에서 todo의 completed값 변경
    },
    onDelete() {
      this.$store.commit('DELETE_TODO', this.todo)
    },
  },
}
</script>


<style scoped>
.completed {
  text-decoration: line-through;
  color: grey;
}

.btn-custom-sm {
  width: 4.5rem !important;
  height: 2.0rem !important;
  font-size: 0.74rem;
}

.todo-list-item:hover {
  background: #eee;
  border-radius: 0.25rem;
}

input[type="checkbox"] {
  width: 48px;
  height:40px;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>