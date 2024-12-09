import { useState } from "react";
import { schools, cequisontetudies } from "../data/education";
import { Users, BookOpen, GraduationCap } from "lucide-react";
import Pagination from "../components/Pagination";

const ITEMS_PER_PAGE = 12;

export default function Education() {
  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView] = useState("schools"); // État pour gérer la vue sélectionnée

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;

  const currentItems =
    view === "schools"
      ? schools.slice(indexOfFirstItem, indexOfLastItem)
      : cequisontetudies.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(
    (view === "schools" ? schools.length : cequisontetudies.length) /
      ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Éducation à Dondi
        </h1>

        {/* Statistiques */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-blue-50 p-6 rounded-xl">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="h-8 w-8 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-800">Élèves</h3>
            </div>
            <p className="text-3xl font-bold text-blue-600">770</p>
            <p className="text-gray-600">Élèves inscrits</p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl">
            <div className="flex items-center space-x-3 mb-4">
              <BookOpen className="h-8 w-8 text-green-600" />
              <h3 className="text-xl font-semibold text-gray-800">
                Enseignants
              </h3>
            </div>
            <p className="text-3xl font-bold text-green-600">30</p>
            <p className="text-gray-600">Professeurs qualifiés</p>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl">
            <div className="flex items-center space-x-3 mb-4">
              <GraduationCap className="h-8 w-8 text-purple-600" />
              <h3 className="text-xl font-semibold text-gray-800">Écoles</h3>
            </div>
            <p className="text-3xl font-bold text-purple-600">2</p>
            <p className="text-gray-600">Établissements</p>
          </div>
        </div>

        {/* Sélecteur de vue */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg mb-2"
            htmlFor="view-selector"
          >
            Afficher:
          </label>
          <select
            id="view-selector"
            value={view}
            onChange={(e) => {
              setView(e.target.value);
              setCurrentPage(1); // Réinitialiser la page courante lorsque la vue change
            }}
            className="border rounded p-2"
          >
            <option value="schools">Écoles</option>
            <option value="graduates">Diplômés</option>
          </select>
        </div>

        {/* Liste des écoles ou diplômés */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          {view === "schools" ? "Écoles" : "Diplômés"}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {item.name}
                </h2>
                <p className="text-gray-600 mb-4">{item.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  {view === "schools" ? (
                    <>
                      <div>
                        <p className="text-sm text-gray-500">Directeur</p>
                        <p className="font-semibold">{item.director}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Type</p>
                        <p className="font-semibold">{item.type}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Élèves</p>
                        <p className="font-semibold">{item.students}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Enseignants</p>
                        <p className="font-semibold">{item.teachers}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <p className="text-sm text-gray-500">Diplôme</p>
                        <p className="font-semibold">{item.diplome}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-semibold">{item.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Téléphone</p>
                        <p className="font-semibold">{item.tel}</p>
                      </div>
                    </>
                  )}
                </div>

                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                  {view === "schools" ? "Plus de détails" : "Contacter"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
