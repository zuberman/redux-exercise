import { connect } from 'react-redux';
import CharacterResults from '../components/CharacterResults.js'

const mapStateToProps = state => {
  return {
  results: state.characterResults
  };
};


export default connect(
  mapStateToProps,
)(CharacterResults);
