import {
  ArrowRight,
  GraduationCap,
  Landmark,
  Heart,
  TreePine,
  Vote,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const sections = [
    {
      title: "Éducation",
      description:
        "Découvrez nos établissements scolaires et programmes éducatifs.",
      icon: GraduationCap,
      link: "/education",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Administration",
      description:
        "Information sur l'administration locale et les services publics.",
      icon: Landmark,
      link: "/administration",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      title: "Services",
      description: "Accédez aux services disponibles dans notre colline.",
      icon: Heart,
      link: "/services",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      title: "Agriculture",
      description: "Explorez nos activités agricoles et ressources naturelles.",
      icon: TreePine,
      link: "/agriculture",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      title: "Politique",
      description: "Informations sur la représentation politique locale.",
      icon: Vote,
      link: "/politique",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
    },
    {
      title: "Communauté",
      description: "Rejoignez notre communauté dynamique.",
      icon: Users,
      link: "/communaute",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("background.webp")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Colline Dondi
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Zone Musigati, Commune Musigati, Province Bubanza
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/education"
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Nos Écoles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center bg-white text-green-800 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors"
              >
                Nos Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sections Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.title}
                to={section.link}
                className={`${section.bgColor} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group`}
              >
                <div className={`${section.iconColor} mb-4`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <span className="inline-flex items-center text-gray-700 group-hover:text-gray-900">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
