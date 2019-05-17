<template>
  <div>
    <div>
      <h1 style="font-size:16px;">饼状图pie</h1>
      <div id="myChart" :style="{width: '100%', height: '400px'}"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  mounted() {
    this.goCharts();
  },
  methods: {
    goCharts() {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      myChart.setOption({
        title: {
          text: "学生生源地来源分布图",
          subtext: "模拟数据",
          // x 设置水平安放位置，默认左对齐，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
          x: "center",
          // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
          y: "top",
          // itemGap设置主副标题纵向间隔，单位px，默认为10，
          itemGap: 10,
          backgroundColor: "#EEE",
          // 主标题文本样式设置
          textStyle: {
            fontSize: 26,
            fontWeight: "bolder",
            color: "#000080"
          },
          // 副标题文本样式设置
          subtextStyle: {
            fontSize: 18,
            color: "#8B2323"
          }
        },
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
        legend: {
          // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
          orient: "vertical",
          // x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
          x: "left",
          // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
          y: "center",
          itemWidth: 24, // 设置图例图形的宽
          itemHeight: 18, // 设置图例图形的高
          textStyle: {
            color: "#666" // 图例文字颜色
          },
          // itemGap设置各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔
          itemGap: 30,
          backgroundColor: "#eee", // 设置整个图例区域背景颜色
          data: ["北京", "上海", "广州", "深圳", "郑州"]
        },
        series: [
          {
            name: "生源地",
            type: "pie",
            // radius: '50%',  // 设置饼状图大小，100%时，最大直径=整个图形的min(宽，高)
            radius: ["40%", "60%"], // 设置环形饼状图， 第一个百分数设置内圈大小，第二个百分数设置外圈大小
            center: ["50%", "50%"], // 设置饼状图位置，第一个百分数调水平位置，第二个百分数调垂直位置
            data: [
              { value: 335, name: "北京" },
              { value: 310, name: "上海" },
              { value: 234, name: "广州" },
              { value: 135, name: "深圳" },
              { value: 148, name: "郑州" }
            ],
            // itemStyle 设置饼状图扇形区域样式
            itemStyle: {
              // emphasis：英文意思是 强调;着重;（轮廓、图形等的）鲜明;突出，重读
              // emphasis：设置鼠标放到哪一块扇形上面的时候，扇形样式、阴影
              emphasis: {
                shadowBlur: 20,
                shadowOffsetX: 0,
                shadowColor: "rgba(30, 144, 255，0.5)"
              }
            },
            // 设置值域的那指向线
            labelLine: {
              normal: {
                show: false // show设置线是否显示，默认为true，可选值：true ¦ false
              }
            },
            // 设置值域的标签
            label: {
              normal: {
                position: "inner", // 设置标签位置，默认在饼状图外 可选值：'outer' ¦ 'inner（饼状图上）'
                // formatter: '{a} {b} : {c}个 ({d}%)'   设置标签显示内容 ，默认显示{b}
                // {a}指series.name  {b}指series.data的name
                // {c}指series.data的value  {d}%指这一部分占总数的百分比
                formatter: "{c}"
              }
            }
          },
          {
            name: "测试",
            type: "pie",
            // radius: '50%',  // 设置饼状图大小，100%时，最大直径=整个图形的min(宽，高)
            radius: ["20%", "40%"], // 设置环形饼状图， 第一个百分数设置内圈大小，第二个百分数设置外圈大小
            center: ["50%", "50%"], // 设置饼状图位置，第一个百分数调水平位置，第二个百分数调垂直位置
            data: [
              { value: 100, name: "国企股" },
              { value: 200, name: "摩恩从" },
              { value: 250, name: "网吧" },
              { value: 150, name: "重视" },
              { value: 90, name: "自己" }
            ],
            // itemStyle 设置饼状图扇形区域样式
            itemStyle: {
              // emphasis：英文意思是 强调;着重;（轮廓、图形等的）鲜明;突出，重读
              // emphasis：设置鼠标放到哪一块扇形上面的时候，扇形样式、阴影
              emphasis: {
                shadowBlur: 20,
                shadowOffsetX: 0,
                shadowColor: "rgba(255, 144, 255，0.5)"
              }
            },
            // 设置值域的那指向线
            labelLine: {
              normal: {
                show: false // show设置线是否显示，默认为true，可选值：true ¦ false
              }
            },
            // 设置值域的标签
            label: {
              normal: {
                position: "inner", // 设置标签位置，默认在饼状图外 可选值：'outer' ¦ 'inner（饼状图上）'
                // formatter: '{a} {b} : {c}个 ({d}%)'   设置标签显示内容 ，默认显示{b}
                // {a}指series.name  {b}指series.data的name
                // {c}指series.data的value  {d}%指这一部分占总数的百分比
                formatter: "{c}"
              }
            }
          }
        ]
      });
    }
  }
};
</script>