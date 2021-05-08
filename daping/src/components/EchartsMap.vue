<template>
    <div class="wrap-map">
        <div style="width:100%;position:absolute;z-index:999">
            <div id="myChart" style="width:100%;height:680px;margin:0 auto;transform: rotate3d(1, 0, 0, 20deg);"></div>
        </div>
        <div class="echarts-map">
            
        </div>
        <div ref="aaa" class="map-nav">
           <span>全国站点总览</span>
        </div>
        <div class="overviewdata" ref="viewChina" v-show="viewChina"></div>
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
      Pic:Pic,
      viewChina:false,
    }
  },
  mounted(){
    this.drawMap();
  },
  methods: {
    lookVideoGo(){
        console.log("1111")
    },
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
            },
            {
            name: "新城植物园",
            value: ["110.489356", "37.94083"],
            id: 2,
            code: "110000D0002",
            type: "Z",
            date: "2019-10-21",
            city: "河北省",
            }
        ]
    let option = {
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
                // top:'6%',
                // left:'13%',
                layoutCenter: ['50%', '46%'],
                layoutSize: '105%',
                roam: false,
                zoom: 1.1,
                z:80,
                animation:false,
                itemStyle: {
                    normal: {
                        // areaColor:'#1667ab',
                        borderWidth: 1, // 区域边框宽度
                        borderColor: "#49a6e1", // 区域边框颜色
                    },
                    // emphasis: {
                    //     areaColor:'#1667ab',
                    // }
                },
                regions: that.regions
            },
            {
                show: true,
                map: "china",
                saspectScale: 0.85,
                // top:'9%',
                // left:'13%',
                layoutCenter: ['50%', '50%'],
                layoutSize: '105%',
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
                animation: false,
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
                // top:'12%',
                // left:'13%',
                layoutCenter: ['50%', '53%'],
                layoutSize: '105%',
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
                animation: false,
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
                // top:'15%',
                // left:'13%',
                layoutCenter: ['50%', '56%'],
                layoutSize: '105%',
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
                animation: false,
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
                // top:'6%',
                // left:'13%',
                layoutCenter: ['50%', '46%'],
                layoutSize: '105%',
                roam: false,
                animation: false,
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
            right:'3%',
            bottom:'10%',
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
        tooltip : {
            show:true,
            // alwaysShowContent:true,
            triggerOn: "click",
            backgroundColor:"transparent",
            borderWidth:0,
            padding:0,
            extraCssText: 'box-shadow: 0 0 0px rgba(0, 0, 0, 0)',
            position: function (pos, params, dom, rect, size) {
                let x = pos[0]
                let y = pos[1]
                dom.style.transform = 'translateZ(0)'
                return [rect.x+10,rect.y-100];
            },
            formatter:function(params){
                let result = '';
                if(params.componentSubType == "scatter" && params.componentType == "series"){
                    result += `<div class="vvv" style="width:282px;height:145px;box-sizing:border-box;background:url(${that.Bg}) center no-repeat;padding-top:7px;padding-left:73px;">
                    <span style="font-size:14px;color:#ffffff;display:block;text-align:left;">场站名称</span>
                    <div style="overflow:hidden;">
                        <div style="width:90px;height:90px;float:left;margin-top:15px;display:flex;justify-content:center;align-items:center;flex-direction: column;background:url(${that.Pic}) center no-repeat;">
                            <div style="font-size:14px;color:#ffffff;line-height: 14px;padding-top: 5px;">15.74%</div>
                            <div style="font-size:12px;color:#ffffff;transform: scale(0.8);line-height: 14px;">业务进度</div>
                        </div>
                        <div style="float:left;padding-left:18px;padding-top:20px;">
                            <div style="font-size:12px;color:#a5c9e5;text-align:left;line-height: 14px;">状态</div>
                            <div style="font-size:14px;color:#4bfefc;text-align:left;padding-bottom:8px;">正常使用</div>
                            <div style="font-size:12px;color:#a5c9e5;text-align:left;line-height: 14px;">地址</div>
                            <div style="font-size:14px;color:#4bfefc;text-align:left;">正常使用</div>
                        </div>
                    </div></div>`
                    return result
                }else{
                    return result
                }
            }

        },
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
                data: hwdata,
                z:2000,
                symbolSize: function(val) {
                    return 12
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
            },
            // {
            //     name: "报警点位",
            //     type: "scatter",
            //     coordinateSystem: "geo",
            //     hoverAnimation: false,
            //     symbolSize: [24, 30],
            //     tooltip:{
            //         confine:true
            //     },
            //     label: {
            //         show: true,
            //         width:212,
            //         height:145,
            //         position: [18, -85],
            //         padding:[0,0,0,70],
            //         color: "#fff",
            //         confine:true,
            //         backgroundColor: {
            //             image: that.Bg
            //         },
            //         rich:{
            //             a:{
            //                 fontSize:14,
            //                 verticalAlign:'center',
            //                 align:'left',
            //                 padding:[12,0,16,4],
            //             },
            //             b:{
            //                 backgroundColor: {
            //                     image: that.Pic,
            //                 },
            //                 width:90,
            //                 height:90,
            //                 align:'left',
            //             }
            //         },
            //         formatter:  (name)=>{
            //             let arr = [
            //                 '{a|'+name.seriesName+'}',
            //                 '{b|}',
            //             ]
            //             return `{a|${name.seriesName}}\n{b|}{c|状态\n{b|这么}}`
            //         }, 
            //         borderRadius: 6,
            //     },
            //     z:99,
            //     data: [{
            //             name: "点位9",
            //             value: [125, 30.218085],
            //             alarmType: '类型1',
            //             alarmTime: '2020-12-1 12:00',
            //             alarmCount: '3'
            //         },
            //     ]
            // }
        ]
    };
        that.option = JSON.parse(JSON.stringify(option))
        myChart.setOption(option);
        // if(document.getElementsByClassName('vvv')[0]){
        //     document.getElementsByClassName('vvv')[0].setAttribute('style', 'display:none')
        // }
        this.$refs.aaa.addEventListener("click",() => {
            document.getElementsByClassName('vvv')[0].setAttribute('style', 'display:none')
        })
        myChart.on("click", params => {
            if(params.componentType === "geo"){
                console.log(params,"1212")
                let option = myChart.getOption();//获得option对象
                let mapCode = that.checkMap(params.name)
                if(mapCode){
                    that.viewChina = true
                    $.getJSON(`/static/mapData/${mapCode}.json`,(data) => {
                        echarts.registerMap(mapCode, data);
                        option.geo.forEach((item,index) => {
                            item.map = mapCode
                            item.itemStyle.areaColor = "#1667ab"
                            item.emphasis.itemStyle.areaColor = "#1667ab"
                            item.zoom = 1
                        })
                        myChart.setOption(option);
                    })
                }
            }
            if (params.componentType === "series" && params.componentSubType === "scatter") {
                const index = params.dataIndex;
                
            }else{

            }
        });
        this.$refs.viewChina.addEventListener("click",() => {
            myChart.setOption(that.option)
            that.viewChina = false
        })
    },
    checkMap(name){
        switch (name) {
            case '新疆':
                return 'xinjiang'
                break;
            case '河北':
                return 'hebei'
                break;
            case '内蒙古':
                return 'neimenggu'
                break;
            case '黑龙江':
                return 'heilongjiang'
                break;
            default:
                break;
        }
    },
    aaa(){
        console.log("1111")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap-map{
    position: relative;
    width: 51%;
    height:830px;
}
.echarts-map{
    width:100%;
    height:830px;
    background: url(../assets/bg-04.png) top left no-repeat;
    background-size: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
.map-nav{
    position: absolute;
    z-index: 9999;
    width: 300px;
    height: 75px;
    left: 33%;
    top: 0;
    background: url(../assets/btn-02.png) center no-repeat;
}
.map-nav span{
    font-size: 16px;
    color: #ffffff;
    display: inline-block;
    padding-top: 36px;
    text-align: center;
}
.overviewdata{
    width: 168px;
    height: 78px;
    background:url(../assets/pic-05.png) center no-repeat;
    background-size: 100%;
    position: absolute;
    z-index: 9999;
    left: 5%;
    top: 1%;
    cursor: pointer;
}
.aaa{
    width:282px;
    height:145px;
    box-sizing:border-box;
    background:url(../assets/bg-03.png) center no-repeat;
    position:relative;
    z-index:9999;
    padding-top:7px;
    padding-left:73px;
}
.bbb{
    background:url(../assets/pic-04.png) center no-repeat;
}
</style>

