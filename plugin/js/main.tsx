import React, { useCallback, useState, Fragment, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

function MyDropzone() {
  const [availableFiles, setAvailableFiles] = useState<any[]>([]);
  const [selectedSvgBtn, setSelectedSvgBtn] = useState(true);
  const [selectedGifBtn, setSelectedGifBtn] = useState(true);
  const [container, setContainer] = useState({
    width: 200,
    height: 200
  });
  const [content, setContent] = useState({
    width: 150,
    height: 150
  });

  useEffect(() => {
    availableFiles.forEach(item => {
      if (item.type === 'image/svg+xml') {
        item.visible = selectedSvgBtn ? true : false;
      } else if (item.type === 'image/gif') {
        item.visible = selectedGifBtn ? true : false;
      }
    });
    console.log('filter changed, files: ', availableFiles);
    setAvailableFiles([...availableFiles]);
  }, [selectedSvgBtn, selectedGifBtn]);

  const onDrop = useCallback(
    acceptedFiles => {
      console.log('selected files: ', acceptedFiles);
      acceptedFiles = acceptedFiles.filter(item => (item.type === 'image/svg+xml' || item.type === 'image/gif'));
      acceptedFiles.forEach(item => {
        if (item.type === 'image/svg+xml') {
          item.visible = selectedSvgBtn ? true : false;
        } else if (item.type === 'image/gif') {
          item.visible = selectedGifBtn ? true : false;
        }
      });
      console.log('available files: ', acceptedFiles);
      setAvailableFiles([...availableFiles, ...acceptedFiles]);
    },
    [availableFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const zoomOut = () => {
    setContainer({
      width: container.width + 20,
      height: container.height + 20
    });
    setContent({
      width: content.width + 20,
      height: content.height + 20
    });
  };

  const zoomIn = () => {
    if (container.width === 100) return;
    setContainer({
      width: container.width - 20,
      height: container.height - 20
    });
    setContent({
      width: content.width - 20,
      height: content.height - 20
    });
  };

  const availableFilesVisible = availableFiles.filter(item => item.visible);
  return (
    <div className="svg-viewer-chrome-plugin-css-style-show-svg-container">
      {(!availableFilesVisible.length && selectedSvgBtn && selectedSvgBtn) ? (
        <div
          title={`${isDragActive
            ? 'Drop the files here ...'
            : 'Drag some files here, or click to select files'}`}
          className="svg-viewer-chrome-plugin-css-style-multi-svg-container">
          <div {...getRootProps({ accept: 'image/svg+xml' })}>
            <input {...getInputProps()} />
            <div className="svg-viewer-chrome-plugin-css-style-plugin-header-init">
              Multiple SVG And GIF Viewer
            </div>
            {isDragActive ? (
              <div className="svg-viewer-chrome-plugin-css-style-upload-button-init">
                Drop the files here ...
              </div>
            ) : (<div className="svg-viewer-chrome-plugin-css-style-upload-button-init">
              <div className="svg-viewer-chrome-plugin-css-style-upload-button-init-middle">
                <div style={{ fontSize: '72px' }}>+</div>
                <div style={{ textAlign: 'center', fontWeight: 600, fontSize: 20 }}>
                  Drag some files here, or click to select files
                  </div>
              </div>
            </div>)}
          </div>
        </div>
      ) : (<Fragment>
        <h2 className="svg-viewer-chrome-plugin-css-style-plugin-header-content">
          Multiple SVG And GIF Viewer
        </h2>
        <div className="svg-viewer-chrome-plugin-css-style-tool">
          <div
            className="svg-viewer-chrome-plugin-css-style-file-type-button"
            style={{ backgroundColor: selectedSvgBtn ? "#ccc" : "#fff", color: selectedSvgBtn ? "#fff" : "#ccc" }}
            onClick={() => setSelectedSvgBtn(!selectedSvgBtn)}
            title="show svg">SVG</div>
          <div
            className="svg-viewer-chrome-plugin-css-style-file-type-button"
            style={{ backgroundColor: selectedGifBtn ? "#ccc" : "#fff", color: selectedGifBtn ? "#fff" : "#ccc" }}
            onClick={() => setSelectedGifBtn(!selectedGifBtn)}
            title="show gif">GIF</div>
          <div style={{ marginRight: 20, cursor: 'pointer' }} onClick={zoomOut} title="zoom out">+</div>
          <div style={{ cursor: 'pointer' }} onClick={zoomIn} title="zoom in">-</div>
        </div>
        <div
          style={{ width: '100%' }}
          title={`${isDragActive
            ? 'Drop the files here ...'
            : 'Drag some files here, or click to select files'}`}
          className="svg-viewer-chrome-plugin-css-style-multi-svg-container">
          <div className="svg-viewer-chrome-plugin-css-style-svg-items-container">
            {availableFilesVisible.map((file, index) => (
              <div
                className="svg-viewer-chrome-plugin-css-style-svg-items"
                style={{ width: container.width, height: container.height }}
                key={index}>
                <div
                  className="svg-viewer-chrome-plugin-css-style-filename"
                  style={{ width: container.width }}
                  title={file.name}>
                  {file.name}
                </div>
                <img
                  alt=""
                  style={{ width: content.width, height: content.height }}
                  className="svg-viewer-chrome-plugin-css-style-react-svg"
                  src={window.webkitURL.createObjectURL(file)}
                />
              </div>
            ))}
            <div className="svg-viewer-chrome-plugin-css-style-svg-items svg-viewer-chrome-plugin-css-style-upload-button-content">
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <div className="svg-viewer-chrome-plugin-css-style-upload-button-content-border svg-viewer-chrome-plugin-css-style-drop-file-here">
                    Drop the files here ...
                  </div>
                ) : (
                    <div className="svg-viewer-chrome-plugin-css-style-upload-button-content-border">
                      <div className="svg-viewer-chrome-plugin-css-style-plus">+</div>
                      <div className="svg-viewer-chrome-plugin-css-style-plus-text">
                        Drag some files here, or click to select files
                          </div>
                    </div>)}
              </div>
            </div>
          </div>
        </div>
      </Fragment>)}
    </div>
  );
}

export default MyDropzone;
