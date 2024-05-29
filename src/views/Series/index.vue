<script lang="ts">
import { defineComponent } from 'vue';
import { SeriesRest } from "./../../service/rest/series.rest"
import { SeriesService } from './series.service';
import { Series } from '@/model/series.model';

export default defineComponent({
    name: "series-view",
    computed: {
        rest(): SeriesRest {
            return new SeriesRest()
        },
        service(): SeriesService {
            return new SeriesService()
        }
    },
    data() {
        return {
            series: new Series()
        }
    },
    mounted() {
        this.getSeries()
    },
    methods: {
        getSeries() {
            this.service.series.subscribe({ next: (response: any) => this.series = response.results })
            this.service.getSeries()
        }
    }
})
</script>
<template>
    <div class="flex flex-wrap content-between">
        <div v-for="(serie, index) in series" :key="index" >
            <card-item :item="serie" category="series" />
        </div>
    </div>




</template>