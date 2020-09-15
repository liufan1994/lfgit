<template>
    <div class="home">
        <div class="homeTop">
            <img alt="Vue logo" src="../assets/logo.png" />
            <HelloWorld msg="Welcome to Your Vue.js App" />
        </div>
        <div class="routerLink">
            <router-link class="type" to="/validation-rules">
                验证规则
            </router-link>
            <router-link class="type" to="/upload-files">
                上传文件
            </router-link>
        </div>
        <div class="routerLink">
            <div class="type shuaxin" @click="shuaxinFun">点击刷新</div>
            <div @click="daojishiFun">
                <div class="type shuaxin" v-if="daojishiShow">点击倒计时</div>
                <div class="type" v-else>{{ daojishi }}秒</div>
            </div>
        </div>
        <!-- 波浪线 -->
        <div class="wavySty"></div>
        <button class="example"></button>
        <div class="mytext">超过两行显示省略号，超过两行显示省略号超过两行显，示省略号超过两，示省略号dvdsdvsd。</div>
    </div>
</template>

<script>
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'Home',
        components: {
            HelloWorld,
        },
        data() {
            return {
                daojishiShow: true,
                daojishi: 10,
            }
        },
        methods: {
            // 点击刷新
            shuaxinFun() {
                // this.$router.go(0)
                location.reload()
            },
            // 点击倒计时
            daojishiFun() {
                this.daojishiShow = !this.daojishiShow
                let setInter = setInterval(() => {
                    this.daojishi--
                    if (this.daojishi === 0) {
                        this.daojishiShow = true
                        this.daojishi = 10
                        clearInterval(setInter)
                    }
                }, 1000)
            },
        },
    }
</script>
<style lang="scss" scoped>
    .home {
        width: 100%;
        height: 100%;
        text-align: center;
        .homeTop {
            margin-bottom: 40px;
        }
        .routerLink {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin: 20px 0;
            .type {
                margin: 0 20px;
            }
        }
        .shuaxin {
            margin-bottom: 20px;
            // 下划线
            text-decoration: underline;
            // 触摸手型
            cursor: pointer;
        }
        .wavySty {
            display: block;
            height: 0.5em;
            white-space: nowrap;
            letter-spacing: 80vw;
            padding-top: 0.5em;
            overflow: hidden;
            font-size: 16px;
            color: #e1e1e1;
        }
        .wavySty::before {
            content: '\2000\2000';
            /* IE浏览器实线代替 */
            text-decoration: overline;
            /* 现代浏览器 */
            text-decoration: overline wavy;
        }
        .example {
            width: 40px;
            height: 40px;
            border: 0;
            background: url('../assets/add.png') no-repeat center / 100% 100%;
            transition: background-image 0.4s;
        }
        .example:hover,
        .example:active {
            background-image: url('../assets/delete.png');
        }
        .mytext {
            width: 260px;
            text-align: justify; // 所有行两端对齐
            text-align-last: left;
        }
    }
</style>
