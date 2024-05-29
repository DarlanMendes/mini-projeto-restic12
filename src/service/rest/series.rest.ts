import { Observable } from "rxjs";
import api from "@/service/api-config/rx-config"
export class SeriesRest {
    getSeries(): Observable<any> {
      const url: string = `/discover/tv`;
      return api.get(url);
    }
    getSerieById(id:string):Observable<any>{
      const url:string =`/tv/${id}`;
      return api.get(url)
    }
  }