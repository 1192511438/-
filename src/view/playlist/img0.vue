<template>
    <div id="img0">
        <div class="container">
            <div class="introduce">
                <div class="img-bord"><img :src="backgroundCoverUrl" alt="" class="play-img"></div>
                <div class="name">
                    <p class="title">{{name}}</p>
                    <div class="author">
                        <img :src="author.avatarUrl" alt="nickname-img" class="au-img">
                        <a href="#">{{author.nickname}}</a>
                         {{formatDuring(time)}} &nbsp; &nbsp; &nbsp; 创建
                         <div class="btn-sing">
                             <button class="sing"><i class="icon-sing"></i><span>播放</span></button>
                         </div>
                         标签：<span v-for="(item,index) in tag" :key='index'>
                                {{item}}
                         </span>
                         <div class="descr left">
                             {{description}}
                         </div>

                        </div>
                    
                </div>

            </div>
            <div>
                <div class="border-bottom">
                <span class="si-list">歌曲列表</span>
                <span class="min-size">{{trackCount}}首歌</span>
                
                </div>
            </div>        
                <div v-for="(item,index) in songsname" :key="index" class="gedan">
                   <div class="number left"> {{index+1}} <i class="icon-singaa" @click="bofang(index)"></i></div>    
                    <div class="left singall">{{item}} <span class="singer"> {{singer[index]}}</span> </div> 
                   
                </div>
        </div>
        
    </div>
</template>

<script>
 import axios from '../../axios/index'
export default {
    created(){        
                 axios.get('/playlist/detail?id='+this.$route.params.id).then(res=>{
            //    console.log(res.data.playlist.tracks[1].ar[0].name)
            // console.log(res.data.playlist.tracks[0].name)
            //  console.log(res.data.playlist.tracks) //10首歌曲
            // console.log(res.data.playlist) // 根源
            //   console.log(res.data.playlist.name)
              this.backgroundCoverUrl=res.data.playlist.coverImgUrl;
              this.name=res.data.playlist.name;
             this.author=res.data.playlist.creator
              this.time=res.data.playlist.createTime
              this.tracks=res.data.playlist.tracks
              this.trackCount=res.data.playlist.trackCount
             this.tag=res.data.playlist.tags
             this.description=res.data.playlist.description
             for(var i=0;i<10;i++){
                this.songsname[i]=res.data.playlist.tracks[i].name
             }
              console.log(res.data)
            this.tensong=res.data.playlist.tracks
            for(var j=0;j<10;j++){
                this.singer[j]=res.data.playlist.tracks[j].ar[0].name
            }
            

          })
        
    },mounted(){

    },data(){
        return{
            backgroundCoverUrl:'',
            name:'',
            author:{},
            time:0,
            tracks:[],
            trackCount:0,
            tag:[],
            description:'',
            songsname:[],
            tensong:[],
            singer:[]
        }
    },
    methods:{
         formatDuring(mss) {
            var createdate = new Date(mss)
            var year = createdate.getFullYear();
            var month = createdate.getMonth(); 
            var date = createdate.getDate()
            return year+'-'+'0'+(month+1)+'-'+'0'+date;
},       bofang(index){
            //    console.log(this.tensong[index].id)
            var _this=this
            // var indexl=index
              axios.get('/song/url?id='+this.tensong[index].id).then(res=>{
                   var param={
                       songurl:res.data.data[0].url,
                       name:_this.songsname[index]
                   }
                //    console.log(res.data)
                //    console.log(res.data.data[0].url)
                    _this.$store.commit('getsongurl',param)
              })

              axios.get('/song/detail?ids='+this.tensong[index].id).then(res=>{
                //   console.log(res.data)
                //   console.log(res.data.songs[0].al.picUrl)
               
                  _this.$store.commit('getimgurl',res.data.songs[0].al.picUrl)
                   _this.$store.commit('getauthor',res.data.songs[0].ar[0].name)


              })
              this.$store.commit('getplayclick',true)
}

    },
    computed:{
    }
}
</script>

<style lang="scss" scoped>
#img0{
   
       .container{
           width: 710px;
           margin: 0 auto;
           height: 1100px;
           border-left:  1px solid #d3d3d3;
           border-right:  1px solid #d3d3d3;
           border-bottom: 1px solid #d3d3d3 ;
           .introduce{
               padding-left: 30px;
               padding-top: 48px;
               height: 355px;
           }
           .play-img{

               width: 200px;
               height: 200px;
               margin : 3px;
           }
           .img-bord{
               display: inline-block;
               width: 206px;
               height: 206px;
               border: 1px solid #d3d3d3;
               vertical-align: top;
           }
           .name{
               float: right;
               width: 400px;
               margin-top: 5px;
               margin-right: 40px;
               .title{
                   color: #333;
                   display: inline;
                   font-size: 16px;
                   
               }
               .author{
                   margin-top: 15px;
                   font-size: 12px;
                   line-height: 31px;
                  a{font-size: 12px;
                  margin-right: 10px;} 
                   .au-img{
                   width: 35px;
                   height: 35px;
                   vertical-align:middle;
                   margin-right: 5px;
               }
               }
           .btn-sing{
               
               height: 31px;
               margin-top: 20px;
               line-height: 31px;
               .sing{
                   display: inline-block;
                   width: 85px;
                   height: 31px;
                   color: #ffffff;
                //    background: #2078c8;
                background: url(https://s2.music.126.net/style/web2/img/button2.png?b49265005e38a8363666c36479a08e6f) no-repeat 0 -387px;
                   cursor: pointer;
                   border: none;
                     .icon-sing{
                      display: inline-block;
                      width: 20px;
                      height: 18px;
                      background: url(https://s2.music.126.net/style/web2/img/button2.png?b49265005e38a8363666c36479a08e6f) no-repeat;
                      background-position: 0 -1622px;
                     vertical-align: middle;
                  } 
                  span{
                      height: 20px;
                      margin-left: 5px;
                      border: none;
                  }
               }


           }    
           }


       }
       .border-bottom{
           width: 640px;
           margin:0 auto ;
            border-bottom: 2px #c20c0c solid;
       }
       .si-list{
           font-size: 20px;
           font-weight: normal;
           margin-right: 20px;
       }
       .min-size{
           font-size: 12px;
       }
       .descr{
           width: 420px;
           height: 180px;
           text-indent: 2em;
            white-space:pre-wrap;
           overflow: hidden;  
           text-overflow: ellipsis;
       }
       .gedan{
           height: 30px;
           color: #333;
           font-size: 12px;
           width: 710px;
           border-bottom: 1px solid #d3d3d3;
            .number{
                width: 54px;
                height: 18px;
                margin-top: 12px;
                margin-left: 20px;
                .icon-singaa{
                      width: 17px;
                      height: 17px;
                      display: inline-block;
                    //   position: relative;
                     background: url(https://s2.music.126.net/style/web2/img/table.png?e9f809c3feb56786067fa9d75f560591) no-repeat 0 9999px;
                      cursor: pointer;
                      background-position:0 -103px;
                    //   position: absolute;
                    //   right: 0px;
                      &:hover{
                         background-position: 0px -128px;
                      }
                }
            }
       }
     .left{
         float: left;
     }
     .right{
         float: right;
     }
     .singall{
                width: 300px;
                height: 18px;
                margin-top: 12px;
                margin-left: 20px;
                .singer{
                    display: block;
                    width: 100px;
                    height: 18px;
                    float: right;
                    text-align: center;
                }
     }
}
</style>