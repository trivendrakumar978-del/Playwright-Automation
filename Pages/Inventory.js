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
        this.shoppingCart=page.locator('.shopping_cart_link');
        this.shoppingCartBadge=page.locator('.shopping_cart_badge');
        this.removefromCart=page.locator('#remove-sauce-labs-backpack');
        this.inventoryList = page.locator('.inventory_item_name');
    }

    async getItemName()
    {
return await this.inventoryList.allTextContents();
    }
    async ClickAddToCartBtn()
    {
        await this.addToCart.click();
    }
    async ClickAddToCartBtn()
    {
        await this.addToCart.click();
    }
    async getCartCount()
    {
        return await this.shoppingCartBadge.textContent();
    }
    async RemoveFromCartBtn()
    {
        await this.removefromCart.click();
    }
}
export default Inventory;