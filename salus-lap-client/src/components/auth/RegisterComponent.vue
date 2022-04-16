<template>
  <div class=" flex flex-col min-h-[250px] w-full p-5">
    <h1 class="py-4 text-slate-700 text-xl text-center font-bold capitalize">Register new user</h1>
    <div class="py-4">
      <p v-if="errorMsg" class="py-2 text-red-300">{{ errorMsg }}</p>
      <form ref="loginForm" autocomplete="off" @submit.prevent>
        <div class="flex flex-col gap-3">
          <label class="font-medium flex gap-2 bg-white items-center px-2 rounded-md group" for="email">
            <UserIcon class="w-7 h-7 text-slate-300 group-hover:text-purple-500 700 group-focus-within:text-purple-500 transition-all"/>
            <input class="w-full py-2 px-3 outline-none " type="text" placeholder="Enter your username" id="email" v-model="username"/>
          </label>
          <label class="font-medium flex gap-2 bg-white items-center px-2 rounded-md group" for="email">
            <EmailIcon class="w-7 h-7 text-slate-300 group-hover:text-purple-500 700 group-focus-within:text-purple-500 transition-all"/>
            <input class="w-full py-2 px-3 outline-none " type="text" placeholder="Enter your email" id="email" v-model="email"/>
          </label>
          <label class="font-medium flex gap-2 bg-white items-center px-2 rounded-md group" for="email">
            <LockIcon class="w-7 h-7 text-slate-300 group-hover:text-purple-500 700 group-focus-within:text-purple-500 transition-all"/>
            <input class="w-full py-2 px-3 outline-none " type="password" placeholder="Enter your password" id="email" v-model="password"/>
          </label>
          <label class="font-medium flex gap-2 bg-white items-center px-2 rounded-md group" for="email">
            <LockIcon class="w-7 h-7 text-slate-300 group-hover:text-purple-500 700 group-focus-within:text-purple-500 transition-all"/>
            <input class="w-full py-2 px-3 outline-none " type="password" placeholder="Confirm Password" id="email" v-model="confirmPassword"/>
          </label>
          <p class="text-red-300 py-4" v-if="warnMsgs !== ''">{{ warnMsgs }}</p>
          <div class="w-full flex justify-between items-center mt-10">
            <button class="btn w-full bg-purple-500 hover:bg-purple-600 outline-none border-0 font-semibold" @click="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import UserIcon from "../icons/UserIcon.vue"
import EmailIcon from "../icons/EmailIcon.vue"
import LockIcon from "../icons/LockIcon.vue"
import axios from "axios"

export default {
  components: {EmailIcon, LockIcon, UserIcon},
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      warnMsgs: '',
      errorMsg: '' 
    }
  },
  methods: {
    submit() {
      if(this.password !== this.confirmPassword) {
        return this.warnMsgs = 'enter a valid password'
      } 
      let formData = {
        username: this.username,
        email: this.email,
        password: this.password,
      }
      axios.post('http://localhost:5000/users/register', formData).then(result => {
        if(result.data.status === 201) {
          return this.$router.push('/login')
        } 
        return this.errorMsg = result.data.msg
      }).catch(err => {
        console.log(err);
      })
      this.warnMsgs = ''
    }
  }
}
</script>