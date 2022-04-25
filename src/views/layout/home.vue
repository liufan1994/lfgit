<template>
    <div class="home">
        <img alt="Vue logo" src="@/assets/commom/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <myHome />
    </div>
</template>

<script>
    // import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'Home',
        components: {
            // HelloWorld,
        },
    }
</script>
<style lang="scss" scoped>
.home{
}
</style>
