import { pickByKeyword, searchByKeyword } from './searchScenario';
import { PlaceInputTypes, Position } from './PlanModal.types';

const SEARCH_PLACE = true;
const PICK_PLACE = false;

const submitPlaceForm =
    (
        contents: boolean,
        placeFormInput: any,
        bySearchCallback: any,
        byPickCallback: any,
    ) =>
    async (e: any) => {
        e.preventDefault();

        if (contents === SEARCH_PLACE && placeFormInput.bySearch) {
            try {
                bySearchCallback(
                    await searchByKeyword(placeFormInput.bySearch),
                );
            } catch (e: any | Error) {
                alert(e?.message);
            }
        } else if (contents === PICK_PLACE && placeFormInput.byPick) {
            try {
                const result: Position = await pickByKeyword(
                    placeFormInput.byPick,
                );
                console.log(result);
                byPickCallback(result);
            } catch (e: any | Error) {
                alert(e?.message);
            }
        }
    };
const onChangePlaceInput = (state: boolean, setInput: any) => (e: any) => {
    const { value } = e.target;
    setInput((inputs: PlaceInputTypes) => {
        const $temp = { ...inputs };
        if (state) $temp.bySearch = value;
        else $temp.byPick = value;
        return $temp;
    });
};
export { submitPlaceForm, onChangePlaceInput };
