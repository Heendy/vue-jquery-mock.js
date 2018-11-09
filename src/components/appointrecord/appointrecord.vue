//预约记录
<template>
    <div class="appointrecord">
        <div class="appointrecord_tab">
            <ul class="tabs">
                <!-- <li>待就诊</li>
                <li>已完成</li>
                <li>已取消</li> -->
                <li class="li-tab" v-for="(item,index) in tabsParam" @click="toggleTabs(index)" :class="{active:index===nowIndex}" :key="item.id">{{item}} </li>
            </ul>
            <!-- //待就诊 -->
            <div v-show="nowIndex===0" class="tabs_con">
                <div class="visited">
                     <div class="visit_con">
                        <div class="title">
                            <div class="left">泉州市第一医院</div>
                            <div class="right green">待就诊</div>
                        </div>
                        <div class="dt-info">
                            <div class="dt-images">
                                <img src="../../common/images/dt-img.png" alt="">
                            </div>
                            <div class="dt-fonts">
                                <div class="name">
                                    刘文杰0
                                    <span>副主任医师</span>
                                </div>
                                <div class="time">就诊时间:2018年10月19日</div>
                                <div class="patient_name">就诊人姓名：kaven</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- //已完成 -->
            <div v-show="nowIndex===1" class="tabs_con">
                <div class="visited">
                     <div class="visit_con">
                        <div class="title">
                            <div class="left">泉州市第一医院</div>
                            <div class="right blue">已完成</div>
                        </div>
                        <div class="dt-info">
                            <div class="dt-images">
                                <img src="../../common/images/dt-img.png" alt="">
                            </div>
                            <div class="dt-fonts">
                                <div class="name">
                                    刘文杰1
                                    <span>副主任医师</span>
                                </div>
                                <div class="time">就诊时间:2018年10月19日</div>
                                <div class="patient_name">就诊人姓名：kaven</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- //已取消 -->
             <div v-show="nowIndex===2" class="tabs_con">
                <div class="visited">
                     <div class="visit_con">
                        <div class="title">
                            <div class="left">泉州市第一医院</div>
                            <div class="right red">已取消</div>
                        </div>
                        <div class="dt-info">
                            <div class="dt-images">
                                <img src="../../common/images/dt-img.png" alt="">
                            </div>
                            <div class="dt-fonts">
                                <div class="name">
                                    刘文杰2
                                    <span>副主任医师</span>
                                </div>
                                <div class="time">就诊时间:2018年10月19日</div>
                                <div class="patient_name">就诊人姓名：kaven</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      tabsParam: ["待就诊", "已完成", "已取消"],
      nowIndex: 0,
      isShow: false
    };
  },
  methods: {
    //切换tab项
    toggleTabs(index) {
      this.nowIndex = index;
      $(window).resize();
    }
  }
};
</script>

<style lang="less">
@px: 1/100rem;
.appointrecord {
  width: 100%;
  position: fixed;
  top: 0;
  height: 100%;
  background: #ffffff;
  .appointrecord_tab {
    ul {
      padding: 0;
      margin: 0;
      display: flex;
      border-bottom: 1px solid #ededed;
      li {
        list-style: none;
        flex: 1;
        text-align: center;
        height: 100 * @px;
        line-height: 100 * @px;
      }
      .active {
        color: #2199e5;
      }
    }
    .tabs_con {
      .visited {
        border-bottom: 1px solid #ededed;
        .visit_con {
          width: 702 * @px;
          margin: 0 auto;
          .title {
            clear: both;
            height: 100 * @px;
            line-height: 100 * @px;
            .left {
              float: left;
            }
            .right {
              float: right;
            }
            .green {
              color: green;
            }
            .blue{
                color: #2199e5;
            }
            .red{
                color: red;
            }
          }
          .dt-info {
            display: flex;
            padding-bottom: 30 * @px;
            .dt-images {
              flex: 0 0 152 * @px;
              border-radius: 1000px;
              overflow: hidden;
              height: 152*@px;
              img {
                width: 100%;
              }
            }
            .dt-fonts {
              flex: 0 0 600 * @px;
              margin-left: 30 * @px;
              .name {
                font-size: 36 * @px;
                height: 50 * @px;
                line-height: 50 * @px;
                margin-top: 10 * @px;
                span {
                  font-size: 26 * @px;
                  color: #999;
                }
              }
              .time {
                color: #999;
                font-size: 26 * @px;
                height: 50 * @px;
                line-height: 50 * @px;
              }
              .patient_name {
                color: #999;
                font-size: 26 * @px;
                height: 30 * @px;
                line-height: 30 * @px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
