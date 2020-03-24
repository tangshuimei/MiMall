// 用于定义mock文件
import Mock from 'mockjs'
Mock.mock('/api/user/login',{
    "status": 0,
    "data": {
        "id|3-0": 12,
        "username": "@cname",
        "email": "admin@51purse.com",
        "phone": null,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    }
});

Mock.mock('/api/index',{
    "status": 0,
    "data": {
        "swiper|1-4": [
            {
                "id|42-46": 42,
                // "img": '/imgs/swiper/pro' + Math.random(()=>3-0) + '.jpg',
                "img": '/imgs/slider/pro1.jpg',
            }
        ],
        "subList|1-8": [
            {
                "id|0-10": 0,
                "name": "@cname",
                "list|0-40": [
                    {
                        "id|0-20": 0,
                        // "img": '/imgs/subnav/pro' + Math.random(()=>3-0) + '.jpg',
                        "img": '/imgs/subnav/pro1.png',
                        "name": "@cname"
                    }
                ]
            }
        ]
    }
});