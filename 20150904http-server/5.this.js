/**
 * Created by Atlantis on 2015/9/4.
 * this 行为主体
 * 直接执行函数this=全局
 * 对象执行它自己的属性函数 this=这个对象
 * call apply this=第一个参数
 */
var number=2;
var obj={
    number:4,
    fn1:(function(){
        this.number*=2;
        number=number*2;
        var number=3;
        return function(){
            this.number*=2;
            number*=3;
            console.log(number)
        }
    })()
};
var fn1=obj.fn1;
console.log(number);
fn1();
obj.fn1();
console.log(number);
console.log(obj.number);
