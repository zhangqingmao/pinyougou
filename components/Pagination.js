Vue.component('pagination',{
    props:['total_page'],
    template:`<div class="page mt20">
        <a href="">首页</a>
        <a href="">上一页</a>
        <a v-for="v in total_page" href="">{{v}}</a>
        <a href="">下一页</a>
        <a href="">尾页</a></div>`,
   methods:{
       pageClick:function(num){
           //alert(num)
           //通知使用这个组件的页面（父组件）
           //$emit向父组件发消息
           //参数一：消息名
           //参数二：数据
           this.$emit('page_changed',num)
       }
   },
//    computed:{
//        //数组：页码范围
//        pagePange:function(){
//            //Math.max取出最大值
//            let star =Math.max(this.page-5,1)//得到一个>=1的数字
//            let end =Math.min(this.page+4,this.total_page) // 得到一个<=end 的数字
//            let page=[]

//            for(let i =star; i<=end;i++){
//                   page.push(i)
//            }   
//            return page
//         }
//    }
})