//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls:[
    '../../image/swiper3.jpg',
    '../../image/swiper2.jpg',
    '../../image/swiper4.jpg',
    ],
    indicatorDots:true,
    vertical:false,
    autoplay:true,
    interval:3000,
    duration:1200,
    iconArray:[
    {
       "iconUrl":'../../image/icon-qiandao.png',
        "iconText":'签到'
      },
      {
       "iconUrl":'../../image/icon-fujin.png',
        "iconText":'附近'
      },
      {
       "iconUrl":'../../image/icon-zhanhui.png',
        "iconText":'游展'
      },
      {
       "iconUrl":'../../image/icon-fuli.png',
        "iconText":'福利'
      },
      {
       "iconUrl":'../../image/icon-muma.png',
        "iconText":'玩乐'
      },
      {
       "iconUrl":'../../image/icon-xingxing.png',
        "iconText":'周边'
      },
      
      {
       "iconUrl":'../../image/icon-tiyu.png',
        "iconText":'体育'
      },
      {
       "iconUrl":'../../image/icon-qinzi.png',
        "iconText":'亲子'
      }

    ],
    itemArray: [
            {
                "itemUrl": '../../image/img1.jpg',
                "itemText": '小馋猫炸鸡块'
            },
            {
                "itemUrl": '../../image/img2.jpg',
                "itemText": '小馋猫炒鱿鱼'
            },
            {
                "itemUrl": '../../image/img3.jpg',
                "itemText": '小馋猫桂林米粉'
            },
        ]
  },


  cusImageLoad: function(e){
        var that = this;
        that.setData(WxAutoImage.wxAutoImageCal(e));
    }
})
