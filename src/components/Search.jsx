import React from "react";
import { searchMovies } from "../layout/Main";

class Search extends React.Component {
  state = {
    search: "",
  };

  handleKey = (e) => {
    if (e.target === "Enter") {
      this.props.searchMovies(this.state.search);
    }
  };

  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            className="validate"
            placeholder="Search"
            type="email"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          {/* I'm using the email type because styles are not applied to the search type (I'm using https://materializecss.com/) */}
        </div>
      </div>
    );
  }
}

export { Search };
