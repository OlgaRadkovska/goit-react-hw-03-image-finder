import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { SearchbarContainer } from './SearchBar.styled';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInputChange = e => {
    this.setState({ query: e.target.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      toast.error('Enter your search query');
      return;
    }

    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <SearchbarContainer>
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <input
            onInput={this.handleInputChange}
            className="SearchFormInput"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
          />
          <button type="submit" className="searchFormButton">
            search
          </button>
        </form>
      </SearchbarContainer>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
