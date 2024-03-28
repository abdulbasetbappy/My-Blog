<script setup>
// const activeClass = ref(
//   "bg-gray-600 bg-opacity-25 rounded-md text-red border-teal-600"
// );
// const inactiveClass = ref(
//   "border-gray-900 text-black hover:bg-gray-600 hover:bg-opacity-25 hover:rounded-md hover:text-gray-100"
// );
</script>

<template>
  <div class="flex px-5">
    <nav class="space-y-8">
      <NuxtLink
        to="/frontendleft/php"
        class="cursor-pointer flex items-center gap-x-3 text-xl font-semibold active:bg-gray-500 active:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M0 13.875v3.745c0 2.067 5.37 3.743 12 3.743V17.62c-6.63 0-12-1.68-12-3.743zm21.384 2.333L12 13.875v3.745l9.384 2.333C23.02 19.313 24 18.503 24 17.62v-3.745c0 .882-.98 1.692-2.616 2.333M12 10.133v3.742c-6.627 0-12-1.677-12-3.744V6.38c0-2.064 5.37-3.743 12-3.743c6.625 0 12 1.68 12 3.744v3.75c0 .883-.98 1.69-2.616 2.334L12 10.13z"
          ></path></svg
        >PHP
      </NuxtLink>

      <NuxtLink
        to="/frontendleft/python"
        class="cursor-pointer flex items-center gap-x-3 text-xl font-semibold"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 32 32"
        >
          <defs>
            <linearGradient
              id="vscodeIconsFileTypePython0"
              x1="-133.268"
              x2="-133.198"
              y1="-202.91"
              y2="-202.84"
              gradientTransform="matrix(189.38 0 0 189.81 25243.061 38519.17)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#387eb8"></stop>
              <stop offset="1" stopColor="#366994"></stop>
            </linearGradient>
            <linearGradient
              id="vscodeIconsFileTypePython1"
              x1="-133.575"
              x2="-133.495"
              y1="-203.203"
              y2="-203.133"
              gradientTransform="matrix(189.38 0 0 189.81 25309.061 38583.42)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#ffe052"></stop>
              <stop offset="1" stopColor="#ffc331"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#vscodeIconsFileTypePython0)"
            d="M15.885 2.1c-7.1 0-6.651 3.07-6.651 3.07v3.19h6.752v1H6.545S2 8.8 2 16.005s4.013 6.912 4.013 6.912H8.33v-3.361s-.13-4.013 3.9-4.013h6.762s3.772.06 3.772-3.652V5.8s.572-3.712-6.842-3.712Zm-3.732 2.137a1.214 1.214 0 1 1-1.183 1.244v-.02a1.214 1.214 0 0 1 1.214-1.214Z"
          ></path>
          <path
            fill="url(#vscodeIconsFileTypePython1)"
            d="M16.085 29.91c7.1 0 6.651-3.08 6.651-3.08v-3.18h-6.751v-1h9.47S30 23.158 30 15.995s-4.013-6.912-4.013-6.912H23.64V12.4s.13 4.013-3.9 4.013h-6.765S9.2 16.356 9.2 20.068V26.2s-.572 3.712 6.842 3.712h.04Zm3.732-2.147A1.214 1.214 0 1 1 21 26.519v.03a1.214 1.214 0 0 1-1.214 1.214z"
          ></path></svg
        >Python</NuxtLink
      >

      <NuxtLink
        to="/frontendleft/css"
        class="cursor-pointer flex items-center gap-x-3 text-xl font-semibold"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m5.7 3.4l-.6 3.2h12.3L17 8.7H4.7l-.6 3.2h12.3l-.7 3.6l-5 1.7l-4.3-1.7l.3-1.6h-3L3 17.7l7.1 2.9l8.2-2.9l1.1-5.8l.2-1.2L21 3.4z"
          ></path>
        </svg>
        CSS
      </NuxtLink>

      <NuxtLink
        to="/frontendleft/server"
        class="cursor-pointer flex items-center gap-x-3 text-xl font-semibold"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <rect width="9" height="9" x="1.5" y="1.5" fill="currentColor" rx="1">
            <animate
              id="svgSpinnersBlocksScale0"
              attributeName="x"
              begin="0;svgSpinnersBlocksScale1.end+0.15s"
              dur="0.6s"
              keyTimes="0;.2;1"
              values="1.5;.5;1.5"
            ></animate>
            <animate
              attributeName="y"
              begin="0;svgSpinnersBlocksScale1.end+0.15s"
              dur="0.6s"
              keyTimes="0;.2;1"
              values="1.5;.5;1.5"
            ></animate>
            <animate
              attributeName="width"
              begin="0;svgSpinnersBlocksScale1.end+0.15s"
              dur="0.6s"
              keyTimes="0;.2;1"
              values="9;11;9"
            ></animate>
            <animate
              attributeName="height"
              begin="0;svgSpinnersBlocksScale1.end+0.15s"
              dur="0.6s"
              keyTimes="0;.2;1"
              values="9;11;9"
            ></animate>
          </rect>
          <rect
            width="9"
            height="9"
            x="13.5"
            y="1.5"
            fill="currentColor"
            rx="1"
          >
            <animate
              attributeName="x"
              begin="svgSpinnersBlocksScale0.begin+0.15s"
              dur="0.6s"
              keyTimes="0;.2;1"
              values="13.5;12.5;13.5"
            ></animate>
            <animate
              attributeName="y"
              begin="svgSpinnersBlocksScale0.begin+0.15s"
              dur="0.6s"
              keyTimes="0;.2;1"
              values="1.5;.5;1.5"
            ></animate>
            <animate
              attributeName="width"
              begin="svgSpinnersBlocksScale0.begin+0.15s"
              dur="0.6s"
              keyTimes="0;.2;1"
              values="9;11;9"
            ></animate>
            <animate
              attributeName="height"
              begin="svgSpinnersBlocksScale0.begin+0.15s"
              dur="0.6s"
              keyTimes="0;.2;1"
              values="9;11;9"
            ></animate>
          </rect>
          <rect
            width="9"
            height="9"
            x="13.5"
            y="13.5"
            fill="currentColor"
            rx="1"
          >
            <animate
              attributeName="x"
              begin="svgSpinnersBlocksScale0.begin+0.3s"
              dur="0.6s"
              keyTimes="0;.2;1"
              values="13.5;12.5;13.5"
            ></animate>
            <animate
              attributeName="y"
              begin="svgSpinnersBlocksScale0.begin+0.3s"
              dur="0.6s"
              keyTimes="0;.2;1"
              values="13.5;12.5;13.5"
            ></animate>
            <animate
              attributeName="width"
              begin="svgSpinnersBlocksScale0.begin+0.3s"
              dur="0.6s"
              keyTimes="0;.2;1"
              values="9;11;9"
            ></animate>
            <animate
              attributeName="height"
              begin="svgSpinnersBlocksScale0.begin+0.3s"
              dur="0.6s"
              keyTimes="0;.2;1"
              values="9;11;9"
            ></animate>
          </rect>
          <rect
            width="9"
            height="9"
            x="1.5"
            y="13.5"
            fill="currentColor"
            rx="1"
          >
            <animate
              id="svgSpinnersBlocksScale1"
              attributeName="x"
              begin="svgSpinnersBlocksScale0.begin+0.45s"
              dur="0.6s"
              keyTimes="0;.2;1"
              values="1.5;.5;1.5"
            ></animate>
            <animate
              attributeName="y"
              begin="svgSpinnersBlocksScale0.begin+0.45s"
              dur="0.6s"
              keyTimes="0;.2;1"
              values="13.5;12.5;13.5"
            ></animate>
            <animate
              attributeName="width"
              begin="svgSpinnersBlocksScale0.begin+0.45s"
              dur="0.6s"
              keyTimes="0;.2;1"
              values="9;11;9"
            ></animate>
            <animate
              attributeName="height"
              begin="svgSpinnersBlocksScale0.begin+0.45s"
              dur="0.6s"
              keyTimes="0;.2;1"
              values="9;11;9"
            ></animate>
          </rect>
        </svg>
        Server</NuxtLink
      >
    </nav>
  </div>
</template>
