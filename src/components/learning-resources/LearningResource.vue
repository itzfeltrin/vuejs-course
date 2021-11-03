<template>
    <div>
        <header>
            <h3>{{ resource.title }}</h3>
            <button>
                <span>Delete</span>
            </button>
        </header>
        <p>{{ resource.description }}</p>
        <nav>
            <a :href="resource.link" target="_blank">View Resource</a>
        </nav>
    </div>
</template>

<script>
export default {
    props: ['resource'],
};
</script>
