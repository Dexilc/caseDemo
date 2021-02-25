<!--
* @description  参数1
* @fileName  mTable
* @author userName
* @date 2021-02-22 10:50:15
* @version V1.0.0
!-->
<template>
  <div id='mTable'
             class='table'>
  <ul class="tr">
    <li class="th" :style="styles(item)" v-for="item in columns" :key="item.key">{{item.title}}</li>
  </ul>
  <ul class="tr" v-for="(row, index) in data" :key="index">
    <li
      class="td"
      :style="styles(item)"
      v-for="item in columns"
      :key="item.key"
      v-html="item.render?item.render(row[item.key]):row[item.key]"
    ></li>
  </ul>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      default() {
        return []
      }
    },
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    styles(item) {
      let { width, textAlign } = item
      return {
        width: (width || 100) + 'px',
        textAlign: textAlign || 'left'
      }
    }
  }
}
</script>
<style scoped lang='scss'>
.table {
  overflow: auto;
  font-size: 0;

  .tr {
    display: inline-flex;
    min-width: 100%;
    border-bottom: 1px solid #a7bfda;

    &:nth-child(2n) {
      background-color: #d1dfec;
    }

    .th {
      font-weight: bold;
    }

    .th,
    .td {
      display: inline-block;
      padding: 10px 15px;
      box-sizing: border-box;
      flex-grow: 1;
      font-size: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>