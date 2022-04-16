<template>
  <div class=" flex flex-col min-h-[250px] w-full p-5">
    <h1 class="py-4 text-slate-700 text-xl text-center font-bold">Login</h1>
    <div class="py-4">
      <p class="text-red-400 py-3" v-if="errorMsg !== ''">{{ errorMsg }}</p>
      <form ref="loginForm" autocomplete="off" @submit.prevent>
        <div class="flex flex-col gap-3">
          <label class="font-medium flex gap-2 bg-white items-center px-2 rounded-md group" for="email">
            <EmailIcon class="w-7 h-7 text-slate-300 group-hover:text-purple-500 700 group-focus-within:text-purple-500 transition-all"/>
            <input class="w-full py-2 px-3 outline-none " type="text" placeholder="Enter your email" id="email" v-model="email"/>
          </label>
          <label class="font-medium flex gap-2 bg-white items-center px-2 rounded-md group" for="email">
            <LockIcon class="w-7 h-7 text-slate-300 group-hover:text-purple-500 700 group-focus-within:text-purple-500 transition-all"/>
            <input class="w-full py-2 px-3 outline-none " type="password" placeholder="Enter your password" id="email" v-model="password"/>
          </label>
          <div class="w-full flex justify-between items-center mt-10">
            <button class="btn w-full bg-purple-500 hover:bg-purple-600 outline-none border-0 font-semibold" @click="login">Login</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import EmailIcon from "../../components/icons/EmailIcon.vue"
import LockIcon from "../../components/icons/LockIcon.vue"
import axios from "axios";

export default {
  components: {EmailIcon, LockIcon},
  data() {
    return {
      email: '',
      password: '',
      errorMsg: ''
    }
  },
  methods: {
    login () {
      let formData = {
        email: this.email,
        password: this.password
      }
      axios.post('http://localhost:5000/users/login', formData).then(result => {
        if(result.data.status === 201){
          console.log(result.data.data._id);
          return this.$router.push('/dashboard/' + result.data.data._id)
        }
        return this.errorMsg = result.data.msg
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>