import React from "react";
import {} from "reactstrap";
import shortid from "shortid";
import Form from "./form";

const defaultOptions = [
  { id: shortid.generate(), value: "", vote: 0 },
  { id: shortid.generate(), value: "", vote: 0 },
];

class PollForm extends React.Component {
  state = {
    title: "",
    description: "",
    options: defaultOptions,
    errors: {},
  };

  componentDidMount = () => {
    const { poll } = this.props;
    if (poll && Object.keys(poll).length > 0) {
      this.setState({
        title: poll.title,
        description: poll.description,
        options: poll.options,
      });
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOptionChange = (event, index) => {
    // const options = [... this.state.options]
    const { options } = this.state;
    options[index].value = event.target.value;
    this.setState({ options });
  };

  createOption = () => {
    const { options } = this.state;
    if (options.length < 5) {
      options.push({
        id: shortid.generate(),
        value: "",
        vote: 0,
      });
      this.setState({ options });
    } else {
      alert("You can create max 5 options");
    }
  };

  deleteOption = (index) => {
    const { options } = this.state;
    // as 2 option must so more than 2 option thn we can delete
    if (options.length > 2) {
      // only in that index we can delete 1 only
      options.splice(index, 1);
      this.setState({ options });
    } else {
      alert("You must have at least two options.");
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { isValid, errors } = this.validate();
    console.log("isvalid - ", isValid);
    if (isValid) {
      const { title, description, options } = this.state;
      const poll = {
        title,
        description,
        options,
      };
      
      // when its from update form
      if (this.props.isUpdate) {
        poll.id = this.props.poll.id;
        this.props.submit(poll);
        alert("Updated Successfully");
      } else {
        this.props.submit(poll);

        event.target.reset();
        this.setState({
          title: "",
          description: "",
          options: defaultOptions,
          errors: {},
        });
      }
    } else {
      this.setState({ errors });
    }
  };

  validate = () => {
    const errors = {};
    const { title, description, options } = this.state;
    if (!title) {
      errors.title = "Please provide a title";
    } else if (title.length < 20) {
      errors.title = "Title Too short";
    } else if (title.length > 100) {
      errors.title = "Title too long";
    }

    if (!description) {
      errors.description = "Please provide a description";
    } else if (!description > 500) {
      errors.description = "Description too long";
    }

    // as there is multiple option we took an array for errors
    const optionErrors = [];
    options.forEach((opt, index) => {
      if (!opt.value) {
        optionErrors[index] = "Option text Empty";
        // optionErrors.push('Option text empty');
      } else if (opt.value.length > 100) {
        optionErrors[index] = "Option text too long";
      }
    });

    if (optionErrors.length > 0) {
      errors.options = optionErrors;
    }

    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };

  render() {
    const { title, description, options, errors } = this.state;
    return (
      <Form
        title={title}
        description={description}
        options={options}
        buttonValue={this.props.buttonValue || "Create Poll"}
        errors={errors}
        handleChange={this.handleChange}
        handleOptionChange={this.handleOptionChange}
        createOption={this.createOption}
        deleteOption={this.deleteOption}
        handleSubmit={this.handleSubmit}
      ></Form>
    );
  }
}

export default PollForm;
