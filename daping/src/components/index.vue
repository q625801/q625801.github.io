<template>
    <div class="wrap">
        <header class="e-header clear">
            <div class="header-btn">
                <div class="fl btn-list btn-mrg on">设备运行监测</div>
                <div class="fl btn-list">能源数据监测</div>
                <div class="fl btn-bg"></div>
            </div>
        </header>
        <div class="wrap-echarts">
            <echarts-map></echarts-map>
            <div class="right-info">
                <basicinfo></basicinfo>
                <censusinfo></censusinfo>
            </div>
            <div class="line-bar clear">
                <chargdataanalysis></chargdataanalysis>
                <chargtransactionstatistics></chargtransactionstatistics>
            </div>
        </div>
    </div>
</template>
<script>
import EchartsMap from './EchartsMap';
import Chargdataanalysis from './Chargdataanalysis';
import Chargtransactionstatistics from './Chargtransactionstatistics';
import basicinfo from './basicinfo'
import censusinfo from './censusinfo'
export default {
    name:'Cgdataanalysis',
    data(){
        return{
            myChart:'',
            xData:'',
        }
    },
    components:{
        EchartsMap,
        Chargtransactionstatistics,
        Chargdataanalysis,
        basicinfo,
        censusinfo
    },
    mounted(){

    },
    methods:{


    }
}
</script>
<style scoped>
.wrap{
    background:url(../assets/bg-01.jpg) center no-repeat;
    background-size: 100% 100%;
}
.fl{
    float: left;
}
.clear{
    overflow: hidden;
}
.e-header{
    width: 100%;
    height: 0.4427rem;
    background: url(../assets/bg-08.png) center no-repeat;
    background-size: 100% 100%;
    margin-bottom: 0.0521rem;
}
.line-bar{
    padding: 0 0.2083rem 0.1875rem;
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    bottom: 0px;
    left: 0;
}
.wrap-echarts{
    position: relative;
    height: 960px;
}
.right-info{
    width: 49%;
    height: 3.0208rem;
    padding-right: 0.2083rem;
    box-sizing: border-box;
    position: absolute;
    right: 0;
    top: 0;
}
.header-btn{
    margin-left: 24.5%;
    margin-top: 0.1458rem;
}
.header-btn .btn-list{
    width: 1.2031rem;
    height: 0.2708rem;
    line-height: 0.25rem;
    color: #ffffff;
    background: url(../assets/btn-03.png) center no-repeat;
    background-size: 100% 100%;
    text-align: center;
    margin-left: -0.1667rem;
    cursor: pointer;
    font-size: 0.0833rem;
}
.header-btn .btn-list.on{
    background: url(../assets/btn-04.png) center no-repeat;
    background-size: 100% 100%;
}
.header-btn .btn-list.btn-mrg{
    margin-left: 0;
}
.header-btn .btn-bg{
    width: 1.5052rem;
    height: 0.2448rem;
    background: url(../assets/bg-09.png) center no-repeat;
    background-size: 100% 100%;
    margin-left: -0.1667rem;
}
@media (min-height: 1000px){
    .wrap{
        height: 100%;
    }
}
</style>