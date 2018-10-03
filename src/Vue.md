
#MVVM模式
(`视图层和数据层的双向绑定，让我们无需再去关心DOM操作的事情，更过的精力放在数据和业务逻辑上去`)
* MVVM是Model-View-ViewModel的缩写。MVVM是一种设计思想。
Model 层代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑；
View 代表UI 组件，它负责将数据模型转化成UI 展现出来，
ViewModel 是一个同步View 和 Model的对象。

* 在MVVM架构下，View 和 Model 之间并没有直接的联系，而是通过ViewModel进行交互，Model 和 ViewModel 之间的交互是双向的，因此View 数据的变化会同步到Model中，而Model 数据的变化也会立即反应到View 上。
* ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。

#Vue.js优点
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


#访问Vue实例属性
app.$el     app.$date

#访问date元素的属性(直接访问date数据)
app.msg

#生命周期(钩子)
created:()=>{alert('创建完成，还未挂载')},
mounted:()=>{alert('已经挂载马上渲染')}

#文本插值   {{msg}}
`Vue .js 只支持单行表达式，不支持语句和流控制`
{{ 6+6 *3}}                 可以进行简单的运算
{{ 6<3 ? msg :a}}           可以用三元运算符
{{if(6>3){}}                注意：文本插值的形式，其中不能书写表达式,支持单个表达式
{{var a = 6}}               也是多行表达式----var a ;a = 6;



#过滤器 - filters
`Vue. 支持在｛｛｝｝插值的尾部添加一小管道符 “ | ” 对数据进行过滤，`
经常用于格式化文本，比如字母全部大写、货币千位使用逗号分隔等。
过滤的规则是自定义的， 通过给 Vue 实例添加选项 filters 来设置
过滤器：{{ data | filter1 |filter2}}
{{date | formatDate(66,99)}} 中的第一个和第二个参数，分别对应过滤器的第二个和第三个参数



#v-text     解析文本字符串
#v-html     解析html文本
#v-bind     动态更新 HTML 元素上的属性，比如 id 、class 等,
#v-on       绑定事件监听
vue中用 到的所有方法都定义在methods中

#语法糖     //点击同时改变
语法糖是指在不影响功能的情况下 ， 添加某种简洁方法实现同样的效果 ， 从而更加方便程序开发。
v-bind ——> : (冒号)
v-on ——> @