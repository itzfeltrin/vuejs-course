<template>
    <li>
        <h2>{{ friend.name }} {{ friend.isFavorite ? '(Favorite)' : '' }}</h2>
        <button @click="toggleDetails">
            {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
        </button>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <ul v-if="detailsAreVisible">
            <li>
                <strong>Phone:</strong>
                {{ friend.phone }}
            </li>
            <li>
                <strong>Email:</strong>
                {{ friend.email }}
            </li>
        </ul>
        <button @click="$emit('remove-friend', friend.id)">Remove</button>
    </li>
</template>

<script>
export default {
    props: ['friend'],
    emits: ['toggle-favorite', 'remove-friend'],
    data() {
        return {
            detailsAreVisible: false,
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavorite() {
            this.$emit('toggle-favorite', this.friend.id);
        },
    },
};
</script>
