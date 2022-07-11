import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { PlusIcon } from 'components/icons'

const NewPlanImage: FC = () => {
    const [imageSrc, setImageSrc] = useState<any>('');

    const encodeFileToBase64 = (fileBlob: any) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
          reader.onload = () => setImageSrc(reader.result);
          resolve(true);
        })
      }
    
    const handleChange = (e: any) => {
      if (e.target.files.length > 0)
        encodeFileToBase64(e.target.files[0])
    }

    return (
        <Wrapper src={imageSrc}>
            <AddImageButton
                type='file'
                accept="image/jpg, image/png, image/jpeg"
                name="image"
                onChange={handleChange}
            />
            {!imageSrc && <PlusIcon style={plusStyle} />}
        </Wrapper>
    )
}

export default NewPlanImage;

const Wrapper = styled.div<{ src : string }>`
  width: 120px;
  height: 120px;
  margin-top: 10px;
  border-radius: 50%;
  position: relative;
  background-color: #ECF3FD;
  background-image: url('${({src}) => src}');
  background-repeat : no-repeat;
  background-size : cover;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
`
const AddImageButton = styled.input`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  opacity: 0;
  cursor: pointer;
`

const plusStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  } as React.CSSProperties;