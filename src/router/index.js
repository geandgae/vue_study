import { createRouter, createWebHistory } from "vue-router";

// 연결할 각 컴포넌트 import (src/views폴더 아래 컴포넌트들 생성해둠)
import Layout from "@/components/layout";
import Index from "@/views/index";
import FirstView from "@/views/FirstView";
import SecondView from "@/views/SecondView";
import Bong from "@/views/bong";


const Users = {
  template: `
    <div class="user">
      <h2>User</h2>
    </div>
  `
}
// 라우터 설계
const routes = [
  { 
    path: "/ge/", 
    component: Layout,
    children: [
      { path: 'list', component: Index },
      { path: "FirstView", component: FirstView },
      { path: "SecondView", component: SecondView },
      { path: "user", component: Users },
      { path: "bong", component: Bong },
    ]
  },
  { path: "/", component: Index },
];

// 라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 라우터 추출 (main.js에서 import)
export { router };