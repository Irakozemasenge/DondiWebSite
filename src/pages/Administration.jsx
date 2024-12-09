import { useState } from "react";
import { administrators } from "../data/administration";
import Pagination from "../components/Pagination";
import { Users, Building2, Phone } from "lucide-react";

const ITEMS_PER_PAGE = 12;

export default function Administration() {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentAdministrators = administrators.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(administrators.length / ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Administration de Dondi
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-purple-50 p-6 rounded-xl">
            <div className="flex items-center space-x-3 mb-4">
              <Building2 className="h-8 w-8 text-purple-600" />
              <h3 className="text-xl font-semibold text-gray-800">Bureau</h3>
            </div>
            <p className="text-gray-600">Centre administratif de Dondi</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="h-8 w-8 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-800">Personnel</h3>
            </div>
            <p className="text-gray-600">Équipe administrative dévouée</p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl">
            <div className="flex items-center space-x-3 mb-4">
              <Phone className="h-8 w-8 text-green-600" />
              <h3 className="text-xl font-semibold text-gray-800">Contact</h3>
            </div>
            <p className="text-gray-600">Service disponible 7j/7</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {currentAdministrators.map((admin) => (
            <div
              key={admin.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={admin.image}
                    alt={admin.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {admin.name}
                  </h2>
                  <p className="text-green-600 font-semibold mb-2">
                    {admin.role}
                  </p>
                  <p className="text-gray-600 mb-4">{admin.description}</p>

                  <div className="space-y-2">
                    <p className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-2" />
                      {admin.phone}
                    </p>
                    <p className="text-gray-600">{admin.email}</p>
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
