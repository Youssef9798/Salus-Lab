<template>
  <section class="w-full h-screen grid grid-cols-4">
    <header class="col-span-1 w-full h-full bg-slate-50 shadow-lg">
      <div class="flex flex-col h-full gap-5">
        <div class="bg-slate-50 w-full p-5">
          <h1 class="text-purple-500 text-lg uppercase font-bold">Salus Lap</h1>
        </div>
        <ul class="h-full mt-auto py-5 flex flex-col gap-2">
          <li class="mb-auto p-5 text-purple-500 uppercase flex items-center  cursor-pointer hover:bg-slate-100"><DashboardIcon class="w-5 h-5 mr-2" /> Dashboard</li>
          <li class="p-5 text-slate-500 cursor-pointer hover:bg-slate-100">Logout</li>
        </ul>
      </div>
    </header>
    <div class="col-span-3 w-full h-full p-5">
      <div class="flex flex-col">
        <div class="w-full py-6">
          <h1>Welcome Mr. {{ userItem.username }}</h1>
        </div>
        <div class="overflow-x-auto rounded-lg border">
          <table class="table table-zebra w-full shadow-sm">
            <!-- head -->
            <thead>
              <tr>
                <th></th>
                <th>USERNAME</th>
                <th>EMAIL</th>
              </tr>
            </thead>
            <tbody>
              <!-- row 1 -->
              <tr v-for="user,i in usersItem" :key="user._id">
                <th>{{ i+1 }}</th>
                <td>{{ user.username }}</td>
                <td>{{ user.email }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DashboardIcon from "../components/icons/DashboardIcon.vue"
import axios from "axios"
import { computed } from '@vue/runtime-core';
export default {
  components: { DashboardIcon },
  async mounted() {
    const users = await axios.get('http://localhost:5000/users');
    const user = await axios.get(`http://localhost:5000/users/${this.$route.params.id}`);
    this.usersItem = users.data
    this.userItem = user.data.data
  },
  data(){
    return {
      usersItem: [],
      userItem: {}
    }
  }
}
</script>