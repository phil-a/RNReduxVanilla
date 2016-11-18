import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
class LibraryList extends Component {
  render() {
    console.log(this.props);
    return (
      <Text>Test</Text>
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
