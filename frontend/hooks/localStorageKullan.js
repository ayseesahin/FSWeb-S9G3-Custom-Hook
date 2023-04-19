import { useState } from "react";

//keyimi bilmem gerekiyor
//başlangıçta local storageda değer var mı?
//local storaga'de tutulacak değerleri bilmem/güncellemem gerekiyor

function localStorageKullan(LSKey, initValue) {
  const [dataLS, setDataLS] = useState(() => {
    const localData = JSON.parse(localStorage.getItem(LSKey));
    if (localData !== null) {
      return localData;
    } else {
      localStorage.setItem(LSKey, JSON.stringify(initValue));
      return initValue;
    }
  });

  function writeToLStorage(newValue) {
    setDataLS(newValue);
    localStorage.setItem(LSKey, JSON.stringify(newValue));
  }
  return [dataLS, writeToLStorage];
}

export default localStorageKullan;
