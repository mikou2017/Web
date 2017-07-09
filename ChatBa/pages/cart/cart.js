Page({
  	data: {
  		carArray: [
  			{
  				carImage: '../../image/img1.jpg',
  				carTitle: '小馋猫炸鸡块',
  				carPrice: '¥99.00',
  				carNum: 1,
  				carShow: true
  			},
  			{
  				carImage: '../../image/img3.jpg',
  				carTitle: '小馋猫桂林米粉',
  				carPrice: '¥23.00',
  				carNum: 1,
  				carShow: true
  			},
  			{
  				carImage: '../../image/img2.jpg',
  				carTitle: '小馋猫炒鱿鱼',
  				carPrice: '¥112.00',
  				carNum: 1,
  				carShow: true
  			}
  		]
  	},
  	carAdd: function(event){
  		var that = this;
  		var index = event.target.dataset.alphaBeta;
  		var con = that.data.carArray[index].carNum + 1;
  		var key = 'carArray['+index+'].carNum';
  		var obj = {};
  		obj[key] = con;
  		this.setData(obj);
  	},
  	carReduce: function(event){
  		var that = this;
  		var index = event.target.dataset.alphaBeta;
  		var con = that.data.carArray[index].carNum;
  		var key = 'carArray['+index+'].carNum';
  		var obj = {};
  		if(con <= 1){
  			obj[key] = 1;
  			that.setData(obj);
  		}
  		else {
  			con--;
  			obj[key] = con;
  			that.setData(obj);
  		}
  	},
  	carRemove: function(event){
  		var that = this;
  		var index = event.target.dataset.alphaBeta;
  		var key = 'carArray['+index+'].carShow';
  		var obj = {};
  		obj[key] = false;
  		this.setData(obj);
  	},
    toPay: function(){
        wx.navigateTo({
          url: '../pay/pay'
        })
    }
})