<template>
<div id="found">
   <div class="g_nav">
 <div class="wrap">
<ul>

    <li class="aa0"> <a  class="message" :class="{'active':isactive[0]}" @click="bbb('/found/tuijian',0)">{{message[0]}}</a></li>
    <li class="aa1"> <a  class="message" :class="{'active':isactive[1]}" @click="bbb('/found/paihang',1)">{{message[1]}}</a></li>
    <li class="aa2"> <a  class="message" :class="{'active':isactive[2]}" @click="bbb('/found/gedan',2)">{{message[2]}}</a></li>
    <li class="aa3"> <a  class="message" :class="{'active':isactive[3]}" @click="bbb('/found/diantai',3)">{{message[3]}}</a></li>
    <li class="aa4"> <a  class="message" :class="{'active':isactive[4]}" @click="bbb('/found/geshou',4)">{{message[4]}}</a></li>
    <li class="aa5"> <a  class="message" :class="{'active':isactive[5]}" @click="bbb('/found/xindie',5)">{{message[5]}}</a></li>


</ul>
        
 </div>

   </div>
   <keep-alive><router-view/></keep-alive>
   


</div>

</template>

<script>

export default {
    data(){
        return{
            message:['推荐','排行榜','歌单','主播电台','歌手','新碟上架'],
            isactive: [true,false,false,false,false,false]
        }
    },methods:{
        bbb(url,index){
            for(var i=0;i<=5;i++){
                this.isactive[i]=false;
            }
            this.isactive[index]=this.isactive[index]?  true:true;
            this.$router.push(url)
        }
    },
    created(){
    }
}
</script>
<style lang="scss" scoped>

#found{
    width: 100%;
    li{
        float: left;
        width: 70px;
        font-size: 12px;
        a{
        color: #ffffff;
        line-height: 20px;
        text-align: center;
        cursor: pointer;
        }

    }
    .aa0{
        padding-left: 30px;
    }

    .aa1{
        padding-left: 20px;
    }
    .aa2{
        padding-left: 25px;
    }
    .aa3{
        padding-left: 5px;
    }
    .aa4{
        padding-left: 30px;
    }
    .aa5{
        padding-left: 25px;
    }
    .message{
        display: block;
        height: 20px;
        // border-radius: 20px;
        // background-color: #9b0909;
        margin-top: 7px;
        width: 60px;
    }
    .active{        border-radius: 20px;
        background-color: #9b0909;}
    ul{
        margin-left: 180px;
    }
    .g_nav{
height: 35px;
background-color:#C20C0C;
    }
    .wrap{
        width: 1100px;
        height: 34px;
        margin: 0 auto;
    }
}
</style>