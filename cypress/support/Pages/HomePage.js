const { default: BasePage } = require("./BasePage");

class HomePage extends BasePage{
  
    verifyResponse(expectedStatus){
       return this.getResponse(expectedStatus)
    }
}
export default HomePage;