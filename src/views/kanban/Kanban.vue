<template>
<div class="opa">
    <div class="kanban"> {{ count }} </div>
    <a @click="increment">++</a>
    <a @click="decrement">--</a>
</div>
</template>

<script>
export default {
    computed: {
        count: {
            set(v) {
                this.$store.commit('setCount', v)
            },
            get() {
                return this.$store.state.count;
            }
        }
    },
    methods: {
        increment() {
            this.count = this.count +1;
        },
        decrement() {
            this.count = this.count -1;
        }
    }
};
</script>
