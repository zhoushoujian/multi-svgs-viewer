/* eslint-disable no-alert */
/* eslint-disable indent */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-nested-ternary */
import React, { useCallback, useState, useEffect, useRef } from 'react';
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

function MyDropzone() {
  const headerRef = useRef(null as any);
  const [availableFiles, setAvailableFiles] = useState<any[]>([]);

  useEffect(() => {
    console.log('multi-svgs-viewer active');
    if (document.querySelector('body')) {
      (document.querySelector('body') as any).style.overflow = 'hidden';
    }
  }, []);

  const onDrop = useCallback(
    acceptedFiles => {
      console.log('selected files: ', acceptedFiles);
      acceptedFiles = acceptedFiles.filter(item => {
        const mimeInfo = mimeObjectInfo[item.type];
        mimeObjectInfo[item.type] = mimeInfo ? mimeInfo + 1 : 1;
        return availableMimeArray.indexOf(item.type) !== -1;
      });
      console.log('mime count', mimeObjectInfo);
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
      return dealAvailableFiles([...availableFiles, ...acceptedFiles]);
    },
    [availableFiles]
  );

  const dealAvailableFiles = files => {
    const length = files.length;
    toast.info(
      length > 100
        ? `Loading ${length} files, it maybe cost much time, please wait for patient...`
        : `Loading ${length} files, please wait...`,
      {
        position: 'top-right',
        autoClose: length > 100 ? 10000 : 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined
      }
    );
    return Promise.all(
      files.map(file => {
        return new Promise(res => {
          const reader = new FileReader();
          reader.onload = function (e: any) {
            const data = e.target.result;
            //加载图片获取图片真实宽度和高度
            const image = new Image();
            image.onload = function () {
              const height = image.height * (picWidth / image.width);
              Object.assign(file, { width: picWidth, height });
              res(null);
            };
            image.src = data;
          };
          reader.readAsDataURL(file);
        }).catch(err => {
          console.error('加载图片出错 inner err', err, 'file', file);
          alert('加载图片出错: ' + file.name);
        });
      })
    )
      .then(() => {
        setAvailableFiles(files);
      })
      .catch(err => {
        console.error('加载图片出错 err', err);
        alert('加载图片出错');
      });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const availableFilesVisible = availableFiles.filter(item => item.visible);
  const filesLength = availableFilesVisible.length;
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
                <div className="svg-viewer-chrome-plugin-css-style-plus">+</div>
                <div className="svg-viewer-chrome-plugin-css-style-plus-text">
                  Drag some files here, or click to select files
                </div>
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
            const file = availableFilesVisible[index];
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
                    src={window.webkitURL.createObjectURL(file)}
                  />
                </div>
              );
            } else {
              console.error(
                'render warn none file object, availableFilesVisible, index',
                availableFilesVisible,
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
