<template>
    <div class="my_home">
        <div>{{ isLoginCom }}</div>
    </div>
</template>

<script>
export default {
    name: 'my_home',
    props: {
        msg: String,
    },
    data(){
        return{}
    },
    computed:{
        isLoginCom () {
            return this.$store.getters.isLogin 
        },
    },
    created(){
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.my_home{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
