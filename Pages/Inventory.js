class Inventory{

    constructor(page)
    {
        //store Playwright page object
        this.page=page;

        //locate the page object elements

        this.Heading=page.locator('[data-test="title"]');
        this.pageTitle=page.locator('.app_logo');
        this.itemName=page.locator('[data-test="inventory-item-name"]');
        this.addToCart=page.locator('#add-to-cart-sauce-labs-backpack');
    }

    async ClickAddToCartBtn()
    {
        await this.addToCart.click();
    }
}
export default Inventory;