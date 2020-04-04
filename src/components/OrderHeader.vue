<template>
    <div class="component-order-header">
        <div class="container">
            <div class="header-logo">
                <a href="/#/index" class=""></a>
            </div>
            <div class="main">
                <h2>{{title}}</h2>
                <slot name="tip"></slot>
            </div>
            <div class="user">
                <div class="user-name" v-if="username">{{username}}</div>
                <div class="login" v-else><a href="/login">登录</a><span>|</span><a href="/login">注册</a></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'order-header',
        data(){
            return {
                
            }
        },
        props: {
            title: String
        },
        computed: {
            username(){
                // vuex：4.读取
                return this.$store.state.username
            },
        },
    }
</script>
<style lang="scss">
    @import './../assets/scss/mixin.scss';
    @import './../assets/scss/config.scss';

    .component-order-header{
        background-color: $colorG;
        .container{
            @include flex();
            position: relative;
            height: 102px;

            .main{
                flex: 1;
                text-align: left;
                h2{
                    display: inline-block;
                    margin-right: 10px;
                    font-size: 28px;
                    font-weight: normal;
                    line-height: 1em;
                    vertical-align: bottom;
                }
            }
            .user{
                .login{
                    a{
                        color: #757575;
                        vertical-align: middle;

                    }
                    span{
                        @include sepSpan(5px,#757575);
                        vertical-align: middle;
                    }
                }
            }
        }
    }
</style>