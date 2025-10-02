import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import style from "@/app/styles/main.module.css";
import clsx from "clsx";
import Link from "next/link";
import { MapPin, ChevronRight  } from 'lucide-react';

const mockFacilities = [
  {
    id: 1,
    type: "Rumah Sakit",
    name: "RS Medic Center",
    city: "Bandung",
    distance: "2.5 km",
  },
  {
    id: 2,
    type: "Klinik",
    name: "Sehat Harmoni",
    city: "Bandung",
    distance: "1.8 km",
  },
  {
    id: 3,
    type: "Puskesmas",
    name: "Suka Maju",
    city: "Bandung",
    distance: "3.2 km",
  },
  {
    id: 4,
    type: "Klinik",
    name: "Harmony Dental",
    city: "Bandung",
    distance: "4.1 km",
  },
  {
    id: 5,
    type: "Rumah Sakit",
    name: "RS Mitra Keluarga",
    city: "Bandung",
    distance: "5.7 km",
  },
  {
    id: 6,
    type: "Rumah Sakit",
    name: "RS Mitra Keluarga",
    city: "Bandung",
    distance: "5.7 km",
  },
  {
    id: 7,
    type: "Rumah Sakit",
    name: "RS Mitra Keluarga",
    city: "Bandung",
    distance: "5.7 km",
  },
];

export default function FaskesList() {
  return (
    <div className="flex space-x-4 pb-4">
      {mockFacilities.map((facility) => (
        <Card
          key={facility.id}
          className={clsx(
            style.faskesCard,
            'flex w-[180px] min-h-[170px] max-h-[220px] flex-shrink-0 p-0 flex-col items-start'
          )}
        >
          <CardHeader>
            <div className="flex pt-2 items-center justify-between">
              <Badge variant="default" className={style.faskesTag}>
                {facility.type}
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-3">
            <div className="flex flex-col justify-between">
              <h1 className="text-[14px] font-light text-gray-900 mb-1 w-sm">
                {facility.name}
              </h1>
              <div className="flex items-center text-[12px] text-gray-600">
                {facility.city}
              </div>
            </div>
            <Link href={`/search/faskes/${facility.id}`}>
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="p-4 text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300 mb-2"
              >
                <div className="flex flex-row gap-1 text-xs">
                  <span>Lihat Detail</span>
                <ChevronRight className="w-4 h-4 "/>
                </div>
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
