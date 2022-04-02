import { Options, Vue } from 'vue-class-component';
@Options({})
export class About extends Vue {
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