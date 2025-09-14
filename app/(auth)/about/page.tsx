import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div>
      <header className="flex h-6 gap-2">
        <Button asChild>
          <Link href="/login">
            Login
          </Link>
        </Button>
        <Button asChild>
          <Link href="/daftar">
            Daftar
          </Link>
        </Button>
      </header>
    </div>
  );
};

export default AboutUs;
