
let expect = require('chai').expect;
let cookiesAccepted = false;

function expectSame(results, elementName) {
    results.forEach((result, idx) => expect(result.isExactSameImage, elementName + ' element on Image ' + idx + ' isn\'t the same').to.be.true);
}


removeCookies = function(){
    browser.waitForVisible('*=Accept Cookies', 5000);
    browser.pause(2000);
    browser.click('*=Accept Cookies');
    cookiesAccepted = true;
}

  
describe('new car showroom', function() {

    beforeEach(function() {
        browser.url('/new-cars');
        if(!cookiesAccepted) {
            try {
                removeCookies();
            } catch (error) {
                console.log('Cookie Banner not displayed');
            }
            browser.pause(2000);
        }
    });

    it('should test the header on new car showroom page', function() {
        let header = browser.checkElement('.header-container');
        expectSame(header, 'header');

    });

    it('should test the navigation tab bar on new car showroom page', function() {
        let navigationTab = browser.checkElement('.navigation-tab');
        expectSame(navigationTab, 'navigationTab');

    });

    it('should test the footer on new car showroom page', function() {
        let footer = browser.checkElement('.footer-content');
        expectSame(footer, 'footer');

    });

    it('should test the brands tab on new car showroom page', function() {
        browser.element('.navigation-tab-container').click('span=Brands');
        let brands = browser.checkElement('.s-ncs-filters');
        expectSame(brands, 'brands');

    });

    it('should test the body types tab on new car showroom page', function() {
        browser.element('.navigation-tab-container').click('span=Body Types');
        browser.pause(2000);
        let bodyTypes = browser.checkElement('.s-ncs-filters');
        expectSame(bodyTypes, 'body types');

    });

    it('should test the price tab on new car showroom page', function() {
        browser.element('.navigation-tab-container').click('span=Price');
        let price = browser.checkElement('.s-ncs-filters');
        expectSame(price, 'price');

    });
})