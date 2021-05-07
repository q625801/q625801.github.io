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
    height: 0.526rem;
    background: url(../assets/bg-05.png) center no-repeat;
    background-size: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.info-list{
    padding-top: 0.1042rem;
    padding-left: 0.1563rem;
    background: url(../assets/line-01.png) center right no-repeat;
    background-size: 0.0156rem 0.1406rem;
    padding-right: 0.2604rem;
}
.info-list:last-child{
    padding-right: 0.1667rem;
    background:none;
}
.info-content{
    padding: 0.0521rem 0 0.0521rem 0.3021rem;
    background: url(../assets/pic-06.png) center left no-repeat;
    background-size: 0.3021rem 0.3125rem;
}
.info-content span{
    display: block;
}
.info-content span.num{
    font-size: 0.0938rem;
    color: #e99e32;
    text-align: left;
}
.info-content span.text{
    font-size:0.0729rem;
    color:#88d5ff
}
.info-chargingstation{
    background: url(../assets/pic-07.png) center left no-repeat;
    background-size: 0.2396rem 0.3125rem;
    padding: 0.0521rem 0 0.0521rem 0.2604rem;
}
.info-chargingpile{
    background: url(../assets/pic-08.png) center left no-repeat;
    background-size: 0.3229rem 0.3229rem;
    padding: 0.0573rem 0 0.0573rem 0.3229rem;
}
.info-charginggun{
    background: url(../assets/pic-09.png) center left no-repeat;
    background-size: 0.3125rem 0.3438rem;
    padding: 0.0521rem 0 0.0521rem 0.3125rem;
}
</style>