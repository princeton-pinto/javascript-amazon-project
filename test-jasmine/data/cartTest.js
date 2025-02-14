import { addToCart, cart, loadFromStorage } from "../../data/cart";

describe('test suite: addToCart', () => {
    // it('adds an existing product to the cart', () => {

    // });
    it('adds a new product to the cart', () => {
        spyOn(localStorage, 'setItem');


        spyOn(localStorage, 'getItem').and.callFake( ()=> {
            return JSON.stringify([]);
        });
        // console.log(localStorage.getItem('cart'));
        loadFromStorage();

        addToCart('15b6fc6f-327a-4ec4-896f-486349e85a3');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes();
        expect(cart[0].productId).toEqual('15b6fc6f-327a-4ec4-896f-486349e85a3');
        expect(cart[0].quantity).toEqual(1);
    });
});