<template>
  <div>
    <h1>downLoad 方法</h1>
    <el-button @click="downloadMsi">下载msi格式文件</el-button>
    <el-button @click="downloadZip">下载zip格式文件</el-button>
    <el-button @click="downloadPdf">下载pdf格式文件</el-button>
    <h1>保留任意位数的小数</h1>
    输入小数：<input v-model="num" type="number"> <br>
    输入保留位数：<input v-model="decimal" type="number"> <br>
    <el-button @click="getDecimal">截取小数</el-button>
    <span>
      <strong> 结果(小数位四舍五入)：{{ result }}</strong>
    </span>
    <h1>数字金额转文字 函数</h1>
    请输入金额：<input v-model="money" type="number">
    <br>
    <el-button @click="changeMoney">转换</el-button>

    转换后：<span>{{ chMoney }}</span> <br>

    <!-- <el-button @click="arrayObjSort">转换</el-button>
    <h1>范围随机数</h1>
    最小数：<input v-model="min" type="number"><br>
    最大数：<input v-model="max" type="number"><br>
    <el-button @click="getRandom">获取随机数</el-button><span>{{ randomNum }}</span>
    <h1>字符转换</h1>
    <input v-model="str" type="text">
    <el-button @click="changeCase((changeNum = 1))">首字母大写</el-button>
    <el-button @click="changeCase((changeNum = 2))">首字母小写</el-button>
    <el-button @click="changeCase((changeNum = 3))">大小写转换</el-button>
    <el-button @click="changeCase((changeNum = 4))">全部大写</el-button>
    <el-button @click="changeCase((changeNum = 5))">全部小写</el-button> -->
    <h1>计算日期差函数</h1>
    <el-date-picker
      v-model="date1"
      type="date"
      placeholder="选择日期"
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd"
    />
    <!-- format:显示的格式，value-format：获取的时间格式 -->
    <el-date-picker
      v-model="date2"
      type="date"
      placeholder="选择日期"
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd"
    />
    <el-button
      @click="datediff"
    ><span>日期时间差：{{ timeDiff }} 天</span></el-button>
  </div>
</template>
<script>
import { tools_downLoad } from '@/utils/downLoad'
import { keepAnyDecimal } from '@/utils/keepDecimal'
import { convertCurrency } from '@/utils/money'
import { objTransArray } from '@/utils/objToArray'
import { arrayObjSort } from '@/utils/arraySort'
import { random } from '@/utils/random'
import { changeCase } from '@/utils/changeCase'
import { Datediff } from '@/utils/dateDiff'

export default {
  data() {
    return {

      pathPdf:
        'https://jwc.sdust.edu.cn/system/_content/download.jsp?urltype=news.DownloadAttachUrl&owner=1457114122&wbfileid=4635578',
      pathMsi:
        'https://npmmirror.com/mirrors/node/v16.13.0/node-v16.13.0-x64.msi',
      pathZip:
        'https://npmmirror.com/mirrors/node/v16.13.0/node-v16.13.0-win-x86.zip',
      num: 22.123456,
      decimal: 3,
      result: '',
      money: 54321.1234,
      chMoney: '',
      obj: { num: '111', num2: '222', num3: '333' },
      objArray: [
        { name: 'zhan', age: 12, height: 173, sex: 'nan' },
        { name: 'xin', age: 22, height: 184, sex: 'nan' },
        { name: 'tom', age: 13, height: 143, sex: 'nan' },
        { name: 'jock', age: 2, height: 13, sex: 'nv' },
        { name: 'zoom', age: 32, height: 183, sex: 'nan' }
      ],
      orderByType: 'desc',
      min: 1,
      max: 2,
      randomNum: 1.3,
      str: 'abcdefg',
      changeNum: 1,
      date1: '',
      date2: '',
      timeDiff: '时间'
    }
  },
  watch: {},
  created() {
    this.objTArray()
    // this.arrayObjSort();
  },
  methods: {
    downloadPdf() {
      tools_downLoad(this.pathPdf)
    },
    downloadMsi() {
      tools_downLoad(this.pathMsi)
    },
    downloadZip() {
      tools_downLoad(this.pathZip)
    },
    getDecimal() {
      console.log(this.num, this.decimal)
      this.result = keepAnyDecimal(this.num, this.decimal)
    },
    changeMoney() {
      this.chMoney = convertCurrency(this.money)
    },
    objTArray() {
      const array = objTransArray(this.obj)
      console.log('对象转换为数组：', array)
    },
    arrayObjSort() {
      const array2 = arrayObjSort(
        this.objArray,
        this.objArray.height,
        this.orderByType
      )
      console.log('排序之后的数组:', array2)
    },
    getRandom() {
      this.randomNum = random(this.min, this.max)
    },
    changeCase(changeNum) {
      // 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写
      this.str = changeCase(this.str, changeNum)
    },
    datediff() {
      console.log(this.date2, this.date1)
      this.timeDiff = Datediff(this.date1, this.date2)
    }
  }
}
</script>
