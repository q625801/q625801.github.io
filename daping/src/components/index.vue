<template>
    <div class="wrap">
        <header class="e-header"></header>
        <echarts-map></echarts-map>
        <div class="line-bar clear">
            <chargdataanalysis></chargdataanalysis>
            <chargtransactionstatistics></chargtransactionstatistics>
        </div>
    </div>
</template>
<script>
import EchartsMap from './EchartsMap.vue';
import Chargdataanalysis from './Chargdataanalysis.vue';
import Chargtransactionstatistics from './Chargtransactionstatistics.vue';

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
.clear{
    overflow: hidden;
}
.app-vue{
    width: 300px;
    height: 200px;
    background-color: gold;
}
.e-header{
    width: 100%;
    height: 85px;
}
.line-bar{
    padding: 0 40px 36px;
}
</style>