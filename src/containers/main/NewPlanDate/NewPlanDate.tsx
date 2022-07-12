import React, { FC, useState, useCallback } from 'react';
import styled from 'styled-components';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns'
import ko from 'date-fns/locale/ko';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const NewPlanDate: FC = () => {
    const [Calendar, setCalendar] = useState<any>([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 1),
            key: "selection",
        },
    ])

    const getDateInput = useCallback((calendar: any) => {
        const start = calendar.startDate.toLocaleDateString();
        const end = calendar.endDate.toLocaleDateString();
        return `${start} ~ ${end}`
    }, [Calendar])

    const handleChange = (item: any) => {
      setCalendar(() => {
        return [item.selection]
      })
    }

    return (
        <>
            <DateWrapper>
                <DateLabel
                    htmlFor="title"
                >
                    날짜
                </DateLabel>
                <DateInput
                    type='text'
                    name="date"
                    value={getDateInput(Calendar[0])}
                    disabled
                />
            </DateWrapper>

            <DateRangeWrapper
                locale={ko}
                onChange={handleChange}
                moveRangeOnFirstSelection={false}
                ranges={Calendar}
                dateDisplayFormat='yyyy.MM.dd'
            />
        </>
    )
}

export default NewPlanDate;

const DateWrapper = styled.div``

const DateLabel = styled.label`
  display: block;
  color: #60A5F8;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
`
const DateInput = styled.input`
  width: 270px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  background-color: #dddddd;
  cursor: not-allowed;

  &:focus {outline:none;}
`

const DateRangeWrapper = styled(DateRange)`
  background-color: white;

  .rdrMonth {
    width: 320px;
    height: 250px;
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