// pages/data/data.js
const DB=wx.cloud.database().collection("wallpaper")

Page({

addData(){
  DB.add({
    // data 字段表示需新增的 JSON 数据
    data: {
      title: "沉默",
      description: "抑制不住的狂啸",
      src: "cloud://gallery-c7ts8.6761-gallery-c7ts8-1301572989/abstract.jpg",
      color: "rgba(140,80,65) ",
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