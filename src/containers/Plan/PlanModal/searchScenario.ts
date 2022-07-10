import { placeInfo } from './types';

const searchImageByKakaoAPI = async (
    keyword: string,
): Promise<string | undefined> => {
    try {
        const res = await fetch(
            `https://dapi.kakao.com/v2/search/image?query=${keyword}&size=1&sort=accuracy`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'KakaoAK 893bfbac1c7f570ab519588089eea08c',
                },
            },
        );

        const data = await res.json();
        // console.log(keyword, data);
        return data.documents[0]?.thumbnail_url;
    } catch (e) {
        return '';
    }
};

const searchByKeyword = async (
    keyword: string | undefined,
): Promise<placeInfo[]> => {
    return new Promise((resolve, reject) => {
        const ps = new kakao.maps.services.Places();
        ps.keywordSearch(`${keyword}`, async (data, status) => {
            if (status === kakao.maps.services.Status.OK) {
                const list: any = data.map(
                    async (place): Promise<placeInfo> => {
                        const placeImgUrl = await searchImageByKakaoAPI(
                            `${place.place_name}&${place.address_name} 건물사진&장소사진`,
                        );
                        return {
                            place_name: place.place_name,
                            place_img_url: placeImgUrl,
                            place_url: place.place_url,
                            address: place.address_name,
                            road_address: place?.road_address_name,
                            lat: place.x,
                            lng: place.y,
                        };
                    },
                );
                resolve(await Promise.all(list));
            } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
                reject(new Error('검색 결과가 존재하지 않습니다.'));
            } else if (status === kakao.maps.services.Status.ERROR) {
                reject(new Error('검색 결과 중 오류가 발생했습니다.'));
            }
        });
    });
};

export { searchByKeyword };
