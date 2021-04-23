<template>
  <div class="hello">
    111
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  method:{
    init(){
      option = {
                backgroundColor: '#fff',
                geo: {
                    map: 'china',
                    aspectScale: 0.85,
                    layoutCenter: ["50%", "50%"], //地图位置
                    layoutSize: '100%',
                    itemStyle: {
                        normal: {
                            shadowColor: '#276fce',
                            shadowOffsetX: 0,
                            shadowOffsetY: 15,
                            opacity: 0.5,
                        },
                        emphasis: {
                            areaColor: '#276fce',

                        }
                    },
                    regions: [{ // 重点 部分 ,在这里给大家模拟一个省份颜色与界线颜色的修改,如果想修改多个省份就在后面多添加几个对象即可.
                                    name: "南海诸岛", // 对应的是import "./china"  数据中的名称如: name: "广东省"(下面有截图)
                                    itemStyle: {
                                        normal: {
                                            opacity: 0, // 透明度
                                            borderColor: "#fff", // 省份界线颜色
                                            borderWidth: 3, // 省份界线的宽度
                                            areaColor: 'red', // 整个省份的颜色
                                        },
                                    },
                                }],
                },
                series: [
                    // 常规地图
                    {
                        type: 'map',
                        mapType: 'china',
                        aspectScale: 0.85,
                        layoutCenter: ["50%", "50%"], //地图位置
                        layoutSize: '100%',
                        zoom: 1, //当前视角的缩放比例
                        // roam: true, //是否开启平游或缩放
                        scaleLimit: { //滚轮缩放的极限控制
                            min: 1,
                            max: 2
                        },
                        itemStyle: {
                            normal: {
                                areaColor: '#0c274b',
                                borderColor: '#1cccff',
                                borderWidth: 1.5


                            },
                            emphasis: {
                                areaColor: '#02102b',
                                label: {
                                    color: "#fff"
                                }

                            }
                        },


                    },
                ]
            };

            myChart.on('click', function(params) {
                console.log(params);
            });
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
