import { TreePine, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <TreePine className="h-6 w-6" />
              <span className="text-lg font-semibold">Colline Dondi</span>
            </div>
            <p className="text-green-200">
              Zone Musigati, Commune Musigati<br />
              Province Bubanza, Burundi
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-green-200">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+257 XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@collinedondi.bi</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Colline Dondi, Musigati</span>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <p className="text-sm text-green-200">
              Site développé par <span className="font-semibold">Ir Masenge</span>
            </p>
            <p className="text-sm text-green-300 mt-1">
              © {new Date().getFullYear()} Colline Dondi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}