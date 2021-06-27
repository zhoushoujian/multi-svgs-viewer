/* eslint-disable no-alert */
/* eslint-disable indent */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { toast, ToastContainer } from 'react-toastify';
import VirtualizedMasonry from './masonry';

const btnArray = [
  {
    type: 'svgBtn',
    title: 'show svg',
    text: 'SVG'
  },
  {
    type: 'gifBtn',
    title: 'show gif',
    text: 'GIF'
  },
  {
    type: 'jpgBtn',
    title: 'show jpg',
    text: 'JPG'
  },
  {
    type: 'pngBtn',
    title: 'show png',
    text: 'PNG'
  },
  {
    type: 'bmpBtn',
    title: 'show bmp',
    text: 'BMP'
  },
  {
    type: 'iconBtn',
    title: 'show icon',
    text: 'ICON'
  }
];

const availableMimeArray = [
  'image/svg+xml',
  'image/gif',
  'image/jpeg',
  'image/bmp',
  'image/x-icon',
  'image/png'
];

const selectedBtns = {
  svgBtn: true,
  gifBtn: true,
  jpgBtn: true,
  pngBtn: true,
  bmpBtn: true,
  iconBtn: true
};

let mimeObjectInfo = {};
const picWidth = 200;
const initState = 'Drag some files here, or click to select files';
const MAX_GROUP_RENDER_NUMBER = 500;

function MyDropzone() {
  const headerRef = useRef(null as any);
  const [availableFiles, setAvailableFiles] = useState<any[]>([]);
  const [uploadState, setUploadState] = useState(initState);

  useEffect(() => {
    console.log('multi-svgs-viewer active');
    if (document.querySelector('body')) {
      (document.querySelector('body') as any).style.overflow = 'hidden';
    }
  }, []);

  const onDrop = acceptedFiles => {
    toast.info('got files', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined
    });
    console.log('selected files: ', acceptedFiles);
    acceptedFiles = acceptedFiles.filter(item => {
      const mimeInfo = mimeObjectInfo[item.type];
      mimeObjectInfo[item.type] = mimeInfo ? mimeInfo + 1 : 1;
      return availableMimeArray.indexOf(item.type) !== -1;
    });
    console.log('mime count', mimeObjectInfo);
    const length = acceptedFiles.length;
    const info =
      length > 100
        ? `Loading ${length} files, it maybe cost much time, please wait for patient...`
        : `Loading ${length} files, please wait...`;
    toast.info(info, {
      position: 'top-right',
      autoClose: length > 100 ? 10000 : 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined
    });
    mimeObjectInfo = {};
    const arrGroup: any = [[]];
    const allAvailableFiles = [...availableFiles, ...acceptedFiles];
    allAvailableFiles.forEach(item => {
      if (!arrGroup[arrGroup.length - 1]) {
        arrGroup[arrGroup.length - 1] = [];
      } else if (arrGroup[arrGroup.length - 1].length >= MAX_GROUP_RENDER_NUMBER) {
        arrGroup[arrGroup.length] = [];
      }
      arrGroup[arrGroup.length - 1].push(item);
    });
    return dealAvailableFiles(arrGroup, allAvailableFiles.length);
  };

  const dealAvailableFiles = async (filesGroup, totalNumber) => {
    try {
      let loadedFiles: any = [];
      for (const groupIndex in filesGroup) {
        if (Object.prototype.hasOwnProperty.call(filesGroup, groupIndex)) {
          let max = 0;
          const files = filesGroup[groupIndex];
          console.info('groupIndex', groupIndex);
          // eslint-disable-next-line no-await-in-loop
          await Promise.all(
            files.map((file, index) => {
              return new Promise(res => {
                if (file.width && file.height) {
                  return res(null);
                } else {
                  const reader = new FileReader();
                  reader.onload = function (e: any) {
                    const data = e.target.result;
                    //加载图片获取图片真实宽度和高度
                    const image = new Image();
                    image.onload = function () {
                      const height = image.height * (picWidth / image.width);
                      Object.assign(file, { width: picWidth, height });
                      image.width = picWidth;
                      image.height = height;
                      if (file.size > 1 * 1024 * 1024) {
                        const src = compress(image, 0.4, file.type);
                        Object.assign(file, { src });
                        if (index > max) {
                          max = index;
                          setUploadState(
                            `Loading ${
                              index + 1 + Number(groupIndex) * MAX_GROUP_RENDER_NUMBER
                            } pictures - ${file.path}...`
                          );
                        }
                      }
                      res(null);
                    };
                    image.src = data;
                  };
                  reader.readAsDataURL(file);
                }
              }).catch(err => {
                console.error('Load error inner err', err, 'file', file);
                alert('Load error: ' + file.path);
              });
            })
          )
            // eslint-disable-next-line no-loop-func
            .then(() => {
              loadedFiles = [...loadedFiles, ...files];
              if (loadedFiles.length >= totalNumber) {
                setUploadState(initState);
              }
              setAvailableFiles(loadedFiles);
            })
            .catch(err => {
              console.error('Load error err', err);
              alert('Load error');
            });
        }
      }
    } catch (err) {
      console.error('Load error out err', err);
      alert('Load error');
    }
  };

  const compress = (image, quality, type) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    context?.drawImage(image, 0, 0, canvas.width, canvas.height);
    const res = canvas.toDataURL(type, quality);
    return res;
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const filesLength = availableFiles.length;
  return (
    <div className="svg-viewer-chrome-plugin-css-style-show-svg-container">
      <div className="svg-viewer-chrome-plugin-css-style-show-svg-header-container" ref={headerRef}>
        <h2 className="svg-viewer-chrome-plugin-css-style-plugin-header-content">
          Multiple SVGS Viewer {filesLength ? `( ${filesLength} )` : ''}
        </h2>
        <div className="svg-viewer-chrome-plugin-css-style-upload-button-content-border-container">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <div className="svg-viewer-chrome-plugin-css-style-upload-button-content-border svg-viewer-chrome-plugin-css-style-drop-file-here">
                Drop the files here ...
              </div>
            ) : (
              <div className="svg-viewer-chrome-plugin-css-style-upload-button-content-border">
                <div className="svg-viewer-chrome-plugin-css-style-plus-text">{uploadState}</div>
              </div>
            )}
          </div>
        </div>
        <div className="svg-viewer-chrome-plugin-css-style-tool">
          {btnArray.map(item => {
            return (
              <div
                key={item.type}
                className="svg-viewer-chrome-plugin-css-style-file-type-button"
                style={{
                  backgroundColor: selectedBtns[item.type] ? '#ccc' : '#fff',
                  color: selectedBtns[item.type] ? '#fff' : '#ccc'
                }}
                title={item.title}>
                {item.text}
              </div>
            );
          })}
        </div>
      </div>
      <div className="svg-viewer-chrome-plugin-css-style-multi-svg-container-used">
        <VirtualizedMasonry
          height={
            window.innerHeight -
            (headerRef.current && headerRef.current.offsetHeight
              ? headerRef.current.offsetHeight
              : 106)
          }
          columnWidth={picWidth + 80}
          cellCount={filesLength}
          childElementFunc={(index, style) => {
            const file = availableFiles[index];
            if (file) {
              return (
                <div
                  className="svg-viewer-chrome-plugin-css-style-svg-items"
                  style={{ ...style, width: file.width + 60, height: file.height + 60 }}>
                  <div className="svg-viewer-chrome-plugin-css-style-filename" title={file.name}>
                    {file.name}
                  </div>
                  <img
                    height={file.height}
                    width={file.width}
                    title={file.path}
                    alt={file.name}
                    className="svg-viewer-chrome-plugin-css-style-react-svg"
                    src={file.src || window.webkitURL.createObjectURL(file)}
                  />
                </div>
              );
            } else {
              console.error(
                'render warn none file object, availableFiles, index',
                availableFiles,
                index
              );
              return null;
            }
          }}
        />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={false}
      />
    </div>
  );
}

export default MyDropzone;
