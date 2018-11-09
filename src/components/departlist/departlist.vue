
// 医院科室列表
<template>
   <div class="depart_list">
        <ul>
            <li v-for="item in depart_list" :key="item.section_id">
                <router-link :to="'/yuyue/'+item.section_id">{{item.section_name}}</router-link>
            </li>
        </ul>
        <!-- <div class="depart_list_con" v-for="item in depart_list" :key="item.section_id">{{item.section_name}}</div> -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  data() {
    return {
      depart_list: []
    };
  },
  
  mounted: function() {
    var that = this;
    Mock.mock(RegExp('http://192.168.1.61:8081' + ".*"),"get",{
      "hosp|10-20": [{
           'section_name|+3': '检查科室',
           'section_id|+1':1012345,
        }]
    })
    $.ajax({
        url: 'http://192.168.1.61:8081',
        data:{
             DeptID: "",
             book_date: "0"
        },
        dataType: 'json'
    }).done(function(data, status, xhr) {
        console.log(data);
        that.depart_list = data.hosp;
    });
  }
};
</script>

<style>
</style>
