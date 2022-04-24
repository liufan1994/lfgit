<template>
    <div class="myHome">
        <div>{{ isLoginCom }}</div>
    </div>
</template>

<script>
export default {
    name: 'myHome',
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
.myHome{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
