<template>
    <div class="HelloWorld">
        <div>这里是liufan的git {{ isLoginCom }}</div>
        <div class="myStyle" @click="myFunction">点我 {{total}} </div>
    </div>
</template>

<script>
import { heros } from '../apis/home'
export default {
    name: 'HelloWorld',
    props: {
        msg: String,
    },
    data(){
        return{
            total:''
        }
    },
    computed:{
        isLoginCom () {
            return this.$store.getters.isLogin 
        },
    },
    created(){
    },
    methods:{
        async myFunction(){
            try {
                const res =await heros({
                    user_id: {},
                    page: 1,
                    pageSize: 1,
                    chain_type: 'bscscan'
                })
                this.total = res.body.total
            } catch (err) {
                console.log('err: ', err);
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.HelloWorld{
    display: flex;
    flex-direction: column;
    align-items: center;
    .myStyle{
        color: #3399ff;
        cursor: pointer;
    }
}
</style>
