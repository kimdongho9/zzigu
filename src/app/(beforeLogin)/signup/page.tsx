"use client"


import { useRouter } from "next/navigation";
import Main from "../_component/Main";


export default function Login() {
  const router = useRouter();
  router.replace("I/flow/signup");
  
  return(
    <>
      <Main/>
    </>
  );
}