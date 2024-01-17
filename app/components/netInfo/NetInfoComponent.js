import React from 'react';
import { View } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import NoInternet from '../../components/noInternet/NoInternet';

export const NetInfoComponent = ( WrapperComponent ) => {
  class UpdateComponent extends React.Component {
    constructor ( props ) {
      super( props );
      this.state = {
        isConnected: true,
      };
    }

    componentDidMount () {
      NetInfo.addEventListener( ( state ) => {
        console.log( 'Connection type', state.type );
        console.log( 'Is connected?', state.isConnected );
        this.setState( {
          isConnected: state.isConnected,
        } );
      } );
    }

    render () {
      return (
        <>
          {
            this.state.isConnected ?
              <WrapperComponent isConnected={ this.state.isConnected } { ...this.props } /> :
              <View style={{ flex: 1 }}>
                <NoInternet />
              </View>
          }
        </>
      );
    }
  }
  return UpdateComponent;
};
