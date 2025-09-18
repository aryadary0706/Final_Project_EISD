import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import styles from "@/app/styles/sidebar.module.css"

const AboutUs = () => {
  return (
    <div className="bg-blue-300 justify-center">
      <header className="flex h-6 gap-2 justify-between bg-white">
        <div className="p-8">
          <div className={styles.title}>
        <h1 className={styles.titleTypography}>medi</h1>
        <img
          src="/mediQ.png" 
          alt="Logo" 
          width={30} 
          height={30} 
        />
      </div>
        </div>
        <div className="space-x-5">
          <Button variant="default" className="p-2 bg-blue-500">
          <Link href="/login">
            Login
          </Link>
        </Button>
        <Button variant="default" className="p-2 bg-blue-500">
          <Link href="/daftar">
            Daftar
          </Link>
        </Button>
        </div>
        
      </header>
    </div>
  );
};

export default AboutUs;
