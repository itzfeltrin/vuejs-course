<template>
    <base-card>
        <form @submit.prevent="handleSubmit">
            <div class="form-control">
                <label for="title">Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    v-model="newResource.title"
                    required
                />
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    rows="3"
                    v-model="newResource.description"
                    required
                ></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input
                    id="link"
                    name="link"
                    type="url"
                    v-model="newResource.link"
                    required
                />
            </div>
            <div>
                <base-button type="submit">Submit</base-button>
            </div>
        </form>
    </base-card>
</template>

<script>
const initialValues = {
    title: '',
    description: '',
    link: '',
};

export default {
    data() {
        return {
            newResource: {
                ...initialValues,
            },
        };
    },
    inject: ['addNewResource'],
    methods: {
        handleSubmit() {
            this.addNewResource(this.newResource);
            this.newResource = {
                ...initialValues,
            };
        },
    },
};
</script>

<style scoped>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}

.form-control {
    margin: 1rem 0;
}
</style>
