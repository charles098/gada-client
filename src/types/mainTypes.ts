export interface ILikes {
    [prop: number]: string;
}

export interface ISharedData {
    area: string;
    clickedLike: boolean;
    likeCount: number;
    likes: ILikes[];
    location?: string;
    planId: string;
    shareTitle: string;
    tag: string;
    title?: string;
    username: string;
}

export interface ICheckLike {
    planId: string;
    toggle: boolean;
}

export interface ICardList {
    sharedDatas: ISharedData[] | undefined;
    setCheckLike: React.Dispatch<React.SetStateAction<ICheckLike | undefined>>;
    pagetype: string | null;
    setClickedId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export interface PreprocessedPlanModel {
    id: string;
    area: string;
    title: string;
    imgUrl: string;
    dDay: string;
    term: string;
}

export interface CardProps {
    id: string;
    dday: string;
    src: string;
    imageName: string;
    title: string;
    term: string;
}

export interface ILocation {
    [prop: string]: string;
}

export interface IPreprocessLocation {
    location: string;
    imgUrl: string;
}

export interface LocationCardProps {
    imgUrl: string;
    location: string;
}