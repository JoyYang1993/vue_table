<!--模板-->
<template>
  <div class="yjTable">
    <el-table :data="tableData" style="width: 80%;">

      <el-table-column label="日期&时间">
        <!--第一列-日期-->
        <el-table-column prop="" label="" width="100">
          <el-table-column prop="date" label="日期" width="100"></el-table-column>
        </el-table-column>

        <!--第二列-星期几-->
        <el-table-column prop="" label="" width="100">
          <el-table-column prop="day" label="星期" width="100"></el-table-column>
        </el-table-column>

      </el-table-column>

      <el-table-column label="每一天需要自己主动完成的学习任务，为了更好地自己而努力。">

        <el-table-column prop="" label="06:00-06:40" width="120">
          <el-table-column prop="day_one_col" label="'微软小英'记单词" width="120">

          </el-table-column>
        </el-table-column>

        <el-table-column prop="" label="07:25-07:45" width="120">
          <el-table-column prop="day_two_col" label="'考研帮'记单词" width="120"></el-table-column>
        </el-table-column>

        <el-table-column prop="" label="08:10-08:30" width="160">
          <el-table-column prop="day_three_col" label="测试早上记过的单词" width="160"></el-table-column>
        </el-table-column>

        <el-table-column prop="" label="08:40-09:20" width="200">
          <el-table-column prop="day_four_col" label="35~40个单词每个写5遍&()" width="200"></el-table-column>
        </el-table-column>

        <el-table-column prop="" label="12:40-13:30" width="200">
          <el-table-column prop="day_five_col" label="看书，目前是'平凡的世界'" width="200"></el-table-column>
        </el-table-column>

        <el-table-column prop="" label="20:30-21:00" width="260">
          <el-table-column prop="day_six_col" label="'微软小英'|'英语趣配音'练习英语口语" width="260"></el-table-column>
        </el-table-column>

        <el-table-column prop="" label="21:00-23:00" width="300">
          <el-table-column prop="day_seven_col" label="写代码，学习前端或者Python相关知识" width="300"></el-table-column>
        </el-table-column>

        <el-table-column prop="" label="23:00-24:00" width="340">
          <el-table-column prop="day_eight_col" label="坚持训练'keep'App上面的瘦腿教程，准备睡觉" width="340"></el-table-column>
        </el-table-column>

      </el-table-column>
    </el-table>

    <div class="input-suffix" style="width: 70%;border: 1px solid gray">
      <el-date-picker v-model="date_input" type="date" placeholder="选择日期"></el-date-picker>
    </div>


  </div>
</template>

<!--Vue-->
<script>
export default {
  name: 'yjTable',
  data () {
    return {
      date_input: '',
      day_input: '',
      tableData: [{
        date: '2018-01-01',
        day: '一',
        day_one_col: 'OK',
        day_two_col: 'OK',
        day_three_col: 'OK',
        day_four_col: 'OK并写了一页英语单词的中文',
        day_five_col: '该死，玩手机了',
        day_six_col: 'OK',
        day_seven_col: 'OK',
        day_eight_col: 'OK'
      }]
    }
  }
}
</script>

<!--CSS样式：用less-->
<style lang="less">
  @titleColor: #4A4C49;
  @fontColor: #111111;
  @completeColor: #31AB51;
  @notCompleteColor: #D86B5D;
  .yjTable{

  }

</style>
