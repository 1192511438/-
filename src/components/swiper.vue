<template>
    <div id="swiper" class="bgimg" :style="{backgroundImage:'linear-gradient(45deg,rgba(254,172,94,0.5),rgba(199,121,208,0.5),rgba(75,192,200,0.5))'}">
        <div id="swiper-all">
              <ul id="zindex-tran">
               <li v-for="(item,index) in url" :key="index" class="zindex-tran" >
                   <img :src="item.imageUrl" alt="" class="show-img "  :class="{'img1':!isactive1[index],'img2':ocanimation[index]}">
               </li>
         </ul>
        <span class="pi-span">
            <i class="pi-img-lunbo aaa"  @click="toggle(0)"  v-if="isactive1[0]"></i>
            <i class="pi-img-lunbo aaa imglunbo"  @click="toggle(0)"  v-else></i>
            <i class="pi-img-lunbo aaa"  @click="toggle(1)"  v-if="isactive1[1]"></i>
            <i class="pi-img-lunbo aaa imglunbo"  @click="toggle(1)"  v-else></i>
                        <i class="pi-img-lunbo aaa"  @click="toggle(2)"  v-if="isactive1[2]"></i>
            <i class="pi-img-lunbo aaa imglunbo"  @click="toggle(2)"  v-else></i>
                        <i class="pi-img-lunbo aaa"  @click="toggle(3)"  v-if="isactive1[3]"></i>
            <i class="pi-img-lunbo aaa imglunbo"  @click="toggle(3)"  v-else></i>
                        <i class="pi-img-lunbo aaa"  @click="toggle(4)"  v-if="isactive1[4]"></i>
            <i class="pi-img-lunbo aaa imglunbo"  @click="toggle(4)"  v-else></i>
                        <i class="pi-img-lunbo aaa"  @click="toggle(5)"  v-if="isactive1[5]"></i>
            <i class="pi-img-lunbo aaa imglunbo" @click="toggle(5)"  v-else></i>
                        <i class="pi-img-lunbo aaa"  @click="toggle(6)"  v-if="isactive1[6]"></i>
            <i class="pi-img-lunbo aaa imglunbo"  @click="toggle(6)"  v-else></i>
                                    <i class="pi-img-lunbo aaa"  @click="toggle(7)"  v-if="isactive1[7]"></i>
            <i class="pi-img-lunbo aaa imglunbo"  @click="toggle(7)"  v-else></i>
                                    <i class="pi-img-lunbo aaa"  @click="toggle(8)"  v-if="isactive1[8]"></i>
            <i class="pi-img-lunbo aaa imglunbo"  @click="toggle(8)"  v-else></i>

             
                     

         </span> 
         <span class="arr-lr">
            <a href="#" class="arrl arr" @click="pre"></a>
            <a href="#" class="arrr arr" @click="next"></a>
         </span>
        </div>
       
    </div>
</template>

<script>
import axios from "../axios/index";
export default {
    data(){
        return{
             isactive1:[false,true,true,true,true,true,true,true,true],
             ocanimation:[false,false,false,false,false,false,false,false,false],
            url:[],
            
        }
    },
    methods:{
        toggle(index){
                for(let i=0; i<9;i++){
                    this.$set(this.isactive1,i,true)
                }

             this.$set(this.isactive1,index,false)
             this.$set(this.ocanimation,index,true)
        },next(){
            for(let j=0; j<9;j++){
                if(this.isactive1[j]===false){
                 var a=j;
                }
            }
            if(a===8){
                        this.$set(this.isactive1,0,false);
                        this.$set(this.isactive1,8,true); 
                        this.$set(this.ocanimation,8,true); 
            }else{
                    this.$set(this.isactive1,a,true);
                    this.$set(this.isactive1,a+1,false);
                    this.$set(this.ocanimation,a,true); 
            }

        },
            pre(){
                for(let i=0; i<9;i++){
                if(this.isactive1[i]===false){
                    var b=i;
                                            }
                                        }
                
             if(b===0){
                        this.$set(this.isactive1,8,false);
                        this.$set(this.isactive1,0,true); 
                        this.$set(this.ocanimation,0,true); 
            }else{
                    this.$set(this.isactive1,b,true);
                    this.$set(this.isactive1,b-1,false);
                    this.$set(this.ocanimation,b,true);
            }
                }
    },
    computed:{    

    }
    ,
    created(){
        axios.get('/banner?type=0').then(res=>{
            this.url=res.data.banners;
            // this.titleColor=res.data.
        })
    },
    mounted(){
        var _this=this;
        this.time=  setInterval(function(){_this.next()},5000);
       
     },   
      beforeDestroy() {
      clearInterval(this.time);
    }
}
</script>

<style lang="scss" scoped>

#swiper{

    #swiper-all{
        width: 100%;
        height: 285px;
        position: relative;
    }
    width: 100%;
    height: 285px;
    .zindex-tran{
        display: block;
       width: 100%;
       img{display: block;
            width: 730px;
            height: 285px;
            position: absolute;
            left: 50%;
            transform: translate(-50%,0);
        }
        .img1{
            z-index: 10;
             animation:   picDraw 0.7s ease;
        }
        .img2{
            animation: picDrawno 0.7 ease ;
        }
    }
    .pi-span{
 width: 150px;
 height: 28px;
 position: absolute;
bottom: 10px;
  left: 50%;
 z-index: 1000;
 transform: translate(-50px,0);
 .imglunbo {
    background-color: red;
}
}
.pi-img-lunbo{
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: white;
    margin-right: 10px;
}

.arr{
    display: block;
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(https://s2.music.126.net/style/web2/img/index/banner.png?cc39644e904365bb8d4888d5508c289d);
}
.arrl{
    left: 20%;
    top: 40%;
    background-position: 0 -360px;
    &:hover{
        background-position: 0 -430px;
    }
}
.arrr{
    top: 40%;
    right: 20%;
    background-position: 0 -508px;
    &:hover{
        background-position: 0 -578px;
    }
}
.aaa{
    cursor: pointer;
}
}
</style>