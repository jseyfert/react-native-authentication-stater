import React, { Component } from 'react';
import { AlertIOS } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import * as actions from '../actions';

class TrackUrlButton extends Component {

  onButtonClick (){

    const {
      item,
      priceAmazon,
      priceThirdNew,
      priceThirdUsed,
      userLocal,
    } = this.props;

    this.props.startTrackingButton({
      item,
      priceAmazon,
      priceThirdNew,
      priceThirdUsed,
      userLocal,
    });

  }

  render() {
      return (
        <Button
          onPress={ () => this.onButtonClick(this.props)}
          title='Start Tracking'
          backgroundColor='#4267B2'
          borderRadius={4} />
      );
  }
}

const mapStateToProps = ({ app, auth }) => {
  const { userLocal } = auth;
  const { item, priceAmazon, priceThirdNew, priceThirdUsed } = app;
  return { userLocal, item, priceAmazon, priceThirdNew, priceThirdUsed };
};

export default connect(mapStateToProps, actions)(TrackUrlButton);
