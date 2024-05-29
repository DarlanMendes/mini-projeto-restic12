<script lang="ts">
import { defineComponent } from 'vue';
import { SeriesRest } from "./../../service/rest/series.rest"
import { SeriesService } from './series.service';
import { Series } from '@/model/series.model';

export default defineComponent({
   name:"series-view",
   computed:{
    rest():SeriesRest{
        return new SeriesRest()
    },
    service():SeriesService{
        return new SeriesService()
    }
   },
   data(){
    return{
        series: new Series()
    }
   },
   mounted(){
    this.getSeries()
   }, 
   methods:{
    getSeries(){
        console.log("entrou")
        this.service.series.subscribe({next:(response:any)=>this.series = response.results})
        this.service.getSeries()
    }
   }
})
</script>
<template>
   
<h1>Serie</h1>
</template>