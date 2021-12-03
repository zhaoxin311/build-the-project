<template>
  <div>
    <h1>downLoad 方法</h1>
    <el-button @click="downloadMsi">下载msi格式文件</el-button>
    <el-button @click="downloadZip">下载zip格式文件</el-button>
    <el-button @click="downloadPdf">下载pdf格式文件</el-button>
    <h1>保留任意位数的小数</h1>
    输入小数：<input v-model="num" type="number" /> <br />
    输入保留位数：<input type="number" v-model="decimal" /> <br />
    <el-button @click="getDecimal">截取小数</el-button>
    <span>
      <strong> 结果(小数位四舍五入)：{{ result }}</strong></span
    >
  </div>
</template>
<script>
import { tools_downLoad } from "@/utils/downLoad";
import { keepAnyDecimal } from "@/utils/keepDecimal";

export default {
  data() {
    return {
      pathPdf:
        "http://dev.fund.boyachain.cn/attachment/template/%E4%BB%BD%E9%A2%9D%E7%99%BB%E8%AE%B0/%E6%8E%88%E6%9D%83%E5%A7%94%E6%89%98%E4%B9%A6.pdf",
      pathMsi:
        "https://npmmirror.com/mirrors/node/v16.13.0/node-v16.13.0-x64.msi",
      pathZip:
        "https://npmmirror.com/mirrors/node/v16.13.0/node-v16.13.0-win-x86.zip",
      num: 22.123456,
      decimal: 3,
      result: "",
    };
  },
  methods: {
    downloadPdf() {
      tools_downLoad(this.pathPdf);
    },
    downloadMsi() {
      tools_downLoad(this.pathMsi);
    },
    downloadZip() {
      tools_downLoad(this.pathZip);
    },
    getDecimal() {
      console.log(this.num, this.decimal);
      this.result = keepAnyDecimal(this.num, this.decimal);
    },
  },
};
</script>
