<template>
    <div class="">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-copy"></i>  消息中心</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-tabs v-model="message">
                <el-tab-pane :label="`未读消息(${state.unread.length})`" name="first">
                    <el-table :data="state.unread" :show-header="false" style="width: 100%">
                        <el-table-column>
                            <template #default="scope">
                                <span class="message-title">{{scope.row.title}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="date" width="180"></el-table-column>
                        <el-table-column width="120">
                            <template #default="scope">
                                <el-button size="small" @click="handleRead(scope.$index)">标为已读</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="handle-row">
                        <el-button type="primary">全部标为已读</el-button>
                    </div>
                </el-tab-pane>
                <el-tab-pane :label="`已读消息(${state.read.length})`" name="second">
                    <template v-if="message === 'second'">
                        <el-table :data="state.read" :show-header="false" style="width: 100%">
                            <el-table-column>
                                <template #default="scope">
                                    <span class="message-title">{{scope.row.title}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="date" width="150"></el-table-column>
                            <el-table-column width="120">
                                <template #default="scope">
                                    <el-button type="danger" @click="handleDel(scope.$index)">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="handle-row">
                            <el-button type="danger">删除全部</el-button>
                        </div>
                    </template>
                </el-tab-pane>
                <el-tab-pane :label="`回收站(${state.recycle.length})`" name="third">
                    <template v-if="message === 'third'">
                        <el-table :data="state.recycle" :show-header="false" style="width: 100%">
                            <el-table-column>
                                <template #default="scope">
                                    <span class="message-title">{{scope.row.title}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="date" width="150"></el-table-column>
                            <el-table-column width="120">
                                <template #default="scope">
                                    <el-button @click="handleRestore(scope.$index)">还原</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="handle-row">
                            <el-button type="danger">清空回收站</el-button>
                        </div>
                    </template>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
    name: "tabs",
    setup() {
        const message = ref("first");
        const state = reactive({
            unread: [
                {
                    date: "2018-04-19 20:00:00",
                    title: "2021-2022赛季的NBA赛事于6月17日落下帷幕,金州勇士击败凯尔特人成为了最终的总冠军。",
                },
                {
                    date: "2018-04-19 21:00:00",
                    title: "姚明当选NBA状元20周年,一起回顾他的高光时刻_运动家_澎湃新闻...",
                },
            ],
            read: [
                {
                    date: "2018-04-19 20:00:00",
                    title: "【系统通知】曾凡博谈落选NBA选秀:不会放弃,继续闯,继续拼",
                },
            ],
            recycle: [
                {
                    date: "2018-04-19 20:00:00",
                    title: "【系统通知】今天,热火为新秀尼古拉-约维奇举行了新闻发布会。 约维奇谈到了被热火队选中:“我迫不及待想打篮球了,我喜欢篮球比赛。",
                },
            ],
        });

        const handleRead = (index) => {
            const item = state.unread.splice(index, 1);
            console.log(item);
            state.read = item.concat(state.read);
        };
        const handleDel = (index) => {
            const item = state.read.splice(index, 1);
            state.recycle = item.concat(state.recycle);
        };
        const handleRestore = (index) => {
            const item = state.recycle.splice(index, 1);
            state.read = item.concat(state.read);
        };

        return {
            message,
            state,
            handleRead,
            handleDel,
            handleRestore,
        };
    },
};
</script>

<style>
.message-title {
    cursor: pointer;
}
.handle-row {
    margin-top: 30px;
}
</style>

