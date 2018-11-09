//预约方式页面
<template>
    <div class="yuyue">
       <div class="title">
           <ul>
               <li :class="{ active: ison}"  @click="_loginway()">
                  按医生预约
               </li>
               <li :class="{ active: !ison}" @click="_loginway()">
                   按时间预约
               </li>
           </ul>
       </div>
       <div class="login_ways_con clearfix">
            <div class="con" v-show="ison">
               <acdingdt></acdingdt>
            </div>
            <div class="con" v-show="!ison">
                <acdingtime></acdingtime>
            </div>
       </div>
    </div>
</template>

<script>
import Acdingdt from '../acdingdt/acdingdt'
import Acdingtime from '../acdingtime/acdingtime'
export default {
    data(){
        return{
            section_id:"",
            ison:true
        }
    },
    components:{
        Acdingdt,
        Acdingtime
    },
    created:function(){
        // let section_id = this.$route.params.section_id;
        // console.log(this.$route.params.section_id)
    },
    methods:{
    _loginway(){
        this.ison==true?this.ison=false:this.ison=true;
        }
    }
}
</script>

<style lang="less">
@px: 1/100rem;
.yuyue {
  z-index: 2;
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background: #fff;
  .title {
    height: 100 * @px;
    line-height: 100 * @px;
    width: 100%;
    //background: red;
    border-bottom: 1px solid #ededed;
    ul {
      display: flex;
      width: 100%;
      padding: 0;
      margin: 0;
      li {
        list-style: none;
        text-align: center;
        flex: 1;
      }
      .active {
        color: #239ce5;
      }
    }
  }
}
</style>
