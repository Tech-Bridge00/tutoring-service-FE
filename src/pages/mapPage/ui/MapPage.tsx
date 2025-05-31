import { useState } from 'react';
import { useKakaoLoader, Map, MapMarker } from 'react-kakao-maps-sdk';

export default function MapPage() {
  const kakaoKey = import.meta.env.VITE_KAKAO_MAPS_API_KEY;
  const [loading] = useKakaoLoader({
    appkey: kakaoKey,
  });
  const [query, setQuery] = useState('');

  if (loading) return <div>Loading...</div>;

  return (
    <div className="relative page-wrapper z-0">
      {/* 지도 */}
      <Map
        className="w-full h-full"
        center={{ lat: 33.5563, lng: 126.79581 }}
        level={3}
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div style={{ color: '#000' }}>Hello World!</div>
        </MapMarker>
      </Map>

      {/* 검색창 */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[360px] bg-white shadow px-4 py-2 rounded-full flex items-center gap-2 z-10">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9ZM15.0006 15.7077C13.4083 17.1332 11.3054 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 11.3054 17.1332 13.4083 15.7077 15.0006L24.3536 23.6465L23.6465 24.3536L15.0006 15.7077Z"
            fill="#CBCBCB"
          />
        </svg>

        <input
          type="text"
          className="flex-1 outline-none bg-transparent"
          aria-label="검색"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="text-gray-400 text-lg px-1"
            aria-label="검색창 지우기"
          >
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.0964 9.99998L0.646484 19.4499L1.19661 20L10.6465 10.5501L20.0964 20L20.6465 19.4499L11.1966 9.99998L20.6465 0.550125L20.0963 0L10.6465 9.44986L1.19664 0L0.646519 0.550125L10.0964 9.99998Z"
                fill="#CBCBCB"
              />
            </svg>
          </button>
        )}
      </div>

      {/* 오른쪽 중앙 버튼 그룹 */}
      <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10 flex flex-col justify-between items-center h-[150px] w-[50px] bg-white divide-y divide-gray-200">
        {/* 현재 위치 */}
        <div className="h-[50px] w-[50px]">
          <button
            className="w-full h-full flex items-center justify-center bg-white  p-2"
            type="button"
            aria-label="현재 위치로 이동"
            onClick={() =>
              alert('현재 위치로 이동 기능은 구현되지 않았습니다.')
            }
          >
            <svg
              width="26"
              height="25"
              viewBox="0 0 26 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="13" cy="12" r="7.5" fill="white" stroke="black" />
              <circle
                cx="13.0508"
                cy="11.9485"
                r="4.3"
                transform="rotate(-0.610454 13.0508 11.9485)"
                fill="white"
                stroke="black"
              />
              <path d="M13 0V5" stroke="black" />
              <path d="M13 19.5V24.5" stroke="black" />
              <path d="M26 12L21 12" stroke="black" />
              <path d="M5 12L0 12" stroke="black" />
            </svg>
          </button>
        </div>
        {/* 확대 */}
        <div className="h-[50px] w-[50px]">
          <button
            className="w-full h-full flex items-center justify-center bg-white p-2"
            type="button"
            aria-label="지도 확대"
            onClick={() => alert('지도 확대 기능은 구현되지 않았습니다.')}
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.712 9.164H9.116V16.688H7.748V9.164H0.368V7.976H7.748V0.919999H9.116V7.976H16.712V9.164Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        {/* 축소 */}
        <div className="h-[50px] w-[50px]">
          <button
            className="w-full h-full flex items-center justify-center bg-white p-2"
            type="button"
            aria-label="지도 축소"
            onClick={() => alert('지도 축소 기능은 구현되지 않았습니다.')}
          >
            <svg
              width="10"
              height="2"
              viewBox="0 0 10 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.8 1.992V0.911999H9.872V1.992H0.8Z" fill="black" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
