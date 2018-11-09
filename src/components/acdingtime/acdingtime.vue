//按照时间预约
<template>
    <div class="acdingtime">
        <swiper :options="swiperOption" ref="mySwiper" class="timelist">
        <!-- slides -->
            <swiper-slide v-for="(item,index) in timelist" :key="item.week" class="swiper-slide">
              <div class="swiper-slide" @click="postTimeList(index,item.section_id,item.Date)">
                <a href="javascript:void(0)" v-bind:class="{ 'active' : isActive==index}">
                    <div class="ui-time-style">
                    <div class="ui-smtime">{{item.Date | fixTime}}</div>
                    <div>{{item.Week}}</div>
                    </div>
                </a>
                <!-- <router-link v-bind:class="{ 'active' : isActive==index}" to="/oppinttimelist">
                    <div class="ui-time-style">
                    <div class="ui-smtime">{{item.Date | fixTime}}</div>
                    <div>{{item.Week}}</div>
                    </div>
                </router-link> -->
            </div>
            </swiper-slide>
        </swiper>
        <div class="appointlist">
            <ul>
                <li v-for="List in getTimeListContents" :key="List.week">
                  <router-link to="/chooseappartment">{{List.Date}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 0,
        loop: false,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
      },
      timelist: [],//获取星期列表
      isActive: 0,
      section_id: "",
      getTimeListContents:[]//获取可预约时间列表
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  created:function(){
    let section_id = this.$route.params.section_id;
    console.log(this.$route.params.section_id)
  },
  mounted: function() {
    var that = this;
    //mock.js模拟数据 模拟时间
    Mock.mock("http://192.168.1.61:8085", {
      //Random.date()
      "time|7": [
        {
          "Date|+1": [
            "2018-10-15",
            "2018-10-16",
            "2018-10-17",
            "2018-10-18",
            "2018-10-19",
            "2018-10-20",
            "2018-10-21",
          ],
          "Week|+1": [
            "星期一",
            "星期二",
            "星期三",
            "星期四",
            "星期五",
            "星期六",
            "星期日",
            "weeks"
          ],
          "section_id|+1": that.$route.params.section_id
        }
      ]
    });
     Mock.mock("http://192.168.1.61:8082",{
         "AppointTime|10":[
           {
          "Date|+1": [
            "2018-10-15",
            "2018-10-16",
            "2018-10-17",
            "2018-10-18",
            "2018-10-19",
            "2018-10-20",
            "2018-10-21",
            "undefine"
          ],
          "Week|+1": [
            "星期一",
            "星期二",
            "星期三",
            "星期四",
            "星期五",
            "星期六",
            "星期日",
            "undefind"
          ],
          "section_id|+1": that.$route.params.section_id
        }
         ]
      }),
    $.ajax({
      url: "http://192.168.1.61:8085",
      dataType: "json"
    }).done(function(data, status, xhr) {
      console.log(data);
      that.timelist = data.time;
      console.log(data.time);
    });
  },
  created: function() {
    let section_id = this.$route.params.section_id;
    console.log(this.$route.params.section_id);
  },
  methods:{
      postTimeList(index,section_id,Date){
          this.isActive = index;
          var that = this;
          console.log(Date)
           $.ajax({
                url: "http://192.168.1.61:8082",
                dataType: "json"
                }).done(function(data, status, xhr) {
                console.log(data, status, xhr);
                that.getTimeListContents = data.AppointTime;
                console.log(data.AppointTime)
            });
      }
  },
  filters: {
    fixTime(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();
      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;
      return [month, day].join("/");
    }
  }
};
</script>

<style lang="less">
@px: 1/100rem;
.acdingtime {
  position: fixed;
  top: 105 * @px;
//   height: 100%;
  width: 100%;
  background: #fff;
  .timelist {
    position: relative;
    top: 30 * @px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #fff;
    height: 150 * @px;
    border-top: 1px solid rgba(235, 235, 235, 0.7);
    border-bottom: 1px solid rgba(235, 235, 235, 0.7);
    color: #333333;
    font-size: 26 * @px;
    .swiper-wrapper {
      .swiper-slide {
        width: 150 * @px;
        text-align: center;
        height: 150 * @px;
        a {
          text-decoration: none;
          color: #333333;
          font-size: 26 * @px;
          display: block;
          // touch-action: none;
          .ui-time-style {
            padding: 20 * @px;
            margin-top: 20 * @px;
            border-right: 1px solid rgba(245, 245, 245, 0.7);
            font-size: 26 * @px;
          }
        }
        .active {
          color: #2199e3;
        }
      }
    }
  }
  .appointlist{
      margin-top: 28*@px;
      height: 1000*@px;
      overflow-x: scroll;
      ul{
        padding: 0;
        margin: 0;
        li{
          list-style: none;
          height: 100*@px;
          line-height: 100*@px;
          border-bottom: 1px solid #ededed;
          a{
            display: block;
            color: #000;
            text-indent: 20*@px;
            text-decoration: none;
          }
        }
      }
  }
}
</style>
