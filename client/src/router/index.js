import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs/Index'
import CreateSong from '@/components/CreateSong'
import ViewSong from '@/components/ViewSong/Index'
import EditSong from '@/components/EditSong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/create',
      name: 'create-song',
      component: CreateSong
    },
    {
      path: '/songs/:id',
      name: 'song',
      component: ViewSong
    },
    {
      path: '/songs/:id/edit',
      name: 'edit-song',
      component: EditSong
    },
    {
      path: '*',
      redirect: 'songs'
    }
  ]
})
