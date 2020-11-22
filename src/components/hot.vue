<template>
    <div id="hot">
        <div class="top">
            <div class="in-top">
            <i class="icon"></i>
            <a href="" class="hot-intr"><h2>热门推荐</h2></a>
            <a href="" class="small">华语</a>
             <a href="" class="small">|</a>
            <a href="" class="small">流行</a>
            <a href="" class="small">|</a>
            <a href="" class="small">摇滚</a>
            <a href="" class="small">|</a>
            <a href="" class="small">民谣</a>
            <a href="" class="small">|</a>
            <a href="" class="small">电子</a>
            <a href="" class='small float-r'>更多 <i class="rig-icon"></i></a>
            </div>
            </div>


        <div class="right">
             <div class="t-login">
                 <p class="note s-fc3">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                 <a @click="dislogin" style="cursor: pointer;">用户登录</a>
             </div>
             <div class="m-t-art">
               <span class="rz-gs"> 入驻歌手</span>
               <a href="">查看全部></a>
             </div>
             <div  class="m-login" v-for="(item,index) in artists" :key="index">
                 <img :src="item.picUrl" alt="" >
                  <a href="" class="name-a">{{item.name}}</a>
             </div>
        </div>
        
        <div class="message">
            <div class="hotint">
                <span v-for="(item,index) in musics " :key="index" class="flex">
                    <a  class="a-img" @click="playlist(index)"><img :src="item.uiElement.image.imageUrl" alt="">
                    </a>
                    <a class="a-title" @click="playlist(index)">{{item.uiElement.mainTitle.title}}</a>
                </span>
            </div>


                

                
        <div class="paihang">
            <div class="v-hd2">
                <div class="v-hd2-contain">
                <span class="f-bangdan"></span>
                 <a href="" class="f-tdn">榜单</a> 
                 <a href="" class='small float-r'>更多 <i class="rig-icon"></i></a>
                </div>
            </div>

            <div class="blk marin-blk">
                <div class="top-blk">
                    <img :src="list[0]" alt="" class="blk-img">
                  <a href="">{{name1}}</a>  
                </div>
                <div class="main-blk">
                    <div v-for="(item,index) in playist1" :key="index"  class="ol-song">
                           <span class="ol-song-sp" :class="{'hot':indexof(index)}"> {{index+1}}</span>
                         <a href="" class="ol-song-a">{{item}}</a>  
                    </div>
                </div>

            </div>
            <div class="blk">
                <div class="top-blk">
                    <img :src="list[1]"  alt="" class="blk-img">
                    <a href="" >{{name2}}</a>
                </div>
                <div class="main-blk">
                            <div v-for="(item,index) in playist2" :key="index" class="ol-song">
                                <span class="ol-song-sp" :class="{'hot':indexof(index)}"> {{index+1}}</span>
                                <a href="" class="hot-song-a">{{item}}</a>
                            </div>
                </div>
            </div>
            <div class="blk">
                <div class="top-blk">
                    <img  :src="list[2]" alt="" class="blk-img">
                    <a href="">{{name3}}</a>
                </div>
                <div class="main-blk">
                                <div v-for="(item,index) in playist3" :key="index" class="ol-song">
                                <span class="ol-song-sp" :class="{'hot':indexof(index)}"> {{index+1}}</span>
                                <a href="" class="hot-song-a">{{item}}</a>
                            </div>
                </div>
            </div>
        </div>
        

        </div>




    </div>
</template>

<script>
import axios from '../axios/index'
export default {
    mounted(){
              
    },
    created(){
                axios.get('/homepage/block/page').then(res=>{
             this.musics=res.data.data.blocks[0].creatives
            //console.log(this.musics)
            //console.log(res)
            // console.log(this.musics[0].creativeId)
        })
          axios.get('/toplist/detail').then(res=>{
              // console.log(res.data)
                this.list[0]=res.data.list[0].coverImgUrl
                this.list[1]=res.data.list[1].coverImgUrl
                this.list[2]=res.data.list[2].coverImgUrl
                this.id[0]=res.data.list[0].id
                this.id[1]=res.data.list[1].id
                this.id[2]=res.data.list[2].id
                  var _this=this
                 axios.get('http://localhost:3000/playlist/detail?id='+_this.id[0]).then(res=>{
                _this.name1=res.data.playlist.name
                for(var i =0; i<10;i++){
                    _this.playist1[i]=res.data.playlist.tracks[i].name
                   
                }   })
                axios.get('http://localhost:3000/playlist/detail?id='+_this.id[1]).then(res=>{
                _this.name2=res.data.playlist.name
                for(var i =0; i<10;i++){
                    _this.playist2[i]=res.data.playlist.tracks[i].name
                     
                }
                // console.log(res.data.playlist)
        })
                axios.get('http://localhost:3000/playlist/detail?id='+_this.id[2]).then(res=>{
                _this.name3=res.data.playlist.name
                for(var i =0; i<10;i++){
                    _this.playist3[i]=res.data.playlist.tracks[i].name
                    //  console.log(_this.playist3[i])
                }
                // console.log(res.data.playlist)
        })

        })

             axios.get('/toplist/artist').then(res=>{
                        this.artists[0]=res.data.list.artists[0]
                        this.artists[1]=res.data.list.artists[1]
                        this.artists[2]=res.data.list.artists[2]
                        this.artists[3]=res.data.list.artists[3]
                        this.artists[4]=res.data.list.artists[4]
                        this.artists[5]=res.data.list.artists[5]
                        this.artists[6]=res.data.list.artists[6]
                        this.artists[7]=res.data.list.artists[7]
                        this.artists[8]=res.data.list.artists[8]
                        this.artists[9]=res.data.list.artists[9]
                 })

             


    },
    data(){
        return{
            musics:[],
            list:[]       //榜单img
            ,id:[],
            name1:'',
            name2:'',
            name3:'',
            playist1:[],
            playist2:[],
            playist3:[],
            artists:[]
        }
    },
    methods:{
        playlist(index){
            this.$router.push('/found/playlist/'+this.musics[index].creativeId);
        },
        dislogin(){
            this.$store.commit('getdislogin')
        }
    },
    computed:{
        indexof(){
           return function (index){
               if(index<3){
                   return true
               }
               return false
            }
            
        }

    }
}
</script>

<style lang='scss' scoped>
#hot{
 
    position: relative;
    width: 980px;
    height: 1300px;
    margin: 0 auto;
    border-left: 1px solid #d3d3d3; 
    border-right: 1px solid #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
    .icon{
       
        width: 40px;
        height: 40px;
        position: absolute;
        background-image:url(https://s2.music.126.net/style/web2/img/index/index.png?c5379afd11956a057a07c24297925a0d) ;
            background-position: -225px -156px
    }
    .hot-intr{
        margin-left: 26px;
        h2{font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
        font-weight: normal;
        font-size: 20px;
        display: inline;}
            
    }
     .right{
        width: 250px;
        height: 1300px;
        position: absolute;
        right: 0px;
        top: 0px;
         border-left: 1px solid #d3d3d3; 
         
         .t-login{
             width: 250px;
             height: 126px;
             background: url(https://s2.music.126.net/style/web2/img/index/index.png?c5379afd11956a057a07c24297925a0d) 0 0;
             p{  width: 205px;
                 font-size: 12px;
                 color: #666;
                 margin: 0 auto;
                 line-height: 22px;
             }
             a{ 
                display: block;
                 width: 100px;
                 height: 31px;
                 margin: 0 auto;
                 margin-top: 10px;
                 background: url( https://s2.music.126.net/style/web2/img/index/index.png?c5379afd11956a057a07c24297925a0d); 
                 background-position: -110px -195px;  
                 text-align: center;
                 line-height: 31px;
                 color: #fff;
                 font-size: 12px;
             }
         }
         .m-login{
             width: 250px;
             height: 62px;
             margin-top: 7px;
             img{
                 display: inline-block;
                 width: 62px;
                 height: 62px;
             }
             .name-a{  display: block;
             float: right;
             margin-right: 30px ;
                 font-size: 14px;
                 width: 147px;
                 height: 62px;
                 text-align: center;
                 line-height: 62px;
                 
             }
         }
     }
     .top{
        
         width: 730px;
        padding-left: 15px; 
     }
     .in-top{
         width: 650px;
         border-bottom: 2px solid #C10D0C;
      .small{
          color: #666;
          font-size: 12px;
          margin-left: 10px;

      }

     }


.message{
    margin-top: 20px;
    width: 730px;
    height: 1225px;
    .flex{
        display: block;
        width: 200px;
        margin-left: 20px;
        float: left;
        .a-img ,.a-title{
            display: block;
            cursor: pointer;
        }
        .a-img{
            width: 200px;
            height: 200px;
            margin-bottom: 20px;
        }
        .a-title{
            width: 200px;
            height:60px;
            font-size: 12px;
        }
        img{display: inline-block;
            width: 200px;
            height: 200px;
        }
    }

}
.hotint,.paihang{
    width: 730px;
    height: 600px;
    
}
.paihang{
    .v-hd2{
        width: 689px;
        height: 35px;
        padding: 0 10px 0 34px;
        .f-bangdan{
        display: inline-block;
        width: 35px;
        height: 35px;
        background: url(https://s2.music.126.net/style/web2/img/index/index.png?c5379afd11956a057a07c24297925a0d);
        background-position: -225px -156px;
        vertical-align: middle;
    }
        .f-tdn{
        font-size: 20px;
    }
    .v-hd2-contain{
        width: 650px;
        border-bottom: 2px solid #c10d0c;
    }
    }
    .blk{
        margin-top: 20px;
          width: 230px;
          height: 472px;
          float: left;
          border: 1px solid #d3d3d3;
          .top-blk{
              width: 230px;
              height: 120px;
              .blk-img{
                  margin-left: 30px;
                  margin-top: 20px;
                  display: inline-block;
                  width: 80px;
                  height: 80px;
                  vertical-align: middle;
              }
          }
          .main-blk{
              width: 230px;
              height: 352px;

              .ol-song{
                  width: 230px;
                  height: 32px;
                  .ol-song-sp{
                      margin-left: 10px;
                      color: #000;
                      font-size: 12px;
                  }
                  .hot{
                      color: #c10d0c;
                  }

              }
          }

    }
                      .ol-song-a{
                      margin-left: 7px;
                      color: #000;
                      display: inline-block;
                      width: 96px;
                      height: 32px;
                      font-size: 12px;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                  }
    .marin-blk{
        margin-left: 20px;
    }
}

      .small{
          color: #666;
          font-size: 12px;
          margin-left: 10px;
          .rig-icon{
                display: inline-block;
                width: 12px;
                height: 12px;
                background-image: url(https://s2.music.126.net/style/web2/img/index/index.png?c5379afd11956a057a07c24297925a0d);
                background-position: 0 -240px;
          }
      }
            .float-r{
          float: right;
          margin-right: 10px;
          margin-top: 10px;
      }
}

.hot-song-a{
    display: inline-block;
    margin-left: 7px;
    width: 96px;
    height: 32px;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.m-t-art{
    width: 250px;
    height: 32px;
    border-bottom: 1px solid #ccc;
    .rz-gs{
        color: #333;
        line-height: 23px;
        font-size: 12px;
        font-weight: 700;
}
    a{
        float: right;
        margin-top: 4px;
        color: #666;
        font-size: 12px;
    }
}

</style>