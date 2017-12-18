// pages/OrderDishes/OrderDishes.js
Page({
  // 菜品选项打开
  clickDishes: function (e) {
    var that = this;
    var app = getApp();
    this.setData({//this.setdata很重要
      // "isHidden": '',//重新设置data里面的"changdata"的值
      // 'isShowFooter': 'true',
      'ChoosedDishes': e.currentTarget.dataset.food,
    })

    try {
      if (that.data.ChoosedDishes.Burden.length > 0) {
        this.setData({//this.setdata很重要
          "isHidden": '',//重新设置data里面的"changdata"的值
          'isShowFooter': 'true',
          // 'ChoosedDishes': e.currentTarget.dataset.food,
        })
      }
    } catch (e) {
      app.globalData.cart.push(that.data.ChoosedDishes);
      //console.log(app.globalData.cart);
    }
    var fee=0;
    for(var i =0;i<app.globalData.cart.length;i++){
      fee += parseFloat(app.globalData.cart[i].price);
    }
    // 设置显示数量
    this.setData({//this.setdata很重要
      cartNum: app.globalData.cart.length,
      totalFee:fee
    })
  },
  cleanCart: function (e) {
    var app = getApp();
    var that =this;
    app.globalData.cart = [];
    this.setData({
      NowCart:[],
      totalFee:0,
      cartNum: app.globalData.cart.length
    })
    app.globalData.cart=[];
  },
  delItem:function(e){
    var app=getApp();
    var that =this;
    var tmp = that.data.NowCart;
    tmp.splice(e.currentTarget.dataset.index, 1);
    var fee =0;
    for(var i=0;i<tmp.length;i++){
      fee+= parseFloat(tmp[i].price);
    }
    this.setData({
      NowCart: tmp,
      cartNum: that.data.NowCart.length,
      totalFee:fee
    })
    app.globalData.cart =tmp;
  },
  bindBatch: function (e) {
    var that = this;
    // that.data.ChoosedDishes.Burden[0].burdenList[e.currentTarget.dataset.batchlistindex].isPress = '#cd5c5c;color:white;';
    var id = e.currentTarget.dataset.id;
    console.log(id);
    this.setData({
      id: id
    })
    console.log(that.data.ChoosedDishes);
    console.log(e.currentTarget.dataset);
  },
  bindCart: function (e) {
    var that = this;
    var app = getApp();
    this.setData({
      NowCart: app.globalData.cart
    })
    this.setData({
      isHideCart: false
    })
  },
  //设置菜品选项隐藏
  clickDelBatch: function () {
    this.setData({
      'isHidden': 'true',
      'isShowFooter': ''
    })
  },
  BackToOrder: function () {
    this.setData({
      isHideCart: true
    })
  },
  clickNext: function () {
    var app=getApp();
    app.globalData.cart=[];
    var that =this;
    app.globalData.cart = that.data.NowCart;
    wx.navigateTo({
      url: '../MakeSureOrder/MakeSureOrder'
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    totalFee:0,
    NowCart: [],
    isHideCart: true,
    cartNum: 0,
    cart: [],
    ChoosedDishes: {
      name: '',
      price: '',
      unit: '',
      id: '',
      imgSrc: '',
      Burden: []
    },//被选中的菜品
    thisImage: '',
    isShowFooter: '',//显示底部
    isHidden: 'true', //隐藏
    classifyList: ['汤', '饭', '配菜', '饮料', '小吃'],
    dishes: [
      {
        name: '麻辣牛杂粉', price: '10', unit: '碗', id: 1, imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512449364281&di=8cf1cc55297797f66380bbc014fe9b4d&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fac345982b2b7d0a2cdf99472c1ef76094b369a29.jpg',
        Burden: [{ name: '味道', burdenList: [{ value: '酸', isPress: '' }, { value: '甜', isPress: '' }, { value: '苦', isPress: '' }, { value: '辣', isPress: '' }, { value: '咸', isPress: '' }] }, { name: '熟度', burdenList: [{ value: '5成', isPress: '' }, { value: '6成', isPress: '' }, { value: '7成', isPress: '' }, { value: '8成', isPress: '' }, { value: '9成', isPress: '' }] }]
      },
      // { name: '猪杂粉', price: '20', unit: '碗', id: 2, imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512451916456&di=180aa66a3c2f6afb05e900538a717682&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F29381f30e924b899b93a4ed064061d950b7bf6d7.jpg', Burden: [{ name: '味道', burdenList: [{ value: '酸', isPress: '#' }, { value: '甜', isPress: '' }, { value: '苦', isPress: '' }, { value: '辣', isPress: '' }, { value: '咸', isPress: '' }] }, { name: '熟度', burdenList: [{ value: '5成', isPress: '' }, { value: '6成', isPress: '' }, { value: '7成', isPress: '' }, { value: '8成', isPress: '' }, { value: '9成', isPress: '' }] }] },
      // { name: '馄饨粉', price: '20', unit: '碗', id: 3, imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512451943284&di=68dca7b7f4dd1e30ddd74a43c5b6bc3f&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa686c9177f3e6709ce56dc6231c79f3df9dc55dc.jpg', Burden: [{ name: '味道', burdenList: [{ value: '酸', isPress: '' }, { value: '甜', isPress: '' }, { value: '苦', isPress: '' }, { value: '辣', isPress: '' }, { value: '咸', isPress: '' }] }, { name: '熟度', burdenList: [{ value: '5成', isPress: '' }, { value: '6成', isPress: '' }, { value: '7成', isPress: '' }, { value: '8成', isPress: '' }, { value: '9成', isPress: '' }] }] },
      // { name: '米粉', price: '30', unit: '碗', id: 4, imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512449364281&di=8cf1cc55297797f66380bbc014fe9b4d&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fac345982b2b7d0a2cdf99472c1ef76094b369a29.jpg' },
      // { name: '麻辣牛杂粉', price: '10', unit: '碗', id: 5, imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512449364281&di=8cf1cc55297797f66380bbc014fe9b4d&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fac345982b2b7d0a2cdf99472c1ef76094b369a29.jpg' },
      // { name: '猪杂粉', price: '20', unit: '碗', id: 6, imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512449364281&di=8cf1cc55297797f66380bbc014fe9b4d&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fac345982b2b7d0a2cdf99472c1ef76094b369a29.jpg' },
      // { name: '馄饨粉', price: '20', unit: '碗', id: 7, imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512449364281&di=8cf1cc55297797f66380bbc014fe9b4d&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fac345982b2b7d0a2cdf99472c1ef76094b369a29.jpg' },
      // { name: '米粉', price: '30', unit: '碗', id: 8, imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512449364281&di=8cf1cc55297797f66380bbc014fe9b4d&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fac345982b2b7d0a2cdf99472c1ef76094b369a29.jpg' },
      { name: '麻辣牛杂粉', price: '10', unit: '碗', id: 9, imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512449364281&di=8cf1cc55297797f66380bbc014fe9b4d&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fac345982b2b7d0a2cdf99472c1ef76094b369a29.jpg' },
      { name: '猪杂粉', price: '20', unit: '碗', id: 10, imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512449364281&di=8cf1cc55297797f66380bbc014fe9b4d&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fac345982b2b7d0a2cdf99472c1ef76094b369a29.jpg' }
      // { name: '馄饨粉', price: '20', unit: '碗', id: 11, imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512449364281&di=8cf1cc55297797f66380bbc014fe9b4d&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fac345982b2b7d0a2cdf99472c1ef76094b369a29.jpg' },
      // { name: '米粉', price: '30', unit: '碗', id: 12, imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512449364281&di=8cf1cc55297797f66380bbc014fe9b4d&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fac345982b2b7d0a2cdf99472c1ef76094b369a29.jpg' }
    ],
    //iconType:{'cancel'},
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})