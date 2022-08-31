// I pass the id from the MaterialCard, so when we submit, we could determine on which card modal was open.
// Input changes are written to MaterialCard's state, where it's being composited, using id and textarea text.
// into an actual update and send via designated update method

export const EditMaterialModal = ({
  toggleModal,
  onChangeMaterial,
  onSubmitUpdate,
  inputValue,
  id,
}) => {
  return (
    <div>
      <form onSubmit={onSubmitUpdate} id={id}>
        <textarea
          name="update"
          onChange={onChangeMaterial}
          value={inputValue}></textarea>
        <button type="submit" disabled={!inputValue}>
          Send
        </button>
        <button type="button" onClick={toggleModal}>
          Cancel
        </button>
      </form>
    </div>
  );
};
