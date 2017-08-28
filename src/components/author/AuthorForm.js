import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

const AuthorForm = ({author}) => {
  return (
    <form>
      <TextInput
        name="firstName"
        label="First Name"
        value={author.firstName}
        // onChange={}
        // error = {}
      />
        <TextInput
          name="lastName"
          label="Last Name"
          value={author.lastName}
          // onChange={}
          // error = {}
        />
      <input
        type="submit"
        value="Save Author" />

    </form>
  );
};

AuthorForm.propTypes = {
  author: PropTypes.object.isRequired
  // onSave: PropTypes.func.isRequired,
  // onChange: PropTypes.func.isRequired,
  // saving: PropTypes.bool,
  // errors: PropTypes.object
};

export default AuthorForm;
