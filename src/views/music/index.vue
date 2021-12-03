<template>
  <div>
    <h1>music page</h1>
    <h1>music page</h1>
    <h1>music page</h1>
    <h1>music page</h1>
    <h1>music page</h1>
    <el-button @click="download">下载</el-button>
  </div>
</template>
<script>
import { tools_downLoad } from "@/utils/downLoad";

export default {
  data() {
    return {
      // path: "http://dev.fund.boyachain.cn/attachment/template/%E4%BB%BD%E9%A2%9D%E7%99%BB%E8%AE%B0/%E6%8E%88%E6%9D%83%E5%A7%94%E6%89%98%E4%B9%A6.pdf",
      // path: "https://npmmirror.com/mirrors/node/v16.13.0/node-v16.13.0-x64.msi",
      // path: "https://npmmirror.com/mirrors/node/v16.13.0/node-v16.13.0-win-x86.zip",
    };
  },
  methods: {
    download() {
      tools_downLoad(this.path);
    },
  },
};
</script>
