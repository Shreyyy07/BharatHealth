import { useState } from 'react';
import { FaCloudUploadAlt, FaFilePdf, FaFileImage, FaTimes } from 'react-icons/fa';
import Header from '../components/Header';

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('bloodReport');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [error, setError] = useState('');
  const [dragActive, setDragActive] = useState(false);

  const categories = [
    { id: 'bloodReport', label: 'Blood Report' },
    { id: 'xRay', label: 'X-Ray' },
    { id: 'generalMedicine', label: 'General Medicine' },
    { id: 'prescription', label: 'Prescription' },
  ];

  const handleFileUpload = (files) => {
    const validFiles = Array.from(files).filter(file => {
      const isValidType = ['image/jpeg', 'image/png', 'application/pdf'].includes(file.type);
      const isValidSize = file.size <= 5 * 1024 * 1024; // 5MB limit
      
      if (!isValidType) setError('Only PDF, JPEG, and PNG files are allowed');
      if (!isValidSize) setError('File size must be less than 5MB');
      
      return isValidType && isValidSize;
    });

    if (validFiles.length > 0) {
      setUploadedFiles(prev => [
        ...prev,
        ...validFiles.map(file => ({
          id: Date.now() + Math.random(),
          file,
          category: selectedCategory,
          uploadedAt: new Date().toLocaleString(),
        }))
      ]);
      setError('');
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragover') setDragActive(true);
    else setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const removeFile = (fileId) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId));
  };

  const openFile = (file) => {
    const fileUrl = URL.createObjectURL(file);
    window.open(fileUrl, '_blank');
  };

  return (
  <div>
  <Header/>
    <div className="dashboard-container grid grid-cols-1 max-w-2xl mx-auto p-6 font-sans bg-gradient-to-r from-indigo-200 via-blue-300 to-indigo-500 rounded-lg border-2 border-gray-500 shadow-lg mt-4">
      
      <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">Medical Reports Dashboard</h1>
      
      {/* Category Menu */}
      <div className="flex gap-3 flex-wrap justify-center mb-6">
        {categories.map(category => (
       <button
        key={category.id}
        className={`btn-gradient ${selectedCategory === category.id ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-200 text-gray-700 shadow-md'} 
          transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
          px-6 py-2 rounded-lg shadow-md hover:shadow-inner hover:border-2 hover:border-blue-500 transform-gpu`}
        onClick={() => setSelectedCategory(category.id)}
      >
        {category.label}
      </button>
       
        
        ))}
      </div>

      {/* Drag and Drop Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all cursor-pointer
          ${dragActive ? 'bg-blue-100 border-blue-500 shadow-lg' : 'border-gray-400 hover:border-blue-500'}
          hover:shadow-xl hover:bg-blue-50`}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-input').click()}
      >
        {}
        <div className="mb-4 text-blue-500">
          <FaCloudUploadAlt size={40} />
        </div>

        {}
        <p className="text-gray-700 font-semibold">Drag & Drop files here or click to upload</p>
        <small className="text-gray-500">Supported formats: PDF, JPEG, PNG (Max 5MB)</small>

        {/* Active State Overlay */}
        {dragActive && (
          <div className="absolute inset-0 bg-blue-200 opacity-50 rounded-lg"></div>
        )}
      </div>

      <input
        id="file-input"
        type="file"
        multiple
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={(e) => handleFileUpload(e.target.files)}
        hidden
      />

      {}
      {error && <div className="mt-4 text-red-600 text-center">{error}</div>}

    {}

      {/* Uploaded Files Section */}
      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-800">Uploaded Files ({uploadedFiles.length})</h3>

        {uploadedFiles.map((file) => (
          <div key={file.id} className="flex items-center justify-between bg-gray-100 p-4 rounded-lg mt-3 shadow-sm">
            <div className="flex items-center gap-3">
              {file.file.type === 'application/pdf' ? (
                <FaFilePdf size={24} className="text-red-500" />
              ) : (
                <FaFileImage size={24} className="text-blue-500" />
              )}
              <div>
                <h4 className="font-medium">{file.file.name}</h4>
                <p className="text-sm text-gray-600">
                  {file.category} • {file.file.type.split('/')[1].toUpperCase()} • 
                  {(file.file.size / 1024 / 1024).toFixed(2)} MB
                </p>
                <small className="text-gray-500">Uploaded: {file.uploadedAt}</small>
              </div>
            </div>
            <div className="flex gap-3">
              <button 
                className="text-blue-600 hover:text-blue-800" 
                onClick={() => openFile(file.file)}
              >
                View
              </button>
              <button className="text-red-600 hover:text-red-800" onClick={() => removeFile(file.id)}>
                <FaTimes size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
