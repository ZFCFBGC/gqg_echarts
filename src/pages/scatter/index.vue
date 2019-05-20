<template>
  <div>
    <h1 style="font-size:16px;">散点图scatter</h1>
    <div id="myChart" :style="{width: '100%', height: '400px'}"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      freeshow: false,
      title: "gqg",
      barOption: {
        title: {
          text: "百度一下", //主标题
          link: "http://www.baidu.com", //主标题超链接
          target: "blank", //副标题的超链接打开方式
          subtext: "中国\n杭州", //副标题 \n 用于换行
          sublink: "http://www.baidu.com", //副标题超链接
          subtarget: "blank", //副标题超链接打开方式
          itemGap: 20, //主副标题间距
          x: "center", //主副标题的水平位置
          y: "bottom", //主副标题的垂直位置
          padding: 5, //标题内边距,
          backgroundColor: "#ccc", //背景颜色；
          borderColor: "#000", //边框的颜色
          borderWidth: 0, //标签线框

          textStyle: {
            //主标题的属性
            color: "#C28D21", //颜色
            fontSize: 20, //大小
            //fontStyle: "oblique", //斜体
            fontWeight: "700", //粗细
            fontFamily: "monospace" //字体
          },
          subtextStyle: {
            //副标题的属性
            color: "#25664A"
            // 同主标题
          }
        },
        // 提示框
        tooltip: {
          trigger: "item", // 触发类型，默认数据触发，见下图，可选为：'item' ¦ 'axis'
          showDelay: 20, // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
          hideDelay: 100, // 隐藏延迟，单位ms
          transitionDuration: 0.4, // 动画变换时间，单位s
          backgroundColor: "rgba(0,0,0,0.7)", // 提示背景颜色，默认为透明度为0.7的黑色
          borderColor: "#333", // 提示边框颜色
          borderRadius: 4, // 提示边框圆角，单位px，默认为4
          borderWidth: 0, // 提示边框线宽，单位px，默认为0（无边框）
          padding: 5, // 提示内边距，单位px，默认各方向内边距为5，
          // 接受数组分别设定上右下左边距，同css
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line", // 默认为直线，可选为：'line' | 'shadow'
            lineStyle: {
              // 直线指示器样式设置
              color: "#48b",
              width: 2,
              type: "solid"
            },
            shadowStyle: {
              // 阴影指示器样式设置
              width: "auto", // 阴影大小
              color: "rgba(150,150,150,0.3)" // 阴影颜色
            }
          },
          textStyle: {
            color: "#fff"
          }
        },
        // 柱形图默认参数
        bar: {
          barMinHeight: 0, // 最小高度改为0
          // barWidth: null,        // 默认自适应
          barGap: "30%", // 柱间距离，默认为柱形宽度的30%，可设固定值
          barCategoryGap: "20%", // 类目间柱形距离，默认为类目间距的20%，可设固定值
          itemStyle: {
            normal: {
              // color: '各异',
              barBorderColor: "#fff", // 柱条边线
              barBorderRadius: 0, // 柱条边线圆角，单位px，默认为0
              barBorderWidth: 1, // 柱条边线线宽，单位px，默认为1
              label: {
                show: false
              }
            },
            emphasis: {
              // color: '各异',
              barBorderColor: "rgba(0,0,0,0)", // 柱条边线
              barBorderRadius: 0, // 柱条边线圆角，单位px，默认为0
              barBorderWidth: 1, // 柱条边线线宽，单位px，默认为1
              label: {
                show: false
              }
            }
          }
        },

        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
    };
  },
  components: {},
  mounted() {
    this.goCharts();
  },
  methods: {
    randomNum(digitNumber, holdNumber) {
      var random = Math.random();
      random = Math.pow(10, digitNumber) * random;
      random = random.toFixed(holdNumber);
      return random;
    },
    goCharts() {
      
      var that = this
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      myChart.setOption({
        title: {
          text: "2018年广州市空气首要污染物天数占比",
          subtext: "",
          x: "16",
          textStyle: { fontWeight: "normal" }
        },
        toolbox: {
          orient: "horizontal",
          feature: {
            magicType: {
              type: ["line", "bar"]
            },
            // restore: { show: true },
            saveAsImage: { show: true }
          },
          bottom: 15,
          right: 20
        },
        grid: {
          // 上下左右边距
          top: "20%",
          bottom: "10%",
          left: "8%",
          right: "8%",
          containLabel: true
        },
        tooltip: {
          padding: 10,
          backgroundColor: "#222",
          borderColor: "#777",
          borderWidth: 1,
          formatter: function(obj) {
            var value = obj.value;
            return (
              '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
              obj.seriesName +
              " " +
              value[0] +
              "日：" +
              value[2] +
              "</div>" +
              value[1] +
              "<br>"
            );
          }
        },
        xAxis: {
          type: "value",
          name: "时间",
          nameTextStyle: {
            color: "#6d9269",
            fontSize: 14
          },
          nameGap: 16,
          max: 23,
          splitLine: {
            // 竖线
            show: false
          }
        },
        yAxis: {
          type: "value",
          name: "单位：吨",
          nameLocation: "end",
          nameGap: 20,
          nameTextStyle: {
            color: "#6d9269",
            fontSize: 16
          },
          axisTick: {
            // 轴的刻度
            show: false
          },
          axisLine: {
            // 轴线
            show: false
          }
        },
        series: [
          {
            name: "北京",
            type: "scatter",
            itemStyle: {
              normal: {
                color: "#6d9269" //散点的颜色
              }
            },
            data: [
              [1, this.randomNum(4, 0), "优"],
              [2, this.randomNum(4, 0), "优"],
              [3, this.randomNum(4, 0), "优"],
              [4, this.randomNum(4, 0), "优"],
              [5, this.randomNum(4, 0), "优"],
              [6, this.randomNum(4, 0), "优"],
              [7, this.randomNum(4, 0), "优"],
              [8, this.randomNum(4, 0), "优"],
              [9, this.randomNum(4, 0), "优"],
              [10, this.randomNum(4, 0), "优"],
              [11, this.randomNum(4, 0), "优"],
              [12, this.randomNum(4, 0), "优"],
              [13, this.randomNum(4, 0), "优"],
              [14, this.randomNum(4, 0), "优"],
              [15, this.randomNum(4, 0), "优"],
              [16, this.randomNum(4, 0), "优"],
              [17, this.randomNum(4, 0), "优"],
              [18, this.randomNum(4, 0), "优"],
              [19, this.randomNum(4, 0), "优"],
              [20, this.randomNum(4, 0), "优"],
              [21, this.randomNum(4, 0), "优"],
              [22, this.randomNum(4, 0), "优"],
              [23, this.randomNum(4, 0), "优"]
            ]
          }
        ]
      });
    }
  }
};
</script>
<style lang="less" scoped>
</style>