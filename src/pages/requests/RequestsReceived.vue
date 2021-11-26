<template>
    <base-dialog
        :show="Boolean(error)"
        title="An error ocurred!"
        @close="clearError"
    >
        <p>{{ error }}</p>
    </base-dialog>
    <section>
        <base-card>
            <header>
                <h2>Requests Received</h2>
            </header>
            <base-spinner v-if="isLoading"></base-spinner>
            <ul v-else-if="requests.length > 0">
                <RequestItem
                    v-for="request in requests"
                    :key="request.id"
                    :request="request"
                />
            </ul>
            <h3 v-else>You haven't received any requests yet!</h3>
        </base-card>
    </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';

export default {
    components: {
        RequestItem,
    },
    data() {
        return {
            isLoading: false,
            error: null,
        };
    },
    computed: {
        requests() {
            return this.$store.getters['requests/requests'];
        },
    },
    methods: {
        async loadRequests() {
            this.isLoading = true;
            this.$store
                .dispatch('requests/loadRequests')
                .catch((err) => {
                    this.error = err.message || 'Something failed';
                })
                .finally(() => {
                    this.isLoading = false;
                });
        },
        clearError() {
            this.error = null;
        },
    },
    created() {
        this.loadRequests();
    },
};
</script>

<style scoped>
header {
    text-align: center;
}
ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 30rem;
}
h3 {
    text-align: center;
}
</style>
