import {useState} from 'react';
import Alert from '../Alert/Alert';
import {AlertColor} from '../../types';

const ShowAlert = () => {

  const [showAlert, setShowAlert] = useState(true);

  const closeAlert = () => {
    setShowAlert(false)
  }

  return (
    <div>
      <div className="container mt-5">
        {showAlert && (
          <Alert color={AlertColor.primary} onDismiss={closeAlert}>
            This is a warning type alert
          </Alert>
        )}
        <Alert color={AlertColor.success}>This is a success type alert</Alert>
      </div>
    </div>
  );
};

export default ShowAlert;

// only commited but didnt commited and push. My bad.