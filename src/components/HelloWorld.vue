<template>
    <div class="hello">
        <div>lfgit就从这里开始吧</div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String,
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .hello {
        div {
            font-size: 20px;
            font-weight: bold;
        }
    }
</style>
