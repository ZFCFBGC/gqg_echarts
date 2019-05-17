import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// 最好提前在你的store中初始化好所有你所需的属性
const store = () =>
  new Vuex.Store({
    state: {
      userId: "",
      token: "",
      meta: {},
      user: {},
      menuList: [],
      permission: {}
    },
    mutations: {
      // 登录
      login(state, payload) {
        state.token = payload.key;
        state.userId = payload.id;
        // 部署不一定是在根路径, 所以cookie要设置path
        let path = this.$router.options.base;
        cookie.set("token", payload.key, { path });
        cookie.set("userId", payload.id, { path });
      },
      //退出
      logout(state) {
        state.token = "";
        state.userId = "";
        let path = this.$router.options.base;
        cookie.remove("token", { path });
        cookie.remove("userId", { path });
      },
      // 更新
      update(state, payload) {
        Object.keys(payload).forEach(k => {
          state[k] = payload[k];
        });
      }
    },
    actions: {
      async login(context, payload) {
        // store 对象
        // console.log(context)
        let { commit, state, dispatch } = context;

        // let resp = await this.$axios.$post(
        //   `/security/api/v1/users/login`,
        //   payload
        // );
        // commit("login", resp.payload);

        // dispatch("fetchUserAndMenuList", { userId: resp.payload.id });
      },
      async fetchUserAndMenuList({ commit }, { userId }) {
        // let user = await this.$axios.$get(`/security/api/v1/users/${userId}`);

        // commit("update", { user: user.payload });

        // let menuResources = await this.$axios.$get(
        //   `/security/api/v1/users/${userId}/menuResources`
        // );
        // if (!menuResources.payload)
        //   menuResources.payload = {
        //     menu: [],
        //     permission: {}
        //   };

        // commit("update", {
        //   menuList: menuResources.payload.menu,
        //   permission: menuResources.payload.permission
        // });
      },
      // 配置的元信息
      async fetchMetaInfo({ commit }, { projectNo }) {
        // let resp = await this.$axios.$get("/security/api/v1/configs");
        // let meta = {};
        // resp.payload.forEach(item => {
        //   meta[item.key] = item.value;
        // });
        // commit("update", { meta });
      }
    }
  });

export default store;
