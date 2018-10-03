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

#生命周期
created:()=>{alert('创建完成，还未挂载')},
mounted:()=>{alert('已经挂载马上渲染')}

#文本插值   {{msg}}
`Vue .js 只支持单行表达式，不支持语句和流控制`
{{ 6+6 *3}}                 可以进行简单的运算
{{ 6<3 ? msg :a}}           可以用三元运算符
{{if(6>3){}}                注意：文本插值的形式，其中不能书写表达式,支持单个表达式
{{var a = 6}}               也是多行表达式----var a ;a = 6;
