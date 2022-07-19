import { Place } from '.';

interface PlanDetailModel extends Place {
    _id: string;
    userId: string;
    id: string;
    name: string;
    latitude: string;
    longitude: string;
    address: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface PlanModel {
    _id: string;
    userId: string;
    area: string;
    title: string;
    imgUrl: string;
    startDate: string;
    lastDate: string;
    planDetails: PlanDetailModel[][];
    createdAt: string;
    updatedAt: string;
    __v: number;
}
