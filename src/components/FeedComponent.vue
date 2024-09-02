<template>
  <div
    class="w-full p-4 sm:p-0 sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[40vw] m-auto hover:bg-black-light hover:rounded-md mb-12 pt-4"
  >
    <div
      class="mb-1 w-[20%] sm:w-[20%] md:w-[13vw] lg:w-[11vw] flex justify-around items-center pt-3"
    >
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
      <p class="text-[#868e96]">pinned</p>
    </div>
    <div class="flex justify-around gap-3 sm:gap-0">
      <div class="w-[12vw] sm:w-[10vw] md:w-[5vw]">
        <img
          src="@/assets/icons/profile.png"
          alt="image"
          class="rounded-full w-14 h-14"
        />
      </div>
      <div class="w-[83%] xl:w-[88%]">
        <h3 class="flex items-center gap-1 font-bold">
          jsWithTola
          <svg
            viewBox="0 0 22 22"
            aria-label="Verified account"
            role="img"
            class="w-4 h-4 text-primary"
            data-testid="icon-verified"
            fill="#F42272"
          >
            <g>
              <path
                d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
              ></path>
            </g>
          </svg>
          • <span class="text-[#868e96]">27 Aug 2024</span>
        </h3>
        <p
          class="bg-black-light font-bold rounded-2xl py-1 px-2 w-fit text-nowrap"
        >
          👩🏽‍💻 Me
        </p>
        <h4 class="font-black text-xl lg:text-2xl tracking-tighter">
          Hello World!
        </h4>
        <p class="font-medium text-secondary text-wrap">
          I’m thrilled to have you here! Explore my portfolio and dive into the
          world of all things tech with #jsWithTola. From coding adventures to
          creative projects, this is where passion meets innovation. Let’s
          connect and create something amazing together!"
        </p>
        <div class="mt-3 h-[50vh]">
          <img
            src="@/assets/icons/person.jpg"
            alt="image"
            class="h-full w-full object-fill rounded-lg"
          />
        </div>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="w-[2%]"></div>
    </div>
  </div>
  <!--  -->
  <div
    class="w-full p-4 sm:p-0 sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[40vw] m-auto hover:bg-black-light hover:rounded-md mb-12 pt-4"
  >
    <!-- <div
      class="mb-1 w-[30vw] sm:w-[20%] md:w-[13vw] lg:w-[11vw] flex justify-around items-center"
    >
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
      <p class="text-[#868e96]">pinned</p>
    </div> -->
    <div class="flex justify-around gap-3 sm:gap-0 pt-3">
      <div class="w-[12vw] sm:w-[10vw] md:w-[5vw]">
        <img
          src="@/assets/icons/profile.png"
          alt="image"
          class="rounded-full w-14 h-14"
        />
      </div>
      <div class="w-[88%]">
        <h3 class="flex items-center gap-1 font-bold">
          jsWithTola
          <svg
            viewBox="0 0 22 22"
            aria-label="Verified account"
            role="img"
            class="w-4 h-4 text-primary"
            data-testid="icon-verified"
            fill="#F42272"
          >
            <g>
              <path
                d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
              ></path>
            </g>
          </svg>
          • <span class="text-[#868e96]">20 Jan 2023</span>
        </h3>
        <p
          class="bg-black-light font-bold rounded-2xl py-1 px-2 w-fit text-nowrap"
        >
          🎥 youTube
        </p>
        <!-- <h4 class="font-black text-xl lg:text-2xl tracking-tighter">
          Hello World!
        </h4> -->
        <p class="font-medium text-secondary text-wrap">
          Created a series of JavaScript tutorials focused on mastering array
          methods. Dive in to enhance your coding skills and unlock new
          possibilities! Click the link to watch more vidoes.
        </p>
        <div class="mt-3 h-[50vh]">
          <iframe
            class="h-full w-full"
            src="https://www.youtube.com/embed/XCVp9MOmevo?si=ZUWpU5saw3gjvG6Y"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
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
    <!-- <div
      class="mb-1 w-[30vw] sm:w-[20%] md:w-[13vw] lg:w-[11vw] flex justify-around items-center"
    >
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
      <p class="text-[#868e96]">pinned</p>
    </div> -->
    <div class="flex justify-around gap-3 sm:gap-0 pt-3">
      <div class="w-[12vw] sm:w-[10vw] md:w-[5vw]">
        <img
          src="@/assets/icons/profile.png"
          alt="image"
          class="rounded-full w-14 h-14"
        />
      </div>
      <div class="w-[88%]">
        <h3 class="flex items-center gap-1 font-bold">
          jsWithTola
          <svg
            viewBox="0 0 22 22"
            aria-label="Verified account"
            role="img"
            class="w-4 h-4 text-primary"
            data-testid="icon-verified"
            fill="#F42272"
          >
            <g>
              <path
                d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
              ></path>
            </g>
          </svg>
          • <span class="text-[#868e96]">20 Jan 2023</span>
        </h3>
        <p
          class="bg-black-light font-bold rounded-2xl py-1 px-2 w-fit text-nowrap"
        >
          🌷 Period tracker
        </p>
        <!-- <h4 class="font-black text-xl lg:text-2xl tracking-tighter">
          Mobile App
        </h4> -->
        <p class="font-medium text-secondary text-wrap">
          Currently developing a period tracker mobile app using the JavaScript
          Ionic framework! Excited to bring this project to life. #WomenInTech
          #JavaScript #IonicFramework.
        </p>
        <div class="mt-3 h-[50vh]">
          <video class="w-full h-full object-scale-down" controls>
            <source src="@/assets/icons/period2.mp4" type="video/mp4" />
          </video>
        </div>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
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
    <!-- <div
      class="mb-1 w-[30vw] sm:w-[20%] md:w-[13vw] lg:w-[11vw] flex justify-around items-center"
    >
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
      <p class="text-[#868e96]">pinned</p>
    </div> -->
    <div class="flex justify-around gap-3 sm:gap-0 pt-3">
      <div class="w-[12vw] sm:w-[10vw] md:w-[5vw]">
        <img
          src="@/assets/icons/profile.png"
          alt="image"
          class="rounded-full w-14 h-14"
        />
      </div>
      <div class="w-[88%]">
        <h3 class="flex items-center gap-1 font-bold">
          jsWithTola
          <svg
            viewBox="0 0 22 22"
            aria-label="Verified account"
            role="img"
            class="w-4 h-4 text-primary"
            data-testid="icon-verified"
            fill="#F42272"
          >
            <g>
              <path
                d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
              ></path>
            </g>
          </svg>
          • <span class="text-[#868e96]">27 Aug 2024</span>
        </h3>
        <p
          class="bg-black-light font-bold rounded-2xl py-1 px-2 w-fit text-nowrap"
        >
          🎂 Birthday
        </p>
        <!-- <h4 class="font-black text-xl lg:text-2xl tracking-tighter">
          Mobile App
        </h4> -->
        <p class="font-medium text-secondary text-wrap">
          Another year older, wiser, and more grateful! 🎉 Cheers to new
          adventures, growth, and endless possibilities. Happy birthday to me!
          🥳 #BirthdayVibes #GratefulHeart.
        </p>
        <div class="mt-3 h-[50vh]">
          <img
            src="@/assets/icons/trip.jpeg"
            alt="image"
            class="h-full w-full object-fill rounded-lg"
          />
        </div>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
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
  name: "feedComponent",
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
