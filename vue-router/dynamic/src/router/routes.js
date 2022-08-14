import About from "@/views/About.vue";
import Article from "@/views/Article.vue";

const routes = [
  {
    path: "/about",
    name: "about",
    meta: {
      title: "关于我们",
      premissions: ["about"],
    },
    component: About,
  },
  {
    path: "/article",
    name: "article",
    meta: {
      title: "文章",
      premissions: ["article"],
    },
    component: Article,
  },
];

export default routes;
