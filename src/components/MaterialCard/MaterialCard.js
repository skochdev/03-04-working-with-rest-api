import { EditMaterialModal } from '../EditMaterialModal/EditMaterialModal';
import { Component } from 'react';

// update field comes from the modal. id is taken from e.target.id that is passed back from the modal,
// so I don't need to store it in state.
export class MaterialCard extends Component {
  state = {
    isModalActive: false,
    update: '',
  };

  toggleModal = () => {
    this.setState(state => ({
      isModalActive: !state.isModalActive,
    }));
  };

  // text from modal is written to state here
  handleUpdateMaterial = e => {
    const update = e.target.value;
    this.setState({ update });
  };

  // here I gather id and update text and send it to the App via onUpdateMaterial()
  handleSubmitUpdate = e => {
    e.preventDefault();
    const update = {
      id: e.target.id,
      title: this.state.update,
    };
    this.props.onUpdateMaterial(update);
    this.resetInputField();
  };

  // Utility helpers ->
  resetInputField = () => {
    this.setState({ update: '' });
  };

  render() {
    const { toggleModal, handleUpdateMaterial, handleSubmitUpdate } = this;
    const { isModalActive, update } = this.state;
    const { id, title, link, onRemoveMaterial } = this.props;

    return (
      <div>
        <p>Title: {title}</p>
        <p>
          Link: <a href={link}>Link</a>
        </p>
        <button type="button" onClick={() => onRemoveMaterial(id)}>
          Remove material
        </button>
        <button type="button" onClick={toggleModal}>
          Update material
        </button>
        {isModalActive && (
          <EditMaterialModal
            onChangeMaterial={handleUpdateMaterial}
            toggleModal={toggleModal}
            onSubmitUpdate={handleSubmitUpdate}
            inputValue={update}
            id={id}
          />
        )}
      </div>
    );
  }
}
