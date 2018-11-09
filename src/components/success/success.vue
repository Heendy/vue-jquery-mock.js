
//预约成功界面通知
<template>
    <div class="success">
        <div class="success_tip">
            恭喜您,预约成功！
        </div>
        <div class="order__num">订单号：15736852</div>
         <div class="suucess_con">
             <div class="back">
                <router-link to="/index">返回首页</router-link>
             </div>
             <div class="detail">
                 <router-link to="/orderdetail">查看订单</router-link>
             </div>
         </div>
         <div class="order_tip">
             <span>温馨提示：</span><br/>
             迪丽热巴预约泉州市第一医院乐惠清医生，10月20号早上10：30分的号，请持就诊卡到自助机上预约确认，领取号码，过单作废！
         </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@px: 1/100rem;
.success {
  position: fixed;
  top: 0;
  background: #ffffff;
  width: 100%;
  height: 100%;
  .success_tip {
    height: 300 * @px;
    text-align: center;
    line-height: 550 * @px;
    font-size: 30 * @px;
  }
  .order__num {
    text-align: center;
    height: 50 * @px;
    line-height: 50 * @px;
    color: #999999;
  }
  .suucess_con {
    display: flex;
    width: 300 * @px;
    margin: 0 auto;
    text-align: center;
    height: 100 * @px;
    .back {
      flex: 1;
      a {
        text-decoration: none;
        color: #219ae3;
      }
    }
    .detail {
      flex: 1;
      a {
        text-decoration: none;
        color: #219ae3;
      }
    }
  }
  .order_tip{
      width: 702*@px;
      margin: 0 auto;
      color: #999999;
      span{
          color: red;
      }
  }
}
</style>
