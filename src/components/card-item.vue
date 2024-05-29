<template>

    <card-prime class="w-64">
        <template #header>
            <img :src="'https://image.tmdb.org/t/p/original'+ item?.poster_path" :alt="item?.overview" class=" object-cover w-full h-64"/>
        </template>
        <template #title><h1 class="text-sm">{{ item?.name  }}</h1></template>
        <template #subtitle><span class="flex justify-between items-center"><h3 class="text-xs">Lançamento:</h3><p class="text-xs">{{ formatDate(item) }}</p></span></template>
        <template #content>
            
            <rating-prime v-model="item" disabled/>
        </template>
    </card-prime>

</template>
<script lang="ts">

export default {
    
    props: {
        item: Object,
        category:String
    }, 
   
    methods:{
        formatDate(item:any){
            return item?.first_air_date.split("-").reverse().join("/")
        },
        
        
    },
   
}

</script>