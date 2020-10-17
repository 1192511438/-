<template>

    <div id="tuijian">
        <swiper/>
        <hot/>
 
    </div>

</template>

<script>
import hot from '../../components/hot'
import swiper from '../../components/swiper'
export default {
    components:{
        swiper,
        hot
    }
}
</script>

<style lang="scss" scoped>
#tuijian{
width: 100%;

    #aa{color: black;
    text-align: center;
    font-size: 20px;}
}
</style>