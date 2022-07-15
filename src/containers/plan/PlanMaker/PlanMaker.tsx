import React, {
    FC,
    useCallback,
    useEffect,
    useState,
    Dispatch,
    SetStateAction,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from 'store/modules';
import DayPicker from 'components/DayPicker';
import ShowDistance from 'components/ShowDistance';
import SetupRoute from 'components/SetupRoute';
import { IPlace } from 'store/modules/plan';

interface IProps {
    setIsAllPlan: Dispatch<SetStateAction<boolean>>;
    planList: IPlace[][];
    setPlanList: Dispatch<SetStateAction<IPlace[][]>>;
}

interface ISortablePlace extends IPlace {
    s_id: number;
    chosen: boolean;
}

const startDateSelector = (state: RootState) => state.plan.startDate;
const lastDateSelector = (state: RootState) => state.plan.lastDate;
const setDaySelector = (state: RootState) => state.plan.setDay;

const PlanMaker: FC<IProps> = ({ setIsAllPlan, planList, setPlanList }) => {
    const startDate = useSelector(startDateSelector);
    const lastDate = useSelector(lastDateSelector);
    const setDay = useSelector(setDaySelector);
    const [planPeriod, setPlanPeriod] = useState<number | null>(null);
    const [planListOfSetDay, setPlanListOfSetDay] = useState<ISortablePlace[]>(
        [],
    );

    useEffect(() => {
        setPlanPeriod(getPeriod(startDate, lastDate));
    }, [startDate, lastDate]);

    useEffect(() => {
        const sortableList: ISortablePlace[] = getSortableList([
            ...planList[setDay],
        ]);
        setPlanListOfSetDay(sortableList);
    }, [setDay, planList]);

    const getPeriod = (startDay: Date, lastDay: Date): number => {
        const diffDate = startDay.getTime() - lastDay.getTime();
        return Math.abs(diffDate / (1000 * 60 * 60 * 24));
    };

    const getSortableList = useCallback((list: IPlace[]): ISortablePlace[] => {
        return list.map((x, i) => ({
            ...x,
            s_id: i,
            chosen: true,
        }));
    }, []);

    return (
        <Container>
            <DayPicker
                setIsAllPlan={setIsAllPlan}
                planPeriod={planPeriod as number}
            />
            <RouteContainer>
                <ShowDistance />
                <SetupRoute
                    planListOfSetDay={planListOfSetDay}
                    setPlanListOfSetDay={setPlanListOfSetDay}
                />
            </RouteContainer>
        </Container>
    );
};

const Container = styled.div`
    width: 635px;
    height: 620px;
    margin: 0 30px 30px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const RouteContainer = styled.div`
    width: 100%;
    height: 560px;
    display: flex;
`;

export default PlanMaker;
