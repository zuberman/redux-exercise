import { connect } from 'react-redux';
import Search from '../components/Search.js'
import { setSearchString, fetchCharacters, searchString, setCategory } from '../actions';

const mapStateToProps = state => {
  return {
  searchString: state.searchInput,
  category: state.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: searchString => dispatch(setSearchString(searchString)),
    submitSearch: (event, searchString, category) => {
      event.preventDefault();
      dispatch(fetchCharacters(searchString, category))
    },
    handleChangeCategory: category => dispatch(setCategory(category))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
