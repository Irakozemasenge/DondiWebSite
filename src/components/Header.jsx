import { Menu, X, GraduationCap, Users, Building2, Home, Landmark, Heart, TreePine, Vote } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', href: '/', icon: Home },
    { name: 'Éducation', href: '/education', icon: GraduationCap },
    { name: 'Administration', href: '/administration', icon: Landmark },
    { name: 'Services', href: '/services', icon: Heart },
    { name: 'Agriculture', href: '/agriculture', icon: TreePine },
    { name: 'Politique', href: '/politique', icon: Vote },
    { name: 'Communauté', href: '/communaute', icon: Users },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-green-800 to-green-600 text-white shadow-lg z-50">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TreePine className="h-8 w-8" />
              <span className="text-xl font-bold">Colline Dondi</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-1 hover:text-green-200 transition-colors ${
                      isActive ? 'text-yellow-300 font-semibold relative after:absolute after:bottom-[-0.5rem] after:left-0 after:w-full after:h-0.5 after:bg-yellow-300' : ''
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden mt-4 space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                      isActive ? 'bg-yellow-500 text-white' : 'hover:bg-green-700'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </nav>
      </header>
      <div className="h-16"></div> {/* Spacer for fixed header */}
    </>
  );
}