import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
// import '../data/cart-oop.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart  } from '../data/cart.js';

async function loadPage() {
    // console.log('load page');
    try {
        // throw 'error1';

        await loadProductsFetch();

    await new Promise((resolve) => {
        // throw 'error2'
        loadCart(() => {
            resolve();
        });
    });
    } catch(error) {
        console.log('Unexpected error. Please try again later.');
    }
    
    renderOrderSummary();
    renderPaymentSummary();

    // return 'value2';
}

loadPage();
/*.then( (value)=> {
    console.log('next step');
    console.log(value);
})
*/

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
