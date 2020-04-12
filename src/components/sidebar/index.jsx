import React from "react";
import PollList from "./poll-list";
import { Input, Button, Modal, ModalHeader, ModalBody } from "reactstrap";

class Sidebar extends React.Component {
  state = {
    openModal: false,
  };

  toggleModal = () => {
    this.setState({
      openModal: !this.state.openModal,
    });
  };

  render() {
    return (
      <div style={{ background: "#efefef", padding: "10px" }}>
        <div className="d-flex mb-5">
          <Input
            type="search"
            placeholder="Search"
            value={this.props.searchTerm}
            onChange={(e) => this.props.handleSearch(e.target.value)}
          />
          <Button color="success" className="ml-2" onClick={this.toggleModal}>
            New
          </Button>
        </div>
        <h3>List of Polls</h3>
        <hr />

        <PollList polls={this.props.polls} selectPoll={this.props.selectPoll} />

        {/* why unmountOnClose ??? */}
        <Modal
          isOpen={this.state.openModal}
          toggle={this.toggleModal}
          unmountOnClose={true}
        >
          <ModalHeader toggle={this.toggleModal}>Create new Poll</ModalHeader>
          <ModalBody>This is the modal Body</ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Sidebar;
