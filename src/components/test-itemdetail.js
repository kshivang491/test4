import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


const ItmDetail = () => {
    const [title, settitle] = useState('')
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.searchQuery) {
          settitle(location.state.searchQuery);
        }

        console.log(location.state.searchQuery)

    });

  return (
    <>
    </>
  );
};

export default ItmDetail;