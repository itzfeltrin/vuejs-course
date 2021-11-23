<template>
    <base-card>
        <h2>Find Your Coach</h2>
        <span class="filter-option">
            <input
                type="checkbox"
                name="frontend"
                id="frontend"
                :checked="activeFilters.frontend"
                @change="changeFilter"
            />
            <label for="frontend">Frontend</label>
        </span>
        <span class="filter-option">
            <input
                type="checkbox"
                name="backend"
                id="backend"
                :checked="activeFilters.backend"
                @change="changeFilter"
            />
            <label for="backend">Backend</label>
        </span>
        <span class="filter-option">
            <input
                type="checkbox"
                name="career"
                id="career"
                :checked="activeFilters.career"
                @change="changeFilter"
            />
            <label for="career">Career</label>
        </span>
    </base-card>
</template>

<script>
export default {
    props: ['active-filters'],
    emits: ['change-filter'],
    methods: {
        changeFilter(event) {
            const filterId = event.target.id;
            const isChecked = event.target.checked;
            const newFilters = {
                ...this.activeFilters,
                [filterId]: isChecked,
            };
            this.$emit('change-filter', newFilters);
        },
    },
};
</script>

<style scoped>
h2 {
    margin: 0.5rem 0;
}
.filter-option {
    margin-right: 1rem;
}
.filter-option label,
.filter-option input {
    vertical-align: middle;
}
.filter-option label {
    margin-left: 0.25rem;
}
.filter-option.active label {
    font-weight: bold;
}
</style>
