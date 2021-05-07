<template>
    <div class="wrap-info">
        <div class="info-list fl">
            <div class="info-content">
                <span class="num">355</span>
                <span class="text">运营商（个）</span>
            </div>
        </div>
        <div class="info-list fl">
            <div class="info-content info-chargingstation">
                <span class="num">355</span>
                <span class="text">充电站（座）</span>
            </div>
        </div>
        <div class="info-list fl">
            <div class="info-content info-chargingpile">
                <span class="num">355</span>
                <span class="text">充电桩（个）</span>
            </div>
        </div>
        <div class="info-list fl">
            <div class="info-content info-charginggun">
                <span class="num">355</span>
                <span class="text">充电枪（个）</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'basicinfo',
    data(){
        return{
            
        }
    },
    mounted(){
        
    },
    methods:{
        
    }
}
</script>
<style scoped>
.fl{
    float: left;
}
.wrap-info{
    width: 100%;
    height: 101px;
    background: url(../assets/bg-05.png) center no-repeat;
    background-size: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.info-list{
    padding-top: 20px;
    padding-left: 30px;
    background: url(../assets/line-01.png) center right no-repeat;
    background-size: 3px 27px;
    padding-right: 50px;
}
.info-list:last-child{
    padding-right: 32px;
    background:none;
}
.info-content{
    padding: 10px 0 10px 58px;
    background: url(../assets/pic-06.png) center left no-repeat;
    background-size: 58px 60px;
}
.info-content span{
    display: block;
}
.info-content span.num{
    font-size: 18px;
    color: #e99e32;
    text-align: left;
}
.info-content span.text{
    font-size:14px;
    color:#88d5ff
}
.info-chargingstation{
    background: url(../assets/pic-07.png) center left no-repeat;
    background-size: 46px 60px;
    padding: 10px 0 10px 50px;
}
.info-chargingpile{
    background: url(../assets/pic-08.png) center left no-repeat;
    background-size: 62px 62px;
    padding: 11px 0 11px 62px;
}
.info-charginggun{
    background: url(../assets/pic-09.png) center left no-repeat;
    background-size: 60px 66px;
    padding: 10px 0 10px 60px;
}
</style>