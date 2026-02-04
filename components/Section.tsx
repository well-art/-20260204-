import React, { useState, useEffect } from 'react';
import { FileText, Calendar, ChevronRight } from 'lucide-react';
import { DocumentItem } from '../types';

interface SectionProps {
  title: string;
  subCategories: string[];
  documents: DocumentItem[];
  onDocumentClick: (doc: DocumentItem) => void;
}

const Section: React.FC<SectionProps> = ({ title, subCategories, documents, onDocumentClick }) => {
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('');
  
  // Only render subcategories that actually have documents
  const activeSubCategories = subCategories;

  // Set default selected sub-category when title or subCategories changes
  useEffect(() => {
    if (activeSubCategories.length > 0) {
      setSelectedSubCategory(activeSubCategories[0]);
    }
  }, [title, activeSubCategories]);

  // Filter documents based on selection
  const displayDocuments = documents.filter(doc => doc.subCategory === selectedSubCategory);

  return (
    <div className="fade-in pb-20">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-enterprise-gray tracking-tight">{title}</h2>
      </div>

      {/* Sticky Sub-Navigation (Tabs) */}
      <div className="sticky top-16 z-30 bg-gray-50/95 backdrop-blur border-b border-gray-200 shadow-sm -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 mb-8 overflow-x-auto whitespace-nowrap hide-scrollbar">
        <div className="flex space-x-2 py-3 max-w-7xl mx-auto">
          {activeSubCategories.map((sub) => {
            const isActive = selectedSubCategory === sub;
            return (
              <button
                key={sub}
                onClick={() => setSelectedSubCategory(sub)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all shadow-sm ${
                  isActive
                    ? 'bg-enterprise-green text-white border-enterprise-green'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-enterprise-green hover:text-enterprise-green hover:bg-enterprise-green/5'
                }`}
              >
                {sub}
              </button>
            );
          })}
        </div>
      </div>

      <div className="min-h-[300px]">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-6 bg-enterprise-green rounded-full"></span>
          <h3 className="text-xl font-bold text-gray-700">{selectedSubCategory}</h3>
          <span className="text-sm text-gray-400 ml-2 font-normal">({displayDocuments.length})</span>
        </div>

        {displayDocuments.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 bg-white rounded-xl border border-gray-200 border-dashed">
            <FileText className="w-10 h-10 mb-3 text-gray-300" />
            <p className="text-gray-400 text-sm">此分類尚無文件</p>
          </div>
        ) : (
          /* List Layout */
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col divide-y divide-gray-100">
            {displayDocuments.map((doc, index) => (
              <div
                key={doc.id}
                onClick={() => onDocumentClick(doc)}
                className="group flex items-center p-4 hover:bg-enterprise-green/5 transition-colors cursor-pointer gap-4"
              >
                {/* Title Column with Numbering */}
                <div className="flex-grow min-w-0">
                  <h4 className="text-base font-medium text-gray-700 group-hover:text-enterprise-green transition-colors truncate">
                    <span className="font-mono text-gray-400 mr-2 group-hover:text-enterprise-green/70">
                      {(index + 1).toString().padStart(2, '0')}.
                    </span>
                    {doc.title}
                  </h4>
                </div>

                {/* Date Column - Moved to the Right */}
                {doc.date && (
                  <div className="flex-shrink-0 w-28 text-sm text-gray-500 flex items-center justify-end gap-1.5">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    {doc.date}
                  </div>
                )}

                {/* Action Icon */}
                <div className="flex-shrink-0 text-gray-300 group-hover:text-enterprise-green transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;