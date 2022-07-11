import React from 'react';

// const PlanModalContents = () => {
//     return (
//         <PlaceContents>
//             {contents ? (
//                 <>
//                     <header> 검색결과</header>
//                     <div className="contents">
//                         {placeList.map((data: PlaceInfo) => (
//                             <PlaceItem
//                                 imgUrl={data.imgUrl}
//                                 name={data.name}
//                                 address={data.address}
//                                 onClick={() => {
//                                     setUserSelectedPlaces((places) =>
//                                         places ? [...places, data] : [data],
//                                     );
//                                 }}
//                             />
//                         ))}
//                     </div>
//                 </>
//             ) : (
//                 <Map
//                     center={moving ?? mapCenter}
//                     isPanto={moving !== undefined}
//                     style={{
//                         // 지도의 크기
//                         width: '100%',
//                         height: '470px',
//                     }}
//                     level={3}
//                     zoomable={false}
//                     onClick={(_t, mouseEvent) =>
//                         setPosition({
//                             lat: mouseEvent.latLng.getLat(),
//                             lng: mouseEvent.latLng.getLng(),
//                         })
//                     }
//                 >
//                     {position && (
//                         <PickMapPlace
//                             position={position}
//                             callback={(customPlace: PlaceInfo) => {
//                                 setUserSelectedPlaces((places) =>
//                                     places
//                                         ? [...places, customPlace]
//                                         : [customPlace],
//                                 );
//                             }}
//                         />
//                     )}
//                 </Map>
//             )}
//         </PlaceContents>
//     );
// };
// export default PlanModalContents;
