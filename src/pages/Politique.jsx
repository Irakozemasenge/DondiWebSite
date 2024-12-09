import { useState } from "react";
import { representatives } from "../data/politique";
import Pagination from "../components/Pagination";
import { Calendar, Phone, Vote } from "lucide-react";

const ITEMS_PER_PAGE = 12;

export default function Politique() {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentRepresentatives = representatives.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(representatives.length / ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Représentation Politique
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {currentRepresentatives.map((rep) => (
            <div
              key={rep.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={rep.image}
                    alt={rep.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {rep.name}
                  </h2>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {rep.party}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      {rep.position}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{rep.description}</p>

                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Mandat: {rep.mandate}
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      {rep.contact}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
