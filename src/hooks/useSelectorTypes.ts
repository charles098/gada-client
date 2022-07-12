/**
 * Author: 서경환
 * link : https://kyounghwan01.github.io/
 * useSelector을 여러 개의 상태를 호출시 state 마다 렌더링 됨
 * 그것 완화하는 훅
 *
 * ex)
 * import useSelectorTyped from "features/useSelectorTyped";
 *
 * const Index = () => {
 *  const { title, todoList } = useSelectorTyped(state => ({
 *    title: state.education.title,
 *    todoList: state.education.todoList
 *  }));
 *};
 */
import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from 'store/modules';

export default function useSelectorTyped<T>(fn: (state: RootState) => T): T {
    return useSelector(fn, shallowEqual);
}
