<template>
    <section>
        <h1>requests</h1>
        <ul>
            <li v-for="request in requests" :key="request.id">
                {{ JSON.stringify(request) }}
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    computed: {
        requests() {
            return this.$store.getters['requests/requests'];
        },
    },
};
</script>
