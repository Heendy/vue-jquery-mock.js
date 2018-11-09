//预约挂号选择号源 就诊人
<template>
    <div class="chooseappartment">
        <div class="department">
           <span>预约科室</span>
           儿科
        </div>
        <div class="department">
           <span>预约医生</span>
           嚓嚓嚓
        </div>
        <div class="appoint_time">
            <span>预约时间</span>
            2018年12月11日 星期六 上午
            <!-- <select>
                <option>2018年12月11日 星期六 上午</option>
                <option>2018年12月11日 星期六 上午</option>
                <option>2018年12月11日 星期六 上午</option>
                <option>2018年12月11日 星期六 上午</option>
            </select> -->
        </div>
        <div class="appoint_time">
            <span>选择号源</span>
            <select>
               <option>第一号 候诊时间05:56</option>
               <option>第一号 候诊时间05:56</option>
               <option>第一号 候诊时间05:56</option>
               <option>第一号 候诊时间05:56</option>
               <option>第一号 候诊时间05:56</option>
            </select>
        </div>
        <div class="appoint_time">
            <span>选择就诊人</span>
            <select>
                <option>就诊人一号</option>
                <option>就诊人2号</option>
                <option>就诊人3号</option>
                <option>就诊人4号</option>
            </select>
        </div>
        <div class="visit_type">
            <span>就诊类型</span>
            <input type="radio" value="1" name="card">无就诊卡
            <input type="radio" value="2" name="card">有就诊卡
        </div>
        <div class="imm_btn">
            <router-link to="/success">立即预约</router-link>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@px: 1/100rem;
.chooseappartment {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  .department {
    display: flex;
    height: 100 * @px;
    line-height: 100 * @px;
    color: gray;
    border-bottom: 1px solid #ededed;
    span {
      flex: 0 0 200 * @px;
      text-align: center;
      color: #000;
    }
  }
  .appoint_time {
    display: flex;
    height: 100 * @px;
    line-height: 100 * @px;
    border-bottom: 1px solid #ededed;
    select {
      height: 80 * @px;
      border: none;
      flex: 0 0 500 * @px;
      margin-top: 7 * @px;
    }
    span {
      flex: 0 0 200 * @px;
      text-align: center;
      color: #000;
      display: block;
    }
  }
  .visit_type{
    display: flex;
    height: 100 * @px;
    line-height: 100 * @px;
    border-bottom: 1px solid #ededed;
    span {
      flex: 0 0 200 * @px;
      text-align: center;
      color: #000;
      display: block;
    }
    input{
        margin-top: 30*@px;
    }
  }
  .imm_btn{
      margin-top: 150*@px;
      a{
          width: 702*@px;
          display: block;
          height: 84*@px;
          background: #219ae3;
          text-align: center;
          line-height: 84*@px;
          margin: 0 auto;
          text-decoration: none;
          color: #ffffff;
          font-size: 35*@px;
          border-radius: 3px;
         
      }
  }
}
</style>
