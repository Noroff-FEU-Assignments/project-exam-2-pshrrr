import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Admin() {
  const router = useRouter();
  useEffect(() => {
    const auth = window.localStorage.getItem("jwt");
    if (!auth) {
      router.push("/login");
    }
  }, []);
  return <></>;
}
