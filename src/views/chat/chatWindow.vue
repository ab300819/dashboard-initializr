<template>
  <div id="chat" class="chat-wrap">
    <ul class="message-list">
      <li class="message-item message-item-left">
        <div>大爷，马冬梅在家么？</div>
      </li>
      <li class="message-item message-item-right">
        <div>马什么梅？</div>
      </li>
      <li class="message-item message-item-left">
        <div>马东梅！</div>
      </li>
      <li class="message-item message-item-left">
        <div>马东梅！</div>
      </li>
      <li class="message-item message-item-right">
        <div>什么梅？</div>
      </li>
      <li class="message-item message-item-right">
        <div>马什么梅？</div>
      </li>
      <li class="message-item message-item-left">
        <div>马东梅！</div>
      </li>
      <li class="message-item message-item-left">
        <div>马东梅！</div>
      </li>
      <li class="message-item message-item-right">
        <div>什么梅？</div>
      </li>
      <li class="message-item message-item-right">
        <div>马什么梅？</div>
      </li>
      <li class="message-item message-item-left">
        <div>马东梅！</div>
      </li>
      <li class="message-item message-item-left">
        <div>马东梅！</div>
      </li>
      <li class="message-item message-item-right">
        <div>什么梅？</div>
      </li>
      <li class="message-item message-item-right">
        <div>马什么梅？</div>
      </li>
      <li class="message-item message-item-left">
        <div>马东梅！</div>
      </li>
      <li class="message-item message-item-left">
        <div>马东梅！</div>
      </li>
      <li class="message-item message-item-right">
        <div>什么梅？</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'chatWindow'
};
</script>

<style >
.chat-wrap {
  height: 500px;
  border: 1px solid #ccc;
  margin: 20px auto;
  overflow-y: auto;
}

.message-list {
  list-style: none;
  padding: 10px;
}

.message-item {
  margin-bottom: 10px;
}

.message-item > div {
  display: inline-block;
  padding: 5px 10px;
  background-color: #ddd;
  border-radius: 3px;
  border: 1px solid #ccc;
  text-align: left;
}

.message-item-right {
  text-align: right;
}

.message-item-left {
  text-align: left;
}
</style>
