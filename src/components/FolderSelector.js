import React, { useState } from 'react';
import styles from './FolderSelector.module.css'; // Import the CSS Module

const FolderSelector = () => {
  const [selectedFolder, setSelectedFolder] = useState(null);

  const handleFolderSelection = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      // Extract the folder name from the first file's path
      const folderPath = files[0].webkitRelativePath.split('/')[0];
      setSelectedFolder(folderPath);
    }
  };

  return (
    <div className="folder-selector">
      <input
        type="file"
        id="folder"
        webkitdirectory="true"
        directory="true"
        style={{ display: 'none' }}
        onChange={handleFolderSelection}
      />
      <label htmlFor="folder" className="folder-button">
        Select Folder
      </label>
      {selectedFolder && (
        <p>Selected Folder: {selectedFolder}</p>
      )}
    </div>
  );
};

export default FolderSelector;
