<template>
  <div class="main_container">
    <el-container>
      <el-header>Chat Online</el-header>
      <el-container>
        <el-aside>
          <chat_list></chat_list>
        </el-aside>
        <el-container>
          <el-main>
            <chat_window></chat_window>
          </el-main>
          <el-footer>
            <chat_input></chat_input>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import chat_window from './chat_window.vue';
import chat_input from './chat_input.vue';
import chat_list from './chat_list.vue';

export default {
  name: 'main_view',
  components: {
    chat_window,
    chat_input,
    chat_list
  }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.main_container {
  width: 85%;
}
</style>
