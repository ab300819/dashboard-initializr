<template>
    <div class="main_container">
        <el-container>
            <el-header>Chat Online</el-header>
            <el-container>
                <el-aside ><chat_list></chat_list></el-aside>
                <el-container>
                    <el-main>
                        <chat_window></chat_window>
                    </el-main>
                    <el-footer><chat_input></chat_input></el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>

</template>

<script>
    import chat_window from "./chat_window.vue"
    import chat_input from  "./chat_input.vue"
    import chat_list from "./chat_list.vue"

    export default {
        name: "main_view",
        components: {
            chat_window,
            chat_input,
            chat_list
        }
    }
</script>

<style>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

    .main_container {
        width: 85%;
    }
</style>