import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Asset foto dokter
import doctor1 from "@/public/doctor1.png";
import doctor2 from "@/public/doctor2.png";
import doctor3 from "@/public/doctor3.png";

const mockDoctors = [
    {
      id: 1,
      name: "dr. Arief Nugroho, Sp.JP",
      specialty: "Spesialis Jantung dan Pembuluh Darah",
      rating: 5.0,
      totalPatients: 450,
      image: doctor1,
    },
    {
      id: 2,
      name: "dr. Ratna Dewi",
      specialty: "Dokter Umum",
      rating: 4.9,
      totalPatients: 450,
      image: doctor2,
    },
    {
      id: 3,
      name: "dr. Andini Pratama, Sp.PD",
      specialty: "Spesialis Penyakit Dalam",
      rating: 5.0,
      totalPatients: 450,
      image: doctor3,
    },
  ];

export default function DoctorList() {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-2">
      {mockDoctors.map((doctor) => (
        <Card key={doctor.id} className="w-64 flex-shrink-0 hover:shadow-lg transition-shadow duration-200">
          <CardHeader className="p-0">
            <div className="relative w-full h-48 overflow-hidden rounded-t-xl bg-gradient-to-br from-blue-50 to-blue-100">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                style={{ objectFit: 'cover' }}
                className="object-cover"
              />
            </div>
          </CardHeader>
          
          <CardContent className="p-4 space-y-3">
            <div className="text-center">
              <CardTitle className="text-base font-semibold text-gray-900 leading-tight">
                {doctor.name}
              </CardTitle>
              <CardDescription className="text-sm text-gray-600 mt-1">
                {doctor.specialty}
              </CardDescription>
            </div>

            <div className="flex items-center justify-center space-x-2">
              <div className="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">{doctor.rating}</span>
              </div>
              <Badge variant="secondary" className="text-xs">
                {doctor.totalPatients}+ Pasien
              </Badge>
            </div>

            <Button 
              variant="outline" 
              size="sm" 
              className="w-full text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300"
            >
              Lihat Profil
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}