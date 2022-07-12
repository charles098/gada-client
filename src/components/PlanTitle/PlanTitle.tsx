import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { PencilIcon, ResetIcon } from 'components/icons';
import { RootState } from 'store/modules';
import { useDispatch, useSelector } from 'react-redux';
import { setTitle } from 'store/modules/plan';

const planTitleSelector = (state: RootState) => state.plan.title;

const PlanTitle: FC = () => {
    const dispatch = useDispatch();
    const title = useSelector(planTitleSelector);
    const container = useRef<HTMLDivElement>(null);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [newTitle, setNewTitle] = useState<string>(title);

    useEffect(() => {
        document.addEventListener('mousedown', (e) => onClickOutside(e));
    }, [newTitle]);

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.target.value);
    }, []);

    const onEnterKeyUp = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.code !== 'Enter') return;

            dispatch(setTitle({ newTitle }));
            setIsEdit(false);
        },
        [newTitle],
    );

    const onStartEdit = useCallback(() => {
        setIsEdit(true);
    }, []);

    const onResetTitle = useCallback(() => {
        setNewTitle(title);
    }, [title]);

    const onClickOutside = useCallback(
        (e: React.MouseEvent | MouseEvent): void => {
            if (container.current?.contains(e.target as Node)) return;
            dispatch(setTitle({ newTitle }));
            setIsEdit(false);
        },
        [newTitle],
    );

    return (
        <Container ref={container as React.RefObject<HTMLDivElement>}>
            {isEdit ? (
                <Input
                    type="text"
                    minLength={1}
                    maxLength={15}
                    value={newTitle}
                    onChange={onChange}
                    onKeyUp={onEnterKeyUp}
                />
            ) : (
                <Title>{title}</Title>
            )}
            <EditButton type="button">
                {isEdit ? (
                    <ResetIcon
                        width="15px"
                        height="15px"
                        onClick={onResetTitle}
                    />
                ) : (
                    <PencilIcon
                        width="14px"
                        height="12px"
                        onClick={onStartEdit}
                    />
                )}
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
