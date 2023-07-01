import { createRouter, createWebHistory } from "vue-router";

// 연결할 각 컴포넌트 import (src/views폴더 아래 컴포넌트들 생성해둠)
// import Layout from "@/components/layout";
// import Index from "@/views/index";
// import FirstView from "@/views/FirstView";
// import SecondView from "@/views/SecondView";
// import Bong from "@/views/bong";


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
    name: "Layout",
    component: () => import("@/components/layout"),
    children: [
      { 
        path: "list",
        name: "List",
        component: () => import("@/views/index")
      },
      { 
        path: "FirstView",
        name: "FirstView",
        component: () => import("@/views/FirstView")
      },
      { 
        path: "SecondView",
        name: "SecondView",
        component: () => import("@/views/SecondView")
      },
      { 
        path: "bong",
        name: "Bong",
        component: () => import("@/views/bong")
      },
      { 
        path: "modal",
        name: "modal",
        component: () => import("@/views/modal")
      },
      { 
        path: "user",
        name: "User",
        component: Users 
      },
    ]
  },
  { 
    path: "/",
    name: "Index",
    component: () => import("@/views/index")
  },
];

// 라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 라우터 추출 (main.js에서 import)
export { router };