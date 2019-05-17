<template>
  <div class="home">
    <h1 style="font-size:16px;">柱状图Bar</h1>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
  </div>
</template>

<script>
import Header from "@/components/common/header.vue";
export default {
  data() {
    return {
      freeshow: false,
      title: "gqg"
    };
  },
  components: {
    Header
  },
  mounted() {
    this.goCharts();
  },
  methods: {
    goCharts() {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
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
          //borderRadius: 10, //边框切圆角
          //shadowBlur: 10, //图形阴影模糊大小.
          //shadowColor: "aqua", //阴影颜色
          //shadowOffsetX: "60", //阴影水平方向上的偏移距离
          //shadowOffsetY: "70", //阴影垂直方向上的偏移距离
          // textAlign: 'auto',//整体（包括 text 和 subtext）的水平对齐
          // textVerticalAlign: 'auto',//整体（包括 text 和 subtext）的垂直对齐。

          textStyle: {
            //主标题的属性
            color: "#C28D21", //颜色
            fontSize: 20, //大小
            //fontStyle: "oblique", //斜体
            fontWeight: "700", //粗细
            fontFamily: "monospace" //字体
            // textBorderColor: "#000",//描边
            // textBorderWidth: '2',//描边的宽度
            //textShadowColor: "red", //阴影颜色
            //textShadowBlur: "10", //阴影的宽度
            //textShadowOffsetX: "-0", //阴影向X偏移
            //textShadowOffsetY: "-70" //阴影向Y偏移
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
                // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为
                //           'inside'|'left'|'right'|'top'|'bottom'
                // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
              }
            },
            emphasis: {
              // color: '各异',
              barBorderColor: "rgba(0,0,0,0)", // 柱条边线
              barBorderRadius: 0, // 柱条边线圆角，单位px，默认为0
              barBorderWidth: 1, // 柱条边线线宽，单位px，默认为1
              label: {
                show: false
                // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为
                //           'inside'|'left'|'right'|'top'|'bottom'
                // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
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
      });
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  font-size: 0.36rem;
  height: 0.36rem;
  touch-action: none;
}
</style>
