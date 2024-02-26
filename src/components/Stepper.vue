<template>
   <div class="p-5">
      <div class="form-image-wrapper rounded-xl">
         <div class="px-4 py-12 sm:px-6 lg:px-8">
            <nav class="flex justify-center" aria-label="Progress">
               <ol role="list" class="space-y-6">
                  <li v-for="step in steps" :key="step.name">
                     <a v-if="step.status === 'complete'" :href="step.href" class="group">
                        <span class="flex items-start">
                           <span class="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
                              <span class="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
                                 <svg
                                    class="h-full w-full text-cyan-500 group-hover:text-cyan-600"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                 >
                                    <path
                                       fill-rule="evenodd"
                                       d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                       clip-rule="evenodd"
                                    />
                                 </svg>
                              </span>
                           </span>
                           <span class="ml-3 text-sm font-medium text-white group-hover:text-gray-300">{{ step.name }}</span>
                        </span>
                     </a>
                     <a v-else-if="step.status === 'current'" :href="step.href" class="flex items-start" aria-current="step">
                        <span class="relative flex h-5 w-5 flex-shrink-0 items-center justify-center" aria-hidden="true">
                           <span class="absolute h-4 w-4 rounded-full bg-white" />
                           <span class="relative block h-2 w-2 rounded-full bg-cyan-500" />
                        </span>
                        <span class="ml-3 text-sm font-medium text-white">{{ step.name }}</span>
                     </a>
                     <a v-else :href="step.href" class="group">
                        <div class="flex items-start">
                           <div class="relative flex h-5 w-5 flex-shrink-0 items-center justify-center" aria-hidden="true">
                              <div class="h-2 w-2 rounded-full bg-gray-300 group-hover:bg-gray-400" />
                           </div>
                           <p class="ml-3 text-sm font-medium text-gray-300 group-hover:text-gray-100">{{ step.name }}</p>
                        </div>
                     </a>
                  </li>
               </ol>
            </nav>
         </div>
      </div>
   </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router"
import { ref, onMounted } from "vue"

const steps = ref([
   { name: "Personal Info", href: "/", status: "current" },
   { name: "Feedback & Preferences", href: "/feedback-preferences", status: "upcoming" },
   { name: "Share Your Feedback", href: "/feedback-rate", status: "upcoming" },
   { name: "Review", href: "/review-details", status: "upcoming" },
])

const router = useRouter()
const route = useRoute()

onMounted(() => {
   const currentStepIndex = steps.value.findIndex((step) => step.href === route.path)

   // Set the current step to "current"
   if (currentStepIndex !== -1) {
      steps.value[currentStepIndex].status = "current"
   }

   // Set all steps before the current step to "complete"
   steps.value.slice(0, currentStepIndex).forEach((step) => {
      step.status = "complete"
   })
})
</script>

<style scoped>
.form-image-wrapper {
   width: 300px;
   height: 100%;
   background-image: url("../assets/background-decoration.jpg");
   background-size: cover;
}
</style>