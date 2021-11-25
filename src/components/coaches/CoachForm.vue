<template>
    <form @submit.prevent="submitForm">
        <div class="form-control" :class="{ invalid: errors.firstName }">
            <label for="firstName">First Name</label>
            <input
                type="text"
                name="firstName"
                id="firstName"
                v-model.trim="form.firstName"
            />
        </div>
        <div class="form-control" :class="{ invalid: errors.lastName }">
            <label for="lastName">Last Name</label>
            <input
                type="text"
                name="lastName"
                id="lastName"
                v-model.trim="form.lastName"
            />
        </div>
        <div class="form-control" :class="{ invalid: errors.description }">
            <label for="description">Description</label>
            <input
                name="description"
                id="description"
                v-model.trim="form.description"
                rows="5"
            />
        </div>
        <div class="form-control" :class="{ invalid: errors.hourlyRate }">
            <label for="hourlyRate">Hourly Rate</label>
            <input
                type="number"
                name="hourlyRate"
                id="hourlyRate"
                v-model.number="form.hourlyRate"
            />
        </div>
        <div class="form-control" :class="{ invalid: errors.areas }">
            <h3>Areas of Expertise</h3>
            <div>
                <input
                    type="checkbox"
                    name="frontend"
                    id="frontend"
                    value="frontend"
                    v-model="form.areas"
                />
                <label for="frontend">Frontend Development</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    name="backend"
                    id="backend"
                    value="backend"
                    v-model="form.areas"
                />
                <label for="backend">Backend Development</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    name="career"
                    id="career"
                    value="career"
                    v-model="form.areas"
                />
                <label for="career">Career Development</label>
            </div>
        </div>
        <base-button type="submit">Register</base-button>
    </form>
</template>

<script>
import * as yup from 'yup';

const initialValues = {
    firstName: '',
    lastName: '',
    description: '',
    hourlyRate: 0,
    areas: [],
};

const initialErrors = {
    firstName: null,
    lastName: null,
    description: null,
    hourlyRate: null,
    areas: null,
};

const formSchema = yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    description: yup.string().required('Description is required'),
    hourlyRate: yup
        .number()
        .required('Hourly rate is required')
        .min(0, "Hourly rate shouldn't be negative"),
    areas: yup.array().min(1, 'At least one area of expertise is required'),
});

export default {
    emits: ['on-submit'],
    data() {
        return {
            form: { ...initialValues },
            errors: { ...initialErrors },
        };
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
        submitForm: async function () {
            const isValid = await this.validateForm();

            if (isValid) {
                this.$emit('on-submit', this.form);
                this.form = { ...initialValues };
            }
        },
    },
};
</script>

<style scoped>
.form-control {
    margin: 0.5rem 0;
}
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}
input[type='checkbox'] + label {
    font-weight: normal;
    display: inline;
    margin: 0 0 0 0.5rem;
}
input,
textarea {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
}
input:focus,
textarea:focus {
    background-color: #f0e6fd;
    outline: none;
    border-color: #3d008d;
}
input[type='checkbox'] {
    display: inline;
    width: auto;
    border: none;
}
input[type='checkbox']:focus {
    outline: #3d008d solid 1px;
}
h3 {
    margin: 0.5rem 0;
    font-size: 1rem;
}
.invalid label {
    color: red;
}
.invalid input,
.invalid textarea {
    border: 1px solid red;
}
</style>
