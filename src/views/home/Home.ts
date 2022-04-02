import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export class Home extends Vue {
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