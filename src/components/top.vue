<template>
  <div id="m-top">
    <div class="container">
            <a href="http://localhost:8080/found/tuijian"><h1 class="logo"  > 网易云音乐 </h1></a>
            <a href="#" class="f-music" :class="{'aaa':isactive1}" @click="bbb" >发现音乐<i :class="{bbb:isactive1}"></i></a>
            <a href="#" class="m-music" :class="{'aaa':isactive2}" @click="ccc" >我的音乐<i :class="{bbb:isactive2}"></i></a>
            <a href="#" class="friend" :class="{'aaa':isactive3}" @click="eee">朋友<i :class="{bbb:isactive3}"></i></a>
            <a href="#" class="mall" :class="{'aaa':isactive4}" @click="fff">商城<i :class="{bbb:isactive4}"></i></a>
            <a href="#" class="music-per" :class="{'aaa':isactive5}" @click="ggg">音乐人<i :class="{bbb:isactive5}"></i></a>
             
             <span class="login" @click="activelogin=false">登录</span>
             <button class="creator-center">创作者中心</button>
            <div class="search">
              <span class="icon">
              </span>
              <input type="text" placeholder="音乐/视频/电台/用户">
            </div>
           
            
    </div>
            <div class="ad-login" :class="{'dis-login':activelogin1}">
              <div class="top-bt" v-show="logorres">
                <span>登录</span>
                <i @click="activelogin=true;$store.commit('getdislogin1') ;threebianhuan=true"></i>
              </div>
              <div class="top-bt" v-show="!logorres">
                <span>注册</span>
                <i @click="activelogin=true;$store.commit('getdislogin1')"></i>
              </div>
              <div class="center-bt" v-show="threebianhuan">
                  <div class="img-center">

                  </div>
                  <button class="ip-login phone" @click="logorres=true;threebianhuan=false" >手机号登录</button>
                  <button class="ip-register phone" @click="logorres=false" >注册</button>
              </div>
                <div class="center-bt" v-show="!threebianhuan">
                  <div class="flex-input">
                    <input type="text" placeholder="请输入手机号" v-model="phonenumber" class="login-phone">
                    <input type="password" name="password" id="psd" v-model="psd" class="login-phone" placeholder="密码">
                    <div class="lgin-bt">
                      <input type="checkbox" checked="checked" class="j-auto u-auto">
                      <span> <a href="">自动登录</a> </span>
                      <span class="fl-right">  <a href=""> 忘记密码?</a></span>
                    </div>
                    <div class="lgin-bt">
                        <button class="login-button" @click="login">登录</button>
                    </div>
                  </div>

              </div>
            </div>


  </div>
</template>


<script>
import axios from "../axios/index";
export default {
methods:{
  bbb(){
this.$router.push('/found')
  },
  ccc(){
   this.$router.push('/my')
  },
  eee(){
    this.$router.push('/friend')
  },
  fff(){
    this.$router.push('/mall')
  },
  ggg(){
    this.$router.push('/musicmaker')
  },
  login(){
      axios.post('/login/cellphone'+
          '?phone='+this.phonenumber+'&password='+this.psd
      ).then(res=>{
        console.log(res)
        console.log(this.phonenumber)
      }).catch(()=>{
        alert('密码错误或者手机号错误')
      })
  }

},
data(){
  return{
         path1:'/found',
         path2:"/my",
         path3:"/friend",
         path4:"/mall",
         path5:"/musicmaker",
         activelogin:true,
         logorres:true,
         phonenumber:'',
         psd:'',
         threebianhuan:true
  }
},
computed:{
    isactive1(){
           return this.$route.path.indexOf(this.path1) !== -1
    },
        isactive2(){
           return this.$route.path.indexOf(this.path2) !== -1
    } ,isactive3(){
           return this.$route.path.indexOf(this.path3) !== -1
    }, isactive4(){
           return this.$route.path.indexOf(this.path4) !== -1
    }, isactive5(){
           return this.$route.path.indexOf(this.path5) !== -1
    },activelogin1(){
      if(this.activelogin==false){
        return false
      }
      else if(this.$store.state.dislogin==false){
        return false
      }
      
      return true;
    }
}
}
</script>


<style lang="scss" scoped>
#m-top{
  width: 100%;
  height: 70px;
  background: #242424;
  border-bottom: 1px solid #000;
  .container{
    width: 1100px;
    height: 100%;
    margin: 0 auto;
    a{
      float: left;
    }
    .logo{
      background-color: #242424 !important ;
        text-indent: -9999px;
        width: 176px;
        height: 69px;
        background-position: 0 0;
        background-image: url(https://s2.music.126.net/style/web2/img/frame/topbar.png?9b528603d857ad407d025db3606eeb9b);
    }
    a{
    position: relative;
       background-color: #242424;
    text-decoration: none;
    color: #fff;
    font-size: 14px;
    line-height: 70px;
    text-align: center;
    &:hover{
      background-color: black;
    }
    }
    .f-music,.m-music{
        display: block;
        width: 94px;
        i{
          left: 43px;
        }
    }
        .friend,.mall{
        display: block;
        width: 66px;
        i{
          left: 30px;
        }
    }
    .music-per{
            display: block;
            width: 80px;
             i{
          left: 37px;
        }
    }
    .aaa{
  background-color: #000 !important;
}

input{
  width: 115px;
  height: 16px;
  border: none ;
  outline: none;
  margin-left:25px ;
  margin-top: 8px;
  &::placeholder{
    font-size: 12px;
  }
}
.search{
  width: 158px;
  height: 32px;
  border-radius:32px;

  margin-top: 23px;
  background-color: white;
}
.icon{
  width: 25px;
  height: 32px;
  position: absolute;
  background-position: 0 -99px;
  background-image: url(https://s2.music.126.net/style/web2/img/frame/topbar.png?9b528603d857ad407d025db3606eeb9b);
}
.login,.creator-center,.search{
  float: right;
}
.login{
  margin-left: 10px;
  color: #787878;
  font-size: 12px;
  cursor: pointer;
  margin-top: 30px;
}
.creator-center{
  border: none;
  outline: none;
  width: 90px;
    height: 32px;

  background-color: transparent;
  color: #fff;
  border: 1px solid #4F4F4F;
  border-radius: 32px;
      margin-top: 23px;
      margin-left: 10px;
  &:hover{
    border: 1px solid #fff;
  }
}

i{
  position: absolute;
  // left: -30px;
  bottom: -1px;
    width: 0;
    height: 0;
    border: 6px solid;
    border-color: transparent transparent #C20C0C;
    display: none;
}
.bbb{
  display: block;
}
  }
.ad-login{
  width: 530px;
  height: 371px;
  position: absolute;
  left: 50%;
  top: 200px;
  z-index: 9998;
  transform: translate(-50%);
  // display: none;

  .top-bt{
    width: 530px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #2d2d2d;
    color: #fff;
    font-size: 14px;
    border-bottom: 1px solid #191919;
    border-radius: 4px 4px 0 0;
    
    i{  display: inline-block;
        width: 30px;
        height: 38px;
        background: url(https://s2.music.126.net/style/web2/img/layer/layer.png?e40c3fcb305c3362290ebee48511e41d) ;
        background-position :10px -194px;
        position: absolute;
        right: 0px;
        cursor: pointer;
    }
  }
  .center-bt{
    width: 528px;
    height: 330px;
    background: #fff;
    border: 1px solid #878787;
    
    .img-center{
      margin-top: 50px;
      margin-left: 135px;
      display: inline-block;
      width: 224px;
      height: 120px;

      
      span{
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        font-size: 14px;
      }
      background: url(https://s2.music.126.net/style/web2/img/platform.png?fa4029486c509799aeebc858a3e50390) 13px 0;

    }
    .phone{
      margin:  0 auto;
      display: block;
      width: 220px;
      height: 31px;
      color: #fff;

    }
    .ip-login{
      list-style: none;
      border: none;
      cursor: pointer;
      background: url(https://s2.music.126.net/style/web2/img/button2.png?b49265005e38a8363666c36479a08e6f);
      background-position: 0 -387px;
    }
    .ip-register{
      background: url(https://s2.music.126.net/style/web2/img/button2.png?b49265005e38a8363666c36479a08e6f);
      background-position: 0 -59px;
      color: black;
      list-style: none;
      border: none;
    }
  }

}

  }
  .dis-login{
    display: none;
  }
.login-phone{
  display: block;
  width: 206px;
  height: 25px;
  margin-bottom: 5px;
   border: 1px  #cdcdcd solid;
}

.flex-input{
  width: 300px;
  height: 200px;
  position: absolute;
  transform: translate(-50%,-50%);
  left: 50%;
  top:50%;
  display: flex;
  justify-content:center;
  align-content: center;
  flex-wrap: wrap;
 
}
.lgin-bt{
  width: 206px;
  height: 25px;
  margin-bottom: 5px;
  input{
      border: 1px  #cdcdcd solid;
  }
  span{
    font-size: 12px;
  }
  .fl-right{
    float: right;
  }
}
.login-button{
  width: 100%;
  height: 100%;
  background: url(https://s2.music.126.net/style/web2/img/button2.png?b49265005e38a8363666c36479a08e6f);
  background-position: 0 -387px;
  border: none;
}
</style>

