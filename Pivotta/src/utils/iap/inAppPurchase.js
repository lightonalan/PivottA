import {Platform} from 'react-native';
import RNIap from 'react-native-iap';

let PurchaseUpdatedListener = null;
let PurchaseErrorListener = null;

export const initConnection = async callback => {
  const result = await RNIap.initConnection();
  if (result) {
    await clearTransaction();
  }
  callback(result);
};

export const getProducts = async (productIds, callbackTrue, callbackFalse) => {
  await RNIap.getProducts(productIds)
    .then(products => {
      callbackTrue();
    })
    .catch(err => {
      callbackFalse();
    });
};

export const getAvailablePurchases = async callback => {
  try {
    const result = await RNIap.getAvailablePurchases();
    callback(result);
  } catch (err) {
    callback(null, err);
  }
};

export const getSubscriptions = async (callback, itemSkus) => {
  try {
    const subscriptions = await RNIap.getSubscriptions(itemSkus);
    if (subscriptions) {
      callback(subscriptions);
    }
  } catch (error) {
    callback(null, error);
  }
};

export const requestSubscription = async (idSubscription, callback) => {
  try {
    await RNIap.requestSubscription(idSubscription);
    callback(false);
  } catch (error) {
    callback(true, error);
  }
};

export const onPurchaseUpdateSubscription = callback => {
  PurchaseUpdatedListener = RNIap.purchaseUpdatedListener(purchase => {
    callback(purchase);
  });
};

export const onPurchaseErrorListener = callback => {
  PurchaseErrorListener = RNIap.purchaseErrorListener(error => {
    callback(error);
  });
};

export const finishTransaction = async purchase => {
  if (Platform.OS === 'ios') {
    await RNIap.finishTransactionIOS(purchase.transactionId);
  } else if (Platform.OS === 'android') {
    // If consumable (can be purchased again)
    // await RNIap.consumePurchaseAndroid(purchase.purchaseToken)
    // If not consumable
    await RNIap.acknowledgePurchaseAndroid(purchase.purchaseToken);
  }

  // From react-native-iap@4.1.0 you can simplify above `method`
  // Try to wrap the statement with `try` and `catch` to also grab the `error` message.
  // If consumable (can be purchased again)
  // await RNIap.finishTransaction(purchase, true)
  // If not consumable
  await RNIap.finishTransaction(purchase, true);
};

export const clearTransaction = async () => {
  if (Platform.OS === 'ios') {
    await RNIap.clearTransactionIOS();
  } else {
    await RNIap.getAvailablePurchases().then(async purchase => {
      await purchase.forEach(purchase => {
        RNIap.consumePurchaseAndroid(purchase?.purchaseToken);
      });
    });
  }
};

export const removePurchaseListener = () => {
  if (PurchaseUpdatedListener) {
    PurchaseUpdatedListener.remove();
    PurchaseUpdatedListener = null;
  }
  if (PurchaseErrorListener) {
    PurchaseErrorListener.remove();
    PurchaseErrorListener = null;
  }
};
