/**
 * 使用() => import() 懒加载路由
 * 请指定webpackChunkName，以便打包后生成的chunk带有相对应的名字。
 */

const ErrorPage = () => import(/* webpackChunkName: "errorpage" */ '@/pages/ErrorPage')
const Home = () => import(/* webpackChunkName: "home" */ '@/pages/Home')

/* routes config */
const routes = [
  {
    path: '*',
    name: 'ErrorPage',
    component: ErrorPage,
    props: {
      error: {
        statusCode: 'Error',
        message: '这个页面不见鸟'
      }
    }
  }, {
    path: '/404',
    name: '404',
    component: ErrorPage,
    props: {
      error: {
        statusCode: 404,
        message: '这个页面不见鸟'
      }
    }
  }, {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {}
  }
]

export default routes
