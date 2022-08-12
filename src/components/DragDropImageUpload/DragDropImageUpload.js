import React, { useRef, useState } from "react";
import styles from "./DragDropImageUpload.module.scss";
const DragDropImageUpload = (props) => {
  const inputRef = useRef(null);
  const dragDropContainerRef = useRef(null);
  const [isImgUploaded, setIsImgUploaded] = useState(false);
  const { bgrImg, icon, iconText } = props;
  const handleOnDrop = (e) => {
    e.preventDefault();
    inputRef.current.files = e.dataTransfer.files;
    const imageUrl = URL.createObjectURL(inputRef.current.files[0]);
    dragDropContainerRef.current.style.backgroundImage = `url('${imageUrl}')`;
    setIsImgUploaded(true);
  };
  const handleOnDragOver = (e) => {
    e.preventDefault();
  };
  const handleOnClick = (e) => {
    inputRef.current.click();
  };
  const handleOnChange = (e) => {
    console.log(e);
    setIsImgUploaded(true);
  };

  return (
    <div
      className={styles.wrapper}
      onDrop={handleOnDrop}
      onDragOver={handleOnDragOver}
      ref={dragDropContainerRef}
      onClick={handleOnClick}
    >
      {!isImgUploaded && (
        <div className={styles.contentWrapper}>
          {icon && (
            <div className={styles.iconContainer}>
              <img src={icon} />
            </div>
          )}
          {iconText && <div>{iconText}</div>}
        </div>
      )}
      <input type="file" ref={inputRef} onChange={handleOnChange} />
    </div>
  );
};

export default DragDropImageUpload;
