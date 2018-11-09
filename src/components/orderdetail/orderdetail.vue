
//订单详情
<template>
    <div class="orderdetail">
        <div class="descript">
            <div class="descript_con">
                 迪丽热巴预约泉州市第一医院乐惠清医生，10月20号早上10：30分的号，请持就诊卡到自助机上预约确认，领取号码，过单作废！
            </div>
        </div>
        <div class="appoint_info">
            <div class="title">
                <div class="left">预约信息</div>
                <div class="right">待就诊</div>
            </div>
            <div class="appoint_info_list">
                <div class="info">
                    <span>预约医院</span>
                    泉州市第一人民医院
                </div>
                 <div class="info">
                    <span>预约科室</span>
                    儿科
                </div>
                 <div class="info">
                    <span>预约医生</span>
                    乐惠清
                </div>
                 <div class="info">
                    <span>预约时间</span>
                    2018-10-18
                </div>
            </div>
        </div>
        <div class="appoint_info">
            <div class="title">
                <div class="left">就诊人信息</div>
            </div>
            <div class="appoint_info_list">
                <div class="info">
                    <span>就诊人</span>
                    李乐恩
                </div>
                 <div class="info">
                    <span>身份证</span>
                   350141199004051152
                </div>
                 <div class="info">
                    <span>手机号</span>
                    13696908740
                </div>
            </div>
        </div>
        <div class="delete_btn" @click="retreatStatus">
            <a href="javascript:void(0)">退号</a>
        </div>
        <div class="retreat">退号成功</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            RetreatStatus:""//退号状态
        }
    },
    mounted:function(){
    var that = this;
    //mock.js模拟数据 模拟时间
    Mock.mock("http://192.168.1.61:8083", {
      //Random.date()
      "hosp|1": "返回成功"
    });
    },
    methods:{
        retreatStatus(){
            let that=this;
            $.ajax({
            url: "http://192.168.1.61:8083",
            dataType: "json"
            }).done(function(data, status, xhr) {
            console.log(data);
                that.RetreatStatus = data.hosp;
                if(that.RetreatStatus =="返回成功"){
                    $(".retreat").show().delay(3000).hide(300);
                    setTimeout(function(){
                         that.$router.push({name: '/index'});
                    },3000)
                }else{
                    $(".retreat").show().html("退号失败").delay(3000).hide(300);
                }
            });
        }
    },
    created(){

    }
}
</script>

<style lang="less">
@px: 1/100rem;
    .orderdetail{
        position: fixed;
        top: 0;
        background: #ffffff;
        width: 100%;
        height: 100%;
        .descript{
            color: #999;
            border-bottom: 1px solid #ebebeb;
            .descript_con{
                width: 702*@px;
                margin: 0 auto;
                padding-top: 30*@px;
                padding-bottom: 30*@px;
            }
        }
        .appoint_info{
            border-top: 1px solid #ebebeb;
            border-bottom: 1px solid #ebebeb;
            margin-top: 20*@px;
            .title{
                clear: both;
                height: 100*@px;
                line-height: 100*@px;
                .left{
                    float: left;
                    text-indent: 15*@px;
                }
                .right{
                    float: right;
                    margin-right: 15*@px;
                    color: #7ad6af;
                }
            }
            .appoint_info_list{
                .info{
                    clear: both;
                    height: 45*@px;
                    line-height: 45*@px;
                    span{
                        color: #999;
                        display: block;
                        width: 150*@px;
                        text-indent: 15*@px;
                        float: left;
                        width: 255*@px;
                    }
                }
                .info:last-child{
                    padding-bottom: 30*@px;
                }
            }
        }
        .delete_btn{
            width: 130*@px;
            height: 45*@px;
            line-height: 45*@px;
            border-radius: 3px;
            background: #219ae3;
            text-align: center;
            margin: 0 auto;
            margin-top: 50*@px;
            a{
               text-decoration: none; 
               display: block;
               color: #ffffff;
            }
        }
        .retreat{
            display: none;
            position: absolute;
            top: 500*@px;
            width: 500*@px;
            height:100*@px;
            background: rgba(0, 0, 0, 0.5);
            color: #ffffff;
            text-align: center;
            line-height: 100*@px;
            border-radius: 3px;
            left: 130*@px;
        }
    }
</style>
