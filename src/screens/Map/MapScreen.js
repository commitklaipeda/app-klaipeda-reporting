// @flow
import React, { Component } from 'react';
import MapView, { Marker, LatLng, Point } from 'react-native-maps';
import { connect } from 'react-redux';
import { NavigationScreenProp } from 'react-navigation';
import styled from 'styled-components';

// components
import ContentWrapper  from 'components/ContentWrapper';
import Icon  from 'components/Icon';

// constants
import { REPORT_DETAILS } from 'constants/navigationConstants';

// utils
import { screenWithTransparentHeaderNavigationParams } from 'utils/navigation';
import { colors } from 'utils/variables';

// models
import type { ReportItem } from 'models/Report';

type Props = {
  reportItems: ReportItem[],
  navigation: NavigationScreenProp,
};

type State = {
  trackViewChanges: boolean,
};

const MarkerView = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 16px;
`;
const MarkerPin = styled.View`
  position: absolute;
  bottom: 0;
`;

const MarkerImage = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  border-width: 3px;
  border-color: ${colors.white};
`;

class MapScreen extends Component<Props, State> {
  static navigationOptions = (params) => screenWithTransparentHeaderNavigationParams(
    params,
    { headerLeft: null },
  );

  state = {
    trackViewChanges: true,
  };

  loadedMarkersCount = 0;

  markerLoaded = () => {
    const { reportItems } = this.props;
    this.loadedMarkersCount += 1;
    if (this.loadedMarkersCount !== reportItems.length) return;
    this.setState({ trackViewChanges: false });
  };

  renderMarker = (item): ReportItem => {
    const { navigation } = this.props;
    const { trackViewChanges } = this.state;
    const {
      id,
      thumbnail,
      coordinates: {
        lat: latitude,
        lng: longitude,
      },
    } = item;
    const coordinate: LatLng = { latitude, longitude };
    return (
      <Marker
        key={id}
        identifier={`id-${id}`}
        coordinate={coordinate}
        trackViewChanges={trackViewChanges}
        onPress={() => navigation.navigate(REPORT_DETAILS, { item })}
        flat
      >
        <MarkerView>
          <MarkerPin>
            <Icon
              name="fa.caret-down"
              color={colors.white}
              size={40}
            />
          </MarkerPin>
          <MarkerImage
            resizeMode="cover"
            source={{ uri: thumbnail }}
            onLoad={this.markerLoaded}
            fadeDuration={0}
          />
        </MarkerView>
      </Marker>
    );
  };

  renderMarkers = () => {
    const { reportItems } = this.props;
    return reportItems.map(this.renderMarker);
  };

  render() {
    const { trackViewChanges } = this.state;
    return (
      <ContentWrapper noPadding>
        <MapView
          initialRegion={{
            latitude: 55.704650,
            longitude: 21.137910,
            latitudeDelta: 0.03,
            longitudeDelta: 0.03,
          }}
          tracksViewChanges={trackViewChanges}
          style={{ flex: 1 }}
          moveOnMarkerPress={false}
        >
          {this.renderMarkers()}
        </MapView>
      </ContentWrapper>
    );
  }
}

const mapStateToProps = ({
  reportItems: { data: reportItems },
}) => ({
  reportItems,
});

export default connect(mapStateToProps)(MapScreen);
