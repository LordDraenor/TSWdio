// Trial push

describe("Check basic homepage navigation", function() {
    it("opens the webpage", async function() {
        await browser.url('https://qa-myaccount.nationalgrid.com');
        await browser.pause(5000);
    });


} ); 