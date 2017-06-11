import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import Login from '@/components/Login'
import Base from '@/components/Base'
import Home from '@/components/Home'
import Groups from '@/components/Groups'
import GroupList from '@/components/GroupList'
import Group from '@/components/Group'
import AddGroup from '@/components/AddGroup'
import Users from '@/components/Users'
import UserList from '@/components/UserList'
import AddUser from '@/components/AddUser'
import User from '@/components/User'
import Log from '@/components/Log'
import Profile from '@/components/Profile'
import Password from '@/components/Password'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      component: Base,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: '/groups',
          component: Groups,
          children: [
            {
              path: '/',
              name: 'groupList',
              component: GroupList
            },
            {
              path: 'add',
              name: 'addGroup',
              component: AddGroup
            },
            {
              path: ':id',
              name: 'group',
              component: Group
            }
          ]
        },
        {
          path: '/users',
          component: Users,
          children: [
            {
              path: '',
              name: 'userList',
              component: UserList
            },
            {
              path: 'add',
              name: 'addUser',
              component: AddUser
            },
            {
              path: ':id',
              name: 'user',
              component: User
            }
          ]
        },
        {
          path: '/log',
          name: 'log',
          component: Log
        },
        {
          path: '/profile',
          name: 'profile',
          component: Profile
        },
        {
          path: '/password',
          name: 'password',
          component: Password
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})