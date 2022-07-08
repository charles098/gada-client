import React, { useState, useCallback } from "react";
import { PlusIcon } from 'components/icons'
import styled from 'styled-components';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns'
import ko from 'date-fns/locale/ko';	   
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Home = () => {
  
  const [Calendar, setCalendar] = useState<any>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ])
  
  const [imageSrc, setImageSrc] = useState<any>('');
  const [title, setTitle] = useState<string>('');

  const encodeFileToBase64 = (fileBlob: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => setImageSrc(reader.result);
      resolve(true);
    })
  }

  const getDateInput = useCallback((calendar: any) => {
    const start = calendar.startDate.toLocaleDateString();
    const end = calendar.endDate.toLocaleDateString();
    return `${start}-${end}`
  }, [Calendar])

  return (
    <Form>
      <NewPlanImage src={imageSrc}>
        <AddImageButton
        type='file'
        accept="image/jpg, image/png, image/jpeg"
        onChange={(e: any) => encodeFileToBase64(e.target.files[0])}
        />
        { !imageSrc && <PlusIcon style={plusStyle}/>}
      </NewPlanImage>
      
      <TitleWrapper>
        <TitleLabel
        htmlFor="title"
        >
          여행이름
        </TitleLabel>
        <TitleInput
        type='text'
        value={title}
        onChange={(e: any) => setTitle(e.target.value)}
        />
      </TitleWrapper>
      
      <DateWrapper>
        <DateLabel
        htmlFor="title"
        >
          날짜
        </DateLabel>
        <DateInput
        type='text'
        value={getDateInput(Calendar[0])}
        disabled
        />
      </DateWrapper>

      <DateRangeWrapper
        locale={ko}
        onChange={item => {
          setCalendar(() => {
            return [item.selection]
          })
        }}
        moveRangeOnFirstSelection={false}
        ranges={Calendar}
        dateDisplayFormat='yyyy.MM.dd'
      />

      <SubmitButton
      type='submit'
      value='등록 완료'
      />
    </Form>
  )
}

export default Home;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center
`
const plusStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
} as React.CSSProperties;

const NewPlanImage = styled.div<{ src : string }>`
  width: 151px;
  height: 151px;
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
  width: 151px;
  height: 151px;
  border-radius: 50%;
  opacity: 0;
  cursor: pointer;
`
const TitleWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;
`

const TitleLabel = styled.label`
  display: block;
  color: #60A5F8;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
`
const TitleInput = styled.input`
  width: 310px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  background-color: #dddddd;

  &:focus {outline:none;}
`

const DateWrapper = styled.div``

const DateLabel = styled.label`
  display: block;
  color: #60A5F8;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
`
const DateInput = styled.input`
  width: 310px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  background-color: #dddddd;

  &:focus {outline:none;}
`

const DateRangeWrapper = styled(DateRange)`
  background-color: white;

  .rdrMonth {
    width: 370px;
  }

  .rdrMonthAndYearWrapper {
    padding: 0 10px;
  }
  .rdrMonthsVertical {
    margin-left: auto;
    margin-right: auto;
  }

  .rdrDateDisplayWrapper {
    display: none;
  }
`

const SubmitButton = styled.input`
  background-color: #60A5F8;
  border: none;
  padding: 10px 150px;
  font-size: 18px;
  color: white;
  font-weight: bold;
`