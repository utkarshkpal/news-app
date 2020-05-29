import React from "react";
import { isServer } from "./JSHelper";
import App from "./App";

export default function Home() {
  return isServer() ? <div>Loading...</div> : <App />;
}
