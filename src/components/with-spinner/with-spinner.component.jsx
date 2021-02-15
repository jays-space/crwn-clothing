import React from "react";

//STYLES
import "./with-spinner.styles.scss";

const WithSpinner = (WrappedCompenent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <div className='spinner-overlay'>
      <div className='spinner-container' />
    </div>
  ) : (
    <WrappedCompenent {...otherProps} />
  );
};

export default WithSpinner;
