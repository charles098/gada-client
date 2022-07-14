import React, {
    FC,
    useEffect,
    useRef,
    useCallback,
    useState,
    Dispatch,
    SetStateAction,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ReactSortable } from 'react-sortablejs';
import PlaceBox from 'components/PlaceBox';
import { RootState } from 'store/modules';
import {
    IPlace,
    grabPlan,
    grabPlaceOption,
    dropPlaceOption,
} from 'store/modules/plan';

interface ISortablePlace extends IPlace {
    s_id: number;
    chosen: boolean;
}

interface IProps {
    planListOfSetDay: ISortablePlace[];
    setPlanListOfSetDay: Dispatch<SetStateAction<ISortablePlace[]>>;
}

const grabPlaceOptionIdSelector = (state: RootState) =>
    state.plan.grabPlaceOptionId;

const SetupRoute: FC<IProps> = ({ planListOfSetDay, setPlanListOfSetDay }) => {
    const dispatch = useDispatch();
    const grabPlaceOptionId = useSelector(grabPlaceOptionIdSelector);
    const [isDrop, setIsDrop] = useState(false);
    const droppedRef = useRef<HTMLElement | null>(null);
    const enterCnt = useRef(0);

    useEffect(() => {
        if (isDrop) {
            setIsDrop(false);
            const node = droppedRef.current;
            node?.classList.add('focus');
            node?.scrollIntoView();
            setTimeout(() => {
                node?.classList.remove('focus');
            }, 500);
        }
    }, [planListOfSetDay]);

    const onDragStartPlace = useCallback(
        (e: React.DragEvent<HTMLElement>): void => {
            enterCnt.current = 0;
            dispatch(grabPlaceOption({ id: null }));
            const id = parseInt(e.currentTarget.dataset.id as string, 10);
            dispatch(grabPlan({ id }));
        },
        [],
    );

    const onDragEnterConainer = useCallback(
        (e: React.DragEvent<HTMLElement>) => {
            if (!grabPlaceOptionId) return;
            enterCnt.current += 1;
            e.currentTarget.classList.add('drag-over');
        },
        [grabPlaceOptionId],
    );

    const onDragLeaveConainer = useCallback(
        (e: React.DragEvent<HTMLElement>) => {
            if (!grabPlaceOptionId) return;
            enterCnt.current -= 1;
            if (enterCnt.current === 0) {
                e.currentTarget.classList.remove('drag-over');
            }
        },
        [grabPlaceOptionId],
    );

    const onDropContainer = useCallback(
        (e: React.DragEvent<HTMLElement>) => {
            if (!grabPlaceOptionId) return;
            e.currentTarget.classList.remove('drag-over');
            dispatch(dropPlaceOption());
            setIsDrop(true);
        },
        [grabPlaceOptionId],
    );

    return (
        <Container
            onDragEnter={onDragEnterConainer}
            onDragLeave={onDragLeaveConainer}
            onDrop={onDropContainer}
            onDragOver={(e) => e.preventDefault()}
        >
            <ReactSortable
                animation={150}
                list={planListOfSetDay}
                setList={setPlanListOfSetDay}
            >
                {planListOfSetDay.map((plan: ISortablePlace, index: number) => {
                    return (
                        <PlaceBox
                            focusRef={
                                index === planListOfSetDay.length - 1
                                    ? (droppedRef as React.RefObject<HTMLDivElement>)
                                    : null
                            }
                            key={plan.s_id}
                            dataId={plan.id}
                            onDragStartPlace={onDragStartPlace}
                            placename={plan.name}
                            location={plan.address}
                        />
                    );
                })}
            </ReactSortable>
        </Container>
    );
};

const Container = styled.div`
    width: 450px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
    overflow: scroll;

    &.drag-over {
        border: solid 2px ${({ theme }) => theme.PRIMARY};
        border-radius: 20px;
        background-color: ${({ theme }) => theme.PRIMARY_LIGHT};
    }
`;

export default SetupRoute;
