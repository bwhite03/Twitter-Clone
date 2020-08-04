import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Chip from "@material-ui/core/Chip";
import MessageSearchList from "../../message-search-list/MessageSearchList";
import { connect } from "react-redux";

function MessageDialog(props) {
  const [content, setContent] = useState("");
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleDelete = () => {
    setUser(null);
  };

  const filteredUsers = props.users.filter((user) => {
    return user.username.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div id="form-dialog-container">
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">Message</DialogTitle>
        <DialogContent>
          {user && (
            <Chip size="small" label={user.username} onDelete={handleDelete} />
          )}
          <TextField
            onChange={handleChange}
            id="standard-basic"
            label="Search user to message"
            size="small"
            style={{ width: "100%" }}
            value={search}
          />
          {search && (
            <MessageSearchList
              filteredUsers={filteredUsers}
              setUser={setUser}
              setSearch={setSearch}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button>Message</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
  };
};

export default connect(mapStateToProps)(MessageDialog);
