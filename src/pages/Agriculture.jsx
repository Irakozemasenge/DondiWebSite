import { useState } from "react";
import { projects } from "../data/agriculture";
import Pagination from "../components/Pagination";
import { Users, Calendar, TreePine } from "lucide-react";

const ITEMS_PER_PAGE = 12;

export default function Agriculture() {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Agriculture à Dondi
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {project.name}
                  </h2>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {project.type}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="flex items-center text-gray-600 mb-1">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="text-sm">Membres</span>
                    </div>
                    <p className="font-semibold">{project.members}</p>
                  </div>
                  <div>
                    <div className="flex items-center text-gray-600 mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">Début</span>
                    </div>
                    <p className="font-semibold">{project.startDate}</p>
                  </div>
                  <div>
                    <div className="flex items-center text-gray-600 mb-1">
                      <TreePine className="h-4 w-4 mr-1" />
                      <span className="text-sm">Leader</span>
                    </div>
                    <p className="font-semibold">{project.leader}</p>
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
