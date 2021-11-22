<template>
  <div class="tile" :class="{checked: todo.checked}">
    <div class="tile-icon">
      <i class="icon" :class="todo.checked ? 'icon-check' : 'icon-time'"></i>
    </div>
    <div class="tile-content">
      <p class="tile-subtitle">{{ todo.description }}</p>
    </div>
    <div class="tile-action">
      <button @click="$emit('toggle', todo)" class="btn btn-link">
        <span v-if="todo.checked" class="undone">Undone</span>
        <span v-else class="done">Done</span>
      </button>
      <button @click="$emit('remove', todo)" class="btn btn-link">
        <span class="remove">Remove</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: { type: Object, required: true }
  }
};
</script>

<style scoped>
.done, .undone{
  color: #EBEDEF;
}
.remove{
  color: #ff5252;
}
.checked {
  text-decoration: line-through;
  color: #474787;
}

</style>
