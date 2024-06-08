import BackDrop from './components/BackDrop/BackDrop';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import Alert from './components/Alert/Alert';
import {AlertColor} from './types';

const App = () => {

  const [showAlert, setShowAlert] = useState(true);

  const closeAlert = () => {
    setShowAlert(false)
  }

  return (
    <>
      <div>
        <BackDrop />
      </div>
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

    </>
  );
};

export default App
