import {
    changePosition2DistanceArray,
    changePosition2DistanceCenter,
    getPosition2bound,
} from 'utils/mapPointHelper';
import { getPeriod } from 'utils/planUtils';
import { Place } from '.';
import { planState } from './plan';
import { PlanDetailModel, PlanModel } from './plan.model';

export const changePlanModel2PlanState = (
    state: planState,
    data: PlanModel,
) => {
    (state.title = data.title),
        (state.startDate = new Date(data.startDate)),
        (state.lastDate = new Date(data.lastDate)),
        (state.period = getPeriod(
            new Date(data.startDate),
            new Date(data.lastDate),
        )),
        (state.setDay = 0),
        (state.planList = data.planDetails),
        (state.shareMode = false),
        (state.placeDistance = changePosition2DistanceArray(
            state.planList[state.setDay],
        ));
    state.placeDistanceCenter = changePosition2DistanceCenter(
        state.planList[state.setDay],
    );
    state.mapCenterBound = getPosition2bound(state.planList[state.setDay]);
};
