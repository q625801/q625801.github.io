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
    height: 85px;
    background: url(../assets/bg-08.png) center no-repeat;
    background-size: 100% 100%;
    margin-bottom: 10px;
}
.line-bar{
    padding: 0 40px 36px;
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    bottom: 0px;
    left: 0;
}
.wrap-echarts{
    position: relative;
    height: 995px;
}
.right-info{
    width: 49%;
    height: 580px;
    padding-right: 40px;
    box-sizing: border-box;
    position: absolute;
    right: 0;
    top: 0;
}
.header-btn{
    margin-left: 24.5%;
    margin-top: 28px;
}
.header-btn .btn-list{
    width: 231px;
    height: 52px;
    line-height: 48px;
    color: #ffffff;
    background: url(../assets/btn-03.png) center no-repeat;
    background-size: 100% 100%;
    text-align: center;
    margin-left: -32px;
    cursor: pointer;
}
.header-btn .btn-list.on{
    background: url(../assets/btn-04.png) center no-repeat;
    background-size: 100% 100%;
}
.header-btn .btn-list.btn-mrg{
    margin-left: 0;
}
.header-btn .btn-bg{
    width: 289px;
    height: 47px;
    background: url(../assets/bg-09.png) center no-repeat;
    background-size: 100% 100%;
    margin-left: -32px;
}
</style>