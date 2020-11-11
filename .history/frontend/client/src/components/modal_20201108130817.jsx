Create Simple Modal Pop-up with React

SHARE    
We are going to create a very Simple Modal box component with ReactJs. The purpose of this simple example is to show, how to get modal box fields data to the related component.

Demo

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Hello!! {this.state.name}</h1>
        <a href="javascript:;">
          Open Modal
        </a>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
I have used the bootstrap in my example, so that we can implement the pre defined css. In the above code i simply display a Hello heading and an anchor tag with the value open modal. We will later implement the click even on the anchor tag to open the modal window.


 
So now let’s create a component with the name Modal.js and save it to the components directory. We choose components directory because we better know the location of our re-usable components.

Let’s create Modal.js file and paste the below codes.

import React from "react";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-container">
        {children}
        <a href="javascript:;" className="modal-close" onClick={handleClose}>
          close
        </a>
      </div>
    </div>
  );
};

export default Modal;