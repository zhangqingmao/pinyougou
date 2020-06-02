Vue.component('Topnav',{
    template:`<div class="topnav">
    <div class="topnav_bd w990 bc">
        <div class="topnav_left">
            
        </div>
        <div class="topnav_right fr">
            <ul>
                <li v-if="name==null">您好，欢迎来到淘宝商城！[<a href="login.html">登录</a>] [<a href="register.html">免费注册</a>] </li>
                <li v-else>您好，{{name}}！[<a href="order.html">我的订单</a>] [<a href="" @click.prevent="logout">注销</a>] </li>
                <li class="line">|</li>
                <li>客户服务</li>

            </ul>
        </div>
    </div>
</div>`,
data:function(){
    return {
        name:localStorage.getItem('name')
    }
},
methods:{
    logout:function(){
        //localStorage.removeItem('cart')
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        this.name=null;
    }
}
})