<template>
  <div class="about">
    <img alt="Vue logo" src="@/assets/logo.png" @click="changeMsg">
    <div>{{myMsg}}</div>
    <div v-for="item in myList" :key="item">{{item}}</div>
  </div>
</template>
<script lang="ts">
// import { About } from '@/views/about/About';
// export default About
import { Options, Vue } from 'vue-class-component';
@Options({})
export default class About extends Vue {
  myMsg:String = '';
  myList:Array<String> =[];

  mounted(){
    this.myMsg = '0123456789'
    this.myList.push('000');
    this.myList.push('111');
  }
  changeMsg() {
    this.myMsg = this.stringReverse(this.myMsg)
    this.myList.reverse()
  }
  stringReverse(myString:String):String{
    let newString = ''
    for(let i = myString.length-1; i>=0;i--){
      newString = newString+myString.charAt(i)
    }
    return newString
  }
}
</script>