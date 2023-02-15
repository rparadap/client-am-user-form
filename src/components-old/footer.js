// INJECT FOOTER
let apiLoc = "apiGateway-js-sdk-DEV";
let pathcLoc = window.location.host;

switch (pathcLoc) {
  case "am-rrhh.s3.amazonaws.com": //PROD
  case "rhenlineacr.com": //PROD
    apiLoc = "apiGateway-js-sdk-PROD";
    break;
  case "am-dev-rrhh.s3.amazonaws.com": //STAGE
  case "am-dev-rrhh.s3-website-us-east-1.amazonaws.com":
    apiLoc = "apiGateway-js-sdk-DEV";
    break;
  default:
    apiLoc = "apiGateway-js-sdk-DEV";
    break;
}

document.write(
  `<div class="d-sm-flex justify-content-center justify-content-sm-between"> 
  <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2022 
  <a href="https://www.arcelormittalca.com/" target="_blank">ArcelorMittal</a>
  <!-- HELPERS -->
  <script src="../../js/_helpers/_remove.js"></script> 
  <script src="../../js/_helpers/_alertHandler.js"></script> 
  <script src="../../js/_helpers/bodyValidation.js"></script>

  All rights reserved.</span> </div><script type="text/javascript" src="../../vendors/jquery/jquery-3.4.1.min.js"></script>
  <script type="text/javascript" src="../../../server/apiGateway_instructor/http/simpleHttpClient.js"></script>
  <script type="text/javascript" src="../../../server/apiGateway_instructor/${apiLoc}/lib/axios/dist/axios.standalone.js"></script>
  <script type="text/javascript" src="../../../server/apiGateway_instructor/${apiLoc}/lib/CryptoJS/rollups/hmac-sha256.js"></script>
  <script type="text/javascript" src="../../../server/apiGateway_instructor/${apiLoc}/lib/CryptoJS/rollups/sha256.js"></script>
  <script type="text/javascript" src="../../../server/apiGateway_instructor/${apiLoc}/lib/CryptoJS/components/hmac.js"></script>
  <script type="text/javascript" src="../../../server/apiGateway_instructor/${apiLoc}/lib/CryptoJS/components/enc-base64.js">
  </script><script type="text/javascript" src="../../../server/apiGateway_instructor/${apiLoc}/lib/url-template/url-template.js"></script>
  <script type="text/javascript" src="../../../server/apiGateway_instructor/${apiLoc}/lib/apiGatewayCore/sigV4Client.js"></script>
  <script type="text/javascript" src="../../../server/apiGateway_instructor/${apiLoc}/lib/apiGatewayCore/apiGatewayClient.js"></script>
  <script type="text/javascript" src="../../../server/apiGateway_instructor/${apiLoc}/lib/apiGatewayCore/utils.js"></script>
  <script type="text/javascript" src="../../../server/apiGateway_instructor/${apiLoc}/apigClient.js"></script>
 
  <script type="text/javascript" src="../../../server/apiGateway_instructor/${apiLoc}/config.js"></script>
  <script type="text/javascript" src="../../../server/apiGateway_instructor/${apiLoc}/amazon-cognito-identity.min.js"></script>
  <script src="../../js/userManagment/userPoolAuthorization.js"></script>

  
  `
);
