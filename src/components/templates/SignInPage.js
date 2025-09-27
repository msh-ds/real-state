"use client";

import { useState } from "react";
import styles from "./SignInPage.module.css";
import Loader from "../modules/Loader";
import Link from "next/link";
import { signIn } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signInHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (res?.error) {
      toast.error(res.error);
    } else if (res?.ok) {
      router.push("/");
    }
  };

  return (
    <div className={styles.form}>
      <h4>فرم ورود</h4>
      <form onSubmit={signInHandler}>
        <label>ایمیل:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>رمز عبور:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {loading ? <Loader /> : <button type="submit">ورود</button>}
      </form>
      <p>
        حساب کاربری ندارید؟ <Link href="/signup">ثبت نام</Link>
      </p>
      <Toaster />
    </div>
  );
}

export default SignInPage;
