<template>
  <div class="home_wrap">
    <!-- <h3 class="announcementTitle">最新公告</h3> -->
    <div class="announcement">
      <Carousel v-if="imgs.length!==0" :autoplay="5000" :wrap-around="true" ref="myCarousel">
        <Slide v-for="(imgsrc,index) in imgs" :key="index">
           <div class="carousel__item"><img :src="imgsrc" alt=""></div>
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>

      <!-- <input type="text" v-model="userID" />
      <button @click="changeUser">USER</button> -->
    </div>

    <div class="ratingBarFrame">
      <div class="ratingBar">
        <p>評分</p>
        <star-rating
          :increment="1"
          :max-rating="5"
          v-model:rating="initialRate"
          inactive-color="#E5E5E5"
          active-color="#F6DC66"
          :star-size="130"
          @update:rating="setRating"

        >
        </star-rating>

        <transition>
          <div class="thanks" v-show="isShow">
            <div class="thanks_title">評分已送出!</div>
            <div class="thanks_txt">
              感謝您撥冗留下您的評分<br />
              您的評分使我們變得更好<br />
              國泰醫院很榮幸為您服務<br />
            </div>
          </div>
        </transition>

        <div class="QRCode_picture">
          <img
            :src="qrcodePath"
            @touchstart="onlongpress()"
            @touchend="stoplongpress()"
          />
          <router-view></router-view>
        </div>
      </div>

      <!-- <router-link :to="`/users/${userID}`">{{ userID }}</router-link> -->
    </div>

    <Popup
      class="signOut"
      :showDialog="showSignOutDialog"
      :cancel="closeSingOut"
      :confirm="handleSignOutConfirm"
      cnacelTxt="否   NO"
      confirmTxt="是  YES"
    >
      <div class="dialogContent">
        <button class="quit" @click="closeSingOut">X</button>
        <h3>確認登出?</h3>
      </div>
    </Popup>
  </div>
   <!-- <h2 class="rating_text_content__mobile">評分</h2>
  <div class="rating_wrap__mobile">
    <div class="rating_text">
     
    </div>
    <star-rating
      :increment="1"
      :max-rating="5"
      v-model:rating="initialRate"
      inactive-color="#E5E5E5"
      active-color="#F6DC66"
      :star-size="120"
      @update:rating="setRating"
      @click="isShow = !isShow"
    >
    </star-rating>


  </div>
      <transition>
      <div class="thanks__mobile" v-show="isShow">
        <div class="thanks_title__mobile">評分已送出!</div>
        <div class="thanks_txt__mobile">
          感謝您撥冗留下您的評分<br />
          您的評分使我們變得更好<br />
          國泰醫院很榮幸為您服務<br />
        </div>
      </div>
    </transition> -->
</template>

<script>
import StarRating from 'vue-star-rating'
import { ref } from 'vue'
import axios from 'axios'
import { useRoute,useRouter } from 'vue-router'
import Popup from '../component/Popup/index.vue'

//import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

export default {
  components: {
    StarRating,
    Popup,
    Carousel,
    Slide,
    Pagination,
  },

  setup() {
    const myCarousel = ref(null);  
    const rating = ref(0)
    const initialRate = ref(0)
    // const place_ID = ref('A00001')
    const userID = ref('')
    const qrcodePath = ref('@/assets/A001.png')
    const limitedInterval = ref(null)
    const router = useRouter()
    const route = useRoute()
    const showSignOutDialog = ref(false)
    const isShow = ref(false)
    const imgs = ref([])
    //  onMounted(() => {
    //        //  changeUser()
    //        console.log(this.$route.params.userID);
    //      })
    //  imgs:[
    //    {src:"https://picsum.photos/300/300/?random=10"}
    //  ]

    /*if(!route.params.id){
        alert("錯誤，請重新登入(不能直接更改網址)");
        router.replace({ path: '/' });
    }*/
    function setRating(parmValue) {
        console.log(route.params);
        rating.value = parmValue;
        axios
          .post('https://hospitalstaffassessmentserver.azurewebsites.net:443/score', {
            score: rating.value,
            employee_ID: route.params.id,//route.params.id
            // Comment: '',
            // place_ID: place_ID.value,
        })
        .then((res) => {
          console.log(res);
          if(res.data=="NO"){
            initialRate.value = 0;
            rating.value = 0;
            alert("評分失敗");
          }else{
            isShow.value = !isShow.value;
            setTimeout(function () {
              isShow.value = false
              initialRate.value = 0
              rating.value = 0
            }, 3000)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }

    // function getqrcode() {
    //   qrcodePath.value = require(`@/assets/${userID.value}.png`)
    // }

    function onlongpress() {
      limitedInterval.value = setInterval(() => {
        showSignOutDialog.value = true
        console.log('t')
        // alert('Your text here')
        if (showSignOutDialog.value === true) {
          clearInterval(limitedInterval.value)
        }
      }, 1000)
    }

    function stoplongpress() {
      console.log('stop')
      clearInterval(limitedInterval.value)
      // limitedInterval.value = 1
    }

    function changeUser() {
    if(!this.$route.params.id){
        alert("錯誤，請重新登入(不能直接更改網址)");
        router.replace({ path: '/' });
    }
      // qrcodePath.value = require(`@/assets/${userID.value}.png`)
      qrcodePath.value = require(`@/assets/${this.$route.params.userID}.png`)

      // router.push({ path: '/users/' + userID.value })
      console.log(qrcodePath.value);
    }

    function getAnnouncements(){
      axios
      .get('https://hospitalstaffassessmentserver.azurewebsites.net:443/announcements')
      //.get('https://hospitalstaffassessmentserver.azurewebsites.net:443/announcementstest')
        //'https://hospitalstaffassessmentserver.azurewebsites.net:443/announcementstest'公告測試
        .then((res) => {
          //console.log(res);
          imgs.value = res.data.announcements;
          /*imgs.value.splice(0, imgs.value.length);//清空陣列
          res.data.announcements.forEach(element => {
            imgs.value.push(element);
          });*/
          //myCarousel.value.slideTo(0);
          let waitSeconds = res.data.nextCallSeconds==-1 ? 21600 : res.data.nextCallSeconds//-1秒會轉6小時
          console.log(`${imgs.value.length}張公告，等待${waitSeconds}秒後切換`);
          reFetch(waitSeconds);
        })
        .catch((err) => {
          console.log(err)
        })
    }
    

    function reFetch(seconds){
      setTimeout(function () {
        getAnnouncements();
      }, seconds*1000)
    }
    function closeSingOut() {
      showSignOutDialog.value = false
    }

    function handleSignOutConfirm() {
      showSignOutDialog.value = false
      // this.$route.params.userID = ''
      router.replace({ path: '/' })
    }
    getAnnouncements();

    return {
      rating,
      userID,
      qrcodePath,
      // limitedInterval,
      setRating,
      // getqrcode,
      onlongpress,
      stoplongpress,
      changeUser,
      Popup,
      showSignOutDialog,
      closeSingOut,
      handleSignOutConfirm,
      isShow,
      initialRate,
      imgs,
      myCarousel,
    }
  },
  mounted() {
    this.changeUser();
  },
  //mounted()不重新整理，直接更改網址，QRcode不更新
  beforeUpdate() {
    this.changeUser();
  },
}
</script>

<style type="text/css" src="@/assets/style.css"></style>
