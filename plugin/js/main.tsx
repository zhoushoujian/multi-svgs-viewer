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
    <div className="show-svg-container">
      {
        !svgFiles.length
          ? <div title={`${isDragActive ? 'Drop the files here ...' : 'Drag drop some files here, or click to select files'}`} className="multi-svg-container">
            <div {...getRootProps({ accept: "image/svg+xml" })}>
              <input {...getInputProps()} />
              <div className="plugin-header-init">Multiple SVGS Viewer</div>
              {
                isDragActive ?
                  <div className="upload-button-init">Drop the files here ...</div> :
                  <div className="upload-button-init">
                    <div className="upload-button-init-middle">
                      <div style={{ fontSize: '72px' }}>+</div>
                      <div style={{ textAlign: 'center' }}>Drag drop some files here, or click to select files</div>
                    </div>
                  </div>
              }
            </div>
          </div>
          : <Fragment>
            <h2 className="plugin-header-content">Multiple SVGS Viewer</h2>
            <div style={{ width: "100%" }} title={`${isDragActive ? 'Drop the files here ...' : 'Drag drop some files here, or click to select files'}`} className="multi-svg-container">
              <div className="svg-items-container">
                {
                  svgFiles.map((file, index) => (
                    <div className="svg-items" key={index}>
                      <div className="filename" title={file.name}>{file.name}</div>
                      <img alt="" className="react-svg" src={window.webkitURL.createObjectURL(file)} />
                    </div>
                  ))
                }
                <div className="svg-items upload-button-content">
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {
                      isDragActive ?
                        <div className="upload-button-content-border drop-file-here">Drop the files here ...</div> :
                        <div className="upload-button-content-border">
                          <div className="plus">+</div>
                          <div className="plus-text">Drag drop some files here, or click to select files</div>
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
