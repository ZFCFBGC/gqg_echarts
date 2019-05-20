import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  linkActiveClass: "active",
  routes: [
    //首页
    {
      path: "/",
      name: "Home",
      component: resolve => require(["@/pages"], resolve)
    },
    {
      path: "/demol",
      name: "Demol",
      component: resolve => require(["@/pages/demol"], resolve)
    },
    {
      path: "/lineDemol",
      name: "LineDemol",
      component: resolve => require(["@/pages/lineDemol"], resolve)
    },
    {
      path: "/pieDemol",
      name: "PieDemol",
      component: resolve => require(["@/pages/pieDemol"], resolve)
    },
    {
      path: "/scatter",
      name: "Scatter",
      component: resolve => require(["@/pages/scatter"], resolve)
    }
  ]
});
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);

  // 	if(from.query.shareId){
  // 	to.query.shareId=from.query.shareId
  // }

  var url = location.search; //获取url中"?"符后的字串

  var theRequest = new Object();
  //要微信支付的页面都要在这里加上判断条件；
  if (to.meta.pay) {
    let paths = window.location.href.split("#");
    if (paths[0].indexOf("?") == -1) {
      let query = "";
      // console.log(to.query)
      for (let i in to.query) {
        // console.log(to.query[i])
        query += i + "=" + to.query[i] + "&";
      }

      let newUrl =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        "?#" +
        to.name +
        "?" +
        query;

      if (to.name == "IndentState") {
        window.location.href = newUrl;
      } else {
        window.location.replace(newUrl);
      }
    } else {
      next();
    }
  } else {
    if (url) {
      let hash = "";

      if (
        url.indexOf("from=timeline") != -1 ||
        url.indexOf("from=groupmessage") != -1 ||
        url.indexOf("from=singlemessage") != -1
      ) {
        hash = location.hash.split("?")[1];
      }

      if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
          theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
      }
      let openId = theRequest.code; //授权后的code

      if (!openId) {
        next();
      } else {
        var newUrl =
          window.location.protocol +
          "//" +
          window.location.host +
          window.location.pathname +
          "#/" +
          to.name +
          url +
          "&" +
          hash;

        window.location.replace(newUrl);
      }
    } else {
      next();
    }
  }
});

router.onError(error => {
  //路由跳转失败
  console.log(error);
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  console.log(router.history.pending.fullPath, ".history,fullPath");
  //const targetPath = router.history.pending.fullPath;
  if (isChunkLoadFailed) {
    //  router.replace(targetPath);
    Toast({
      message: "请检查您的网络是否畅通",
      forbidClick: true,
      position: "bottom",
      duration: 5000
    });
  }
});

export default router;
