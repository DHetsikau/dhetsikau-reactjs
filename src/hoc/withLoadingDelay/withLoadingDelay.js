import React, {useState, useEffect} from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import './withLoadingDelay.css';

const withLoadingDelay = (WrappedComponent) => {
  return (props) => {
    const [hocState, setHOCState] = useState({isLoading: false,});

    useEffect(() => {setTimeout(() => {setHOCState({ isLoading: true })}, 2000)}, []);

    return (
      hocState.isLoading ?
        <WrappedComponent {...props}/> :
        <div className={"hocSpinner"}>
          <ClipLoader
            size={70}     
            color={"#61dafb"}
            loading={!hocState.isLoading} />
        </div>
    )
  }
};

export default withLoadingDelay;
