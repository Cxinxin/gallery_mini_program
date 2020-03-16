// pages/index3/index3.js
const DB = wx.cloud.database().collection("wallpaper")

Page({
  data: {
    swipperList: [],
    clientHeight:0,
    bgColor:'#4c4c4c'
  },

  chagColor:function(e){
    console.log("tappppp",e)
    
  },

  //get post 
  getSwipperList(){
    const that = this;
    DB.get({
      success(res) {
        console.log("query success", res.data);
        that.setData({
          swipperList: res.data,
          bgColor: res.data[0].color
        })
      }
    })
  },

  imageError: function(e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  },

  getHeight(){
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          clientHeight: res.windowHeight
        });
      }
    });

  },

  onLoad: function(options) {
    this.getHeight();
    this.getSwipperList();
  },

 
})