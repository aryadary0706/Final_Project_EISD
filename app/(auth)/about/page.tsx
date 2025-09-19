import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import styles from "@/app/styles/sidebar.module.css"

const AboutUs = () => {
  return (
    <div>
      <header className="flex h-18 py-8 px-10 gap-2 justify-between items-center shadow-sm">
        <div className="flex items-center gap-0.5">
          <h1 className={styles.titleTypography}>medi</h1>
          <img
            src="/mediQ.png" 
            alt="Logo" 
            width={30} 
            height={30} 
          />
        </div>
        <div className="space-x-5">
          <Button variant="default" className="px-6 bg-blue-500">
          <Link href="/login">
            Login
          </Link>
        </Button>
        <Button variant="default" className="px-6 bg-blue-500">
          <Link href="/daftar">
            Daftar
          </Link>
        </Button>
        </div>
      </header>
      <div className="bg-blue-300 w-full h-10">

      </div>
    </div>
  );
};

export default AboutUs;
