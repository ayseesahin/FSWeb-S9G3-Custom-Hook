import { useState } from "react";
import localStorageKullan from "./localStorageKullan";

function geceModuAc() {
  const initialGeceModu = false;
  const [geceModu, setGeceModu] = localStorageKullan(
    "geceModu",
    initialGeceModu
  );

  return [geceModu, setGeceModu];
}

export default geceModuAc;
