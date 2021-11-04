<template>
    <base-card>
        <base-button
            @click="changeSelected('stored-resources')"
            :mode="getButtonMode('stored-resources')"
            >Stored Resources</base-button
        >
        <base-button
            @click="changeSelected('add-resource')"
            :mode="getButtonMode('add-resource')"
            >Add Resource</base-button
        >
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
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
    methods: {
        changeSelected(tab) {
            this.selectedTab = tab;
        },
        getButtonMode(tab) {
            return this.selectedTab === tab ? null : 'flat';
        },
        addNewResource(newResource) {
            const obj = {
                id: new Date().toISOString(),
                ...newResource,
            };
            this.resources.unshift(obj);
            this.selectedTab = 'stored-resources';
        },
        removeResource(resourceId) {
            console.log(resourceId);
            this.resources = [];
        },
    },
    provide() {
        return {
            resources: this.resources,
            addNewResource: this.addNewResource,
            removeResource: this.removeResource,
        };
    },
};
</script>
