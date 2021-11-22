<template>
  <div class="tags-view-container">
    <router-link
      class="tages-view"
      v-for="tag in visitedViews"
      :key="tag.path"
      :to="tag.path"
    >
      <!-- <el-tag
        :closable="true"
        :class="isActive(tag.path) ? 'active' : ''"
        @click.prevent="colseViewTabs(tag, $event)"
      >
      </el-tag> -->
      {{ tag.name }}
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visitedViews: [
        { name: "tag1", path: "/liebiaoguanli" },
        { name: "tag2", path: "/liebiaoguanli" },
        { name: "tag3", path: "/liebiaoguanli" },
        { name: "tag4", path: "/liebiaoguanli" },
        { name: "tag5", path: "/liebiaoguanli" },
        { name: "tag6", path: "/liebiaoguanli" },
        { name: "tag6", path: "/liebiaoguanli" },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.tags-view-container {
  .tages-view {
    margin: 5px 5px;
    padding: 4px 20px;
    display: inline-block;
    border: 1px solid #555;
  }
}
</style>
