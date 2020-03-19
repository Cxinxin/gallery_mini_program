// pages/data/data.js
const DB=wx.cloud.database().collection("wallpaper")

Page({

addData(){
  DB.add({
    // data 字段表示需新增的 JSON 数据
    data: {
      title: "带绿色贝雷帽的女孩",
      description: "It give me confidence,she said.",
      src: "cloud://gallery-c7ts8.6761-gallery-c7ts8-1301572989/chin.jpg",
      color: "rgba(99,56,45) ",
      createTime: new Date()
    },
     success(res) {
      console.log('add data success.',res)
    },
    fail(res){
      console.log('add data fail',res)
    }
  })
   
},

  getData(){
    DB.orderBy('createTime','desc')
      .get()
      .then(console.log)
      .catch(console.error)
  }

})