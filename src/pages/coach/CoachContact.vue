<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="email">Your E-Mail</label>
            <input
                type="email"
                name="email"
                id="email"
                v-model.trim="form.email"
                @blur="clearError('email')"
            />
        </div>
        <div class="form-control">
            <label for="message">Your Message</label>
            <textarea
                name="message"
                id="message"
                v-model.trim="form.message"
                @blur="clearError('message')"
                rows="5"
            ></textarea>
        </div>
        <div class="errors" v-if="!isFormValid">
            Please enter a valid email and non-empty message.
        </div>
        <div class="actions">
            <base-button>Send Message</base-button>
        </div>
    </form>
</template>

<script>
import * as yup from 'yup';

const initialValues = {
    email: '',
    message: '',
};

const initialErrors = {
    email: null,
    message: null,
};

const formSchema = yup.object({
    email: yup
        .string()
        .required('E-mail is required')
        .email('E-mail is invalid'),
    message: yup.string().required('Message is required'),
});

export default {
    data() {
        return {
            form: { ...initialValues },
            errors: { ...initialErrors },
        };
    },
    computed: {
        isFormValid() {
            return Object.values(this.errors).every((error) => error === null);
        },
    },
    methods: {
        async validateForm() {
            this.errors = { ...initialErrors };
            try {
                await formSchema.validate(this.form, { abortEarly: false });
                return true;
            } catch (err) {
                err.inner.forEach((error) => {
                    this.errors[error.path] = error.message;
                });
                return false;
            }
        },
        clearError(field) {
            this.errors[field] = null;
        },
        async submitForm() {
            const isValid = await this.validateForm();

            if (isValid) {
                this.$store.dispatch('requests/contactCoach', {
                    coachId: this.$route.params.id,
                    email: this.form.email,
                    message: this.form.message,
                });
                this.form = { ...initialValues };
            }
        },
    },
};
</script>

<style scoped>
form {
    margin: 1rem;
    border: 1px solid #ccc;
    border-radius: 12px;
    padding: 1rem;
}
.form-control {
    margin: 0.5rem 0;
}
label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
}
input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.15rem;
}
input:focus,
textarea:focus {
    border-color: #3d008d;
    background-color: #faf6ff;
    outline: none;
}
.errors {
    font-weight: bold;
    color: red;
}
.actions {
    text-align: center;
}
</style>
