<template>
  <div class="hello" style="width:50%;height:580px">
      <div style="padding: 0;margin:0 auto;">
          <div id="myChart" style="width:100%;height:580px;transform: rotate3d(1, 0, 0, 45deg);"></div>
      </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import '../assets/china.js'
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
      yList:[100]
    }
  },
  mounted(){
    this.drawMap();
  },
  methods: {
    drawMap(){
      this.myChart=echarts.init(document.getElementById("myChart"));
    let option = {
        backgroundColor: 'transparent',
        geo: [
            {
                map: 'china',
                top:'20%',
                left:'20%',
                zoom: 1.3,
                aspectScale: 0.85,
                layoutCenter: ["50%", "54%"], //地图位置
                layoutSize: '100%',
                z:1,
                regions: [
                    {
                        name: "南海诸岛",
                        itemStyle: {
                            normal: {
                                opacity: 0, // 透明度
                            },
                        },
                    },
                    {
                        name: "内蒙古",
                        itemStyle: {
                            normal: {
                                opacity: 0, // 透明度
                            },
                        },
                    }
                ],
                label: {
                    normal: {
                        show: 0,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    emphasis: {
                        show: 0,
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: '#000',  // 地图样色
                        borderColor: "rgb(41,233,246)",
                        borderWidth: 5,
                    },
                    emphasis: {
                        areaColor: '#013C62',
                        borderWidth: 5,
                        
                    }
                },
            },
            {
            map: 'china',
            top:'20%',
            left:'20%',
            zoom: 1.3,
            aspectScale: 0.85,
            layoutCenter: ["50%", "54%"], //地图位置
            layoutSize: '100%',
            z:2,
            regions: [
                {
                    name: "福建",
                    itemStyle: {
                        normal: {
                            borderColor: "transparent",  // 省份界线颜色
                            borderWidth: 3,  // 省份界线的宽度
                            areaColor:  'rgb(6,69,140)',  // 整个省份的颜色
                        },
                        emphasis: {
                            areaColor: 'rgb(6,69,140)'
                        }
                    },
                },
                {
                    name: "南海诸岛",
                    itemStyle: {
                        normal: {
                            opacity: 0, // 透明度
                        },
                        
                    },
                },
                {
                    name: "内蒙古",
                    itemStyle: {
                        normal: {
                            opacity: 0, // 透明度
                        },
                    },
                }
            ],
            label: {
                normal: {
                    show: 0,
                    textStyle: {
                        color: '#fff'
                    }
                },
                emphasis: {
                    show: 0,
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#013C62',  // 地图样色
                    show: 0,
                },
                emphasis: {
                    areaColor: '#013C62',
                }
            },
        }
        ],
        series: [
        ]
      };
      setTimeout(this.renderEachCity, 0);
      let throttledRenderEachCity = this.throttle(this.renderEachCity, 0);
      this.myChart.on('geoRoam', throttledRenderEachCity);
      this.myChart.setOption(option);
    },
    makeMapData(rawData) {
        var mapData = [];
        for (var i = 0; i < rawData.length; i++) {
            var geoCoord = this.geoCoordMap[rawData[i][0]];
            if (geoCoord) {
                mapData.push({
                    name: rawData[i][0],
                    value: geoCoord.concat(rawData[i].slice(1))
                });
            }
        }
        return mapData;
    },
    renderEachCity() {
        let option = {
            xAxis: [],
            yAxis: [],
            grid: [],
            series: []
        };
        let dom = 200;
        let barWidth = dom / 20;
        let that = this;
        echarts.util.each(that.rawData, function(dataItem, idx) {
            let geoCoord = that.geoCoordMap[dataItem[0]];
            let coord = that.myChart.convertToPixel('geo', geoCoord);
            idx += '';

            let inflationData = [30];
            option.xAxis.push({
                id: idx,
                gridId: idx,
                type: 'category',
                name: '', //dataItem[0] 柱状体底部名称
                nameLocation: 'middle',
                nameGap: 3,
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: '#666'
                    }
                },
                // data: xAxisCategory,
                data: ["数据A"],
                z: 5

            });
            option.yAxis.push({
                id: idx,
                gridId: idx,
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#1C70B6'
                    }
                },
                z: 5
            });
            option.grid.push({
                id: idx,
                width: 30,
                height: 40,
                left: coord[0] - 15,
                top: coord[1] - 15,
                z: 100
            });
            option.series.push(
                {
            type: 'map',
            mapType: 'china',
            aspectScale: 0.85,
            layoutCenter: ["50%", "50%"], //地图位置
            layoutSize: '100%',
            zoom: 1.3, //当前视角的缩放比例
            // roam: true, //是否开启平游或缩放
            scaleLimit: { //滚轮缩放的极限控制
                min: 1,
                max: 2
            },
            z:88,
            itemStyle: {
                normal: {
                    areaColor: '#0c274b',
                    borderColor: '#1cccff',
                    borderWidth: 1.5
                },
                emphasis: {
                    areaColor: '#02102b',
                    label: {
                        show:false,//是否显示 省份文字
                    }

                }
            },
            data:[{ name: "南海诸岛",  
              itemStyle: {  
                normal: {opacity: 0}  
              }  
            }]


        },
                {
            type: 'bar',
            barWidth: barWidth,
            id: idx,
                    xAxisId: idx,
                    yAxisId: idx,
            z: 200,
            itemStyle: {
                normal: {
                    color: function(params) {
                        return 'rgb(36,246,251)';
                    }
                }
            },
            label: {
                show: false,
                position: [barWidth / 2, -(barWidth + 20)],
                color: '#ffffff',
                fontSize: 12,
                fontStyle: 'bold',
                align: 'center',
            },
            data: that.yList
        },
        {
            z: 200,
            type: 'pictorialBar',
            data: that.yList,
            xAxisId: idx,
            yAxisId: idx,
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
                normal: {
                    color: function(params) {
                        return 'rgb(36,246,251)';
                    },
                }
            },
        },
        {
            z: 200,
            type: 'pictorialBar',
            xAxisId: idx,
            yAxisId: idx,
            symbolPosition: 'end',
            data: that.yList,
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    color: function(params) {
                        return 'rgb(36,246,251)';
                    },

                }
            },
        }
        );
        });
        console.log(option)
        this.myChart.setOption(option);
    },
    throttle(fn, delay, debounce) {
        var currCall;
        var lastCall = 0;
        var lastExec = 0;
        var timer = null;
        var diff;
        var scope;
        var args;

        delay = delay || 0;

        function exec() {
            lastExec = (new Date()).getTime();
            timer = null;
            fn.apply(scope, args || []);
        }

        var cb = function() {
            currCall = (new Date()).getTime();
            scope = this;
            args = arguments;
            diff = currCall - (debounce ? lastCall : lastExec) - delay;

            clearTimeout(timer);

            if (debounce) {
                timer = setTimeout(exec, delay);
            } else {
                if (diff >= 0) {
                    exec();
                } else {
                    timer = setTimeout(exec, -diff);
                }
            }

            lastCall = currCall;
        };

        return cb;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
