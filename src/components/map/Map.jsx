import './css/map.css'
import { useRef, useEffect, useCallback } from "react";
import { Link } from 'react-router-dom';

const Map = () => {
  const mapEl = useRef();

  const initMap = useCallback(() => {
    const companyLocation = { lat: 37.5511247, lng: 126.9729133 };
    const map = new window.google.maps.Map(mapEl.current, {
      center: companyLocation,
      zoom: 17,
    });
    const marker = new window.google.maps.Marker({
      position: companyLocation,
      map: map,
    });
  }, [mapEl]);

  useEffect(() => {
    initMap();
  }, [initMap]);  

  return (
    <div
      className="Map"
    >
      <div>
        <span>마감일</span>
        <span>상시</span>
      </div>
      <div>
        <span>근무지역</span>
        <span>서울 용산구 한강대로 366 트윈시티 남산 2 패스트파이브</span>
      </div>
      <Link to="#none"
        className='Map-map_link'
      >
        <div
          ref={mapEl}
          style={{ width: '100%', height: '250px' }}
        >
        </div>
      </Link>
    </div>
  )
}

export default Map