<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" @click="changeMsg">
    <div v-for="item in myList" :key="item">{{item}}</div>
    <HelloWorld :msg="myMsg" @msgCallBack="msgCallBack"/>
  </div>
</template>

<script lang="ts">
// import { Home } from '@/views/home/Home';
// export default Home
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  myMsg:String = '';
  myList:Array<string> =[]

  mounted(){
    this.myMsg = "2222"
    this.myList.push('000')
    this.myList.push('111')
  }
  changeMsg() {
    this.myMsg = 'abcd'
  }
  msgCallBack(value:String){
    this.myMsg =  value
  }
}
</script>
