import React from "react";
import Modal from "../Component/Modal/ModalShow.js";

function DragDropFile() {
  // votre fonction DragDropFile
}

class Photos extends React.Component {
  state = {
    show: false
  };

  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <div className="Photo">
        <button
          class="toggle-button"
          id="centered-toggle-button"
          onClick={e => {
            this.showModal(e);
          }}
        >
          {" "}
          show Modal{" "}
        </button>
        <Modal onClose={this.showModal} show={this.state.show}>
          <DragDropFile />
        </Modal>
      </div>
    );
  }
}

export default Photos;
