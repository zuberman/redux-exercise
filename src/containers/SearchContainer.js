import { connect } from 'react-redux';
import Search from '../components/Search.js'
import { setSearchString, fetchCharacters, searchString } from '../actions';

const mapStateToProps = state => {
  return {
  searchString: state.searchInput
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: searchString => dispatch(setSearchString(searchString)),
    submitSearch: (event, searchString) => {
      event.preventDefault();
      dispatch(fetchCharacters(searchString))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
