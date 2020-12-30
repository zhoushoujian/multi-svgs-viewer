/* eslint-disable no-nested-ternary */
import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import Virtualized from './virtualized';

const btnArray = [
  {
    type: "svgBtn",
    title: "show svg",
    text: "SVG"
  },
  {
    type: "gifBtn",
    title: "show gif",
    text: "GIF"
  },
  {
    type: "jpgBtn",
    title: "show jpg",
    text: "JPG"
  },
  {
    type: "pngBtn",
    title: "show png",
    text: "PNG"
  },
  {
    type: "bmpBtn",
    title: "show bmp",
    text: "BMP"
  },
  {
    type: "iconBtn",
    title: "show icon",
    text: "ICON"
  },
];

const availableMimeArray = ['image/svg+xml', 'image/gif', 'image/jpeg', 'image/bmp', 'image/x-icon', 'image/png'];

let initState = true;
let mimeObjectInfo = {};

function MyDropzone() {
  const [availableFiles, setAvailableFiles] = useState<any[]>([]);
  const [selectedBtns, setSelectedBtns] = useState({
    svgBtn: true,
    gifBtn: true,
    jpgBtn: false,
    pngBtn: false,
    bmpBtn: false,
    iconBtn: false
  });
  const [container, setContainer] = useState({
    width: 200,
    height: 200
  });
  const [content, setContent] = useState({
    width: 150,
    height: 150
  });

  useEffect(() => {
    console.log("multi-svgs-viewer actived");
    if (document.querySelector('body')) {
      (document.querySelector('body') as any).style.overflow = "hidden";
    }
  }, []);

  useEffect(() => {
    const { svgBtn, gifBtn, jpgBtn, pngBtn, bmpBtn, iconBtn } = selectedBtns;
    availableFiles.forEach(item => {
      if (item.type === 'image/svg+xml') {
        item.visible = svgBtn ? true : false;
      } else if (item.type === 'image/gif') {
        item.visible = gifBtn ? true : false;
      } else if (item.type === 'image/jpeg') {
        item.visible = jpgBtn ? true : false;
      } else if (item.type === 'image/bmp') {
        item.visible = bmpBtn ? true : false;
      } else if (item.type === 'image/x-icon') {
        item.visible = iconBtn ? true : false;
      } else if (item.type === 'image/png') {
        item.visible = pngBtn ? true : false;
      }
    });
    console.log('filter changed, files: ', availableFiles);
    setAvailableFiles([...availableFiles]);
  }, [selectedBtns]);

  const onDrop = useCallback(
    acceptedFiles => {
      console.log('selected files: ', acceptedFiles);
      acceptedFiles = acceptedFiles.filter(item => {
        const mimeInfo = mimeObjectInfo[item.type];
        mimeObjectInfo[item.type] = mimeInfo ? mimeInfo + 1 : 1;
        return availableMimeArray.indexOf(item.type) !== -1;
      });
      console.log("mime count", mimeObjectInfo);
      mimeObjectInfo = {};
      acceptedFiles.forEach(item => {
        if (item.type === 'image/svg+xml') {
          item.visible = selectedBtns.svgBtn ? true : false;
        } else if (item.type === 'image/gif') {
          item.visible = selectedBtns.gifBtn ? true : false;
        } else if (item.type === 'image/jpeg') {
          item.visible = selectedBtns.jpgBtn ? true : false;
        } else if (item.type === 'image/bmp') {
          item.visible = selectedBtns.bmpBtn ? true : false;
        } else if (item.type === 'image/x-icon') {
          item.visible = selectedBtns.iconBtn ? true : false;
        } else if (item.type === 'image/png') {
          item.visible = selectedBtns.pngBtn ? true : false;
        }
      });
      console.log('available files: ', acceptedFiles);
      if (acceptedFiles.length) {
        initState = false;
      }
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

  const changeSelectedBtn = (type: string) => {
    setSelectedBtns({
      ...selectedBtns,
      [type]: !selectedBtns[type]
    });
  };

  const availableFilesVisible = availableFiles.filter(item => item.visible);
  const filesLength = availableFilesVisible.length;
  return (
    <div className="svg-viewer-chrome-plugin-css-style-show-svg-container">
      <div className="svg-viewer-chrome-plugin-css-style-show-svg-header-container">
        <h2 className="svg-viewer-chrome-plugin-css-style-plugin-header-content">
          Multiple SVGS Viewer {filesLength ? `( ${filesLength} )` : ""}
        </h2>
        <div className="svg-viewer-chrome-plugin-css-style-tool">
          {
            btnArray.map(item => {
              return <div
                key={item.type}
                className="svg-viewer-chrome-plugin-css-style-file-type-button"
                style={{
                  backgroundColor: selectedBtns[item.type] ? "#ccc" : "#fff",
                  color: selectedBtns[item.type] ? "#fff" : "#ccc"
                }}
                onClick={() => changeSelectedBtn(item.type)}
                title={item.title}>{item.text}</div>;
            })
          }
          <div style={{ marginRight: 20, cursor: 'pointer' }} onClick={zoomOut} title="zoom out">+</div>
          <div style={{ cursor: 'pointer' }} onClick={zoomIn} title="zoom in">-</div>
        </div>
      </div>
      {initState
        ? (
          <div
            title={`${isDragActive
              ? 'Drop the files here ...'
              : 'Drag some files here, or click to select files'}`}>
            <div {...getRootProps({ accept: 'image/svg+xml' })}>
              <input {...getInputProps()} />
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
        )
        : (<div
          title={`${isDragActive
            ? 'Drop the files here ...'
            : filesLength
              ? ""
              : 'Drag some files here, or click to select files'}`}
          className="svg-viewer-chrome-plugin-css-style-multi-svg-container-used">
          {
            filesLength > 10000
              ? <Virtualized
                height={window.innerHeight - 400}
                columnWidth={container.width}
                cellCount={filesLength}
                childElementFunc={(index, style) => {
                  const file = availableFilesVisible[index];
                  if (!file) return null;
                  return (
                    <div
                      className="svg-viewer-chrome-plugin-css-style-svg-items"
                      style={{ ...style, width: container.width, height: container.height }}>
                      <div
                        className="svg-viewer-chrome-plugin-css-style-filename"
                        title={file.name}>
                        {file.name}
                      </div>
                      <img
                        title={file.name}
                        alt={file.name}
                        style={{ height: content.height }}
                        className="svg-viewer-chrome-plugin-css-style-react-svg"
                        src={window.webkitURL.createObjectURL(file)}
                      />
                    </div>
                  );
                }} />
              : availableFilesVisible.map((file, index) => (
                <div
                  className="svg-viewer-chrome-plugin-css-style-svg-items"
                  style={{ width: container.width, height: container.height }}
                  key={index}>
                  <div
                    className="svg-viewer-chrome-plugin-css-style-filename"
                    title={file.name}>
                    {file.name}
                  </div>
                  <img
                    title={file.name}
                    alt={file.name}
                    style={{ height: content.height }}
                    className="svg-viewer-chrome-plugin-css-style-react-svg"
                    src={window.webkitURL.createObjectURL(file)}
                  />
                </div>
              ))
          }
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
        </div>)}
    </div>
  );
}

export default MyDropzone;
