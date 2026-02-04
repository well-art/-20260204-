import React, { useState, useMemo } from 'react';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Section from './components/Section';
import DocumentModal from './components/DocumentModal';
import { Calendar, ChevronRight, FileText, Search } from 'lucide-react';
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

  // Filter documents based on Active Tab only (used for normal view)
  const tabDocuments = useMemo(() => {
    return ALL_DOCUMENTS.filter(doc => doc.category === activeTab);
  }, [activeTab]);

  // Global Search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return ALL_DOCUMENTS.filter(doc => 
      doc.title.toLowerCase().includes(query) || 
      doc.subCategory.toLowerCase().includes(query) ||
      (doc.description && doc.description.toLowerCase().includes(query))
    );
  }, [searchQuery]);

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

  const isSearching = searchQuery.trim() !== '';

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
        {isSearching ? (
          /* Search Results View */
          <div className="fade-in pb-20">
            <div className="mb-6 flex items-center gap-3">
              <div className="bg-enterprise-green/10 p-2 rounded-lg">
                <Search className="w-6 h-6 text-enterprise-green" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-enterprise-gray tracking-tight">搜尋結果</h2>
                <p className="text-gray-500 text-sm mt-1">
                  關鍵字：「{searchQuery}」，共找到 {searchResults.length} 筆資料
                </p>
              </div>
            </div>

            {searchResults.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 bg-white rounded-xl border border-gray-200 border-dashed">
                <FileText className="w-12 h-12 mb-4 text-gray-300" />
                <p className="text-gray-500 font-medium">沒有找到符合的檔案</p>
                <p className="text-gray-400 text-sm mt-1">請嘗試不同的關鍵字，包含標題或說明內容</p>
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col divide-y divide-gray-100">
                {searchResults.map((doc, index) => (
                  <div
                    key={doc.id}
                    onClick={() => setSelectedDocument(doc)}
                    className="group flex items-center p-4 hover:bg-enterprise-green/5 transition-colors cursor-pointer gap-4"
                  >
                    {/* Title Column with Numbering */}
                    <div className="flex-grow min-w-0 py-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-500 border border-gray-200">
                          {doc.category}
                        </span>
                        <span className="text-xs text-gray-400">
                          {doc.subCategory}
                        </span>
                      </div>
                      <h4 className="text-base font-medium text-gray-700 group-hover:text-enterprise-green transition-colors truncate flex items-center">
                        <span className="font-mono text-gray-400 mr-2 group-hover:text-enterprise-green/70 text-sm">
                          {(index + 1).toString().padStart(2, '0')}.
                        </span>
                        {doc.title}
                      </h4>
                      {doc.description && (
                        <p className="text-sm text-gray-400 mt-1 line-clamp-2 pl-7 font-light">
                          {doc.description}
                        </p>
                      )}
                    </div>

                    {/* Date Column - Moved to the Right */}
                    {doc.date && (
                      <div className="flex-shrink-0 w-28 text-sm text-gray-500 flex items-center justify-end gap-1.5 self-start mt-6">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        {doc.date}
                      </div>
                    )}

                    {/* Action Icon */}
                    <div className="flex-shrink-0 text-gray-300 group-hover:text-enterprise-green transition-colors self-center">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Standard Section View */
          <Section 
            title={activeTab}
            subCategories={getCurrentSubCategories()}
            documents={tabDocuments}
            onDocumentClick={setSelectedDocument}
          />
        )}
      </main>

      <DocumentModal 
        document={selectedDocument} 
        onClose={() => setSelectedDocument(null)} 
      />
    </div>
  );
};

export default App;