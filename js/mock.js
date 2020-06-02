/** 用于编写模拟数据 **/

//注册
// Mock.mock("/web-service/regist", "post", {
//     errno: "@integer(0,1)", //状态，0：成功，1：失败
//     errmsg: "@csentence(4,6)" //失败时的错误信息
// })

//短信
// Mock.mock("/web-service/sms", "post", {
//     errno: "@integer(0,1)", //状态，0：成功，1：失败
//     errmsg: "@csentence(4,6)" //失败时的错误信息
// })

// //登录
// Mock.mock("/auth-service/login", "post", {
//     errno: "@integer(0,1)", //状态，0：成功，1：失败
//     errmsg: "@csentence(4,6)", //失败时的错误信息
//     token: "@title(64)", //登录成功时返回登录令牌0
//     name: "@cname" //用户名
// })

//网站快报
Mock.mock(/\/web-service\/news/, "get", {
    "total": "@integer(100)",
    "data|8": [{
        "id|+1": 1,
        "title": "@ctitle(5,12)",
        "created_at": "@date"
    }]
})

//分类导航
Mock.mock("/web-service/categorys", "get", {
    "data|13": [{
        "id|+1": 1,
        "cat_name": "@ctitle(2,5)",
        "children|10": [{
            "id|+1": 1,
            "cat_name": "@ctitle(2,5)",
            "children|8": [{
                "id|+1": 1,
                "cat_name": "@ctitle(2,5)"
            }]
        }]
    }]
})

//楼层功能
Mock.mock('/web-service/floors', 'get', {
    'data|10': [{
            'floor_name': '@ctitle',
            'sub_categorys|16': [{
                'id|+1': 1,
                'cat_name': '@ctitle'
            }],
            'left_ad': {
                'img': '@dataImage(208x170)',
                'link': "@url('http')"
            },
            'right_ad': {
                'img': '@dataImage(310x100)',
                'link': "@url('http')"
            },
            'news|5': [{
                'id|+1': 1,
                'title': '@ctitle'
            }],
            'brands|9': [{
                'id|+1': 1,
                'logo': '@dataImage(93x35)',
                'brand_name': '@ctitle'
            }],
            'rec_goods|8': [{
                'id|+1': 1,
                'logo': '@dataImage(130x130)',
                'price': '@float',
                'goods_name': '@ctitle'
            }],
            'rec_categorys|4': [{
                'id|+1': 1,
                'cat_name': '@ctitle',
                'goods|8': [{
                    'id|+1': 1,
                    'ypglogo': '@dataImage(130x130)',
                    'price': '@float',
                    'goods_name': '@ctitle'
                }]
            }]
        }

    ]
})

//商品信息
Mock.mock(/\/web-service\/goods\/\d+/, "get", {
    skuid: "@id",
    spuid: "@id",
    goods_name: "@ctitle(3,4)", //商品名称
    price: "@float(500, 2000, 2, 2)", //价格
    on_sale_date: "@datetime", //上架时间
    comment_count: "@integer(10,1000)",
    comment_level: "@integer(1,5)", //评论级别(1-5)
    cat1_info: {
        id: "@id",
        cat_name: "@ctitle"
    },
    cat2_info: {
        id: "@id",
        cat_name: "@ctitle"
    },
    cat3_info: {
        id: "@id",
        cat_name: "@ctitle"
    },
    logo: { // 默认首张大图
        smlogo: "@dataImage(50x50)",
        biglogo: "@dataImage(350x350)",
        xbiglogo: "@dataImage(800x800)"
    },
    "photos|5": [ // 其余的当前商品图片
        {
            smimg: "@dataImage(50x50)",
            bigimg: "@dataImage(350x350)",
            xbigimg: "@dataImage(800x800)"
        }
    ],
    description: "@ctitle(100,3000)",
    aftersale: "@ctitle(100,3000)",
    stock: "@integer(10,3000)",
    spec_list: [{
            id: 1,
            spec_name: "颜色",
            options: [{
                    id: 1,
                    option_name: "黑色"
                },
                {
                    id: 2,
                    option_name: "白色"
                },
                {
                    id: 3,
                    option_name: "蓝色"
                }
            ]
        },
        {
            id: 2,
            spec_name: "内存",
            options: [{
                    id: 6,
                    option_name: "i3 4G内存版"
                },
                {
                    id: 7,
                    option_name: "i5 4G内存版"
                },
                {
                    id: 8,
                    option_name: "i5 8G内存版"
                }
            ]
        }
    ],
    spec_info: { //当前sku的排列组合（当前商品信息）   
        id_list: '1:2|2:6', //规格ID:选项ID|规格ID:选项ID|...
        id_txt: '颜色:黑色|内存:i3 4G内存版' //规格名称:选项名称|规格名称:选项名称|...
    },
    sku_list: [ // 所有的排列组合对应它的skuid
        {
            skuid: "@id",
            id_list: '1:2|2:6'
        }, {
            skuid: "@id",
            id_list: '1:2|2:7'
        }, {
            skuid: "@id",
            id_list: '1:2|2:8'
        }, {
            skuid: "@id",
            id_list: '1:1|2:6'
        }, {
            skuid: "@id",
            id_list: '1:1|2:7'
        }, {
            skuid: "@id",
            id_list: '1:1|2:8'
        }
    ]
})

//获取评论
Mock.mock(/\/web-service\/comments\/\d+/,"get",{
    "impressions|10":[
        {
            "title":"@ctitle(2,5)", //印象
            "count":"@integer(5,1000)" //印象数量
        }
    ],
    "ratio":{
        "goods":"85", //好评率
        "common":"75", //中评率
        "bad":"20" //差评率
    },
    "comment_count":"@integer(300,3000)", //总的评论数
    "comments|5":[{
            "id":"@id", //评论ID
            "star":"@integer(1,5)", //评分(1-5)
            "created_at":"@datetime", //发表时间
            "content":"@ctitle(30,50)", //内容
            "user":{
                "id":"@id", //用户ID
                "face":"@dataImage(66x66)", //头像(66x66)
                "name":"@cname(2,3)" //姓名
            }
        }]
})

//获取购物车商品信息
Mock.mock("/cart-service/carts","get",{
    "data|10-20":[{
        "skuid":"@id", //SKUID
        "goods_name":"@ctitle", //商品名称
        "price":"@float(10,20000,0,2)", //价格
        "count":"@integer(1,5)", //购买数量
        "checked":"@boolean", //是否勾选(true：勾选，false：未勾选）
        "midlogo":"@dataImage(50x50)", //中LOGO(50x50)
        "spec_info":'颜色:黑色|内存:i3 4G内存版' //规格名称:选项名称|规格名称:选项名称|...
    }]
})

//加入购物车
Mock.mock("/cart-service/carts","post",{
    "errno":"@integer(0,1)",
    "errmsg":"@ctitle(5,10)"
})

//修改购物车
Mock.mock(/\/cart-service\/carts\/\d+/,"put",{
    errno:"@integer(0,1)", //状态，0：成功，1：失败
    errmsg:"@ctitle(5,10)" //失败时的错误信息
})

//删除商品
Mock.mock(/\/cart-service\/carts\/\d+/,"delete",{
    errno:"@integer(0,1)", //状态，0：成功，1：失败
    errmsg:"@ctitle(5,10)" //失败时的错误信息
})

//搜索结果返回值
Mock.mock(/\/search-service\/search/,"get",{
    "data":{
        "count":"@integer(100,200)",
        "data|30-60":[{
            "id|+1":1,
            "goodsName":"@ctitle",
            "price":"@float(0.01,1000,2,2)",
            "midlogo":"@dataImage(130x130)",
            "comment_count":"@integer(200,300)"
        }]
    }
})

//获取品牌
Mock.mock(/\/web-service\/brands\/\d+/,"get",{
    'errno':"@integer(0,1)", //0 成功  1 失败
    'errmsg':'@ctitle(5,7)', //成功
    'data':[{
        "id":"@id", //品牌ID
        "brand_name":"@ctitle", //品牌名称
        "logo":"@dataImage(98x35)" //品牌img
    }]
})

//获取规格
Mock.mock(/\/web-service\/specifications\/\d+/,"get",{
    'data|3-4':[{
        "id|+1":1, //规格ID
        "spec_name":"@ctitle(2,4)", //规格名称
        "selected":'', //当前被选中的值
         "options|5-15":[{
            "id":"@id", //选项ID
            "option_name":"@ctitle(2,4)" //选项名称
        }]
    }]
})

//获取地址
Mock.mock("/web-service/address","get",{
    "data|2-8":[{
        "id":"@id", //地址ID
        "shr_name":"@cname", //姓名
        "shr_mobile":/^[1][34578][0-9]{9}$/, //手机号码
        "shr_province":"@province", //省
        "shr_city":"@city", //市
        "shr_county":"@county", //县
        "shr_address":"@ctitle(10,20)", //详细地址
        "shr_default":'@integer(0,1)' //0：是；1：不是
    }]
})

//添加新的收货地址
Mock.mock("/web-service/address","post",{
    "errno":"@integer(0,1)", //状态，0：成功，1：失败
    "errmsg":"@ctitle", //失败时的错误信息
    "id":"@id" //新添加记录的ID
})

//生成订单
Mock.mock("/order-service/orders","post",{
    errno:"@integer(0,1)", //状态，0：成功，1：失败
    errmsg:"@ctitle(5,20)", //失败时的错误信息
    sn:"@id" //订单编号
})

//支付
Mock.mock("/order-service/pay","post",{
    errno:"@integer(0,1)", //状态，0：成功，1：失败
    errmsg:"@ctitle(5,20)", //失败时的错误信息
    wxurl:"@url" //微信支付二维码URL
})

Mock.mock("/cart-service/tcart","post",{
    "errno":"@integer(0,1)", //状态，0：成功，1：失败
    "errmsg":"@ctitle(5,10)" //失败时的错误信息
})