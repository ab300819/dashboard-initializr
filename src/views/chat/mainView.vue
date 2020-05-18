<template>
  <div class="main_container">
    <el-container>
      <el-header>Chat Online</el-header>
      <el-container>
        <el-aside>
          <chat-list></chat-list>
        </el-aside>
        <el-container>
          <el-main>
            <chat-window></chat-window>
          </el-main>
          <el-footer>
            <chat-input></chat-input>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import chatWindow from './chatWindow.vue';
import chatInput from './chatInput.vue';
import chatList from './chatList.vue';

export default {
  name: 'main_view',
  components: {
    chatWindow,
    chatInput,
    chatList
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
