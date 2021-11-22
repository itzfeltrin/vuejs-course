<template>
    <section>
        <span>Filter</span>
        <div class="controls">
            <button type="button">Refresh</button>
            <router-link to="/register">Register as Coach</router-link>
        </div>
    </section>
    <section>
        <ul v-if="hasCoaches">
            <CoachItem
                v-for="coach in filteredCoaches"
                :key="coach.id"
                :coach="coach"
            />
        </ul>
        <h3 v-else>No coaches found.</h3>
        <!-- <span>Coach List</span> -->
    </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';

export default {
    components: {
        CoachItem,
    },
    computed: {
        filteredCoaches() {
            return this.$store.getters['coaches/coaches'];
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches'];
        },
    },
};
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
.controls {
    display: flex;
    justify-content: space-between;
}
</style>
