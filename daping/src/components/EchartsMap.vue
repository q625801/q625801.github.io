<template>
    <div class="wrap-map">
        <div style="width:100%;position:absolute;z-index:999">
            <div id="myChart" style="width:100%;height:680px;margin:0 auto;transform: rotate3d(1, 0, 0, 20deg);"></div>
        </div>
        <div class="echarts-map">
            
        </div>
        
    </div>
  
</template>

<script>
import * as echarts from 'echarts';
import '../assets/china.js'
import regionColor from './region.js'
import Bg from '../assets/bg-03.png'
import Pic from '../assets/pic-04.png'
export default {
  name: 'hello',
  data () {
    return {
      myChart:'',
      geoCoordMap:{
          "武汉": [112,30],
          "浙江": [118, 29.8773],
      },
      rawData:[
          ["武汉",10,20,30],
          ["浙江",20,10,30],
      ],
      yList:[100],
      option:'',
      regions:regionColor,
      Bg:Bg,
      Pic:Pic
    }
  },
  mounted(){
    this.drawMap();
  },
  methods: {    
    drawMap(){
        let that = this;
        let myChart=echarts.init(document.getElementById("myChart"));
        let hwdata = [{
            name: "景山公园",
            value: ["116.489356", "39.94083"],
            id: 4,
            code: "110000Z0004",
            type: "Z",
            date: "2019-10-01",
            city: "北京市"
        }]
        let ptzldata = [
            {
            name: "老城动物园",
            value: ["114", "30"],
            id: 3,
            code: "110000D0003",
            type: "D",
            date: "2019-10-16",
            city: "山西省",
        }]
        let hlhtdata = [
            {
            name: "新城植物园",
            value: ["114.489356", "37.94083"],
            id: 2,
            code: "110000D0002",
            type: "Z",
            date: "2019-10-21",
            city: "河北省",
            }
        ]
    that.option = {
        backgroundColor: "transparent",
        geo: [
            {
                show: true,
                map: "china",
                label: {
                    normal: {
                        show: false,
                        color: "#fff"
                    },
                    emphasis: {
                        show: false
                    }
                },
                top:'6%',
                left:'6%',
                roam: false,
                zoom: 1.1,
                z:80,
                itemStyle: {
                    normal: {
                        borderWidth: 1, // 区域边框宽度
                        borderColor: "#49a6e1", // 区域边框颜色
                    },
                    
                },
                regions: that.regions
            },
            {
                show: true,
                map: "china",
                saspectScale: 0.85,
                layoutSize: '100%',
                top:'9%',
                left:'6%',
                label: {
                    normal: {
                        show: false,
                        color: "#fff"
                    },
                    emphasis: {
                        show: false
                    }
                },
                roam: false,
                zoom: 1.1,
                itemStyle: {
                    normal: {
                        borderWidth: 2, // 区域边框宽度
                        borderColor: "#15b1ff", // 区域边框颜色
                        opacity:0.5,
                    },
                    
                },
                regions: that.regions
            },
            {
                show: true,
                map: "china",
                saspectScale: 0.85,

                layoutSize: '100%',
                top:'12%',
                left:'6%',
                label: {
                    normal: {
                        show: false,
                        color: "#fff"
                    },
                    emphasis: {
                        show: false
                    }
                },
                roam: false,
                zoom: 1.1,
                itemStyle: {
                    normal: {
                        borderWidth: 2, // 区域边框宽度
                        borderColor: "#15b1ff", // 区域边框颜色
                        opacity:0.3,
                    },
                    
                },
                regions: that.regions
            },
            {
                show: true,
                map: "china",
                saspectScale: 0.85,

                layoutSize: '100%',
                top:'15%',
                left:'6%',
                label: {
                    normal: {
                        show: false,
                        color: "#fff"
                    },
                    emphasis: {
                        show: false
                    }
                },
                roam: false,
                zoom: 1.1,
                itemStyle: {
                    normal: {
                        borderWidth: 2, // 区域边框宽度
                        borderColor: "#15b1ff", // 区域边框颜色
                        opacity:0.1,
                    },
                    
                },
                regions: that.regions
            },
            {
                show: true,
                map: "china",
                label: {
                    normal: {
                        show: false,
                        color: "#fff"
                    },
                    emphasis: {
                        show: false
                    }
                },
                top:'6%',
                left:'6%',
                roam: false,
                zoom: 1.1,
                itemStyle: {
                    normal: {
                        borderWidth: 8, // 区域边框宽度
                        borderColor: "#2edfff", // 区域边框颜色
                    },
                    
                },
                regions: that.regions
            }
        ],
        legend: {
            backgroundColor:'rgba(0,0,0,0.5)',
            orient: 'vertical',
            padding:15,
            borderWidth:2,
            borderColor:'#0265b0',
            itemWidth:12,
            left:'41%',
            bottom:'11%',
            textStyle:{
                rich:{
                    a:{
                        fontSize:14,
                        verticalAlign:'top',
                        align:'center',
                        padding:[0,0,0,11],
                        lineHeight:13,
                    },
                }
            },
            formatter:  (name)=>{
                let arr = [
                    '{a|'+name+'}',
                ]
                return arr.join('\n')
            },
            data: [
                {
                    name: '红外接入',
                    // 强制设置图形为圆。
                    icon: 'circle',
                    // 设置文本为红色
                    textStyle: {
                        color: '#ffc000'
                    },
                    itemStyle:{
                        borderWidth: 10, // 区域边框宽度
                        borderColor: "rgba(255,192,0,0.3)", // 区域边框颜色
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
                        borderWidth: 10, // 区域边框宽度
                        borderColor: "rgba(0,138,255,0.3)", // 区域边框颜色
                    },
                },
                {
                    name: '互联互通',
                    // 强制设置图形为圆。
                    icon: 'circle',
                    // 设置文本为红色
                    textStyle: {
                        color: '#00fbff'
                    },
                    itemStyle:{
                        borderWidth: 10, // 区域边框宽度
                        borderColor: "rgba(0,251,255,0.3)", // 区域边框颜色
                    },
                }
            ],
            
        },
        tooltip : {},
        grid:{
            containLabel:true,
            },
        series: [     
            {
                name: '红外接入',
                type: 'scatter',
                coordinateSystem: 'geo',
                itemStyle: {
                    normal: {
                        color: '#ffc000',
                        borderWidth:10,
                        borderColor:'rgba(255,192,0,0.29)',
                        opacity:1
                    }
                },
                // rippleEffect: {
                //     period: 4,
                //     brushType: 'fill',
                //     scale: 3,
                //     color:'rgba(255,192,0,0.4)'
                // },
                data: hwdata,
                z:2000,
                symbolSize: function(val) {
                    return 12
                },
                tooltip:{
                    position: function (pos, params, dom, rect, size) {
                        console.log(pos,params,dom,rect,size)
                        let x = pos[0]
                        let y = pos[1]
                        return [rect.x+15,rect.y-100];
                    },
                    formatter:function(params){

                    }
                },
                showEffectOn: 'render', //加载完毕显示特效
            },
            {
                name: '平台直连',
                type: 'scatter',
                coordinateSystem: 'geo',
                itemStyle: {
                    normal: {
                        color: '#008aff',
                        borderWidth:10,
                        borderColor:'rgba(0,138,255,0.29)',
                        opacity:1
                    }
                },
                data: ptzldata,
                z:2000,
                symbolSize: function(val) {
                    return 12
                },
                tooltip:{
                    position: function (pos, params, dom, rect, size) {
                        console.log(pos,params,dom,rect,size)
                        let x = pos[0]
                        let y = pos[1]
                        return [rect.x+15,rect.y-100];
                    },
                },
                showEffectOn: 'render', //加载完毕显示特效
                
            },
            {
                name: '互联互通',
                type: 'scatter',
                coordinateSystem: 'geo',
                itemStyle: {
                    normal: {
                        color: '#00fbff',
                        borderWidth:10,
                        borderColor:'rgba(0,251,255,0.29)',
                        opacity:1
                    }
                },
                data: hlhtdata,
                z:2000,
                symbolSize: function(val) {
                    return 12
                },
                showEffectOn: 'render', //加载完毕显示特效
                tooltip:{
                    position: function (pos, params, dom, rect, size) {
                        console.log(pos,params,dom,rect,size)
                        let x = pos[0]
                        let y = pos[1]
                        return [rect.x+15,rect.y-100];
                    },
                }
            },
            {
                name: "报警点位",
                type: "scatter",
                coordinateSystem: "geo",
                hoverAnimation: false,
                symbolSize: [24, 30],
                tooltip:{
                    confine:true
                },
                label: {
                    show: true,
                    width:212,
                    height:145,
                    position: [18, -85],
                    padding:[0,0,0,70],
                    color: "#fff",
                    confine:true,
                    backgroundColor: {
                        image: that.Bg
                    },
                    rich:{
                        a:{
                            fontSize:14,
                            verticalAlign:'center',
                            align:'left',
                            padding:[12,0,16,4],
                        },
                        b:{
                            backgroundColor: {
                                image: that.Pic,
                            },
                            width:90,
                            height:90,
                            align:'left',
                        }
                    },
                    formatter:  (name)=>{
                        let arr = [
                            '{a|'+name.seriesName+'}',
                            '{b|}',
                        ]
                        return `{a|${name.seriesName}}\n{b|}{c|状态\n{b|这么}}`
                    }, 
                    borderRadius: 6,
                },
                z:99,
                data: [{
                        name: "点位9",
                        value: [125, 30.218085],
                        alarmType: '类型1',
                        alarmTime: '2020-12-1 12:00',
                        alarmCount: '3'
                    },
                ]
            }
        ]
    };
        myChart.setOption(that.option);
        // myChart.dispatchAction({
        //             type: "showTip",
        //             seriesIndex: 0, //第几条series
        //             dataIndex: 0 //第几个tooltip
        //         });
                // 高亮指定的散点
        myChart.on("click", params => {
            if (params.componentType === "series" && params.componentSubType === "scatter") {
                const index = params.dataIndex;
                that.option.series.push()
            myChart.setOption(that.option);
                // 取消所有散点高亮
                // that.myChart.dispatchAction({
                //     type: "downplay",
                //     seriesIndex: 0 //第几条series
                // });
                // // 显示指定data 的tooltip
                // that.myChart.dispatchAction({
                //     type: "showTip",
                //     seriesIndex: 0, //第几条series
                //     dataIndex: index //第几个tooltip
                // });
                // // 高亮指定的散点
                // that.myChart.dispatchAction({
                //     type: "highlight",
                //     seriesIndex: 0, //第几条series
                //     dataIndex: index //第几个tooltip
                // });
            }
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap-map{
    position: relative;
    width: 100%;
    height:830px;
}
.echarts-map{
    width:51%;
    height:830px;
    background: url(../assets/bg-04.png) top left no-repeat;
    background-size: 100%;
    position: absolute;
    left: 0;
    top: 0;
}

</style>

