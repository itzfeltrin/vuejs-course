<template>
    <base-dialog
        :show="Boolean(error)"
        title="An error ocurred!"
        @close="clearError"
    >
        <p>{{ error }}</p>
    </base-dialog>
    <section>
        <CoachFilter
            :active-filters="activeFilters"
            @change-filter="setFilters"
        />
    </section>
    <section>
        <base-card>
            <div class="controls">
                <base-button mode="outlined" @click="loadCoaches"
                    >Refresh</base-button
                >
                <base-button v-if="!isCoach && !isLoading" link to="/register"
                    >Register as Coach</base-button
                >
            </div>
            <div v-if="isLoading">
                <base-spinner></base-spinner>
            </div>
            <ul v-else-if="hasCoaches">
                <CoachItem
                    v-for="coach in filteredCoaches"
                    :key="coach.id"
                    :coach="coach"
                />
            </ul>
            <h3 v-else>No coaches found.</h3>
            <!-- <span>Coach List</span> -->
        </base-card>
    </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
    components: {
        CoachItem,
        CoachFilter,
    },
    data() {
        return {
            isLoading: false,
            error: null,
            activeFilters: {
                frontend: true,
                backend: true,
                career: true,
            },
        };
    },
    computed: {
        filteredCoaches() {
            const allCoaches = this.$store.getters['coaches/coaches'];
            return allCoaches.filter((coach) =>
                coach.areas.some((area) =>
                    Object.keys(this.activeFilters)
                        .filter((key) => this.activeFilters[key])
                        .includes(area),
                ),
            );
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches'];
        },
        isCoach() {
            return this.$store.getters['coaches/isCoach'];
        },
    },
    methods: {
        setFilters(filters) {
            this.activeFilters = filters;
        },
        loadCoaches() {
            this.isLoading = true;
            this.$store
                .dispatch('coaches/loadCoaches')
                .catch((err) => {
                    this.error = err;
                })
                .finally(() => {
                    this.isLoading = false;
                });
        },
        clearError() {
            this.error = null;
        },
    },
    mounted() {
        this.loadCoaches();
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
