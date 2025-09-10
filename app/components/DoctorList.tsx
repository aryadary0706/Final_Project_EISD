import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import image1 from "@/public/doctor1.png"
import image2 from "@/public/doctor2.png"
import image3 from "@/public/doctor3.png"
import style from "@/app/styles/main.module.css"
import clsx from "clsx";

const mockDoctors = [
  {
    id: 1,
    name: "dr. Arief Nugroho, Sp.JP",
    specialty: "Spesialis Jantung dan Pembuluh Darah",
    rating: "5.0",
    totalPatients: "450+",
    image: image1
  },
  {
    id: 2,
    name: "dr. Ratna Dewi Sp.A",
    specialty: "Spesialis Anak",
    rating: "4.9",
    totalPatients: "450+",
    image: image2
  },
  {
    id: 3,
    name: "dr. Andini Pratama, Sp.PD",
    specialty: "Spesialias Penyakit Dalam",
    rating: "5.0",
    totalPatients: "450+",
    image: image3
  }
];

export default function DoctorList() {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-2">
      {mockDoctors.map((doctor) => (
        <Link key={doctor.id} href="#" className="w-fit flex-shrink-0">
          <div className="w-64 h-78 flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
            {/* Div for Image */}
            <div className={clsx(style.doctorimage, "relative w-full h-48 overflow-hidden")}>
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={100}
                height={100}
                style={{ objectFit: 'cover' }}
                className="object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Div for Description */}
            <div className={clsx(style.doctordescription)}>
              <div className="text-left">
                <h4 className="text-base font-semibold text-gray-900 leading-tight">
                  {doctor.name}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  {doctor.specialty}
                </p>
              </div>

              <div className="flex items-center justify-start space-x-2 mt-3">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold text-gray-700">{doctor.rating}</span>
                </div>
                <Badge variant="outline" className="text-sm">
                  {doctor.totalPatients} Pasien
                </Badge>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
