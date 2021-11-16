//SidebarItem.vue
<template>
  <div class="menu-wrapper">
    <!--$router.options.routes获取router的内容-->
    <!-- 循环router,获取第一层item1 -->
    <template v-for="item1 in $router.options.routes">
      <!-- 判断是否第二层item2  -->
      <div
        v-if="item1.children != null && item1.children.length > 0"
        :key="item1.path"
      >
        <!-- 第二层存在 展示第二层 -->
        <el-submenu :index="item1.path" :key="item1.path">
          <template slot="title">
            <span>{{ item1.name }}</span>
          </template>

          <!-- 循环第二层item2获取第三层item3 -->
          <template v-for="item2 in item1.children">
            <!-- 判断是否存在第三层，如果存在则显示 -->
            <div
              v-if="item2.children != null && item2.children.length > 0"
              :key="item2.path"
            >
              <!-- 展示第三层 -->
              <el-submenu :index="item2.path" :key="item2.path">
                <template slot="title">{{ item2.name }}</template>
                <template v-for="item3 in item2.children">
                  <router-link
                    v-if="
                      item3.path != null &&
                      item3.path.indexOf('http') != 0 &&
                      item3.path != ''
                    "
                    :to="item2.path + '/' + item3.path"
                    :key="item3.path"
                  >
                    <el-menu-item :index="item3.path">{{
                      item3.name
                    }}</el-menu-item>
                  </router-link>
                </template>
              </el-submenu>
            </div>
            <!-- 如果第三层不存在则只展示第二层 -->
            <div v-else :key="item2.path">
              <router-link
                v-if="
                  item2.path != null &&
                  item2.path.indexOf('http') != 0 &&
                  item2.path != ''
                "
                :to="item1.path + '/' + item2.path"
                :key="item2.name"
              >
                <el-menu-item :index="item2.path">{{
                  item2.name
                }}</el-menu-item>
              </router-link>
            </div>
          </template>
        </el-submenu>
      </div>
      <!-- 如果第二层不存在则只展示第一层 -->
      <div v-else :key="item1.path">
        <router-link
          v-if="
            item1.path != null &&
            item1.path.indexOf('http') != 0 &&
            item1.path != ''
          "
          :to="item1.path"
          :key="item1.name"
        >
          <el-menu-item :index="item1.path">{{ item1.name }}</el-menu-item>
        </router-link>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    routes: {
      type: Array,
    },
  },
  data() {
    return {
      status: 0,
    };
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped></style>
