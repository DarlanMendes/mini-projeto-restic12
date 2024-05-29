<template>

    <menu-bar :model="routes" class="bg-red-700 rounded-none px-12 transition ease-in-out delay-150">

        <template #item="{ item }">
            <div class="p-4 text-white font-semibold hover:text-slate-500  transition ease-in-out delay-150">
                <router-link :to="item.path">{{ item.label }}</router-link>
            </div>

        </template>
        <template #end>
            <div class="flex flex-col gap-2 ">
                <svg version="1.1" id="Layer_1" height="35" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 128 128" xml:space="preserve" class="peer absolute top-4 right-16 hover:right-0 hover:relative hover:top-0 hover:scale-125 transition ease-in-out delay-500">
                    <path style="fill:#FF5E5B;"
                        d="M18.998,49.43v3.764l7.099,69.694C26.474,125.788,28.815,128,31.74,128h64.51 c2.925,0,5.375-2.19,5.681-5.124l7.099-69.694V49.43H18.998z" />
                    <path style="fill:#ED3E3C;"
                        d="M64.489,49.43V128h32.25c2.925,0,5.375-2.19,5.681-5.124l7.099-69.694V49.43H64.489z" />
                    <rect x="50.319" y="53.248" style="fill:#FFC72D;" width="27.361" height="74.728" />
                    <path style="fill:#FFEDBE;"
                        d="M109.62,30.438c-0.034,0-0.066,0.002-0.099,0.003c1.05-2.108,1.644-4.489,1.644-6.999 c0-8.686-7.039-15.725-15.725-15.725c-5.185,0-9.781,2.511-12.645,6.38C80.427,5.95,72.892,0,64.003,0 s-16.421,5.95-18.988,14.043c-2.863-3.861-7.46-7.732-12.646-7.732c-8.686,0-15.725,7.039-15.725,15.725 c0,2.503,0.594,4.891,1.644,6.999c-0.033-0.001-0.066-0.003-0.099-0.003c-6.298,0-11.406,5.113-11.406,11.406 s5.113,11.406,11.406,11.406h91.248c6.298,0,11.406-5.113,11.406-11.406S115.918,30.438,109.62,30.438z" />
                    <path style="fill:#FFE49C;"
                        d="M109.62,30.438c-0.034,0-0.066,0.002-0.099,0.003c1.05-2.108,1.644-4.489,1.644-6.999 c0-8.686-7.039-15.725-15.725-" />
                </svg>
                <h3 class="text-white invisible relative peer-hover:visible transition ease-in-out delay-500"> RESTIC 12</h3>
            </div>
        </template>

    </menu-bar>



</template>
<script lang="ts">
export default {
    data() {
        return {
            routes: [{ label: "Home", path: "/" }, { label: "Serie", path: "/series" }, { label: "Movies", path: "movies" }]
        }
    }
}
</script>