import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
// import '../data/cart-oop.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart  } from '../data/cart.js';

async function loadPage() {
    // console.log('load page');
    await loadProductsFetch();

    await new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })

    renderOrderSummary();
    renderPaymentSummary();

    // return 'value2';
}

loadPage();
// .then( (value)=> {
//     console.log('next step');
//     console.log(value);
// })

/*
Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })

]).then((values) => {
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});
*/

/*
new Promise((resolve) => {
    // console.log('start promise');
    loadProducts(() => {
        // console.log('finished loading');
        resolve('value1');
    });

}).then((value) => {
    // console.log('next step');
    console.log(value);
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });

}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
*/


/*
loadProducts(() => {
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    });
});
*/
