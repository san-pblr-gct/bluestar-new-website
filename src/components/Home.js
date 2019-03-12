import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from  'redux';
import * as sessionActions from '../actions/sessionActions';

export class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      fromCities: [],
      fromCity: ''
    };
  }

  onSearch = event => {
    this.setState({ fromCity: event.target.value });
    console.log(event.target.value);
    this.props.sessionActions.searchCities(event.target.value);
  
  };



  render() {
    return (
      <div>
        <input type="text" onChange={this.onSearch} />
      </div>
    );
  }
}


Home.propTypes = {
  sessionActions: PropTypes.object.isRequired,
  fromCities:PropTypes.array
 
};
const mapStateToProps = state => {
  return {
    fromCities: state.fromCities
  };
};

const mapDispatchToProps=(dispatch)=> {
  return {
    sessionActions: bindActionCreators(sessionActions, dispatch)

  };
}

const HomeContainer = connect(
  mapStateToProps,mapDispatchToProps
)(Home);

export default HomeContainer;
