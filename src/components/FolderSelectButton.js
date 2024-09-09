import React, { useState } from 'react';

const FolderSelectButton = () => {
  const [folderPath, setFolderPath] = useState(null);

  const handleFolderSelect = (event) => {
    const files = event.target.files;
    
    if (files.length > 0) {
      const firstFilePath = files[0].webkitRelativePath;
      const folderPath = firstFilePath.split('/')[0]; // Get folder path
      setFolderPath(folderPath);
    }
  };

  return (
    <div>
      <button
        onClick={() => document.getElementById('folder-input').click()}
        className="folder-select-button"
      >
        Select Folder
      </button>

      <input
        id="folder-input"
        type="file"
        webkitdirectory="true"
        mozdirectory="true"
        msdirectory="true"
        odirectory="true"
        directory="true"
        style={{ display: 'none' }}
        onChange={handleFolderSelect}
      />

      {folderPath && <p>Selected Folder: {folderPath}</p>}
    </div>
  );
};

export default FolderSelectButton;
