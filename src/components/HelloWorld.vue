<template>
    <div class="HelloWorld">
        <div>这里是liufan的git {{ isLoginCom }}</div>
        <div class="myStyle" @click="myFunction">点我 {{total}} </div>
        <el-button>t6bgbh hb</el-button>
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
        this.$message('这是一条消息提示')
    },
    methods:{
        async myFunction(){
            try {
                const res =await heros({},{
                    // headers:{"x-requested-with": "XMLHttpRequest"}
                })
                this.total = res.body.ban_ip
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
