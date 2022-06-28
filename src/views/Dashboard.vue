<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card shadow="hover" class="mgb20" style="height:252px;">
                    <div class="user-info">
                        <img src="../assets/img/img.jpg" class="user-avator" alt />
                        <div class="user-info-cont">
                            <div class="user-info-name">{{ name }}</div>
                            <div>{{ role }}</div>
                        </div>
                    </div>
                    <div class="user-info-list">
                        上次登录时间：
                        <span>2022-6-28</span>
                    </div>
                    <div class="user-info-list">
                        上次登录地点：
                        <span>美国俄亥俄州</span>
                    </div>
                </el-card>
                <el-card shadow="hover" style="height:321px;">
                    <template #header>
                        <div class="clearfix">
                            <span>球员热度</span>
                        </div>
                    </template>
                    詹姆斯·哈登
                    <el-progress :percentage="71.3" color="#42b983"></el-progress>科比·布莱恩特
                    <el-progress :percentage="34.1" color="#f1e05a"></el-progress>凯里·欧文
                    <el-progress :percentage="73.7"></el-progress>勒布朗·詹姆斯
                    <el-progress :percentage="87.9" color="#f56c6c"></el-progress>
                    斯蒂芬·库里
                    <el-progress :percentage="91.3" color="	#FFA500"></el-progress>
                    凯文·杜兰特
                    <el-progress :percentage="81.3" color="	#9400D3"></el-progress>
                </el-card>
            </el-col>
            <el-col :span="16">
                <el-row :gutter="20" class="mgb20">
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-1">
                                <i class="el-icon-user grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">423</div>
                                    <div>现役球员总数</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-2">
                                <i class="el-icon-circle-plus-outline grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">31</div>
                                    <div>球员伤病人数</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-3">
                                <i class="el-icon-circle-close grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">564</div>
                                    <div>退役球员总数</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-card shadow="hover" style="height:473px;">
                    <template #header>
                        <div class="clearfix">
                            <span>球员绯闻</span>
                            <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
                        </div>
                    </template>

                    <el-table :show-header="false" :data="todoList" style="width:100%;">
                        <el-table-column width="40">
                            <template #default="scope">
                                <el-checkbox v-model="scope.row.status"></el-checkbox>
                            </template>
                        </el-table-column>
                        <el-table-column>
                            <template #default="scope">
                                <div class="todo-item" :class="{
                                        'todo-item-del': scope.row.status,
                                    }">{{ scope.row.title }}</div>
                            </template>
                        </el-table-column>
                        <el-table-column width="60">
                            <template>
                                <i class="el-icon-edit"></i>
                                <i class="el-icon-delete"></i>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-col>
        </el-row>
        <!-- <el-row :gutter="20">
            <el-col :span="12">
                <el-card shadow="hover">
                    <schart ref="bar" class="schart" canvasId="bar" :options="options"></schart>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card shadow="hover">
                    <schart ref="line" class="schart" canvasId="line" :options="options2"></schart>
                </el-card>
            </el-col>
        </el-row> -->
    </div>
</template>

<script>
import Schart from "vue-schart";
import { reactive } from "vue";
export default {
    name: "dashboard",
    components: { Schart },
    setup() {
        const name = localStorage.getItem("ms_username");
        const role = name === "admin" ? "超级管理员" : "普通用户";

        const data = reactive([
            {
                name: "2018/09/04",
                value: 1083,
            },
            {
                name: "2018/09/05",
                value: 941,
            },
            {
                name: "2018/09/06",
                value: 1139,
            },
            {
                name: "2018/09/07",
                value: 816,
            },
            {
                name: "2018/09/08",
                value: 327,
            },
            {
                name: "2018/09/09",
                value: 228,
            },
            {
                name: "2018/09/10",
                value: 1065,
            },
        ]);
        const options = {
            type: "bar",
            title: {
                text: "NBA商城",
            },
            xRorate: 25,
            labels: ["周一", "周二", "周三", "周四", "周五"],
            datasets: [
                {
                    label: "篮球",
                    data: [234, 278, 270, 190, 230],
                },
                {
                    label: "周边",
                    data: [164, 178, 190, 135, 160],
                },
                {
                    label: "球鞋",
                    data: [144, 198, 150, 235, 120],
                },
            ],
        };
        const options2 = {
            type: "line",
            title: {
                text: "NBA股票走势",
            },
            labels: ["6月", "7月", "8月", "9月", "10月"],
            datasets: [
                {
                    label: "篮球",
                    data: [234, 278, 270, 190, 230],
                },
                {
                    label: "周边",
                    data: [164, 178, 150, 135, 160],
                },
                {
                    label: "球鞋",
                    data: [74, 118, 200, 235, 90],
                },
            ],
        };
        const todoList = reactive([
            {
                title: "突发!布克、詹娜分手!多名球星对詹娜展开追求",
                status: false,
            },
            {
                title: "曝多位球员开始追求詹娜!球哥名列其中 超模下任男友还在NBA?",
                status: false,
            },
            {
                title: "据NBA名记Chris Haynes报道,约翰-沃尔将与火箭达成买断,成为一名完全自由球员。",
                status: false,
            },
            {
                title: "NBA又一渣男!00后天才背叛娇妻,身材碾压卡戴珊,身价12亿!",
                status: false,
            },
            {
                title: "NBA球星品味如何?看看库兹马、汤普森的女朋友就明白了",
                status: false,
            },
            {
                title: "爱江山更爱美人,NBA球星为什么偏爱詹娜?这情史也太丰富了",
                status: false,
            },
                        {
                title: "阿里纳斯穿奢侈品休闲鞋打NB",
                status: true,
            },
                        {
                title: "名嘴发文嘲笑欧文的选择 看来他并不想念詹皇",
                status: true,
            },
        ]);

        return {
            name,
            data,
            options,
            options2,
            todoList,
            role,
        };
    },
};
</script>

<style scoped>
.el-row {
    margin-bottom: 20px;
}

.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
}

.grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
}

.grid-num {
    font-size: 30px;
    font-weight: bold;
}

.grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.grid-con-1 .grid-con-icon {
    background: 	#32CD32;
}

.grid-con-1 .grid-num {
    color: 	#32CD32;
}

.grid-con-2 .grid-con-icon {
    background: #CD853F;
}

.grid-con-2 .grid-num {
    color: #CD853F;
}

.grid-con-3 .grid-con-icon {
    background: 	#B22222;
}

.grid-con-3 .grid-num {
    color: 	#B22222;
}

.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}

.user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}

.user-info-list span {
    margin-left: 70px;
}

.mgb20 {
    margin-bottom: 20px;
}

.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: #999;
}

.schart {
    width: 100%;
    height: 300px;
}
</style>
