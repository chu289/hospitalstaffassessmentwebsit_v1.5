<template>
  <div class="home_wrap">
    <h3 class="announcementTitle">最新公告</h3>
    <div class="announcement">
      <Carousel :autoplay="2000" :wrap-around="true">
        <Slide v-for="img in imgs" :key="img.id">
          <!-- <div class="carousel__item">{{ slide }}</div> -->
          <div class="carousel__item"><img :src="img.src" alt=""></div>
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
          @click="isShow = !isShow"
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

      <router-link :to="`/users/${userID}`">{{ userID }}</router-link>
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
</template>

<script>
import StarRating from 'vue-star-rating'
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import Popup from '../component/Popup/index.vue'

//import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

export default {
  components: {
    StarRating,
    Popup,
    Carousel,
    Slide,
    Pagination
  },

  setup() {
    const rating = ref(0)
    const initialRate = ref(0)
    // const place_ID = ref('A00001')
    const userID = ref('')
    const qrcodePath = ref('@/assets/A001.png')
    const limitedInterval = ref(null)
    const router = useRouter()
    const showSignOutDialog = ref(false)
    const isShow = ref(false)
    const imgs = ref([
      {
        id: 1,
        src:"https://picsum.photos/1210/681/?random=100"
      },
      {
        id: 2,
        src:"https://picsum.photos/1210/681/?random=90"
      },
            {
        id: 3,
        src:"https://picsum.photos/1210/681/?random=80"
      },
            {
        id: 4,
        src:"https://picsum.photos/1210/681/?random=70"
      },
            {
        id: 5,
        src:"https://picsum.photos/1210/681/?random=60"
      }
    ])
    // onMounted(() => {
    //       //  changeUser()
    //       console.log(this.$route.params.userID);
    //     })
    // imgs:[
    //   {src:"https://picsum.photos/300/300/?random=10"}
    // ]

    function setRating(parmValue) {
      rating.value = parmValue
      axios
        .post('https://hospitalstaffassessmentserver.azurewebsites.net:443/score', {
          score: rating.value,
          employee_ID: '',
          // Comment: '',
          // place_ID: place_ID.value,
        })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })

      setTimeout(function () {
        isShow.value = false
        initialRate.value = 0
        rating.value = 0
      }, 3000)
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
      
      // qrcodePath.value = require(`@/assets/${userID.value}.png`)
      qrcodePath.value = require(`@/assets/${this.$route.params.userID}.png`)

      // router.push({ path: '/users/' + userID.value })
      console.log(qrcodePath.value)
    }

    function closeSingOut() {
      showSignOutDialog.value = false
    }

    function handleSignOutConfirm() {
      showSignOutDialog.value = false
      router.push({ path: '/login' })
    }

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
      imgs
    }
  },
  mounted() {
    this.changeUser()
  }
}
</script>

<style type="text/css" src="@/assets/style.css"></style>
