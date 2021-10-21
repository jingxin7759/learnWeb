<template>
  <div class="ctx">
      
    <h2>数据类型转换问题</h2>
    <div>var bar=true</div>
    <div>consoloe.log(bar+0)</div>
    <div>consoloe.log(bar+'jx')</div>
    <div>consoloe.log(bar+true)</div>
    <div>consoloe.log(bar+false)</div>
    <div>consoloe.log('1'>bar)</div>
    <div>consoloe.log(1+'2'+false)</div>
    <div>console.log('2' + ['koala',1]);</div>
    <div>var obj1 = { a:1, b:2 } console.log('2'+obj1)； var obj2 = { toString:function(){ return 'a' } } console.log('2'+obj2)</div>
    <div>//输出结果  1 truexyz 2 1 false 12false 2koala,1 2[object Object] 2a</div>
    <h2>JavaScript类型分为基本类型和引用类型</h2> 
    <h4>常见的基本类型: 基本数据保存在栈内存中，因为基本类型占用空间较小，大小固定，通过按值访问，属于被频繁使用的数据</h4>
    <ul>
      <li>string</li>
      <li>number</li>
      <li>boolearn</li>
      <li>null</li>
      <li>undefined</li>
      <li>symbol</li>
    </ul>
    <div>string/number/boolearn/symbol这四种称之为原始类型，表示不能在细分的基本类型；symbol表示独一无二的值，通过symbol调用</div>
    <div>由于生成的symbol为原始类型，所以不能用new调用，null和undefined被认为是特殊值，这两种的值唯一，就是其本身</div><br/>

    <h4>对象类型也被称为引用类型，用来区分基本类型的差距，对象是存放各种值的集合，对象值引用的是地址值，所以和基本类型的值是不同的，是可变的</h4><br/>

    <div>ToPrimitive(转换原始值)</div>
    <div>ToPrimitive对原始类型不发生转换处理，只针对object类型，其目的是将引用类型转换为非对象类型</div>
    <div>ToPrimitive接受一个值，和一个可选类型值，转换结果由可选择值做决定</div>
    <div>ToPrimitive(obj,type)</div>
    <H4>type值说明</H4>
    <div>type为string：</div>
    <ul>
      <li>1,先调用obj.tostring(),如果为原始值，则return，否则进行第二步</li>
      <li>2,调用obj.valueOf(),如果为原始值，则return，否则进行第三步</li>
      <li>抛出异常</li>
    </ul>

    <div>type为number：</div>
      <ul>
        <li>1,先调用obj.valueOf(),如果为原始值，则return，否则进行第二步</li>
        <li>2,调用obj.tostring(),如果为原始值，则return，否则进行第三步</li>
        <li>抛出异常</li>
      </ul>
    <div>type参数为空：</div>
      <ul>
        <li>1,该对象为Date，则type被设置为String</li>
        <li>2,否则，type被设置为Number</li>
    </ul>
    <div>ToPrimitive总结：ToPrimitive转换成何种类型取决于type可选参数</div>
    <div> Object.prototype.toString() tostring()会返回一个表示该对象的字符串，每一个对象都有tostring(),当对象被表示为文本值或期望文本值会自动调用</div>
    <div> Object.prototype.valueOf()方法返回指定对象的原始值。</div>
    <div>valueof()和tostring()在特殊场合会自动调用</div><br/>

    <h4>number运算符转换规则</h4>
    <ul>
      <li>null转换为0</li>
      <li>undefined转换为nan</li>
      <li>true转换为1/false转换为0</li>
      <li>字符串转换遵循字常量规则，转换失败为nan</li>
    </ul>
    <h4>string运算符转换规则</h4>
    <ul>
      <li>null转换为null</li>
      <li>undefined转换为undefined</li>
      <li>true转换为'true'/false转换为'false'</li>
      <li>字符串转换遵循字常量规则，转换失败为nan</li>
    </ul>
    <h4>boolearn运算符转换规则</h4>
    <div>undefined/null/-0/0/+0/nan/'' 为false 其余全部为true</div>
    
  </div>
    
</template>

<script>
export default {

}
</script>

<style scoped lang='scss'>
.ctx{
  margin: 10px;
}
</style>