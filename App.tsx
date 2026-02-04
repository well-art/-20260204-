import React, { useState, useMemo } from 'react';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Section from './components/Section';
import DocumentModal from './components/DocumentModal';
import { 
  ALL_DOCUMENTS, 
  REGULATION_GROUPS, 
  FLOWCHART_GROUPS, 
  FORM_GROUPS 
} from './constants';
import { Category, DocumentItem } from './types';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<Category>(Category.REGULATIONS);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDocument, setSelectedDocument] = useState<DocumentItem | null>(null);

  // Filter documents based on Active Tab AND Search Query
  const filteredDocuments = useMemo(() => {
    let docs = ALL_DOCUMENTS.filter(doc => doc.category === activeTab);
    
    // If there is a search query, we want to search broadly or specifically within the tab?
    // Requirement says "Search Function" in nav. Let's filter within the active tab mostly, 
    // but if the user types, it's often better UX to show results. 
    // However, to keep the UI clean with the "Section" component structure, 
    // let's filter the *current* view.
    
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      docs = docs.filter(doc => 
        doc.title.toLowerCase().includes(query) || 
        doc.subCategory.toLowerCase().includes(query)
      );
    }
    return docs;
  }, [activeTab, searchQuery]);

  const getCurrentSubCategories = () => {
    switch (activeTab) {
      case Category.REGULATIONS: return REGULATION_GROUPS;
      case Category.FLOWCHARTS: return FLOWCHART_GROUPS;
      case Category.FORMS: return FORM_GROUPS;
      default: return [];
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setSearchQuery('');
    setActiveTab(Category.REGULATIONS);
  };

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar 
        activeTab={activeTab} 
        onTabChange={(tab) => {
          setActiveTab(tab);
          setSearchQuery(''); // Reset search when switching tabs
          window.scrollTo(0, 0);
        }}
        onSearch={setSearchQuery}
        onLogout={handleLogout}
      />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <Section 
          title={activeTab}
          subCategories={getCurrentSubCategories()}
          documents={filteredDocuments}
          onDocumentClick={setSelectedDocument}
        />
      </main>

      <DocumentModal 
        document={selectedDocument} 
        onClose={() => setSelectedDocument(null)} 
      />
    </div>
  );
};

export default App;