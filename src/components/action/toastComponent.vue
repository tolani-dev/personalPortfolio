<template>
  <div>
    <svg
      class="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12l2 2l4-4m0-2a9 9 0 11-18 0a9 9 0 0118 0z"
      />
    </svg>
  </div>
  <div v-if="subscribe">
    <div v-if="success">
      <p class="font-bold">Success</p>
      <p>You have successfully subscribe to my news letter.</p>
    </div>
    <div v-else>
      <p class="font-bold">Try Again</p>
      <p>Network error</p>
    </div>
  </div>
  <!--  -->
  <div v-else>
    <div v-if="success">
      <p class="font-bold">Unsubscribed</p>
      <p>You have successfully subscribe to my news letter.</p>
    </div>
    <div v-else>
      <p class="font-bold">Try Again</p>
      <p>Network error.</p>
    </div>
  </div>
  <button @click="closeToast" class="text-white focus:outline-none">
    <svg
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "toastComponent",
  emits: ["closeToast"],
  props: {
    status: {
      type: Boolean,
    },
  },
  setup(props) {
    const subscribe = ref(true);
    const success = ref(props.status);
    const closeToast = () => {
      // ctx.emit("closeToast");
    };
    return {
      closeToast,
      success,
      subscribe,
    };
  },
});
</script>
