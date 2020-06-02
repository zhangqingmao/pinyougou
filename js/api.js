/** 用于编写ajax请求 */

/**所有ajax的代码写到这里 */
// axios.defaults.baseURL="http://localhost:9091/v1"
//设置ajax超时时间
// axios.defaults.timeout = 3000
// //设置提交数据时的格式
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// axios.interceptors.request.use(function (config){
//     let token = localStorage.getItem("token")
//     if(token){
//         config.headers['Authorization'] = token
//     }
//     return config;
// },function (error){
//     return Promise.reject(error)
// })

//注册
function register(params){
    return axios.post("/web-service/regist",params);
}

//短信
function Sendsms(params){
    return axios.post("/web-service/sms",params);
}

//登录
function login(denglu){
    return axios.post("/auth-service/login",denglu);
}

//网站快报
function getTopNews(){
    return axios.get("/web-service/news",{
        params:{
            limit:8,
            sortBy:"id",
            sortWay:"desc"
        }
    })
}

//分类导航
function getCategorys(){
    return axios.get("/web-service/categorys");
}

//楼层功能
function getFloors(){
    return axios.get("/web-service/floors");
}

//商品信息
function getGoodsInfo(skuid){
    return axios.get("/web-service/goods/"+skuid);
}

//商品评论
function getComments(skuid,per_page,page){
    return axios.get("/web-service/comments/"+skuid+"?limit="+per_page+"&page="+page+"&sort_by=id&sort_way=desc");
}

//加入购物车
function addToCart(params){
    return axios.post("/cart-service/carts",params);
}

//获取数据
function getCarts(){
    return axios.get("/cart-service/carts")
}

//修改购物车
function updateCart(id,data) {
    return axios.put("/cart-service/carts/"+id,data)
}

//删除商品
function deleteCart(id){
    return axios.delete("/cart-service/carts/"+id)
}

//搜索
function searchGoods(search){
    return axios.get("/search-service/search",{params:search});
}

//获取品牌
function getBrands(catid){
    return axios.get("/web-service/brands?catid="+catid)
}

//获取规格
function getSpecifications(catid){
    return axios.get("/web-service/specifications?catid="+catid)
}

//获取收货地址
function getAddress(){
    return axios.get("/web-service/address")
}

//添加新的收货地址
function addNewAddress(data){
    return axios.post("/web-service/address",data)
}

//创建订单
function addOrder(data){
    return axios.post("/order-service/orders",data)
}

//支付
function pay(data){
    return axios.post("/order-service/pay",data)
}

function getList(name){
    return axios.post("/cart-service/tcart",name);
}