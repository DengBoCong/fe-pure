<template>
  <div>
    <el-card>
      <el-transfer
        v-model="value"
        :props="{
          key: 'value',
          label: 'desc'
        }"
        :data="data">
      </el-transfer>
    </el-card>
    <el-card>
      <el-button @click="resetDateFilter">清除日期过滤器</el-button>
      <el-button @click="clearFilter">清除所有过滤器</el-button>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          fixed
          sortable
          prop="id"
          label="ID">
        </el-table-column>
        <el-table-column
          sortable
          prop="accessPath"
          label="权限路径">
        </el-table-column>
        <el-table-column
          sortable
          prop="access"
          label="权限级别">
        </el-table-column>
        <el-table-column
          prop="description"
          label="描述"
          width="150">
        </el-table-column>
        <el-table-column
          prop="sort"
          label="排序">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { getAllAcessPathOrderBySort } from '@/api/access'

export default {
  name: 'Access',
  components: {
    //
  },
  data() {
    const generateData = _ => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          value: i,
          desc: `备选项 ${ i }`,
          disabled: i % 4 === 0
        });
      }
      return data;
    };
    return {
      data: generateData(),
      value: [],
      tableData: [],
    };
  },
  methods: {
    resetDateFilter() {
      this.$refs.filterTable.clearFilter('date');
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    }
  },
  mounted() {
    getAllAcessPathOrderBySort().then(res => {
      this.tableData = res.data.data;
    })
  },
  computed: {
    //
  }
}
</script>