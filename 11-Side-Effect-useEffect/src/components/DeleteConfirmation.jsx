import { useEffect } from "react";
import ProgressBar from "./ProgressBar.jsx";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Timer is set");
      onConfirm();
    }, 3000);

    return () => {
      console.log("Timer is cleared");
      clearTimeout(timer);
    };

    // Putting function as dependecies can be tricky as it might cause an infinite loop
    // Hence conditional rendering can be set in Modal.jsx should that this component will be gone, not causing an infitie loop
    // or use useCallback hook
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER} />
    </div>
  );
}
