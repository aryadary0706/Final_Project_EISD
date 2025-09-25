// Lokasi: components/app-components/FaskesCategory.tsx

import { Faskes } from "@/lib/data";
import styles from '@/app/styles/telusuri.module.css';
import FaskesCard from "./FaskesCard";

interface FaskesCategoryProps {
    title: string;
    icon: React.ReactNode;
    facilities: Faskes[];
}

const FaskesCategory = ({ title, icon, facilities }: FaskesCategoryProps) => {
    return(
        <div className={styles.faskesCategoryRow}>
            <div className={styles.categoryLabel}>
                {icon}
                <span>{title}</span>
            </div>
            <div className={styles.scrollContainer}>
                {facilities.map((faskes) => (
                    <FaskesCard key={faskes.id} {...faskes} />
                ))}
            </div>
        </div>
    )
}

export default FaskesCategory;
