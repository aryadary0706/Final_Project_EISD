import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

const getBadgeVariant = (type: string) => {
  switch (type) {
    case "Rumah Sakit":
      return "default";
    case "Klinik":
      return "secondary";
    case "Puskesmas":
      return "outline";
    default:
      return "default";
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case "Rumah Sakit":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case "Klinik":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case "Puskesmas":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function FaskesList() {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-2">
      {mockFacilities.map((facility) => (
        <Card key={facility.id} className="min-w-[200px] flex-shrink-0 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <Badge 
                variant={getBadgeVariant(facility.type)} 
                className="flex items-center gap-1 text-xs"
              >
                {getTypeIcon(facility.type)}
                {facility.type}
              </Badge>
              <span className="text-xs text-gray-500">{facility.distance}</span>
            </div>
          </CardHeader>
          
          <CardContent className="pt-0 space-y-3">
            <div>
              <CardTitle className="text-base font-semibold text-gray-900 mb-1">
                {facility.name}
              </CardTitle>
              <div className="flex items-center text-sm text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {facility.city}
              </div>
            </div>

            <Button 
              variant="outline" 
              size="sm" 
              className="w-full text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300"
            >
              <span>Lihat Detail</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}