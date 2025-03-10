import { useEffect } from "react";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  //using timer to auto confirm delete after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, 3000);

    //clearing the timer during componnent dismount
    return () => {
      clearTimeout(timer);
    };
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
    </div>
  );
}
