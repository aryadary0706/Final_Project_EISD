import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import style from "@/app/styles/main.module.css";
import clsx from "clsx";
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
  }
];

export default function FaskesList() {
  return (
    <div className="flex flex-row space-x-3">
      {mockFacilities.map((facility) => (
        <Card
          key={facility.id}
          className={clsx(
            style.faskesCard,
            'flex w-[200px] px-1 py-4 flex-col items-start gap-2'
          )}
        >
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <Badge variant="default" className={style.faskesTag}>
                {facility.type}
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="pt-0 space-y-3">
            <div>
              <CardTitle className="text-[16px] font-light text-gray-900 mb-1">
                {facility.name}
              </CardTitle>
              <div className="flex items-center text-md text-gray-600">
                <MapPin className="w-5 h-5"/>
                {facility.city}
              </div>
            </div>

            <Button 
              variant="outline" 
              size="sm" 
              className="w-full h-10 text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300"
            >
              <div className="flex flex-row gap-1">
                <span>Lihat Detail</span>
              <ChevronRight className="w-4 h-4 "/>
              </div>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
