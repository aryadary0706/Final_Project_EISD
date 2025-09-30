// Lokasi: components/app-components/FaskesCategory.tsx

import { Faskes } from "@/lib/data";
import styles from '@/app/styles/telusuri.module.css';
import FaskesCard from "./FaskesCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface FaskesCategoryProps {
    title: string;
    icon: React.ReactNode;
    facilities: Faskes[];
}

const FaskesCategory = ({ title, icon, facilities    }: FaskesCategoryProps) => {
    return (
        <div className={styles.faskesCategoryRow}>
            <div className={styles.categoryLabel}>
                {icon}
                <span>{title}</span>
            </div>
            <ScrollArea className="flex w-[1100px] whitespace-nowrap">
                <div className="flex gap-4 py-2">
                    {facilities.map((faskes) => (
                        <FaskesCard key={faskes.id} {...faskes} />
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    );
};

export default FaskesCategory;
