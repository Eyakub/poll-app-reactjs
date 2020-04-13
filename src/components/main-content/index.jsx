import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import ParticipationForm from "./participate-form";
import PollForm from "../poll-form";

class MainContent extends React.Component {
  state = {
    openModal: false,
  };

  toggleModal = () => {
    this.setState({
      openModal: !this.state.openModal,
    });
    console.log(this.state.openModal)
  };

  render() {
    if (Object.keys(this.props.poll).length === 0) {
      return (
        <div>
          <h3>Welcome to my Application</h3>
          <p>
            You can create as many poll as you want. Click the new butotn to
            createa new poll.
          </p>
        </div>
      );
    }

    const { poll, getOpinion, updatePoll, deletePoll } = this.props;

    return (
      <div>
        <h3>{poll.title}</h3>
        <p>{poll.description}</p>
        <br />
        <ParticipationForm
          poll={poll}
          getOpinion={getOpinion}
          toggleModal={this.toggleModal}
          deletePoll={deletePoll}
        />

        <Modal
          isOpenk={this.state.openModal}
          toggle={this.toggleModal}
          unmountOnClose={true}
        >
          <ModalHeader toggle={this.toggleModal}>Update Poll</ModalHeader>

          <ModalBody>
            <PollForm
              poll={poll}
              isUpdate={true}
              submit={updatePoll}
              buttonValue="Update Poll"
            />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default MainContent;
