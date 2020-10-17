<template>
<div id="audio" >
    <div class="wrap">
        <div class="btns">
            <a href="#" class='prv' title="上一首"></a>
            <a href="#" class="play1" title='播放' @click='bofang' v-if="playclick1"></a>
            <a href="#" class="play2" title='暂停' @click='zanting' v-else></a>
            <a href="#" class="next" title="下一首"></a>
            <audio  ref="myAudio"  @canplay='getduration'
            :src="songurl()">
            </audio>

        </div>
        <div class="img">
         <img :src="aaa" alt="" v-if="$store.state.imgurl!=null">
        </div>
        <div class="play" ref="auto">
               <a href="#" >{{$store.state.name}}</a> 
               <span href="#" class='blank'>{{$store.state.author}}</span>
               <div class="auto-time" >
                   <div class="cur" :style="{'width':getwidth+'%'}"></div>
                   <div class="auto-scroll" :style="{'left':getleft+'px'}" @mousedown="move" ref="mov"></div>
               </div>
               <div class="songtime">
                <span>
                    {{currenttime}}
                </span>
                / 
                {{getfenmiao}}
               </div>
         </div>
         <div class="right-list">
                    <div class="barbg" :style="{'display':display}" ref="volauto">
                        <span class="aut-vol"   @mousedown="volmove" ref="volmov"></span>
                        <div class="red-bar" :style="{'height':getvolheight+'px'}"></div>
                     </div>
                    <a class='icn-vol btns' @click="vol" ></a>
                    <a href="" class="btns icn-xh"></a>
                    <a href="" class="btns allsongs"></a>
         </div>
        
    </div>

</div>

</template>

<script>
export default {
       created(){



       }
    ,mounted(){
        var _this =this
        
        this.check=setInterval(function(){
                if(_this.currentime>Math.floor(_this.time)){
                let audio =_this.$refs.myAudio;//获取audio
                audio.load();
                 _this.currentime=0;
                _this.playclick=true            //当歌曲时间完毕，箭头变成播放 播放时间变为0
                clearInterval(_this.zzz); //当播放时间等于歌曲时间，返回播放按钮
                }
            
            if(_this.$store.state.playclick==true){
                clearInterval(_this.zzz); //当播放时间等于歌曲时间，返回播放按钮
              _this.currentime=0;//时间变成0
          }

        },100)

    },      beforeDestroy() {
      clearInterval(this.check);
    }
    ,
    data(){
        return{
            time:null,
            playclick:true,
            currentime:0,
            display:'none',
            movvol: 0.3                                     
        }
    },
    methods:{
        bofang(){
                var _this=this
                this.$store.commit('getplayclick',false)//把vuex里面控制播放的按键改为false，这样就不会一直是播放按钮
                        if(!this.$store.state.songurl&&!this.aaa)
                            {
                                alert('没有音乐要播放,请加入音乐');
                                return
                            }
                            else if(!this.$store.state.songurl&&this.aaa){
                                alert('对不起，音乐暂时无法播放，没有版权')
                            }
                    this.zzz=setInterval(function(){
                    _this.currentime++},1000)
                   this.playclick=false//切换暂停和播放
                    let audio =this.$refs.myAudio;//获取audio

                audio.play()
            //  console.log(audio.currentTime)
            // console.log(audio.duration)
        },zanting(){
                clearInterval(this.zzz);//暂停播放的时间
                let audio =this.$refs.myAudio;//获取audio
                this.playclick=true//切换暂停和播放
                audio.pause()

        },
        getduration(){
                let audio =this.$refs.myAudio;
                //  console.log(audio.duration)
                this.time=audio.duration
        },
        songurl(){                   //获取audio src  
            return this.$store.state.songurl
        },move(event){
            let mov =this.$refs.mov;//本身元素
            let auto =this.$refs.auto;//父元素为了在父元素移动
            var divx= event.clientX-mov.offsetLeft; //获取鼠标位置减去原来位置的距离
            var divy= event.clientY-mov.offsetTop;
            //console.log(mov.offsetTop)
            //console.log(divy)
           // console.log(mov.offsetLeft) //相对于父元素的左面距离
            //console.log(event.clientY)//鼠标y轴
             var _this=this
            auto.onmousemove=function(ev){      //鼠标在父元素内移动
               var  L=ev.clientX-divx
               var T=ev.clientY-divy
               if(L<0){
                   L=0;
                auto.onmousemove=null
                auto.onmovedown=null
               }else if(L>471){
                   L=471
                auto.onmousemove=null
                auto.onmovedown=null
               }
               if(T<-30){
                auto.onmousemove=null
                auto.onmovedown=null 
               }
                  
                 mov.style.left=L+'px';
                 _this.currentime=L/471*_this.time
                  _this.$store.commit('getplayclick',false)
                 return false;

            }
            auto.onmouseup=function(){
                var audio =_this.$refs.myAudio; //获得audio标签
                // console.log(_this.currentime)
                audio.currentTime=_this.currentime //current==当前播放时间
                auto.onmousemove=null
                auto.onmovedown=null
                auto.onmouseup=null
                return false
            }

        },volmove(){
           let mov =this.$refs.volmov;//本身元素
            let auto =this.$refs.volauto;//父元素为了在父元素移动
            var divx= event.clientX-mov.offsetLeft; //获取鼠标位置减去原来位置的距离
             var divy= event.clientY-mov.offsetTop;
            //  console.log(divy)
            var _this=this
            auto.onmousemove=function(ev){      //鼠标在父元素内移动
               var  L=ev.clientX-divx
                var T=ev.clientY-divy
            if(L>22){
                auto.onmousemove=null
                auto.onmovedown=null
            }else if(L<-9){
                auto.onmousemove=null
                auto.onmovedown=null
            }

            if(T<10){
                   T=10;
                   auto.onmousemove=null
                   auto.onmovedown=null
            }
            else if(T>100){
                T=100;
                   auto.onmousemove=null
                   auto.onmovedown=null
            }
                // console.log(T)
                 _this.movvol=(100-T)/90
                 mov.style.top=T+'px';
                 return false;
            }
            auto.onmouseup=function(){
                var audio =_this.$refs.myAudio; //获得audio标签
                // console.log(_this.currentime)
                audio.volume = _this.movvol
                auto.onmousemove=null
                auto.onmovedown=null
                auto.onmouseup=null
                return false
            }



        }
,
        vol(){   //控制声音
            if(this.display=='none'){
                this.display='block'
            }else{
                this.display='none'
            }


        }
    },
    computed:{
       aaa(){
               return this.$store.state.imgurl
       },
       getfenmiao(){
           if(this.time!=null){
                        var fen =Math.floor(this.time/60)
                        var miao =Math.floor(this.time-fen*60)

                            if(fen<10&&miao<10){
                            return '0' + fen+':'+'0'+miao
                            }else if(fen<10&&miao>10)
                            {
                            return '0'+fen+':'+miao
                            }else if(fen>10&&miao<10)
                            {
                            return fen+':'+0+miao
                            }else{
                            return fen+':'+miao
                            }
           }
           else{
               return '00:00'
           }
        }
      ,currenttime(){

               if(this.currentime==Math.floor(this.time)){
                   clearInterval(this.zzz);
                //    this.playclick=true;
                   var fen2 =Math.floor(this.time/60)
                    var miao2 =Math.floor(this.time-fen2*60)
                        if(fen2<10&&miao2<10){
                            return '0' + fen2+':'+0+miao2
                        }else if(fen2<10&&miao2>10)
                        {
                            return '0'+fen2+':'+miao2
                        }else if(fen2>10&&miao2<10)
                        {
                            return fen2+':'+0+miao2
                        }else{
                            return fen2+':'+miao2
                        }
               }
               else{
                        var fen1 =Math.floor(this.currentime/60)
                        var miao1 =Math.floor(this.currentime-fen1*60)
                        if(fen1<10&&miao1<10){
                            return '0' + fen1+':'+'0'+miao1
                        }else if(fen1<10&&miao1>10)
                        {
                            return '0'+fen1+':'+miao1
                        }else if(fen1>10&&miao1<10)
                        {
                            return fen1+':'+0+miao1
                        }else{
                            return fen1+':'+miao1
                        }
                        
               }
          
        },
        playclick1(){
               if(this.$store.state.playclick==true){
                   return true           //引入新哥所以显示播放
               }else if(this.playclick==true){
                   return true           //控制播放的属性为true，所以播放按钮
               }else{
                   return false     //否则为false 暂停按钮
               }
        },
        getwidth(){
            return (this.currentime)/(this.time)*100      //百分比
        },getleft(){
            return (this.currentime)/(this.time)*471
        },
        getvolheight(){
                return this.movvol*93
        }

    }
}
</script>

<style lang="scss" scoped>
#audio{
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 53px;
    background: url(https://s2.music.126.net/style/web2/img/frame/playbar.png?d0a6fc0d32adf707974180d7527966b8)  repeat-x;
    .wrap{
            width: 980px;
            height: 47px;
            margin: 0 auto;
            
            .btns{
                width: 137px;
                height: 40px;
                 padding: 10px 0 0 0;
                float: left;
                audio{
                    display: block;
                    width: 500px;
                    height: 40px;
                    position: absolute;
                    left: 500px;
                }
                    .prv{
                            display: block;
                            float: left;
                            width: 28px;
                            height: 28px;
                            margin-right: 8px;
                            margin-top: 5px;
                            text-indent: -9999px;
                            background: url(https://s2.music.126.net/style/web2/img/frame/playbar.png?d0a6fc0d32adf707974180d7527966b8) no-repeat 0 9999px;
                            background-position: 0 -130px;
                            &:hover{
                                background-position: -30px -130px;
                            }
                    }
                    .play1{  display: block;
                            float: left;
                            width: 36px;
                            height: 36px;
                            margin-top: 0;
                            background: url(https://s2.music.126.net/style/web2/img/frame/playbar.png?d0a6fc0d32adf707974180d7527966b8) no-repeat 0 9999px;
                            // background-position: -40px -204px;
                            background-position: 0 -204px;
                            &:hover{
                                background-position: -40px -204px;
                            }
                            //点击之后background-position: -40px -165px;
                         }
                         .play2{
                            display: block;
                            float: left;
                            width: 36px;
                            height: 36px;
                            margin-top: 0;
                            background: url(https://s2.music.126.net/style/web2/img/frame/playbar.png?d0a6fc0d32adf707974180d7527966b8) no-repeat 0 9999px;
                            // background-position: -40px -204px;
                            background-position: 0 -165px;
                            &:hover{
                                background-position: -40px -165px;
                            }
                         }
                    .next{
                            display: block;
                            float: left;
                            width: 28px;
                            height: 28px;
                            margin-right: 8px;
                            margin-top: 5px;
                            text-indent: -9999px;
                            background: url(https://s2.music.126.net/style/web2/img/frame/playbar.png?d0a6fc0d32adf707974180d7527966b8) no-repeat 0 9999px;
                            background-position: -80px -130px;
                            &:hover{
                                background-position: -110px -130px;
                            }
                    }
                }
                .play{
                    width: 600px;
                    height: 47px;
                    float: left;
                    padding: 10px 0 0 0;
                    position: relative;
                   
                    a{
                    color: #ffffff;
                    font-size: 12px;
                    }
                    .auto-time{
                        width: 493px;
                        height: 9px;
                        background-color: #fff;
                        border-radius: 9px;
                        background: url(https://s2.music.126.net/style/web2/img/frame/statbar.png?79571290ac90272bcaf5b9219b0a4181);
                         background-position: right -30px;
                        position:absolute;
                        bottom: 10px;
                        z-index: 999;
                        .cur{
                                
                                height: 9px;
                                position: absolute;
                                background: url(https://s2.music.126.net/style/web2/img/frame/statbar.png?79571290ac90272bcaf5b9219b0a4181);
                                background-position: left -66px;
                                z-index: 1000;
                                transition: width 0.05s;
                        }
                        .auto-scroll{
                            width: 22px;
                            height: 24px;
                            position: absolute;
                            background-color: #fff;
                            background: url(https://s2.music.126.net/style/web2/img/iconall.png?d9abcbcbe2f3d9b8f58854f70a178dc7);
                            background-position: 0 -250px;
                            cursor: pointer;
                            top: -7px;
                            transition: left 0.05s;
                            z-index: 1001;
                        }
                    }
                    .songtime{
                        width: 80px;
                        height: 20px;
                        color: #ffffff;
                        font-size: 12px;
                        position: absolute;
                        right: 0px;
                        bottom: 10px;
                    }
                }
                .img{
                    width: 47px;
                    height: 47px;
                    padding: 10px 0 0 0;
                    float: left;
                    margin-right: 16px;
                    img{
                        display: inline-block;
                        width: 47px;
                        height: 47px
                        font-size 12px;
                        color: #ffffff;

                       
                    }
                }
                .right-list{
                    width: 150px;
                    height: 36px;
                    float: right;
                    padding: 10px 0 0 0;
                    .barbg{
                        position: absolute;
                        top: -107px;
                        width: 32px;
                        height: 113px;
                        background: url(https://s2.music.126.net/style/web2/img/frame/playbar.png?d0a6fc0d32adf707974180d7527966b8);
                        background-position: 0 -503px;
                        
                        .red-bar{
                            width: 4px;
                            height: 93px;
                            background-color: #fff;
                            position: absolute;
                            left: 13.5px;
                            z-index: 100;
                            background: url(https://s2.music.126.net/style/web2/img/frame/playbar.png?d0a6fc0d32adf707974180d7527966b8);
                            background-position: -40px bottom;
                            bottom: 0px;
                        }
                    }
                    .aut-vol{
                       display: block;
                        width: 18px;
                        height: 20px;
                        cursor: pointer;
                        position: absolute;
                        left: 7px;
                        top: 68.7px;
                        background: url(https://s2.music.126.net/style/web2/img/iconall.png?d9abcbcbe2f3d9b8f58854f70a178dc7);
                        background-position: -40px -250px;
                        z-index: 1001;
                        
                    }
                    .icn-vol{

                        background: url(https://s2.music.126.net/style/web2/img/frame/playbar.png?d0a6fc0d32adf707974180d7527966b8);
                        background-position: -2px -248px;
                        &:hover{
                                background-position: -31px -248px;
                        }
                        cursor: pointer;
                    }
                    .btns{
                        margin: 11px 2px 0 0;
                        display: inline-block;
                        width: 25px;
                        height: 25px;
                    }
                    .icn-xh{
                        background: url(https://s2.music.126.net/style/web2/img/frame/playbar.png?d0a6fc0d32adf707974180d7527966b8);
                        background-position: -3px -344px;
                        &:hover{
                            background-position: -33px -344px;
                        }
                    }
                    .allsongs{
                        background: url(https://s2.music.126.net/style/web2/img/frame/playbar.png?d0a6fc0d32adf707974180d7527966b8);
                        background-position: -42px -68px;
                        &:hover{
                            background-position: -42px -98px;
                        }
                    }
                }
    }
    .blank{
        display: inline-block;
        margin-left: 15px;
        font-size: 10px;
        color: #ffffff;
    }
}
</style>