import React, { useEffect } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import { RootState } from 'store/modules';

const selectOptions = [
    "전국",
    "강원",
    "제주",
    "부산",
    "서울",
    "경기",
    "인천",
    "울산",
    "대전",
    "광주",
    "충북",
    "충남",
    "경북",
    "경남"
];

const customStyles = {
    control: (styles: any) => ({
        ...styles,
        color: "#444",
        backgroundColor: "#ECF3FD",
        borderRadius: "5px",
        "&:hover": { borderColor: "gray" },
        border: "none",
        boxShadow: "none",
        height: "30px",
        fontSize: "15px",
        cursor: "pointer",
        paddingLeft: "10px"
    }),
    option: (base: any, { isFocused }: any) => ({
        ...base,
        cursor: "pointer",
        backgroundColor: isFocused ? "#ECF3FD" : "",
        color: isFocused ? "#444" : "",
        ":hover": {
            backgroundColor: "#ECF3FD"
        }
    }),
    menuList: (base: any) => ({
        ...base,
        "::-webkit-scrollbar": {
            width: "6px",
            height: "0px"
        },
        "::-webkit-scrollbar-thumb": {
            background: "#aaa",
            borderRadius: "10px"
        },
        "::-webkit-scrollbar-thumb:hover": {
            background: "#ccc"
        }
    }),
    singleValue: (base: any) => ({
        ...base
    })
};

const LoactionSelector = (state: RootState) => state.location;

const NewPlanlocation = ( { setLocation }: any ) => {
    const options = selectOptions.map((x) => ({ value: x, label: x }));

    const { locationName, isClickedLocation } = useSelector(LoactionSelector);

    useEffect(() => {
        if (isClickedLocation) {
            setLocation(locationName);
        }
    }, [])
    
    const defaultValue = {
        label: locationName,
        value: locationName,
    }

    const handleChange = (value: any) => {
        setLocation(value.value);
    }
    return (
        <LocationWrapper>
            <LocationLabel
                htmlFor="location"
            >
                여행지역
            </LocationLabel>
            <InputWrapper>
                <Select
                    options={options}
                    styles={customStyles}
                    placeholder="지역을 선택해주세요."
                    onChange={handleChange} 
                    defaultValue={isClickedLocation ? defaultValue : ''}
                    />
            </InputWrapper>
        </LocationWrapper>
    )
}

export default NewPlanlocation;

const LocationWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LocationLabel = styled.label`
  display: inline-block;
  color: #60A5F8;
  font-weight: bold;
  font-size: 17px;
  margin-right: 28px;
`

const InputWrapper = styled.div`
    width: 220px;
`