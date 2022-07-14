import Modal from 'components/Modal';
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { RootState } from 'store/modules';
import { useDispatch, useSelector } from 'react-redux';
import { changeOpenState, changeModalName } from 'store/modules/modal';
import jeju from 'images/jeju.jpg';
import { PencilIcon, ClockIcon, WonIcon } from 'components/icons';
import { theme } from 'styles/theme';
import SubmitButton from 'components/StyledSmitButton';

const ModalSelector = (state: RootState) => state.modal

const PlanDetailModal: FC = ({ placeData }: any) => {
    const dispatch = useDispatch();
    const { modalIsOpen } = useSelector(ModalSelector);
    const [details, setDetails] = useState({
        memo: '',
        time: '',
        cost: '',
    });
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const name: string = e.target?.name;
        const value: any = e.target?.value;
        if (!name) return;
        setDetails((detail) => ({ ...detail, [name]: value }));
    };

    // click 이벤트 핸들러 - 모달 삭제 함수
    const removeHandler = (e: React.MouseEvent) => {
        e.preventDefault();

        dispatch(changeModalName("PlanModal"));
        dispatch(changeOpenState(!modalIsOpen));
    };

    return (
        <ModalContainer>
            <DialogBox width={650} height={750}>
                <PlaceDetailThumbnail src={jeju} />
                <PlaceDetailContents>
                    <PlaceDetailTitle>
                        <p className="title">제주도</p>
                        <p className="subtitle">제주도 맨도롱또돗</p>
                    </PlaceDetailTitle>
                    <PlaceDetailMemo>
                        <p className="head">
                            <PencilIcon
                                color={theme.PRIMARY}
                                width={20}
                                height={20}
                            />
                            <p>메모하기</p>
                        </p>
                        <textarea
                            name="memo"
                            value={details.memo}
                            onChange={handleChange}
                        />
                    </PlaceDetailMemo>
                    <PlaceDetailTime>
                        <p className="head">
                            <ClockIcon
                                color={theme.PRIMARY}
                                width={20}
                                height={20}
                            />
                            <p>시간</p>
                        </p>
                        <input
                            type="text"
                            value={details.time}
                            onChange={handleChange}
                        />
                    </PlaceDetailTime>
                    <PlaceDetailCost>
                        <p className="head">
                            <WonIcon
                                color={theme.PRIMARY}
                                width={20}
                                height={20}
                            />
                            <p>바용</p>
                        </p>
                        <input
                            type="textarea"
                            value={details.cost}
                            onChange={handleChange}
                        />
                    </PlaceDetailCost>
                </PlaceDetailContents>
                <SubmitButton width={300} height={56}>
                    메모하기
                </SubmitButton>
            </DialogBox>
            <Backdrop onClick={removeHandler} />
        </ModalContainer>
    );
};
const PlaceDetailCost = styled.div`
    margin-bottom: 60px;
`;
const PlaceDetailTime = styled.div``;
const PlaceDetailContents = styled.div`
    width: calc(100% - 30px);
    .head {
        margin: 10px 0 5px 0;
        > p {
            font-family: 'Noto Sans KR';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 29px;
            color: ${({ theme }) => theme.PRIMARY};
            display: inline;
            margin: 0 10px;
        }
    }
`;

const PlaceDetailThumbnail = styled.img`
    width: 100%;
    height: 210px;
    border-radius: 10px 10px 0 0;
    object-fit: cover;
`;
const PlaceDetailTitle = styled.div`
    height: 72px;
    display: flex;

    .title {
        margin: auto 10px;
        font-weight: 900;
        font-size: 25px;
        line-height: 30px;
    }
    .subtitle {
        margin: auto 0;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #969696;
    }
    border-bottom: 1px solid #ababab;
`;

const PlaceDetailMemo = styled.div`
    margin-top: 30px;
    textarea {
        width: 100%;
        height: 110px;
        border-radius: 5px;
        border: 0px;
        padding 10px;
        resize: none;
        box-sizing: border-box;
        box-shadow:inset 0 0 5px #333;
        outline: none;
    }
`;

const ModalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 100;
`;

const DialogBox = styled.dialog<{ width: number; height: number }>`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0px;
    border-radius: 3px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-sizing: border-box;
    background-color: white;
    padding: 0px;
    z-index: 102;
`;

const Backdrop = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 101;
    background-color: rgba(0, 0, 0, 0.2);
`;

// const Cancel = styled(CancelIcon)`
//     position: absolute;
//     right: 30px;
//     top: 30px;
//     cursor: pointer;
// `;

export default PlanDetailModal;
