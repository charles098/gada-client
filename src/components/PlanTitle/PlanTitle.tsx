import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { PencilIcon } from 'components/icons';
import { RootState } from 'store/modules';
import { useDispatch, useSelector } from 'react-redux';
import { setTitle } from 'store/modules/plan';

const planTitleSelector = (state: RootState) => state.plan.title;

const PlanTitle: FC = () => {
    const dispatch = useDispatch();
    const title = useSelector(planTitleSelector);
    const container = useRef<HTMLDivElement>(null);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    useEffect(() => {
        document.addEventListener('mousedown', (e) => onClickOutside(e));
    }, []);

    const onClickOutside = useCallback(
        (e: React.MouseEvent | MouseEvent): void => {
            if (!container.current?.contains(e.target as Node)) {
                setIsEdit(false);
            }
        },
        [],
    );

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.target.value;
        dispatch(setTitle({ newTitle }));
    }, []);

    const onClick = useCallback(() => {
        setIsEdit(true);
    }, []);

    return (
        <Container ref={container as React.RefObject<HTMLDivElement>}>
            {isEdit ? (
                <Input
                    type="text"
                    minLength={1}
                    maxLength={15}
                    value={title}
                    onChange={onChange}
                />
            ) : (
                <Title>{title}</Title>
            )}
            <EditButton type="button" onClick={onClick}>
                <PencilIcon width="14px" height="12px" />
            </EditButton>
        </Container>
    );
};

const Container = styled.div`
    margin-left: 15px;
    display: flex;
`;

const Title = styled.div`
    font-size: 28px;
`;

const Input = styled.input`
    font-size: 28px;
    margin-right: 5px;
`;

const EditButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
    margin-bottom: 10px;
`;

export default PlanTitle;
