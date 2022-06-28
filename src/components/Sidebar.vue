<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#002F50"
            text-color="#fff" active-text-color="#409EFF" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template #title>
                            <i :class="item.icon"></i>
                            <span>{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template #title>{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import { computed, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
    setup() {
        const items = [
            {
                icon: "el-icon-house",
                index: "/dashboard",
                title: "球员首页",
            },
            {
                icon: "el-icon-document-copy",
                index: "/table",
                title: "球员信息",
            },
            {
                icon: "el-icon-chat-dot-square",
                index: "/tabs",
                title: "消息中心",
            },
            {
                icon: "el-icon-basketball",
                index: "/icon",
                title: "球星 Logo",
            },
            {
                icon: "el-icon-microphone",
                index: "/i18n",
                title: "语言切换",
            },
            {
                icon: "el-icon-magic-stick",
                index: "/donate",
                title: "支持作者",
            },
        ];

        const route = useRoute();

        const onRoutes = computed(() => {
            return route.path;
        });

        const store = useStore();
        const collapse = computed(() => store.state.collapse);

        return {
            items,
            onRoutes,
            collapse,
        };
    },
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;

}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
