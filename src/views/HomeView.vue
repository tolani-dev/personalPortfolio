<template class="">
  <div class="pt-[80px] dark:bg-bgcolor dark:text-white">
    <div
      class="bg-secondary h-[20vh] md:h-[25vh] lg:h-[30vh] w-full sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] m-auto"
    >
      <img src="@/assets/icons/header.png" class="h-full w-full object-fill" />
    </div>
    <div class="flex justify-around md:justify-evenly">
      <img
        src="@/assets/icons/profile2.png"
        alt="h"
        class="rounded-full w-36 h-36 border-4 mt-[-10vh]"
      />
      <div
        @click="twitter"
        class="bg-primary w-fit h-fit rounded-3xl px-4 py-2 bg-success mt-5 flex justify-around items-center gap-1 hover:outline hover:cursor-pointer"
      >
        <button class="font-bold text-white">Follow</button>
        <svg fill="white" class="w-5 h-5" viewBox="0 0 24 24" role="img">
          <title>Twitter icon</title>
          <path
            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
          ></path>
        </svg>
      </div>
    </div>
    <div
      class="m-auto w-full p-4 sm:p-0 sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[40vw]"
    >
      <h3 class="flex gap-3 items-center">
        <p class="text-4xl lg:text-5xl font-black tracking-tighter">
          Fauzziyyah Giwa
        </p>
        <svg
          viewBox="0 0 22 22"
          aria-label="Verified account"
          role="img"
          class="w-5 h-5 text-primary"
          data-testid="icon-verified"
          fill="#F42272"
        >
          <g>
            <path
              d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
            ></path>
          </g>
        </svg>
      </h3>
      <p class="mt-2 font-medium text-[#868e96]"><span></span>@jsWithTola ✨</p>
      <p class="font-medium mt-2">
        💻 Frontend Developer | Vue.js, React, Ionic 🎥 Aspiring Tech Content
        Creator | @jsWithTola. 👩‍💻 Freelance + Formally @Butler + Formerly
        @speedpay.
      </p>
      <div class="flex justify-between items-center mt-4 gap-0">
        <p class="flex gap-1 text-[#868e96] font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
              clip-rule="evenodd"
            ></path>
            <path
              d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z"
            ></path>
          </svg>
          <span class="text-xs md:text-sm">Available</span>
        </p>
        <p @click="openYoutube" class="flex gap-1 text-[#868e96] font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"
            ></path>
            <path
              d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"
            ></path>
          </svg>
          <span
            class="text-xs md:text-sm text-primary hover:border-b-2 hover:border-primary"
            >Youtube</span
          >
        </p>
        <p class="flex gap-1 text-[#868e96] font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              d="M6.75.98l-.884.883a1.25 1.25 0 101.768 0L6.75.98zM13.25.98l-.884.883a1.25 1.25 0 101.768 0L13.25.98zM10 .98l.884.883a1.25 1.25 0 11-1.768 0L10 .98zM7.5 5.75a.75.75 0 00-1.5 0v.464c-1.179.305-2 1.39-2 2.622v.094c.1-.02.202-.038.306-.051A42.869 42.869 0 0110 8.5c1.93 0 3.83.129 5.694.379.104.013.206.03.306.051v-.094c0-1.232-.821-2.317-2-2.622V5.75a.75.75 0 00-1.5 0v.318a45.645 45.645 0 00-1.75-.062V5.75a.75.75 0 00-1.5 0v.256c-.586.01-1.17.03-1.75.062V5.75zM4.505 10.365A41.377 41.377 0 0110 10c1.863 0 3.697.124 5.495.365C16.967 10.562 18 11.838 18 13.28v.693a3.72 3.72 0 01-1.665-.393 5.222 5.222 0 00-4.67 0 3.722 3.722 0 01-3.33 0 5.222 5.222 0 00-4.67 0A3.72 3.72 0 012 13.972v-.693c0-1.441 1.033-2.716 2.505-2.914zM15.665 14.921a5.22 5.22 0 002.335.551V16.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 16.5v-1.028c.8 0 1.6-.183 2.335-.551a3.722 3.722 0 013.33 0c1.47.735 3.2.735 4.67 0a3.722 3.722 0 013.33 0z"
            ></path>
          </svg>
          <span class="text-xs md:text-sm">August 27th </span>
        </p>
        <p class="flex gap-1 text-[#868e96] font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z"
            ></path>
            <path
              fill-rule="evenodd"
              d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="text-xs md:text-sm">Joined July 2022</span>
        </p>
      </div>
      <div class="mt-5">
        <p class="flex justify-center font-semibold text-xs md:text-sm">
          Keep up to date with my latest projects and adventures!
        </p>
        <div class="flex justify-center mt-2">
          <input
            placeholder="Email Address"
            class="block dark:bg-[#011] bg-[#eee] w-[60%] font-medium border-none rounded-l-3xl focus:outline-none focus:outline-primary p-2"
            v-model="email"
          />
          <button
            @click="storeEmail"
            class="bg-primary border-none rounded-r-3xl y-2 px-3.5 hover:outline"
          >
            <div class="flex justify-center">
              <spinSpinner v-if="isLoading" />
              <span v-else class="font-bold text-white">Subscribe!</span>
            </div>
          </button>
        </div>
        <span
          @click="removeEmail"
          class="flex justify-center font-normal text-[#868e96] mt-2 text-sm hover:cursor-pointer"
          >No spam. Unsubscribe any time.</span
        >
      </div>
      <!-- <div
        v-if="showToast"
        class="fixed bottom-4 right-4 bg-primary text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-4"
      >
        <toastComponent @closeToast="closeToast" :status="status" />
      </div> -->

      <div class="mt-4 flex justify-around gap-0 mb-10 hover:">
        <p
          v-for="tab in tabs"
          :key="tab"
          @click="isActive(tab)"
          class="font-bold dark:text-[#868e96] text-[#565a5f] hover:cursor-pointer"
          :class="
            active == tab
              ? 'border-b-4 border-primary dark:text-secondary text-[#211]'
              : ''
          "
        >
          {{ tab }}
        </p>
      </div>
    </div>
    <div v-if="active == 'Feed'">
      <feed-component />
    </div>
    <div v-if="active == 'About'">
      <about-component />
    </div>
    <div v-if="active == 'Project'">
      <project-component />
    </div>
    <div v-if="active == 'Reviews'">
      <review-component />
    </div>
  </div>
</template>

<script lang="ts">
import AboutComponent from "@/components/AboutComponent.vue";
import FeedComponent from "@/components/FeedComponent.vue";
import ProjectComponent from "@/components/ProjectComponent.vue";
import ReviewComponent from "@/components/ReviewComponent.vue";
import { defineComponent, onMounted, reactive, ref } from "vue";
import { deleteEmail, saveEmail } from "@/services/supabase.service";
import toastComponent from "@/components/action/toastComponent.vue";
import spinSpinner from "@/components/action/Spin.vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
// import { displayToast } from "@/components/toastComponent.vue";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    FeedComponent,
    AboutComponent,
    ProjectComponent,
    ReviewComponent,
    // toastComponent,
    spinSpinner,
  },
  setup(props, ctx) {
    const isLoading = ref(false);
    const status = ref(false);
    const tabs = ref(["Feed", "About", "Project", "Reviews"]);
    const active = ref("Feed");
    const email = ref();
    const isActive = (type: any) => {
      active.value = type;
    };
    const openYoutube = () => {
      window.open(
        "https://youtube.com/@jswithtola?si=u78i4qd0EVtEe65H",
        "_blank"
      );
    };
    const twitter = () => {
      window.open("https://x.com/giwafauzziyyah", "_blank");
    };
    const isDarkMode = ref(false);
    // A reference to control the visibility of the toast
    const showToast = ref(false);

    // Function to show the toast
    const displayToast = () => {
      showToast.value = true;

      // Auto-dismiss the toast after 5 seconds
      setTimeout(() => {
        showToast.value = false;
      }, 5000);
    };

    // Function to manually close the toast
    const closeToast = () => {
      showToast.value = false;
    };
    const storeEmail = async () => {
      localStorage.setItem("email", email.value);
      isLoading.value = true;
      const { data, error } = await saveEmail(email.value);
      if (!error) {
        // status.value = true;
        isLoading.value = false;
        email.value = "";
        // displayToast();
        toast("You have succesfully subscribe to my news letter", {
          autoClose: 3000,
          theme: "auto",
          type: "default",
          dangerouslyHTMLString: true,
        });
      } else {
        console.log(error);
        toast(`Try again an error occured`, {
          autoClose: 3000,
          theme: "auto",
          type: "default",
          dangerouslyHTMLString: true,
        });
      }
    };
    const removeEmail = async () => {
      // isLoading.value = true;
      const { data, error } = await deleteEmail(localStorage.getItem("email"));
      if (!error) {
        // status.value = true;
        // isLoading.value = false;
        email.value = "";
        // displayToast();
        toast("You have succesfully unsubscribe to my news letter", {
          autoClose: 3000,
          theme: "auto",
          type: "default",
          dangerouslyHTMLString: true,
        });
      } else {
        console.log(error);
        toast(`Try again an error occured`, {
          autoClose: 3000,
          theme: "auto",
          type: "default",
          dangerouslyHTMLString: true,
        });
      }
    };
    // Check the user's theme preference on mounted
    onMounted(() => {
      const storedTheme = localStorage.getItem("theme");
      const userPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (storedTheme === "dark" || (!storedTheme && userPrefersDark)) {
        isDarkMode.value = true;
        document.documentElement.classList.add("dark");
      }
    });
    return {
      tabs,
      isActive,
      active,
      openYoutube,
      twitter,
      storeEmail,
      email,
      showToast,
      closeToast,
      isLoading,
      status,
      removeEmail,
      // toggleDarkMode,
    };
  },
});
</script>
