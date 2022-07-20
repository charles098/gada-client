export const getDday = (startDate: string) => {
    const start = Date.parse(startDate);
    const now = Date.now();
    const diffTime = Math.abs(now - start);
    const dDay = Math.ceil(diffTime / ( 1000 * 60 * 60 * 24));
    let returnVal;
    
    if (dDay === 0) returnVal = 'D-day'
    else if (dDay > 0) returnVal = `D-${dDay}`
    else returnVal = `D+${dDay}`

    return returnVal;
}

export const getTerm = (startDate: string, lastDate: string) => {
    return `${date2Kor(startDate)} ~ ${date2Kor(lastDate)}`
}

const date2Kor = (_date: string) => {
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const parseDate = new Date(_date);
    const month = parseDate.getMonth() + 1;
    const date = parseDate.getDate();
    const day = week[parseDate.getDay()];

    return `${month}.${date}(${day})`;
}