<template>
  <div>
    <baidu-map
      style="display: flex; flex-direction: column-reverse"
      id="allmap"
      @ready="mapReady"
      @click="getLocation"
      :scroll-wheel-zoom="true"
    >
      <div style="display: flex; justify-content: left: ;; margin: 15px">
        <bm-auto-complete
          v-model="searchJingwei"
          :sugStyle="{ zIndex: 999999 }"
        >
          <div class="gps-bor">
            <span style="color: #cbced7">GPS：</span>
            <el-input
              v-model="searchJingwei"
              style="width: 200px; margin-right: 15px"
              placeholder=""
            ></el-input>
          </div>
        </bm-auto-complete>

        <el-date-picker v-model="value1" type="datetime" style="margin: 0 12px">
        </el-date-picker>

        <el-button type="primary" @click="getBaiduMapPoint"
          >새로 고침</el-button
        >
        <el-button
          type="primary"
          @click="getBaiduMapPoint"
          style="background-color: #2ca8cd; color: #fff"
          >핸드폰 위치 재조정</el-button
        >
      </div>
      <bm-map-type
        :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
        anchor="BMAP_ANCHOR_TOP_LEFT"
      ></bm-map-type>
      <bm-marker
        v-if="infoWindowShow"
        :position="{ lng: longitude, lat: latitude }"
      >
        <bm-label
          content=""
          :labelStyle="{ color: 'red', fontSize: '24px' }"
          :offset="{ width: -35, height: 30 }"
        />
      </bm-marker>
      <bm-info-window
        :position="{ lng: longitude, lat: latitude }"
        :show="infoWindowShow"
        @clickclose="infoWindowClose"
      >
        <p>纬度:{{ this.latitude }}</p>
        <p>经度:{{ this.longitude }}</p>
      </bm-info-window>
    </baidu-map>
  </div>
</template>

<script>

export default {

  data () {
    return {
      searchJingwei: '',
      infoWindowShow: false,
      longitude: '',
      latitude: '',
      point: '',
      value1: ''
    }
  },
  methods: {
    //地图初始化
    mapReady ({ BMap, map }) {
      let geolocation = new BMap.Geolocation()
      geolocation.getCurrentPosition((res) => {
        console.log(res.point.lat);
        this.point = new BMap.Point(res.point.lng, res.point.lat
        );
        map.centerAndZoom(this.point, 12);
        this.BMap = BMap
        this.map = map
      })
      // 选择一个经纬度作为中心点

    },
    //点击获取经纬度
    getLocation (e) {
      this.longitude = e.point.lng
      this.latitude = e.point.lat
      this.infoWindowShow = true
    },
    getBaiduMapPoint () {
      let that = this
      let myGeo = new this.BMap.Geocoder()
      myGeo.getPoint(this.searchJingwei, function (point) {
        if (point) {
          that.map.centerAndZoom(point, 15)
          that.latitude = point.lat
          that.longitude = point.lng
          that.infoWindowShow = true
        }

      })
    },
    //信息窗口关闭
    infoWindowClose () {
      this.latitude = ''
      this.longitude = ''
      this.infoWindowShow = false
    },
  },
}
</script>

<style lang="scss" scoped>
#allmap {
  height: calc(100vh - 200px);
  width: 100%;
  margin: 10px 0;
}
.gps-bor {
  padding-left: 20px;
  border: 2px solid #ebebeb;
  width: 300px;
  background-color: #fafafa;
}
.el-date-picker {
}
</style>

