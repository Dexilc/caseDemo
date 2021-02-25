<!--
* @description  参数1
* @fileName  tableDemo
* @author userName
* @date 2021-02-24 17:04:32
* @version V1.0.0
!-->
<template>
  <div id='tableDemo'
             class='tableDemo'>
                <m-table :columns="tableColumns" :data="tableData"></m-table>
    <hr>
     <ve-table
    border-y
    fixed-header
    :max-height="360"
    :columns="columns"
    :table-data="tData"
    :footer-data="footerData"
    rowKeyFieldName="rowkey"
  />
  <br>
  <router-link to='/flipClock'
   > <span role="link">flipClock</span>
   flipClock</router-link>
  </div>
</template>

<script>
import mTable from '../components/mTable.vue'
export default {
  props: { // 父辈向子辈传参
  },
  name: 'tableDemo',
  data () {
    return {
        tableColumns: [
        {
          title: 'Name',
          key: 'name',
          width: 120
        },
        {
          title: 'Age',
          key: 'age',
          textAlign: 'right',
          render(val) {
            if (val >= 18) {
              return "<span style='color:green'>" + val + '</span>'
            } else {
              return "<span style='color:red'>" + val + '</span>'
            }
          }
        },
        {
          title: 'Address',
          key: 'address',
          width: 250
        }
      ],
      tableData: [
        {
          name: 'John Brown',
          age: 14,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 17,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ],
      columns: [
          { field: "name", key: "a", title: "Name", align: "center" },
          { field: "date", key: "b", title: "Date", align: "left" },
          { field: "hobby", key: "c", title: "Hobby", align: "center" },
          { field: "address", key: "d", title: "Address", align: "left" },
        ],
        tData: [],
        footerData: [],

    }
  },
  created () { // 实例被创建之后执行代码
   this.initTableData();
      this.initFooterData();

    },
  computed: { // 计算属性

    },
  components: { // 组件的引用
  mTable

    },
  methods: { // 方法

    initTableData() {
        let data = [];
        for (let i = 0; i < 15; i++) {
          data.push({
            rowkey: i,
            name: i,
            date: i,
            hobby: i,
            address: i,
          });
        }
        this.tData = data;
      },
      initFooterData() {
        this.footerData = [
          {
            rowkey: 0,
            name: "平均值",
            date: 213,
            hobby: 355,
            address: 189,
          },
          {
            rowkey: 1,
            name: "汇总值",
            date: 1780,
            hobby: 890,
            address: 2988,
          },
        ];
      },

    },
  mounted () { // 页面进入时加载内容

    },
  watch: { // 监测变化

    }
}
</script>
<style scoped lang='scss'>
</style>