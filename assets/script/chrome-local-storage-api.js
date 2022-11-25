/**
 * Retrieve object from Chrome's Local StorageArea
 * @param {string} key
 */
const getObjectFromLocalStorage = async (key) => {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.get(key, (storage) => {
        resolve(storage[key]);
      });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Save Object in Chrome's Local StorageArea
 * @param {*} obj
 */
const saveObjectInLocalStorage = async (obj) => {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.set(obj, () => {
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Removes Object from Chrome Local StorageArea
 * @param {string or array of string keys} keys
 */
const removeObjectFromLocalStorage = async (keys) => {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.remove(keys, () => {
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
};
