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
        browser.url('/');
        if(!cookiesAccepted) {
            try {
                removeCookies();
            } catch (error) {
                console.log('Cookie Banner not displayed');
            }
            browser.pause(1000);
        }
        browser.pause(1000); // allow ads to load and page to resize
    });

    /////everything homepage/////

    it('should test header on the home page', function() {
        let headerEverything = browser.checkElement('.header-container');
        expectSame(headerEverything, 'header everything');
    });

    it('should test the top content hero image on the everything home page', function() {
        let topContentEverything = browser.checkElement('.everything-focus');
        expectSame(topContentEverything, 'top content everything');
    });

    it('should test the browse sections on the home page', function() {
        let browseSectionsEverything = browser.checkElement('.browse-sections-container');
        expectSame(browseSectionsEverything, 'browse sections everything');
    });

    it('should test the landing CTA section on the home page', function() {
        let landingCTA = browser.checkElement('.landing-cta-container');
        expectSame(landingCTA, 'landing CTA');
    });

    it('should test the footer on the everything home page', function() {
        let footerEverything = browser.checkElement('.footer-content');
        expectSame(footerEverything, 'footer everything');
    });

    // //// cars and motor homepage/////
    it('should test header on the cars&motor home page', function() {
        browser.element('.search-hero-tabs').click('=Cars & Motor');
        let headerMotor = browser.checkElement('.header-container');
        expectSame(headerMotor, 'header motor');
    });
    
    it('should test the top content hero image on the cars&motor home page', function() {
        browser.element('.search-hero-tabs').click('=Cars & Motor');
        let topContentMotor = browser.checkElement('.motor-focus');
        expectSame(topContentMotor, 'top content motor');
    });

    it('should test the browse sections on the cars&motor home page', function() {
        browser.element('.search-hero-tabs').click('=Cars & Motor');
        let browseSectionsMotor = browser.checkElement('.browse-sections-container');
        expectSame(browseSectionsMotor, 'browse sections motor');
    });

    it('should test the footer on the cars&motor home page', function() {
        browser.element('.search-hero-tabs').click('=Cars & Motor');
        let footerMotor = browser.checkElement('.footer-content');
        expectSame(footerMotor, 'footer motor');
    });

})