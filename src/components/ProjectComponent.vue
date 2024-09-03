<template>
  <div
    class="w-full p-4 sm:p-0 sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[40vw] m-auto mb-24"
  >
    <swiper
      :effect="'cube'"
      :grabCursor="true"
      :cubeEffect="{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        ><img src="@/assets/icons/grid3.png" class="h-[60vh] w-full" />
        <div class="text">
          <p class="title">CONTECH</p>
          <h4 class="description">
            A website for sponsors and .... to register for a tech conference
          </h4>
          <button @click="conTech" class="btn">View</button>
        </div> </swiper-slide
      ><swiper-slide
        ><img src="@/assets/icons/grid4.png" class="h-[60vh] w-full" />
        <div class="text">
          <p class="title">NAS TECH AUTO(upgrade)</p>
          <h4 class="description">AN automobile/ car dealership website.</h4>
          <button @click="nasTech" class="btn">In View</button>
        </div></swiper-slide
      ><swiper-slide>
        <img src="@/assets/icons/period.png" class="h-[60vh] w-full" />
        <div class="text">
          <p class="title">PERIOD TRACKER</p>
          <h4 class="description">
            A health app that track menstrual cycle and ovulation.
          </h4>
          <button class="btn">In View</button>
        </div></swiper-slide
      >
      <swiper-slide>
        <img src="@/assets/icons/firstCar.png" class="h-[60vh] w-full" />
        <div class="text">
          <p class="title">NAS AUTO(2022)</p>
          <h4 class="description">
            An automobile/car dealership website built during my bootcam
            training without been responsive
          </h4>
          <button @click="nasTechOld" class="btn">View</button>
        </div></swiper-slide
      >
      <swiper-slide>
        <img src="@/assets/icons/firstPort.png" class="h-[60vh] w-full" />
        <div class="text">
          <p class="title">FIRST PORTFOLIO(bootcamp project 2022)</p>
          <h4 class="description">
            First portfolio project during my bootcamp training as a frontend
            developer without been responsive
          </h4>
          <button @click="firstPort" class="btn">View</button>
        </div></swiper-slide
      >
      <swiper-slide>
        <img src="@/assets/icons/med.png" class="h-[60vh] w-full" />
        <div class="text">
          <p class="title">MED24(2022)</p>
          <h4 class="description">
            A telemedicine app done during my bootcam traning using
            JavaScript(frontend) and python(backend).
          </h4>
          <button class="btn">In View</button>
        </div></swiper-slide
      >
      <!-- <swiper-slide class="h-[60vh]">
        <video class="w-[50%] h-[50%] object-scale-down" controls>
          <source src="@/assets/icons/period.mp4" type="video/mp4" />
        </video>
        <div class="text">
          <p class="title">MED24(2022)</p>
          <h4 class="description">
            A telemedicine app done during my bootcam traning using
            JavaScript(frontend) and python(backend).
          </h4>
          <button class="btn">In View</button>
        </div></swiper-slide
      > -->
    </swiper>
    <p class="text-[#868e96] text-sm tracking-tighter mt-8">swipe to change</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCube, Pagination } from "swiper/modules";
import "swiper/css";

import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import "./style.css";

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const nasTech = () => {
      window.open("https://nastechauto.netlify.app/", "_blank");
    };
    const conTech = () => {
      console.log("hello");
      window.open("https://contechng.com/", "_blank");
    };
    const nasTechOld = () => {
      window.open("https://giwaautoshopshtml.netlify.app/", "_blank");
    };
    const firstPort = () => {
      window.open("https://giwafauzziyyah.netlify.app", "_blank");
    };
    return {
      nasTech,
      conTech,
      nasTechOld,
      firstPort,
      modules: [EffectCube, Pagination],
    };
  },
});
</script>

<style scoped>
.port-container {
  border-radius: 10px;
  height: 400px;
  width: 25vw;
  overflow: hidden;
  position: relative;
}
img {
  overflow-clip-margin: content-box;
  overflow: clip;
}
.text {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2), #000);
  bottom: -10px;
  padding: 5px;
  position: absolute;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  z-index: 3;
}
.title {
  color: #fff;
  font-family: Coolvetica;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 0;
  margin-top: 0;
}
.description {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 3px;
}
.btn {
  background: transparent;
  border: 2px solid #ee82c7;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  height: 40px;
  line-height: 34px;
  margin-bottom: 10px;
  margin-top: 20px;
  padding: 0 23px;
  text-transform: uppercase;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.swiper-cube .swiper-cube-shadow:before {
  content: "";
  background: #ee82c7 !important;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  filter: blur(50px);
}
</style>
