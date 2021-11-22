<template>
    <section>FILTER</section>
    <base-card>
        <div class="controls">
            <base-button mode="outlined">Refresh</base-button>
            <base-button link to="/register">Register as Coach</base-button>
        </div>
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
        </section></base-card
    >
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
