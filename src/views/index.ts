export class Views {
    static Home(): Promise<any> {
      return import("./Home/index.vue");
    }
  
    static Movie(): Promise<any> {
      return import("./Movies/index.vue");
    }
    
    static Serie(): Promise<any> {
      return import("./Series/index.vue");
    }
  
   
  }