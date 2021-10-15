import { HttpClient, IHttpClientOptions, HttpClientResponse } from '@microsoft/sp-http';
import { WebPartContext } from '@microsoft/sp-webpart-base';


export class ServiceProvider {
    private wpcontext:WebPartContext;
    public constructor(context: WebPartContext) {
       this.wpcontext= context;
      }
      private httpClientOptionsForGlobal: IHttpClientOptions = {
        headers: new Headers({
            "x-rapidapi-host": "https://soaptoapi-apim.azure-api.net",
            "x-rapidapi-key": "7a5c7d5ecf1a46a8ad3d1ec74afe9d15",
            "Ocp-Apim-Subscription-Key": "7a5c7d5ecf1a46a8ad3d1ec74afe9d15",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true"
              }),
        method: "GET",
        mode: "cors"
  };
  public async getTotals() {

   var response = await this.wpcontext.httpClient
  .get("https://soaptoapi-apim.azure-api.net/get_holds", HttpClient.configurations.v1,this.httpClientOptionsForGlobal);
  console.log(response);
  var responeJson : any = await response.json();
  return responeJson;
  }

}
