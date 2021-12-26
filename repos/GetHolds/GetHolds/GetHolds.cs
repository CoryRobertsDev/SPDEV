using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Microsoft.Web.Services3;

namespace GetHolds
{
    public static class GetHolds
    {
        [FunctionName("GetHolds")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            string name = req.Query["name"];

            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            dynamic data = JsonConvert.DeserializeObject(requestBody);
            name = name ?? data?.name;

            string responseMessage = string.IsNullOrEmpty(name)
                ? "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response."
                : $"Hello, {name}. This HTTP triggered function executed successfully.";

            return new OkObjectResult(responseMessage);
        }

        [WebMethod]
        public string GetHolds()
        {
            Soap. dto = new uc_PortalSoapServiceReference.get_holdsRequest();

            try
            {
                Soap.UserBeanSEIClient client = new Soap.UserBeanSEIClient();
                client.ClientCredentials.UserName.UserName = "rswain";
                client.ClientCredentials.UserName.Password = "password@123";
                ServicePointManager.ServerCertificateValidationCallback = new System.Net.Security.RemoteCertificateValidationCallback((sender, certificate, chain, sslPolicyErrors) => true);
                ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls;
                PasswordDigestBehavior behavior = new PasswordDigestBehavior("rswain", "password@123");
                client.Endpoint.Behaviors.Add(behavior);
                dto = client.getUserInfo("8873493980", "37232732", "kswain");
                var tem = dto;
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return dto.cpyEngName;
        }
    }
}