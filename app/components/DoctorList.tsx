import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import style from "@/app/styles/main.module.css"
import clsx from "clsx";
import mockDoctors from "@/data/mockDoctors.json"

export default function DoctorList() {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-5">
      {mockDoctors.map((doctor) => (
        <Link key={doctor.id} href={`/search/doctor/${doctor.id}}`} className="w-fit">
          <div className="w-full h-74 flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
            {/* Div for Image */}
            <div className={clsx(style.doctorimage, "relative w-full h-40 overflow-hidden")}>
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={120}
                height={120}
                />
            </div>
            
            {/* Div for Description */}
            <div className={clsx(style.doctordescription, "flex flex-col justify-between p-3 flex-1")}>
              <div className="w-[200px] whitespace-normal"> {/* Add break-words here */}
                <h4 className="text-md font-semibold text-gray-900 mb-1.5">
                  {doctor.name}
                </h4>
                <p className="text-sm text-gray-400">
                  {doctor.specialty}
                </p>
              </div>

              {/* Other elements remain unchanged */}
              <div className="flex items-center justify-between space-x-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-xs font-semibold text-gray-700">{doctor.rating}</span>
                </div>
                <Badge variant="outline" className="text-xs">
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
