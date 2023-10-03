"use client";
import Image from "next/image";
import React from "react";
import { Provider } from "react-redux";
import { Button } from "antd";
//import UserForm from "./components/userForms";
import { BrowserRouter as Router } from "react-router-dom";
// import UserForm from "./sign-in/page";

import store from "../app/store";

export default function Home() {
  return <div style={{ padding: "20px" }}>Landing Page</div>;
}
