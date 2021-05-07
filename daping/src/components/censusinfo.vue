<template>
    <div class="census-info clear">
        <div class="census-accessmode fl">
            <div class="bt">充电枪接入方式</div>
            <div class="accessmode-echarts">
                <div id="accessmode"></div>
                <div class="chargpiebg"></div>
                <div class="accessmode-num">
                    <span>155<em class="hl">个</em></span>
                    <span>1155<em class="pt">个</em></span>
                    <span>2155<em class="hw">个</em></span>
                </div>
            </div>
        </div>
        <div class="credit-statistics fr">
            <div class="info-bt">授信情况统计</div>
            <div class="credit-div">
                <div class="credit-head clear">
                    <div class="credit-name fl">项目名称</div>
                    <div class="credit-column-1 fl">授信金额（万元）</div>
                    <div class="credit-column-2 fl">投资回收期（月）</div>
                    <div class="credit-column-3 fl">剩余时段（月）</div>
                    <div class="credit-column-4 fl">本期营收（万元）</div>
                </div>
                <div class="credit-body">
                    <div class="credit-head credit-body-tr clear">
                        <div class="credit-name fl">项目名称</div>
                        <div class="credit-column-1 fl">161.2</div>
                        <div class="credit-column-2 fl">5</div>
                        <div class="credit-column-3 fl">2.3</div>
                        <div class="credit-column-4 fl">6</div>
                    </div>
                    <div class="credit-head credit-body-tr clear">
                        <div class="credit-name fl">项目名称</div>
                        <div class="credit-column-1 fl">161.2</div>
                        <div class="credit-column-2 fl">5</div>
                        <div class="credit-column-3 fl">2.3</div>
                        <div class="credit-column-4 fl">6</div>
                    </div>
                    <div class="credit-head credit-body-tr clear">
                        <div class="credit-name fl">项目名称</div>
                        <div class="credit-column-1 fl">161.2</div>
                        <div class="credit-column-2 fl">5</div>
                        <div class="credit-column-3 fl">2.3</div>
                        <div class="credit-column-4 fl">6</div>
                    </div>
                    <div class="credit-head credit-body-tr clear">
                        <div class="credit-name fl">项目名称</div>
                        <div class="credit-column-1 fl">161.2</div>
                        <div class="credit-column-2 fl">5</div>
                        <div class="credit-column-3 fl">2.3</div>
                        <div class="credit-column-4 fl">6</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="chargerank fl">
            <div class="info-bt">运营商充电量排名（TOP5）</div>
            <div class="chargerank-echarts">
                <div id="chargerank-echarts"></div>
            </div>
        </div>
        <div class="cash-statistics fr">
            <div class="info-bt">月净现金流入统计</div>
            <div class="cashstatistics-div clear">
                <div class="cashstatistics-all fl">
                    <div class="cashstatistics-info">
                        <span class="num">1134.25</span>
                        <span class="unit">万元</span>
                        <span class="total">本月合计</span>
                    </div>
                    <div class="cashstatistics-img"></div>
                </div>
                <div id="cashstatistics-echarts" class="fr"></div>
            </div>
        </div>
    </div>
</template>
<script>
import * as echarts from 'echarts';

export default {
    name:'basicinfo',
    data(){
        return{
            tableData: [{
            name: '王小虎',
            address: '5'
          }]
        }
    },
    mounted(){
        this.pieDraw();
        this.barhDraw();
        this.cashstatisticsDraw();
    },
    methods:{
        pieDraw(){
             //初始化ehcharts实例
            let colorList = ['#00fbff','#008aff','#ffc000']
            let mdata = ['123','200','3000000']
            let myChart=echarts.init(document.getElementById("accessmode"));
            let option = {
                tooltip: {
                    trigger: 'item',
                },
                legend: {
                    backgroundColor:'transparent',
                    orient: 'vertical',
                    padding:15,
                    itemGap:15,
                    itemWidth:8,
                    right:'25%',
                    bottom:'23%',
                    textStyle:{
                        fontSize:14,
                        padding: [0, 0, 0, 6]
                        // align:'right',
                        // rich:{
                        //     a:{
                        //         fontSize:14,
                        //         // verticalAlign:'top',
                        //         align:'center',
                        //         padding:[0,0,0,11],
                        //         lineHeight:13,
                        //     },
                        //     b:{
                        //         align: 'right',
                        //         // width: 70,
                        //         fontSize:16,
                        //         color:'#ffffff',
                        //         padding:[0,0,0,0],
                        //         // verticalAlign:'top',
                        //     },
                        //     c:{
                        //         fontSize:14,
                        //         padding:[0,0,0,0],
                        //         verticalAlign:'top',
                        //         align:'left',
                        //         // width:0,
                        //     }
                        // }
                    },
                    // formatter:  (name)=>{
                    //     let num
                    //     switch (name) {
                    //         case '互联互通':
                    //             num = mdata[0]
                    //             break;
                    //         case '平台直连':
                    //             num = mdata[1]
                    //             break;
                    //         case '红外接入':
                    //             num = mdata[2]
                    //             break;
                    //         default:
                    //             break;
                    //     }
                    //     let arr = [
                    //         '{a|'+name+'}{b|' + num + '}{c|个}',
                    //     ]
                    //     return arr.join('\n')
                    // },
                    data: [
                        {
                            name: '互联互通',
                            // 强制设置图形为圆。
                            icon: 'circle',
                            // 设置文本为红色
                            textStyle: {
                                color: '#00fbff'
                            },
                            itemStyle:{
                                borderWidth: 6, // 区域边框宽度
                                borderColor: "rgba(0,251,255,0.3)", // 区域边框颜色
                            },
                        },
                        {
                            name: '平台直连',
                            // 强制设置图形为圆。
                            icon: 'circle',
                            // 设置文本为红色
                            textStyle: {
                                color: '#008aff'
                            },
                            itemStyle:{
                                borderWidth: 6, // 区域边框宽度
                                borderColor: "rgba(0,138,255,0.3)", // 区域边框颜色
                            },
                        },
                        {
                            name: '红外接入',
                            // 强制设置图形为圆。
                            icon: 'circle',
                            // 设置文本为红色
                            textStyle: {
                                color: '#ffc000'
                            },
                            itemStyle:{
                                borderWidth: 6, // 区域边框宽度
                                borderColor: "rgba(255,192,0,0.3)", // 区域边框颜色
                            },
                        }
                    ],
                    
                },
                series: [
                    {
                        name: '充电枪接入方式',
                        type: 'pie',
                        left: "-43%",
                        radius: ['50%', '62%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center',
                        },
                        emphasis: {
                            label: {
                                show: false,
                            },
                        },
                        labelLine: {
                            show: false,
                        },
                        itemStyle:{
                            normal: {
                                borderColor:'#02164e',
                                borderWidth:'2',
                                color: (params) => {
                                    return colorList[params.dataIndex]
                                }
                            },
                            
                        },
                        data: [
                            { value: 580, name: '互联互通' },
                            { value: 484, name: '平台直连' },
                            { value: 300, name: '红外接入' },
                        ],
                    },
                ],
            };
            myChart.setOption(option);
        },
        barhDraw(){
            let myChart=echarts.init(document.getElementById("chargerank-echarts"));
            var data={
                Amount:["100392","80392","50392","60392","30392"],
                Province:['NO.1  某某运营商  100392度','NO.2  某某运营商  100392度','NO.3  某某运营商  100392度','NO.4  某某运营商  60392度','NO.5  某某运营商  30392度']
            };
            //初始化数据
                var category = [];
                var barData = [];
                var length1 = 7;
                if (data.Amount.length <= 7) {
                    length1 = data.Amount.length;
                }
                for (var i = 0; i < length1; i++) {
                    barData.push(data.Amount[length1 - i - 1])
                }
                for (var i = 0; i < length1; i++) {
                    category.push(data.Province[length1 - i - 1])
                }
                var yMax = 100392;
                var dataShadow = [];

                for (var i = 0; i < barData.length; i++) {
                    dataShadow.push(yMax)
                }
                var option = {
                    backgroundColor:'transparent',
                    // tooltip: {
                    //     trigger: "axis",
                    //     axisPointer: {
                    //         // 坐标轴指示器，坐标轴触发有效
                    //         type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                    //     }
                    // },
                    grid: {
                        left: "8%",
                        top: '10%', //去掉标题，图表整体往上移动
                        bottom:'-9%',
                        right:'-5%',
                        containLabel: true
                    },
                    xAxis: {
                        type: "value",
                        show: false,//直接设置show|的属性的话x轴的轴线和垂直于它的网格线以及x轴数据会一起显示隐藏，这里需要全部隐藏包括所以直接show，如果需要单独给它们设置显示隐藏详见以下设置
                        bottom: 2,
                        boundaryGap: ['0%', '1%'],//留白大小，坐标轴1边留白,横向柱状图的右侧label**人不会超出宽度被隐藏
                    },
                    yAxis: {
                        boundaryGap: ['0%', '1%'],//留白大小，坐标轴1边留白
                        axisLabel: {
                            show: false,
                        },
                        type: "category",
                        data: category,
                        axisTick: {
                            //y轴刻度线
                            show: false
                        },
                        axisLine: {//y轴轴线
                            show: false
                        }

                    },
                    series: [
                        { // For shadow
                            name: '最大销售金额',
                            type: 'bar',
                            
                            itemStyle: {
                                normal: {
                                    barBorderRadius: 40,
                                    color: 'rgba(49,150,250,0.1)'
                                },
                                emphasis: {
                                    barBorderRadius: 40
                                },
                            },
                            barGap: '-100%',
                            barCategoryGap: '100%',
                            // barCategoryGap:'40%',
                            data: dataShadow,
                            animation: true,
                            barWidth: 8,
                            label: {
                                show: false,
                            },
                        }, {
                            name: "销售金额",
                            top: 20,
                            color: "#00A6FC",
                            type: "bar",
                            stack: "总量",
                            barCategoryGap: 2,

                            itemStyle: {
                                //通常情况下：
                                normal: {
                                    barBorderRadius: [0, 4, 4, 0],
                                    //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                                    color: function (params) {
                                        var colorList = [
                                            '#3196fa',
                                            '#3196fa',
                                            '#f8e61b',
                                            '#ffad33',
                                            '#fd6363',
                                        ];
                                        var index = params.dataIndex;
                                        if (params.dataIndex >= colorList.length) {
                                            index = params.dataIndex;
                                        }
                                        return colorList[index];
                                    }
                                },
                            },
                            label: {
                                formatter: function (param) {
                                    for (let i = 0; i < category.length; i++) {
                                        if (param.dataIndex == i) {
                                            return category[i];
                                        }
                                    }
                                },
                                right: '3%',
                                show: true,
                                offset: [4, -17],
                                textStyle: {
                                    fontSize: 14,
                                    color: "#88d5ff",
                                },

                                position: "topLeft"
                            },
                            //设置柱的宽度
                            barWidth: 8,
                            //  height:'70%',
                            data: barData
                        }]
                }
            myChart.setOption(option);
        },
        cashstatisticsDraw(){
             //初始化ehcharts实例
            let myChartanalysis=echarts.init(document.getElementById("cashstatistics-echarts"));
            //指定图表的配置项和数据
            var option = {
                backgroundColor: 'transparent',
                tooltip: {
                    trigger: "axis",
                    backgroundColor:"rgb(19,82,153)",
                    borderWidth:0,
                    textStyle:{
                        color:"#ffffff",
                    },
                    extraCssText: 'box-shadow: 0 0 0.0521rem rgba(0, 9, 41, 0.8)',
                    axisPointer: {
                        type: "shadow",
                        label: {
                            show: false
                        },
                        shadowStyle:{
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(49,150,250,0.3)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(49,150,250,0)'
                                }
                            ], false),
                        }
                    },
                    formatter:function(params){
                        console.log(params)
                        let result = '';
                        let color = '';
                        params.forEach(function (item,index) {
                            if(index == 0){
                                result += `<span style="display:block;text-align: left;font-size:0.0625rem;">${item.axisValue}</span>`
                            }
                            result += `<div style="display:flex;align-items: center;"><span style="width:0.0313rem;height:0.0313rem;background-color:${item.color};display:inline-block;margin-right:0.026rem"></span><span style="color:#88d5ff;font-size:0.0625rem;">${item.seriesName}<span><span style="font-size:0.0625rem;padding-left:0.1458rem;color:#88d5ff">${item.value}</span></div>`
                    　　})
                    　　return result
                    },
                },
                grid: {
                    left: "10%",
                    top: "17%",
                    right: "5%",
                    bottom: "25%"
                },
                xAxis: {
                    data: [
                        "00:00",
                        "02:00",
                        "04:00",
                        "06:00",
                        "08:00",
                    ],
                    axisLine: {
                        show: true, //隐藏X轴轴线
                        lineStyle: {
                            color: "#7c8798",
                            width: 1
                        }
                    },
                    axisTick: {
                        show: false, //隐藏X轴刻度
                        alignWithLabel: true
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "#2f7fd5", //X轴文字颜色
                            fontSize: 12
                        },
                        interval: 0,
                    }
                },
                yAxis: [{
                        type: "value",
                        name: "个",
                        nameTextStyle: {
                            color: "#2f7fd5",
                            fontSize: 12
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type:'dashed',
                                width: 1,
                                color: "#394971" //横轴线条颜色
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: "#2f7fd5",
                                fontSize: 12
                            }
                        }
                    },
                ],
                series: [{
                        name: "2021.04",
                        type: "bar",
                        barWidth: 10,
                        barGap: '0%',
                        itemStyle: {
                            normal: {
                                color: "rgb(47,148,250)",
                            }
                        },
                        data: [24, 45, 43, 35, 76]
                    },

                    {
                        name: "2020.04",
                        type: "bar",
                        smooth: true,
                        barWidth: 10,
                        itemStyle: {
                            normal: {
                                color: "rgb(0,254,255)",
                            }
                        },
                        data: [20, 40,60, 80, 100]
                    }
                ]
            }
            //使用刚刚指定的配置项和数据项显示图表
            myChartanalysis.setOption(option);
        }
    }
}
</script>
<style scoped>
.fl{
    float: left;
}
.fr{
    float: right;
}
.clear{
    overflow: hidden;
}
.census-info{
    padding-top: 0.0729rem;
}
.census-accessmode{
    width: 45%;
}
.census-accessmode .bt{
    font-size: 0.0833rem;
    color: #ffffff;
    padding-left: 0.0729rem;
    background: url(../assets/line-02.png) center left no-repeat;
    background-size: 0.026rem 0.0677rem;
    text-align: left;
}
.accessmode-echarts{
    width: 100%;
    height: 1.0156rem;
    background: url(../assets/bg-06.png) center no-repeat;
    background-size: 100% 100%;
    margin-top: 0.0417rem;
    position: relative;
}
#accessmode{
    width:100%;
    height:1.0156rem;
    position: relative;
    z-index: 99;
}
.chargpiebg{
    position: absolute;
    left:17%;
    top: 24.5%;
    width: 0.5156rem;
    height: 0.5104rem;
    background: url(../assets/pic-11.png) center no-repeat;
    background-size: 100%;
}
.accessmode-num{
    position: absolute;
    top: 0.2969rem;
    right: 9%;
}
.accessmode-num span{
    display: block;
    text-align: right;
    color: #ffffff;
    font-size: 0.0833rem;
    padding-bottom: 0.0573rem;
}
.accessmode-num span em{
    font-style: normal;
    font-size: 0.0729rem;
    padding-left: 0.026rem;
}
.accessmode-num span em.hl{
    color: #00fbff;
}
.accessmode-num span em.pt{
    color: #0089ff;
}
.accessmode-num span em.hw{
    color: #fbc004;
}
.credit-statistics{
    width: 51%;
}
.info-bt{
    font-size: 0.0833rem;
    color: #ffffff;
    background:url(../assets/pic-10.png) 0.5781rem center no-repeat;
    background-size: 1.9479rem 0.0833rem;
    text-align: left;
}
.credit-div{
    width: 100%;
    height: 1.0156rem;
    box-sizing: border-box;
    padding: 0.0521rem 0.026rem;
    background: url(../assets/bg-07.png) center no-repeat;
    background-size: 100% 100%;
    margin-top: 0.0417rem;
    position: relative;
}
.credit-head{
    padding: 0.026rem 0.0521rem 0.026rem 0.1146rem;
    background: #0b4690;
}
.credit-head div{
    font-size: 0.0729rem;
    color: #78a8e2;
    margin-right: 0.1042rem;
    text-align: center;
}
.credit-head div:last-child{
    margin-right: 0;
}
.credit-head div.credit-name{
    width: calc(100% - 1.6146rem);
    margin-right: 0;
    text-align: left;
    height: 0.1979rem;
    line-height: 0.1979rem;
}
.credit-head div.credit-column-1,.credit-head div.credit-column-3,.credit-head div.credit-column-4{
    width: 0.3125rem;
}
.credit-head div.credit-column-2{
    width: 0.3646rem;
}
.credit-body-tr{
    background: rgba(11, 70, 144, 0.2);
    padding: 0 0.0521rem 0 0.1146rem;
}
.credit-body-tr:nth-child(2n){
    background: rgba(11, 70, 144, 0.6);
}
.credit-body-tr div{
    line-height: 0.1667rem;
}
.credit-body-tr div.credit-name{
    height: 0.1667rem;
    line-height: 0.1667rem;
}
.chargerank{
    width: 45%;
    margin-top: 0.1146rem;
}
.chargerank .info-bt{
    background:url(../assets/pic-10.png) 1.0417rem center no-repeat;
    background-size: 1.5625rem 0.0833rem;
}
.chargerank-echarts{
    width: 100%;
    height: 1.0156rem;
    background: url(../assets/bg-06.png) center no-repeat;
    background-size: 100% 100%;
    margin-top: 0.0417rem;
    position: relative;
}
#chargerank-echarts{
    width:100%;
    height:1.0156rem;
    position: relative;
    z-index: 99;
}
.cash-statistics{
    width: 51%;
    margin-top: 0.1146rem;
}
.cash-statistics .info-bt{
    background:url(../assets/pic-10.png) 0.7292rem center no-repeat;
    background-size: 1.9479rem 0.0833rem;
}
.cashstatistics-div{
    width: 100%;
    height: 1.0156rem;
    box-sizing: border-box;
    padding: 0.0521rem;
    background: url(/static/img/bg-07.ae2582b.png) center no-repeat;
    background-size: 100% 100%;
    margin-top: 0.0417rem;
    position: relative;
}
#cashstatistics-echarts{
    width: 75%;
    height: 1.0156rem;
}
.cashstatistics-all{
    width: 21%;
    height: 0.8854rem;
    box-sizing: border-box;
    background-color: #094897;
    padding: 0.0781rem 0.0521rem;
}
.cashstatistics-info{
    padding-bottom: 0.0417rem;
    border-bottom: 0.0052rem solid #3c82c2;
}
.cashstatistics-info span{
    display: block;
    text-align: left;
}
.cashstatistics-info .num{
    font-size: 0.0938rem;
    color: #ffffff;
    padding-bottom: 0.0521rem;
}
.cashstatistics-info .unit{
    font-size: 0.0625rem;
    color: #88d5ff;
    padding-bottom: 0.026rem;
}
.cashstatistics-info .total{
    font-size: 0.0729rem;
    color: #88d5ff;
}
.cashstatistics-img{
    width: 0.3125rem;
    height: 0.3385rem;
    background: url(../assets/pic-12.png) center no-repeat;
    background-size: 100%;
    margin-left: -0.0521rem;
}
@media (max-width: 1800px){
    .chargpiebg{
        left:16%;
    }
}
@media (max-width: 1680px){
    .chargpiebg{
        left:15.4%
    }
}
@media (max-width: 1440px){
    .chargpiebg{
        left:13%;
    }
}
</style>
<style>

</style>