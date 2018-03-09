'use strict';



describe('Customer Journey Happy Flow',function(){

	
	beforeAll(function(){
	browser.ignoreSynchronization = true;
	
	})
	
	
	it("Prays to the shadow lord",function(){				
		browser.get('https://app.icontract.co.uk/')//.then(() => {element(by.css('title="Register/Log in"')).click()})
			
		browser.sleep(10000);
 		element(by.deepCss('[type="email"]')).sendKeys('praiseGabun');
		browser.sleep(10000);

	});	


});
