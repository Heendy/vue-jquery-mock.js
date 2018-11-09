
// 医院科室列表-主页
<template>
    <div class="index">
        <div class="top">
            <div class="hosp_img">
                <div class="hosp_img_con">
                     <img src="../../common/images/hos-img.png" alt="">
                </div>
            </div>
            <div class="hosp_content">
                <div class="hosp_name">泉州市第一医院</div>
                <div class="hosp_phone">0592-366001</div>
            </div>
            <div class="hosp_choose">
                <i class="iconfont icon-down-p"></i>
            </div>
        </div>
        <departlist></departlist>
    </div>
</template>

<script>
import Departlist from '../departlist/departlist'
export default {
  components:{
      Departlist
  }
};
</script>

<style lang="less">
@px: 1/100rem;
.index {
  z-index: 1;
  width: 100%;
  .top {
    height: 180 * @px;
    display: flex;
    border-bottom: 1px solid #ededed;
    .hosp_img {
      flex: 0 0 210 * @px;
      .hosp_img_con {
        width: 163 * @px;
        height: 121 * @px;
        border-radius: 5 * @px;
        margin: 0 auto;
        overflow: hidden;
        margin-top: 30 * @px;
        img {
          width: 100%;
        }
      }
    }
    .hosp_content {
      flex: 0 0 458 * @px;
      .hosp_name {
        height: 106 * @px;
        line-height: 110 * @px;
      }
    }
    .hosp_choose {
      flex: 1;
      line-height: 180 * @px;
      color: #2199e3;
    }
  }
  .depart_list {
    ul {
      padding: 0;
      margin: 0;
      li {
        list-style: none;
        height: 100 * @px;
        line-height: 100 * @px;
        border-bottom: 1px solid #ededed;
        text-indent: 30 * @px;
        a {
          color: #333;
          display: block;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
