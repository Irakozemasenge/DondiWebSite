import { useState } from "react";
import { associations } from "../data/communaute";
import Pagination from "../components/Pagination";
import { Users, Calendar, User } from "lucide-react";

const ITEMS_PER_PAGE = 12;

export default function Communaute() {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentAssociations = associations.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(associations.length / ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Communauté de Dondi
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {currentAssociations.map((assoc) => (
            <div
              key={assoc.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={assoc.image}
                alt={assoc.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {assoc.name}
                  </h2>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                    {assoc.category}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{assoc.description}</p>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="flex items-center text-gray-600 mb-1">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="text-sm">Membres</span>
                    </div>
                    <p className="font-semibold">{assoc.members}</p>
                  </div>
                  <div>
                    <div className="flex items-center text-gray-600 mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">Fondée</span>
                    </div>
                    <p className="font-semibold">{assoc.founded}</p>
                  </div>
                  <div>
                    <div className="flex items-center text-gray-600 mb-1">
                      <User className="h-4 w-4 mr-1" />
                      <span className="text-sm">Président</span>
                    </div>
                    <p
                      className="font-semibold truncate"
                      title={assoc.president}
                    >
                      {assoc.president}
                    </p>
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
