import {
    changePosition2DistanceArray,
    changePosition2DistanceCenter,
    getPosition2bound,
} from 'utils/mapPointHelper';
import { getPeriod } from 'utils/planUtils';
import { Place } from '.';
import { PlanState, setPointRelatedOptions } from './plan';
import { PlanDetailModel, PlanModel } from './plan.model';

export const changePlanModel2PlanState = (
    state: PlanState,
    data: PlanModel,
) => {
    state.title = data.title;
    // eslint-disable-next-line no-underscore-dangle
    state._id = data._id;
    state.startDate = new Date(data.startDate);
    state.lastDate = new Date(data.lastDate);
    state.period = getPeriod(new Date(data.startDate), new Date(data.lastDate));
    state.setDay = 0;
    state.planList = data.planDetails;
    state.shareMode = false;
    state.placeDistance = changePosition2DistanceArray(
        state.planList[state.setDay],
    );
    state.placeDistanceCenter = changePosition2DistanceCenter(
        state.planList[state.setDay],
    );
    state.mapCenterBound = getPosition2bound(state.planList[state.setDay]);
};

export const movePlaceOptionToPlanFulfilledController = (
    state: PlanState,
    action: any,
) => {
    const { data } = action.payload;
    // ㅠㅠ
    const lasted = data.planDetails[state.setDay].length - 1;
    const placeObjId = data.planDetails[state.setDay][lasted].planDetail;
    console.log('API CALL', placeObjId);
    const droppedPlaceOption = state.placeOptionList.find(
        (option) => option.id === state.grabPlaceOptionId,
    ) as Place;

    const tempDetailPlace: PlanDetailModel = {
        ...droppedPlaceOption,
        _id: placeObjId,
        userId: 'parksang',
    };
    const idx = state.placeOptionList.indexOf(droppedPlaceOption);
    state.placeOptionList.splice(idx, 1);

    console.log('CUSTOM LOG: ', state.grabPlanId, idx, tempDetailPlace);

    state.planList[state.setDay].push(tempDetailPlace);
    setPointRelatedOptions(state);
};

export const movePlanToPlaceOptionFulfilledController = (
    state: PlanState,
    action: any,
) => {
    const { data } = action.payload;
    console.log('API CALL', data);

    const droppedPlan = state.planList[state.setDay].find(
        (plan) => plan.id === state.grabPlanId,
    ) as PlanDetailModel;
    const idx = state.planList[state.setDay].indexOf(droppedPlan);
    console.log('CUSTOM LOG: ', state.grabPlanId, idx);
    state.planList[state.setDay].splice(idx, 1);
    state.placeOptionList.push(droppedPlan);
};
