import React, { useCallback, useState, Fragment } from 'react';
import { useDropzone } from 'react-dropzone';

function MyDropzone() {

  const [svgFiles, setSvgFiles] = useState<any[]>([]);

  const onDrop = useCallback(acceptedFiles => {
    console.log("files", acceptedFiles);
    acceptedFiles = acceptedFiles.filter(item => item.type === "image/svg+xml");
    setSvgFiles([...svgFiles, ...acceptedFiles]);
  }, [svgFiles]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="svg-viewer-chrome-plugin-css-style-show-svg-container">
      {
        !svgFiles.length
          ? <div title={`${isDragActive ? 'Drop the files here ...' : 'Drag some files here, or click to select files'}`} className="svg-viewer-chrome-plugin-css-style-multi-svg-container">
            <div {...getRootProps({ accept: "image/svg+xml" })}>
              <input {...getInputProps()} />
              <div className="svg-viewer-chrome-plugin-css-style-plugin-header-init">Multiple SVGS Viewer</div>
              {
                isDragActive ?
                  <div className="svg-viewer-chrome-plugin-css-style-upload-button-init">Drop the files here ...</div> :
                  <div className="svg-viewer-chrome-plugin-css-style-upload-button-init">
                    <div className="svg-viewer-chrome-plugin-css-style-upload-button-init-middle">
                      <div style={{ fontSize: '72px' }}>+</div>
                      <div style={{ textAlign: 'center' }}>Drag some files here, or click to select files</div>
                    </div>
                  </div>
              }
            </div>
          </div>
          : <Fragment>
            <h2 className="svg-viewer-chrome-plugin-css-style-plugin-header-content">Multiple SVGS Viewer</h2>
            <div style={{ width: "100%" }} title={`${isDragActive ? 'Drop the files here ...' : 'Drag some files here, or click to select files'}`} className="svg-viewer-chrome-plugin-css-style-multi-svg-container">
              <div className="svg-viewer-chrome-plugin-css-style-svg-items-container">
                {
                  svgFiles.map((file, index) => (
                    <div className="svg-viewer-chrome-plugin-css-style-svg-items" key={index}>
                      <div className="svg-viewer-chrome-plugin-css-style-filename" title={file.name}>{file.name}</div>
                      <img alt="" className="svg-viewer-chrome-plugin-css-style-react-svg" src={window.webkitURL.createObjectURL(file)} />
                    </div>
                  ))
                }
                <div className="svg-viewer-chrome-plugin-css-style-svg-items svg-viewer-chrome-plugin-css-style-upload-button-content">
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {
                      isDragActive ?
                        <div className="svg-viewer-chrome-plugin-css-style-upload-button-content-border svg-viewer-chrome-plugin-css-style-drop-file-here">Drop the files here ...</div> :
                        <div className="svg-viewer-chrome-plugin-css-style-upload-button-content-border">
                          <div className="svg-viewer-chrome-plugin-css-style-plus">+</div>
                          <div className="svg-viewer-chrome-plugin-css-style-plus-text">Drag some files here, or click to select files</div>
                        </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
      }
    </div>
  );
}

export default MyDropzone;
