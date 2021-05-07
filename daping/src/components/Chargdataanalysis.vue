<template>
    <div class="fl charg-linebar">
        <div class="bt">充电数据分析</div>
        <div class="charg-analysis">
            <div class="wrap-analysis">
                <div class="analysis-btn">
                    <span class="on">平台直连</span><span>互联互通</span><span>红外接入</span>
                </div>
                <div class="analysis-two">
                    <div class="single-shot">
                        <div class="single-icon"></div>
                        <span class="num">23.45%</span>
                        <span class="analysis-text">单枪日均利用率</span>
                    </div>
                    <div class="single-shot">
                        <div class="dailycharge-icon"></div>
                        <span class="num">2311.45</span>
                        <span class="analysis-text">单枪日均充电量<em>度</em></span>
                    </div>
                </div>
                <div class="echarts-analysis" id="Cgdataanalysis" style="width:82%;height:250px"></div>
            </div>
        </div>
    </div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    name:'Cgdataanalysis',
    data(){
        return{
            
        }
    },
    mounted(){
        this.lineDraw();
    },
    methods:{
        lineDraw(){
             //初始化ehcharts实例
            let myChartanalysis=echarts.init(document.getElementById("Cgdataanalysis"));
            //指定图表的配置项和数据
            var option = {
    backgroundColor: 'transparent',
    tooltip: {
        trigger: "axis",
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
        }
    },
    grid: {
        left: "4%",
        top: "17%",
        right: "5%",
        bottom: "14%"
    },
    legend: [
        {
            itemWidth: 20,
            itemHeight: 10,
            data: [{
                name: '单枪充电量',
                icon: 'rect', // 用矩形替换
                itemStyle:{
                    color:'#2f94fa'
                }
            }],
            top: "-2%",
            right:"32%",
            textStyle: {
                color: "#ffffff",
                fontSize: 14
            }
        },
        {
            itemWidth: 20,
            itemHeight: 2,
            data: [{
                name: '单枪利用率',
                icon: 'rect', // 用矩形替换
                itemStyle:{
                    color:'#ffad33'
                }
            }],
            top: "-2%",
            right:"15%",
            textStyle: {
                color: "#ffffff",
                fontSize: 14
            }
        }
    ],
    xAxis: {
        data: [
            "00:00",
            "02:00",
            "04:00",
            "06:00",
            "08:00",
            "10:00",
            "12:00",
            "14:00",
            "16:00",
            "18:00",
            "20:00",
            "22:00",
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
            name: "度",
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
        {
            type: "value",
            name: "%",
            nameTextStyle: {
                color: "#2f7fd5",
                fontSize: 12
            },
            position: "right",
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#396A87",
                    width: 2
                }
            },
            axisLabel: {
                show: true,
                formatter: "{value}", //右侧Y轴文字显示
                textStyle: {
                    color: "#2f7fd5",
                    fontSize: 12
                }
            }
        }
    ],
    series: [{
            name: "单枪充电量",
            type: "bar",
            barWidth: 25,
            itemStyle: {
                normal: {
                    color: "rgb(47,149,250)",
                }
            },
            data: [24, 45, 43, 35, 76, 154, 86, 42, 68, 97, 24]
        },

        {
            name: "单枪利用率",
            type: "line",
            smooth: true,
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            symbol: 'none', //标记的图形为实心圆
            lineStyle: {
                color: "rgb(250,174,48)",
                width: 2,
            },
            data: [20, 40,60, 80, 100, 3, 4.2, 3.5, 2.9, 7.8, 2]
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
.charg-linebar{
    width: 50%;
}
.charg-analysis{
    width: 100%;
    box-sizing: border-box;
    padding-right: 10px;
    height: 300px;
}
.wrap-analysis{
    border: 1px solid #004d9f;
    height: 100%;
    background: url(../assets/bg-02.png) center no-repeat;
    background-size: 100% 100%;
    position: relative;
}
.wrap-analysis .echarts-analysis{
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 0 10px;
}
.charg-linebar .bt{
    font-size: 16px;
    color: #ffffff;
    text-align: left;
    margin-bottom: 10px;
    width: 310px;
    background: url(../assets/pic-01.png) center right no-repeat;
}
.analysis-two{
    width: 128px;
    position: absolute;
    left: 22px;
    bottom: 25px;
}
.single-shot{
    margin-top: 15px;
}
.single-shot .single-icon{
    width: 63px;
    height: 51px;
    background: url(../assets/pic-02.png) center no-repeat;
    background-size: 100%;
}
.single-shot .dailycharge-icon{
    width: 63px;
    height: 51px;
    background: url(../assets/pic-03.png) center no-repeat;
    background-size: 100%;
}
.single-shot span{
    display: block;
    padding-left: 8px;
}
.single-shot span.num{
    color: #ffffff;
    text-align: left;
    padding: 3px 0 3px 8px;
    font-size: 18px;
}
.single-shot span.analysis-text{
    color:#88d5ff;
    text-align: left;
    font-size: 14px;
}
.single-shot span.analysis-text em{
    font-size: 12px;
    color: #88d5ff;
    font-style: normal;
    padding-left: 7px;
}
.analysis-btn{
    position: absolute;
    top: 17px;
    left: 17px;
    font-size: initial;
    z-index: 99999;
}
.analysis-btn span{
    width: 88px;
    height: 32px;
    display: inline-block;
    color: #ffffff;
    background: #006bd8;
    line-height: 32px;
    border-radius: 5px;
    margin-right: 10px;
    font-size: 14px;
    cursor: pointer;
}
.analysis-btn span.on{
    background:url(../assets/btn-01.png) center no-repeat;
}
.analysis-btn span:hover{
    background:url(../assets/btn-01.png) center no-repeat;
}
</style>