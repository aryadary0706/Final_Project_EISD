import { Button } from "@/components/ui/button";
import { MoreVertical, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function DoctorHeader({ doctor }: { doctor: any }) {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-row gap-3">
            <Link href="/beranda">
                <button className="bg-gray-200 p-2 rounded-full">
                    <ChevronLeft className="w-5 h-5"/>
                </button>
            </Link>
            <div>
                <h2 className="text-md font-medium">{doctor.specialty}</h2>
                <p className="text-sm text-gray-500">{doctor.hospital}</p>
            </div>
        </div>
        <Button variant="outline">
            <MoreVertical className="text-gray-500" />
        </Button>
      </div>

      <div className="bg-blue-100 rounded-xl p-6 flex flex-col h-60 justify-center items-center">
        <h1 className="text-2xl font-bold text-blue-500">{doctor.name}</h1>
        <div className="flex gap-6 mt-4">
          <p className="text-sm">{doctor.experience}</p>
          <p className="text-sm">{doctor.patients}</p>
        </div>
      </div>
    </div>
  );
}
