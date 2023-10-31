import React from "react";

class Search extends React.Component {
  state = {
    search: "",
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
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
          <button
            className="btn search-btn"
            onClick={() => this.props.searchMovies(this.state.search)}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

export { Search };
