import React, { useState } from 'react';
import { Search, Database, Menu, X } from 'lucide-react';
import { Category } from '../types';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: Category) => void;
  onSearch: (query: string) => void;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange, onSearch, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const navItems = [
    { label: '規章制度', value: Category.REGULATIONS },
    { label: '粒子流程表', value: Category.FLOWCHARTS },
    { label: '共用表格', value: Category.FORMS },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchValue(val);
    onSearch(val);
  };

  return (
    <nav className="sticky top-0 z-40 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-enterprise-green p-2 rounded-lg mr-3">
              <Database className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-enterprise-gray tracking-tight">企業知識庫</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onTabChange(item.value)}
                className={`relative px-1 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeTab === item.value
                    ? 'text-enterprise-green'
                    : 'text-gray-500 hover:text-enterprise-green'
                }`}
              >
                {item.label}
                {activeTab === item.value && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-enterprise-green rounded-full transform scale-x-100 transition-transform" />
                )}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-xs ml-6">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchValue}
                onChange={handleSearchChange}
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-enterprise-green focus:border-enterprise-green sm:text-sm transition-all"
                placeholder="搜尋文件..."
              />
            </div>
          </div>

          {/* Logout (Hidden on mobile for now, can be added to menu) */}
          <div className="hidden md:flex items-center ml-4">
             <button onClick={onLogout} className="text-xs text-gray-400 hover:text-red-500 transition-colors">
               登出
             </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-enterprise-green focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onTabChange(item.value);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  activeTab === item.value
                    ? 'bg-enterprise-green/10 text-enterprise-green'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="p-3">
              <div className="relative w-full">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchValue}
                  onChange={handleSearchChange}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-enterprise-green sm:text-sm"
                  placeholder="搜尋文件..."
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;