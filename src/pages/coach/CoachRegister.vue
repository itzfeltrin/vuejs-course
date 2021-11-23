<template>
    <section>
        <base-card>
            <h2>Register as a coach now!</h2>
            <CoachForm @on-submit="onSubmit" />
        </base-card>
    </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
    components: {
        CoachForm,
    },
    methods: {
        onSubmit(formData) {
            this.$store.dispatch('coaches/addCoach', formData);
            this.$router.push('/coaches');
        },
    },
};
</script>
