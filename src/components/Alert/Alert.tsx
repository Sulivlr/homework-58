import React from 'react';
import {AlertColor} from '../../types';

interface Props extends React.PropsWithChildren {
  color: AlertColor;
  onDismiss?: () => void;
}

const Alert: React.FC<Props> = ({color, onDismiss, children}) => {

  const getAlert = (color: AlertColor) => {
    switch (color) {
      case AlertColor.primary:
        return 'alert-primary';
      case AlertColor.success:
        return 'alert-success';
      case AlertColor.danger:
        return 'alert-danger';
      case AlertColor.warning:
        return 'alert-warning';
      default:
        return 'alert-primary'
    }
  };

  return (
    <div className={`alert ${getAlert(color)} d-flex justify-content-between`} role="alert">
      <div>
        {children}
      </div>
      {onDismiss && (
        <button type="button" className="btn-close" aria-label="Close" onClick={onDismiss}></button>
      )}
    </div>
  );
};

export default Alert;