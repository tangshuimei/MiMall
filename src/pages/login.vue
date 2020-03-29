<template>
    <div class="login">
        <div class="header">
            <div class="container">
                <div class="logo">
                    <a href="/">
                        <div class="img">
                            <img src="/imgs/login-logo.png" alt="">
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="banner">
            <div class="container">
                <form class="login-form">
                    <div class="form-header">
                        <a href="javascript:;" :class="loginType === 'qr'?'':'ac'" @click="changeLoginType">账号登陆</a>
                        <a href="javascript:;" :class="loginType === 'qr'?'ac':''" @click="changeLoginType('qr')">扫码登陆</a>
                    </div>
                    <div class="form-body">
                        <div v-if="loginType === 'qr'" class="qr-code">
                            <div class="img">
                                <!-- <img v-lazy="qrCodeImg" alt=""> -->
                                <img v-lazy="qrCodeImg" alt="">
                            </div>
                            <div :class="'tips-box ' + (qrcodeExpired ? 'expired':'')">
                                <p class="tips">{{qrcodeExpired ? 'QR code has expired' : 'QR code loading'}}</p>
                                <a href="javascript:;" @click="getQrCode" class="refresh-btn">refresh</a>
                            </div>
                            
                        </div>
                        <div v-else>
                            <input type="text" placeholder="邮箱/手机号码/小米ID" v-model="username" >
                            <input type="password" placeholder="密码" v-model="password">
                            <button class="btn" @click.prevent="login">登录</button>
                            <div class="other-pannel">
                                <p class="login-sns">
                                    <a href="javascript:;">手机短信登录/注册</a>
                                </p>
                                <p class="reg-forgetpsw">
                                    <a href="javascript:;" @click="register" class="reg">立即注册</a>
                                    <a href="">忘记密码？</a>
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
        <div class="footer">
            <div class="footer-nav">
                <a href="javascript:;">简体</a>
                <a href="javascript:;">繁体</a>
                <a href="javascript:;">English</a>
                <a href="javascript:;">常见问题</a>
                <a href="javascript:;">隐私政策</a>
            </div>
            <div>
                Xiaomi Inc., All rights reserved - Beijing ICP - 10046444 - <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020134">Beijing Public Security ICP-11010802020134</a>  - Beijing ICP licence No. - 110507
            </div>
        </div> 
    </div>
</template>
<script>
    export default {
        name: 'login',
        data(){
            return {
                loginType: '',
                qrCodeImg: '',
                username: '',
                password: '',
                userId: '', // 前后端通信需要凭证，一般是cookie，每次就把这个userId的cookie传给后端
                qrcodeExpired: false,

            }
        },
        updated () {
            let that = this
            setTimeout(function(){
                that.qrcodeExpired = true
            },4000)
        },
        methods: {
            changeLoginType(type){
                this.loginType = type || '';
                if(type === 'qr') this.getQrCode()
            },
            getQrCode(){
                let that = this 
                setTimeout(function(){
                    that.qrCodeImg = '/imgs/qrcode.png';
                },1000)
                this.qrcodeExpired = false
                
                // this.axios.get('').then((res)=>{
                //   this.qrCodeImg = res.img  
                // })
            },
            login(){
                let {username,password} = this
                this.axios.post('/user/login',{
                    username,
                    password
                }).then((res)=>{
                    this.$cookie.set('userId',res.id,{expires: '1M'});
                    // 跳转的时候把数据带过去，要用vuex后期补上
                    // vuex：1.dispatch派发（触发）action
                    this.$store.dispatch('saveUserName',res.username);
                    this.$router.push('/index');
                }).catch((error)=>{
                    console.log(1)
                    console.log(error)
                })
            },
            register(){
                this.axios.post('/user/register',{
                    username:'tangshuimei',
                    password: '1',
                    email: 'tangshuimei@163.com'
                }).then(()=>{
                    // 后期会加elementUI弹出
                    alert('注册成功')
                })
            }
            
        }
    }
</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
    .login{
        .header{
            .logo{
                .img{
                    width: 200px;
                    height: 98px;
                    img{
                        width: 100%;
                    }
                }
            }
        }
        .banner{
            position: relative;
            width: 100%;
            height: 588px;
            background: url('/imgs/login-banner.jpg') no-repeat center;
            .login-form{
                position: absolute;
                top: 60px;
                right: 106px;
                width: 410px;
                padding: 0 31px 20px;
                background-color: $colorG;
                box-sizing: border-box;
                .form-header{
                    a{
                        display: inline-block;
                        width: 50%;
                        padding: 27px 0;
                        color: $colorB;
                        font-size: 24px;
                        text-align: center;
                        box-sizing: border-box;
                        &.ac{
                            color: $colorA;
                        }
                        @include sepTransform(24px,#e0e0e0);
                    }
                }
                .form-body{
                    .qr-code{
                        position: relative;
                        width: 180px;
                        height: 180px;
                        margin: 0 auto;
                        .img{
                            position: relative;
                            width: 100%;
                            height: 100%;
                            z-index: 10;
                            img{
                                position: relative;
                                width: 100%;
                                height: 100%;
                                z-index: 10;
                            }
                        }
                        .tips-box{
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 100%;
                            height: 100%;
                            background: rgba(0,0,0,.3);
                            z-index: 1;
                            .refresh-btn{
                                display: none;
                                width: 100px;
                                height: 30px;
                                margin: 0 auto;
                                color: $colorG;
                                font-size: 14px;
                                text-align: center;
                                line-height: 30px;
                                background-color: $colorA;
                                border-radius: 5px;
                            }
                            .tips{
                                position: absolute;
                                left: 0;
                                bottom: 0;
                                width: 100%;
                                padding-top: 40px;
                                margin-bottom: 10px;
                                color: $colorG;
                                font-size: $fontE;
                                line-height: $fontE;
                                text-align: center;
                            }
                            &.expired{
                                background: rgba(0,0,0,.7);
                                z-index: 20;
                                .refresh-btn{ 
                                    display: block;
                                }
                                .tips{
                                    position: relative;
                                }
                            }
                        }
                        
                    }
                    input{
                        display: block;
                        width: 100%;
                        margin-bottom: 20px;
                        padding: 13px;
                        line-height: 18px;
                        border: 1px solid #e0e0e0;
                    }
                    button{
                        display: block;
                        width: 100%;
                        line-height: 50px;
                        margin: 10px auto 8px;
                    }
                    .other-pannel{
                        @include flex();
                        .login-sns{
                            a{
                                color: $colorA;
                            }
                        }
                        .reg-forgetpsw{
                            a{
                                @include sepTransform(12px,$colorD);
                                color: $colorD;
                                &.reg{
                                    padding-right: 6px;
                                    margin-right: 4px;
                                }
                            }

                        }
                    }
                }
            }
        }
        .footer{
            padding: 20px 0;
            a{
                color: $colorG;
            }
        }
    }
</style>