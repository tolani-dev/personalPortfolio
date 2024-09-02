<template>
  <div
    class="w-full p-4 sm:p-0 sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[40vw] m-auto hover:bg-black-light hover:rounded-md mb-12 pt-4"
  >
    <div class="mb-1 w-[12vw] flex justify-around items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4"
      >
        <path
          fill="currentColor"
          d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z"
        ></path>
      </svg>
      <p class="text-[#868e96]">LinkedIn</p>
    </div>
    <div class="flex justify-around gap-3 sm:gap-0">
      <div class="w-[10vw] md:w-[5vw]">
        <img
          src="@/assets/icons/profile.png"
          alt="image"
          class="rounded-full w-14 h-14"
        />
      </div>
      <div class="w-[88%]">
        <h3 class="font-bold">
          Boris Brenner ✨ • <span class="text-[#868e96]">16 Sept 2023</span>
        </h3>
        <p class="font-medium text-secondary text-wrap">
          just a fan of your videos 👍🏼
        </p>
        <div class="flex justify-end gap-2 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div class="w-[2%]"></div>
    </div>
  </div>
  <div
    class="w-full p-4 sm:p-0 sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[40vw] m-auto hover:bg-black-light hover:rounded-md mb-12 pt-4"
  >
    <div class="mb-1 w-[12vw] flex justify-around items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4"
      >
        <path
          fill="currentColor"
          d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z"
        ></path>
      </svg>
      <p class="text-[#868e96]">YouTube</p>
    </div>
    <div class="flex justify-around gap-3 sm:gap-0">
      <div class="w-[10vw] md:w-[5vw]">
        <img
          src="@/assets/icons/profile.png"
          alt="image"
          class="rounded-full w-14 h-14"
        />
      </div>
      <div class="w-[88%]">
        <h3 class="font-bold">
          @navin_kg ✨ • <span class="text-[#868e96]">16 Sept 2023</span>
        </h3>
        <p class="font-medium text-secondary text-wrap">
          Hi Giwa you are doing great. Plz continue with your journey
        </p>
        <div class="flex justify-end gap-2 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div class="w-[2%]"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
