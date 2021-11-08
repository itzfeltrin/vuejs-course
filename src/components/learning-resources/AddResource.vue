<template>
    <base-dialog v-if="isFormInvalid" @close="closeDialog">
        <template #default>
            <p>Unfortunately, at least one input value is invalid.</p>
            <p>Please correct the highlighted fields and try again.</p>
        </template>
        <template #actions>
            <base-button @click="closeDialog"> Okay </base-button>
        </template>
    </base-dialog>
    <base-card>
        <form @submit.prevent="handleSubmit">
            <div class="form-control">
                <label for="title">Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    v-model="newResource.title"
                />
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    rows="3"
                    v-model="newResource.description"
                ></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input
                    id="link"
                    name="link"
                    type="url"
                    v-model="newResource.link"
                />
            </div>
            <div>
                <base-button type="submit">Submit</base-button>
            </div>
        </form>
    </base-card>
</template>

<script>
import BaseDialog from '../UI/BaseDialog.vue';

const initialValues = {
    title: '',
    description: '',
    link: '',
};

export default {
    components: {
        BaseDialog,
    },
    data() {
        return {
            newResource: {
                ...initialValues,
            },
            isFormInvalid: false,
        };
    },
    inject: ['addNewResource'],
    methods: {
        handleSubmit() {
            let isFormInvalid = false;
            Object.keys(this.newResource).forEach((key) => {
                if (this.newResource[key] === '') {
                    isFormInvalid = true;
                }
            });

            if (isFormInvalid) {
                this.isFormInvalid = true;
                return;
            }
            this.addNewResource(this.newResource);
            this.newResource = {
                ...initialValues,
            };
        },
        closeDialog() {
            this.isFormInvalid = false;
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
