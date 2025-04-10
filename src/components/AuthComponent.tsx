
'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

const AuthComponent = () => {
  return (
    <>
      <>
        <Link href="/login">
          <Button variant="secondary" className="mr-2">Login</Button>
        </Link>
        <Link href="/register">
          <Button>Register</Button>
        </Link>
      </>
    </>
  );
};

export default AuthComponent;
