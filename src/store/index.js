import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)


const store = new vuex.Store({
    state:{
        songurl:'',
        name:'',
        imgurl:'',
        playclick:'',
        author:'',
        dislogin:true
    },
    mutations:{
        getsongurl(state,param){
              state.songurl=param.songurl;
              
              state.name=param.name
        }
        ,getimgurl(state,ccc){
            state.imgurl=ccc
        },
        getplayclick(state,bbb){
            state.playclick=bbb
        }
        ,getauthor(state,ccc){
            state.author=ccc
        },getdislogin(state){
            state.dislogin=false
        },getdislogin1(state){
            state.dislogin=true
        }
        
    }

})

export default store