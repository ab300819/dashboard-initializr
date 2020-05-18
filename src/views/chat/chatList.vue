<template>
    <div class="friend_list_wrap">
        <ul class="friend_list">
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'chat_list'
};
</script>

<style>
    .friend_list_wrap {
        height: 620px;
        overflow-y: auto;
    }

    .friend_list {
        list-style: none;
    }
</style>
