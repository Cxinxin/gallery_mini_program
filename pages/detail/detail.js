// pages/detail/detail.js
const DB = wx.cloud.database().collection("wallpaper")

Page({
  data: {
    postInfo: null,
  },

  onLoad: function(options) {
    let postId = options.id;
    this.getCurrentPost(postId);
  },

  getCurrentPost(postId){
    const that =this;
    DB.doc(postId).get().then(res => {
      that.setData({
        postInfo: res,
      })
    })
  },
  downloadFile: function(e) {
    wx.cloud.downloadFile({
      fileID: e.target.dataset.url,
      header: {},
      success: function(res) {
        if (res.statusCode === 200) {
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success(res) {
              wx.showToast({
                title: '保存图片成功！',
              })
            },
            fail(res) {
              wx.showToast({
                icon: 'none',
                title: '保存图片失败！',
              })
            }
          })

        }
      },
      fail: function(res) {
        wx.showToast({
          title: '保存图片失败！',
        })
      },
      complete: function(res) {},
    })
  },

  onReady: function() {

  },

  onShow: function() {

  },

  onShareAppMessage: function (ops) {
    let postId = ops.target.dataset.id;
    
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      title: '小画廊',
      path: 'pages/detail/detail?id='+postId,
      success: function (res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    }

  }

})