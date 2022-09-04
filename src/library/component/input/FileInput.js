import React from "react";
import { Controller } from "react-hook-form";
import Dropzone from "react-dropzone";
import {
  StyledFileUploadText,
  StyledFileUploadWrapper,
} from "./FileInput.styled";
import Button from "../button/Button";

const FileInput = ({ control, name }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <>
          <Dropzone onDrop={field.onChange}>
            {({ getRootProps, getInputProps }) => (
              <StyledFileUploadWrapper {...getRootProps()}>
                <StyledFileUploadText>
                  ჩააგდე ან ატვირთე ლეპტოპის ფოტო
                </StyledFileUploadText>
                <Button width="233px" margin="65px 0  0">
                  ატვირთე
                  <input
                    {...getInputProps()}
                    name={name}
                    onBlur={field.onBlur}
                  />
                </Button>
              </StyledFileUploadWrapper>
            )}
          </Dropzone>
        </>
      )}
    />
  );
};

export default FileInput;

{
  /* <div {...getRootProps}>
                <h4>chaagde file aq </h4>
                <input
                  type="file"
                  {...getInputProps}
                  name={name}
                  onBlur={onBlur}
                />
                <p>aq iqneba</p>
              </div> */
}
