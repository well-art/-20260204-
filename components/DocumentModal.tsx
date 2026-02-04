import React from 'react';
import { X, ExternalLink, Download, FileText, FileType } from 'lucide-react';
import { DocumentItem, Category } from '../types';

interface DocumentModalProps {
  document: DocumentItem | null;
  onClose: () => void;
}

const DocumentModal: React.FC<DocumentModalProps> = ({ document, onClose }) => {
  if (!document) return null;

  // Determine URL type based on ID pattern or default to Drive Preview
  let previewUrl = '';
  let viewUrl = '';
  let isGoogleForm = false;

  // Check if it looks like a Google Form ID (Form Responses ID usually starts with 1FAIp)
  if (document.driveId.startsWith('1FAIp')) {
    isGoogleForm = true;
    previewUrl = `https://docs.google.com/forms/d/e/${document.driveId}/viewform?embedded=true`;
    viewUrl = `https://docs.google.com/forms/d/e/${document.driveId}/viewform`;
  } else {
    // For regular Docs, Sheets, and PDFs on Drive
    previewUrl = `https://drive.google.com/file/d/${document.driveId}/preview`;
    // CHANGED: Use /view instead of /edit to ensure read-only mode
    viewUrl = `https://docs.google.com/document/d/${document.driveId}/view`;
  }

  // Logic to determine if Word download should be shown
  // Requirement: Flowcharts and Forms (excluding actual Google Form surveys)
  const showWordDownload = !isGoogleForm && (
    document.category === Category.FLOWCHARTS || 
    document.category === Category.FORMS
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-enterprise-gray/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col z-10 fade-in overflow-hidden border border-gray-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50">
          <div className="flex items-center gap-3">
            <div className="bg-enterprise-green/10 p-2 rounded-lg">
              <FileText className="w-6 h-6 text-enterprise-green" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-enterprise-gray">{document.title}</h3>
              <p className="text-xs text-gray-500">
                {document.category} &gt; {document.subCategory} {document.date && `• ${document.date}`}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Preview Area */}
        <div className="flex-1 bg-gray-100 relative group overflow-hidden">
          <iframe 
            src={previewUrl}
            className="w-full h-full border-none"
            title="Document Preview"
            allow="autoplay"
          >
          </iframe>

          {/* Fallback overlay */}
          <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center bg-gray-50">
            <p className="text-enterprise-gray font-medium mb-2">正在載入預覽...</p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-gray-100 bg-white flex justify-end gap-3 flex-wrap">
          
          {/* Online View Button (Read Only) */}
          <a 
            href={viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-enterprise-green text-enterprise-green hover:bg-enterprise-green/5 transition-colors font-medium text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            {isGoogleForm ? '填寫表格' : '線上閱讀 (唯讀)'}
          </a>

          {/* Word Download Button (Flowcharts & Forms only) */}
          {showWordDownload && (
            <a 
              href={`https://docs.google.com/document/d/${document.driveId}/export?format=docx`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors font-medium text-sm"
            >
              <FileType className="w-4 h-4" />
              下載 Word
            </a>
          )}
          
          {/* PDF Download Button (Not for Google Forms) */}
          {!isGoogleForm && (
            <a 
              href={`https://docs.google.com/document/d/${document.driveId}/export?format=pdf`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-enterprise-green text-white hover:bg-[#1e873a] transition-colors font-medium text-sm shadow-md shadow-enterprise-green/20"
            >
              <Download className="w-4 h-4" />
              下載 PDF
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentModal;