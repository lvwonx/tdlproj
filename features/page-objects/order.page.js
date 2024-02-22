import { Page } from "./page.js";
import { browser } from '@wdio/globals';

class OrderPage extends Page {
    get pageTitle() { return $('.page-title'); }
    get firstProductName() { return $('table .product.name'); }
    get firstProductSize() { return $(''); }
    get firstProductColor() { return $(''); }
    get firstProductPrice() { return $('.price .cart-price'); }
    get firstProductQty() { return $('.items-qty .content'); }
    get firstProductSubtotal() { return $('.subtotal .cart-price'); }
    get subtotal() { return $('.subtotal td[data-th="Subtotal"]'); }
    get shippingPrice() { return $('.shipping .amount .price'); }
    get grandTotal() { return $('.grand_total .price'); }
}

export default new OrderPage();