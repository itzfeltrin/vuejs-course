<template>
    <div>
        <TheHeader />
        <!-- <BadgeList />
        <UserInfo
            :full-name="activeUser.name"
            :info-text="activeUser.description"
            :role="activeUser.role"
        /> -->
        <button @click="changeSelectedComponent('active-goals')">
            Active Goals
        </button>
        <button @click="changeSelectedComponent('manage-goals')">
            Manage Goals
        </button>
        <component :is="selectedComponent"></component>
    </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
    components: {
        TheHeader,
        // BadgeList,
        // UserInfo,
        ActiveGoals,
        ManageGoals,
    },
    data() {
        return {
            selectedComponent: 'active-goals',
            // activeUser: {
            //     name: 'Maximilian Schwarzmüller',
            //     description: 'Site owner and admin',
            //     role: 'admin',
            // },
        };
    },
    methods: {
        changeSelectedComponent(comp) {
            this.selectedComponent = comp;
        },
    },
};
</script>

<style>
html {
    font-family: sans-serif;
}

body {
    margin: 0;
}
</style>
