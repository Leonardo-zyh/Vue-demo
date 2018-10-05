
#MVVM模式
(`视图层和数据层的双向绑定，让我们无需再去关心DOM操作的事情，更过的精力放在数据和业务逻辑上去`)
* MVVM是Model-View-ViewModel的缩写。MVVM是一种设计思想。
Model 层代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑；
View 代表UI 组件，它负责将数据模型转化成UI 展现出来，
ViewModel 是一个同步View 和 Model的对象。

* 在MVVM架构下，View 和 Model 之间并没有直接的联系，而是通过ViewModel进行交互，Model 和 ViewModel 之间的交互是双向的，因此View 数据的变化会同步到Model中，而Model 数据的变化也会立即反应到View 上。
* ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。

#Vue.js优点  -  面向数据编程
`低耦合`。视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的"View"上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变。
`可重用性`。你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑。
`独立开发`。开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计。
`可测试`。界面素来是比较难于测试的，而现在测试可以针对ViewModel来写易用灵活高效


#环境搭建，入口
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17-beta.0/vue.min.js"></script>
#实例挂载
var app = new Vue({
    el:'#id',   //实例挂载DOM中
    data:{      //双向绑定数据
        msg:2
    }           
})
#挂载点    实例指定的节点为挂载点

#访问Vue实例属性
app.$el     app.$date

#访问date元素的属性(直接访问date数据)
app.msg

#生命周期(钩子)
created:()=>{alert('创建完成，还未挂载')},
mounted:()=>{alert('已经挂载马上渲染')}

#文本插值   {{msg}}    v-text/v-html
`Vue .js 只支持单行表达式，不支持语句和流控制`
{{ 6+6 *3}}                 可以进行简单的运算
{{ 6<3 ? msg :a}}           可以用三元运算符
{{if(6>3){}}                注意：文本插值的形式，其中不能书写表达式,支持单个表达式
{{var a = 6}}               也是多行表达式----var a ;a = 6;



#过滤器 - filters对象
`Vue. 支持在｛｛｝｝插值的尾部添加一小管道符 “ | ” 对数据进行过滤，`
经常用于格式化文本，比如字母全部大写、货币千位使用逗号分隔等。
过滤的规则是自定义的， 通过给 Vue 实例添加选项 filters 来设置
过滤器：{{ data | filter1 |filter2}}
{{date | formatDate(66,99)}} 中的第一个和第二个参数，分别对应过滤器的第二个和第三个参数



#v-text     解析文本字符串,转译
#v-html     解析html文本
#v-bind     绑定活的属性，动态更新HTML元素上的属性，比如 id 、class 等,
#v-model    双向绑定
#v-on       绑定事件监听
vue实例中用 到的`所有方法都定义在methods中`

#语法糖     //点击同时改变
语法糖是指在不影响功能的情况下 ， 添加某种简洁方法实现同样的效果 ， 从而更加方便程序开发。
`v-bind ——> : (冒号)`
`v-on ——> @`

#计算属性  -  computed对象
所有的计算属性都以函数的形式写在 Vue 实例内的computed 选项内，最终返回计算后的结果。
`只要其中任一数据变化，计算属性就会重新执行，视图也会更新`
computed对象有get和set方法，如果直接跟function，使用getter函数
计算属性可以依赖其他计算属性。
计算属性不仅可以依赖当前 Vue 实例的数据，还可以依赖其他实例的数据

#计算属性缓存   依赖属性变化才会重新计算
调用 methods 里的方法也可以与计算属性起到同样的作用
页面中的方法： 如果是调用方法，只要页面重新渲染。方法就会重新执行，不需要渲染，则不需要重新执行
计算属性：不管渲染不渲染，只要计算属性依赖的数据未发生变化，就永远不变

结论: 没有使用计算属性，在 methods 里定义了一个方法实现了相同的效果，甚至该方法还可以接受
参数，使用起来更灵活。既然使用 methods 就可以实现，那么为什么还需要计算属性呢？原因就是
计算属性是基于它的依赖缓存的。 一个计算属性所依赖的数据发生变化时，它才会重新取值，所以text 只要不改变，计算属性也
就不更新
何时使用:使用计算属性还是 methods 取决于你是否需要缓存，当遍历大数组和做大量计算时，应当使用计算属性。


#v­-bind的复习
动态更新HTML元素上的属性，比如 id 、class 等，数据变化时页面绑定就会变化。

#绑定class
v­bind:class 设置一个对象，可以动态地切换 class 
     :class="{divstyle:isActive}    (isActive值对应true ,false)
当 class 的表达式过长或逻辑复杂时，还可以绑定一个计算属性

#绑定style
vue中只要是大写字母，就会转化为-加小写。(A -a)
注意 : css属性名称使用驼峰命名(came!Case) 或短横分隔命名(kebab­case)

:style{'color':color,'font-size':fontSize+'px'}

#监听器  -  watch
监听数据发送变化，进行函数逻辑







`内置命令`
#v-­cloak             一般与display：none进行结合使用
#v-once              定义它的元素和组件只渲染一次

`条件渲染指令`
#v-­if, v­-eles-­if ,v­-else    用法： 必须跟着屁股走
* v-if的弊端：    Vue 在渲染元素时 ，会复用已有的元素而非重新渲染， 因此只会渲染变化的元素，input元素被复用。
* 解决方法：      加key，唯一，提供key值可以来决定是否复用该元素               

#v-if和v-show,布尔值为trun显示。
v-if="show"         实时渲染：页面显示就渲染，不显示就移除
v-show="show"       元素永远存在页面中，只改变了css属性display，



#v-for              当需要将一个数组遍历或枚举一个对象属性的时候循环显示(列表)
遍历多个对象
遍历一个对象的多个属性
`v-for="vueMth in list" `
`v-for="(item,index) of lest" :key="index"`


#数组更新，过滤与排序
• push()            在末尾添加元素
• pop()             将数组的最后一个元素移除
• shift()           删除数组的第一个元素
• unshift()         在数组的第一个元素位置添加一个元素
• splice()          可以添加或者删除函数—返回删除的元素
                    * 第一个参数 表示开始操作的位置
                    * 第二个参数表示：要操作的长度
                    * 第三个为可选参数：
• sort（）：        排序
• reverse()
# 两个数组变动vue检测不到:
*  改变数组的指定项(set方法)         Vue.set(app.arr,1,'car')
*  改变数组长度(splice方法)          app.arr.splice(1)       

#过滤：filter
this.arr.filter((book)=>{return book.match(/oo/);}
arr必须是数组字符串


#方法和事件
事件名和数据变量名会冲突，
如果方法中带有参数，但是没有加括号，默认传原生事件对象event[object MouseEvent]

#监听事件修饰符
在vue中传入event对象用 $event

向上冒泡：
stop            阻止单击事件向上冒泡
prevent         提交事件并且不重载页面(form表单上)
self            只是作用在元素本身而非子元素的时候调用(互不干涉)
once            只执行一次的方法

可以监听键盘事件：
<input @keyup.13 ="submitMe"> ——­指定的keyCode
vueJS为我们提供了：
.enter
.tab
.delete
 




#表单与v-­model         用于在表单类元素上双向绑定事件
可以用于input框，以及textarea等
注意： 所显示的值只依赖于所绑定的数据，不再关心初始化时的插入的value

#单选按钮
单选按钮，直接用`v­-bind`绑定一个布尔值，不可以用v­-model
多个单选框组合使用，就需要`v­-model`来配合value使用，绑定选中的单选框的value值
#复选框
单个复选框，直接用定一个布尔值，可以用`v­-model`可以用`v­-bind`
多个复选框 ，需要`v­-model`来配合value使用，v-­model绑定一个数组,
如果绑定的是字符串，会转化为true、false，与所有绑定的复选框的checked属性相对应
#下拉框
如果是单选，所绑定的value值初始化可以为数组或字符串，有value直接优先匹配一个value值，没有value就匹配一个text值
如果是多选，就需要v­-model来配合value使用，v­-model绑定一个数组，与复选框类似
v­-model一定是绑定在select标签上
#总结一下：如果是单选，初始化最好给定字符串，因为v­-model此时绑定的是静态字符串或者布尔值

#绑定值
单选按钮：  只需要用v­bind给单个单选框绑定一个value值，此时，v­model绑定的就是他的value值
复选框、下拉框：    在select标签上绑定value值对option并没有影响
<input type="checkbox" v-model="toggle" :true-value="value1" :false-value="value2">

#修饰符
lazy        v-­model默认是在input输入时实时同步输入框的数据，而lazy修饰符，可以使其在失去焦点或者敲回车键之后在更新
number      将输入 的字符串转化为number类型
triz        trim自动过滤输入过程中收尾输入的空格






#Vue组件   (每一个组件都是Vue的实例)
#使用组件的原因
作用：提高代码的复用性

#全局注册
Vue.component('todo-item',{templet:'<li>item</li>'})
<todo-item></todo-item>
优点：所有的nue实例都可以用
缺点：权限太大，容错率降低

#局部注册
components:{'todo-item':{template:'<li>item</li>'}
<todo-item></todo-item>

#限制
`table中使用组件无效需使用is属性。<table is="todo-item"></tbody>`


#组件使用的奇淫技巧
1. 推荐使用小写字母加­进行命名（必须） child, my-­componnet命名组件

2. template中的内容必须被一个DOM元素包括 ，也可以嵌套。

3. 在组件的定义中，除了template之外的其他选项 — data,computed,methods

4. data必须是一个方法



#组件传递参数
`使用props传递数据 父组件向子组件传递数据`
1. 在组件中使用props来从父亲组件接收参数，注意:在props中定义的属性，可以在组件中直接使用

2. props来自父级，而组件中data return的数据就是组件自己的数据，两种情况作用域就是组件本身，可以在template，computed，methods中直接使用

3. props的值有两种，一种是字符串数组，一种是对象，本节先只讲数组

4. 可以使用v-­bind动态绑定父组件来的内容。
~~~
    <todo-item content="Vue的组件"></todo-item>

    Vue.component('todo-item',{
        props:['content']
        templet:'<li>{{content}}</li>'})
~~~

#单向数据流
通过` props 传递数据` 是单向的了， 也就是父组件数据变化时会传递给子组件，但是反过来不行。
目的是尽可能将父子组件解稿，避免子组件无意中修改了父组件的状态。
业务场景：业务中会经常遇到两种需要改变 prop 的情况

# 一种是父组件传递初始值进来，子组件将它作为初始值保存起来，
在自己的作用域下可以随意使用和修改。这种情况可以在组件 data 内再声明一个数据，引用父组件的 prop
步骤一：注册组件
步骤二：将父组件的数据传递进来，并在子组件中用props接收
步骤三：将传递进来的数据通过初始值保存起来

~~~
    <my-comp init-count="666"></my-comp>

    var app = new Vue({
            el:'#app',
            components:{
                'my-comp':{
                    props:['init-count'],
                    template:'<div>{{init-count}}</div>',
                    data:function () {
                        return{
                            count:this.initCount
        }}}}})
~~~



# 另一种情况就是 prop 作为需要被转变的原始值传入。这种情况用计算属性就可以了
步骤一：注册组件
步骤二：将父组件的数据传递进来，并在子组件中用props接收
步骤三：将传递进来的数据通过计算属性进行重新计算

~~~
    <my-component :width="width"></my-component>
    
    Vue.component('my-component', {
            props: ['width'],
            template: '<div :style="style">Vue的全局组件</div>',
            computed: {
                style: function () {
                    return {
                        width: this.width + 'px',
                        background: 'red'
                    }
                }
            }
        })
~~~


#数据验证   (html中不驼峰,传递数据短横线,template中驼峰,data中驼峰)
@ vue组件中camelCased (驼峰式) 命名与 kebab­case（短横线命名）

* @ 在html中, myMessage 和 mymessage 是一致的,
    因此在组件中的html中使用必须使用kebab­case（短横线）命名方式。`在html中不允许使用驼峰`！！！！！！

* @ 在`组件中, 父组件给子组件传递数据必须用短横线`。
    `在template中，必须使用驼峰命名方式`，若为短横线的命名方式。则会直接保错。

* @ `在组件的data中,用this.XXX引用时,只能是驼峰命名`方式。
    若为短横线的命名方式，则会报错。




#验证的type 
* 类型可以是：String 、  Number 、 Boolean 、  Object 、  Array 、  Function

~~~
    Vue.component （ 'my-compopent'， ｛
        props : {
                    ／／必须是数字类型
            propA : Number ,

                    ／／必须是字符串或数字类型
            propB : [String , Number] ,

                    ／／布尔值，如果没有定义，默认值就是 true
            propC: {
                type : Boolean ,
                default : true
            },

                    ／／数字，而且是必传
            propD: {
                type: Number ,
                required : true
            },
                    ／／如果是数组或对象，默认值必须是一个函数来返回
            propE: {
                type : Array ,
                default : function () {
                return [] ;
                }
            },
                    ／／自定义一个验证函数
            propF: {
                validator : function (value) {
                return value > 10;
        }}}});
~~~


# 组件通信
组件关系可分为父子组件通信、兄弟组件通信、跨级组件通信