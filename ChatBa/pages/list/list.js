var app = getApp()
Page({
  data: {
    
    
   itemArray: [
            {
                "itemUrl": '../../image/img1.jpg',
                "itemText": '小馋猫炸鸡'
            },
            {
                "itemUrl": '../../image/img2.jpg',
                "itemText": '小馋猫炒鱿鱼'
            },
            {
                "itemUrl": '../../image/img3.jpg',
                "itemText": '小馋猫桂林米粉'
            },
            {
                "itemUrl": '../../image/img1.jpg',
                "itemText": '小馋猫炸鸡'
            },
            {
                "itemUrl": '../../image/img2.jpg',
                "itemText": '小馋猫炒鱿鱼'
            },
            {
                "itemUrl": '../../image/img3.jpg',
                "itemText": '桂林米粉'
            },
        ]
  },


  cusImageLoad: function(e){
        var that = this;
        that.setData(WxAutoImage.wxAutoImageCal(e));
    }
})