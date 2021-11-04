<template>
    <base-card>
        <base-button @click="changeSelected('stored-resources')"
            >Stored Resources</base-button
        >
        <base-button @click="changeSelected('add-resource')"
            >Add Resource</base-button
        >
    </base-card>
    <component :is="selectedTab"></component>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
    components: {
        'stored-resources': StoredResources,
        'add-resource': AddResource,
    },
    data() {
        return {
            selectedTab: 'stored-resources',
        };
    },
    methods: {
        changeSelected(tab) {
            this.selectedTab = tab;
        },
    },
    provide() {
        return {
            resources: [
                {
                    id: 1,
                    title: 'Official Guide',
                    description: 'The official Vue.js documentation',
                    link: 'https://vuejs.org',
                },
                {
                    id: 2,
                    title: 'Google',
                    description: 'Learn to google...',
                    link: 'https://google.com',
                },
            ],
        };
    },
};
</script>
