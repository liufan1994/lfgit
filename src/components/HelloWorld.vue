<template>
    <div class="hello_world">
        <div>这里是liufan的git {{ isLoginCom }}</div>
        <div class="my_style" @click="my_function">点我 {{total}} </div>
        <el-button>t6bgbh hb</el-button>
    </div>
</template>

<script>
import { heros } from '../apis/home'
export default {
    name: 'hello_world',
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
        async my_function(){
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
.hello_world{
    display: flex;
    flex-direction: column;
    align-items: center;
    .my_style{
        color: #3399ff;
        cursor: pointer;
    }
}
</style>
