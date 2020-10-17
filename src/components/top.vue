<template>
  <div id="m-top">
    <div class="container">
            <a href="http://localhost:8080/found/tuijian"><h1 class="logo"  > 网易云音乐 </h1></a>
            <a href="#" class="f-music" :class="{'aaa':isactive1}" @click="bbb" >发现音乐<i :class="{bbb:isactive1}"></i></a>
            <a href="#" class="m-music" :class="{'aaa':isactive2}" @click="ccc" >我的音乐<i :class="{bbb:isactive2}"></i></a>
            <a href="#" class="friend" :class="{'aaa':isactive3}" @click="eee">朋友<i :class="{bbb:isactive3}"></i></a>
            <a href="#" class="mall" :class="{'aaa':isactive4}" @click="fff">商城<i :class="{bbb:isactive4}"></i></a>
            <a href="#" class="music-per" :class="{'aaa':isactive5}" @click="ggg">音乐人<i :class="{bbb:isactive5}"></i></a>
             
             <span class="login">登录</span>
             <button class="creator-center">创作者中心</button>
            <div class="search">
              <span class="icon">
              </span>
              <input type="text" placeholder="音乐/视频/电台/用户">
            </div>
           
            
    </div>


  </div>
</template>


<script>
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
  }
},
data(){
  return{
         path1:'/found',
         path2:"/my",
         path3:"/friend",
         path4:"/mall",
         path5:"/musicmaker",
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
    },
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
  }


</style>

