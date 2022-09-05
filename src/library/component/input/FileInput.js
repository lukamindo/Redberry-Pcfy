import React, { useState } from "react";
import { Controller, useController } from "react-hook-form";
import Dropzone from "react-dropzone";
import {
  StyledFileDescripton,
  StyledFileDescriptonWrapper,
  StyledFileInput,
  StyledFileInputErrorImage,
  StyledFileUploadSucces,
  StyledFileUploadText,
  StyledFileUploadWrapper,
} from "./FileInput.styled";
import Button from "../button/Button";
import Vector from "assets/imgs/Vector.svg";
import radioerror from "assets/imgs/radioerror.svg";

const FileInput = ({ control, name, errors }) => {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const {
    field: { onChange, ref, onBlur },
  } = useController({
    name,
    control,
  });

  const fileToBase64 = async (e) => {
    if (e.length > 0) {
      const file = e[0];
      setFile(file);
      const fileImage = await convertBase64(file);
      onChange(file);
      setImage(fileImage);
    }
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <Dropzone onDrop={(e) => fileToBase64(e)}>
      {({ getRootProps, getInputProps }) => (
        <>
          {image ? (
            <>
              <StyledFileUploadWrapper
                {...getRootProps()}
                errors={errors[name]}
              >
                <img src={image} />
              </StyledFileUploadWrapper>
              <StyledFileDescriptonWrapper>
                <StyledFileDescripton>
                  <StyledFileUploadSucces src={Vector} />
                  <p>{file.name}</p>
                  <p>{`${(file.size / Math.pow(1024, 2)).toFixed(2)} mb`}</p>
                </StyledFileDescripton>
                <StyledFileInput {...getRootProps()}>
                  თავიდან ატვირთე
                  <input
                    {...getInputProps()}
                    ref={ref}
                    name={name}
                    onBlur={onBlur}
                  />
                </StyledFileInput>
              </StyledFileDescriptonWrapper>
            </>
          ) : (
            <StyledFileUploadWrapper {...getRootProps()} errors={errors[name]}>
              {errors[name] && (
                <StyledFileInputErrorImage
                  src={radioerror}
                  alt="redberry_best_companyy_ever_;)"
                />
              )}
              <StyledFileUploadText>
                ჩააგდე ან ატვირთე ლეპტოპის ფოტო
              </StyledFileUploadText>
              <Button width="233px" margin="65px 0  0">
                ატვირთე
                <input
                  {...getInputProps()}
                  ref={ref}
                  name={name}
                  onBlur={onBlur}
                />
              </Button>
            </StyledFileUploadWrapper>
          )}
        </>
      )}
    </Dropzone>
  );
};

export default FileInput;
