<template>
  <section class="w-full h-screen flex items-center justify-center">
      <div class="w-1/2 h-full bg-purple-500 bg-gradient-to-t flex flex-col items-center justify-center">
        <h1 class="uppercase font-bold text-white text-lg">Welcome to</h1>
        <h1 class="text-[42px] font-semibold text-white flex gap-3 text-center w-3/4"> Salus Lap Dashboard </h1>
        <LapIcon class="w-20 h-20 text-white mt-4"/>
      </div>
      <div class="w-1/2 h-full p-5 px-12 flex flex-col items-center justify-center bg-slate-100 rounded-lg shadow-md">
        <div class="w-full flex border-y justify-between text-center">
          <button class="flex justify-center text-center w-1/2 py-4 btn bg-transparent hover:bg-transparent text-slate-900 rounded-none border-0" @click="
          defaultView = 'LoginComponent'" :class="{'text-purple-500' : defaultView === 'LoginComponent'}">Login</button>
          <button class="flex justify-center text-center w-1/2 py-4 btn bg-transparent hover:bg-transparent text-slate-900 rounded-none border-0" @click="
          defaultView = 'RegisterComponent'" :class="{'text-purple-500' : defaultView === 'RegisterComponent'}">Regsiter</button>
        </div>
        <transition mode="out-in" enter-active-class="animate__animated animate__bounceIn" leave-active-class="animate__animated animate__bounceOut">
          <component :is="defaultView"></component>
        </transition>
      </div>
  </section>
</template>

<script>

import LoginComponent from "../../components/auth/LoginComponent.vue"
import RegisterComponent from "../../components/auth/RegisterComponent.vue"
import LapIcon from "../../components/icons/LapIcon.vue"
export default {
  components: {LoginComponent, RegisterComponent, LapIcon},
  data() {
    return {
      defaultView: 'LoginComponent'
    }
  }
}
</script>