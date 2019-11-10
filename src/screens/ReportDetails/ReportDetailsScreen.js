// @flow
import React, { PureComponent } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import moment from 'moment';
import { NavigationScreenProp } from 'react-navigation';
import styled from 'styled-components';

// actions
import ContentWrapper from 'components/ContentWrapper';
import Icon from 'components/Icon';

// utils
import { colors, fonts, fontSizes } from 'utils/variables';
import { screenWithTransparentHeaderNavigationParams } from 'utils/navigation';

// models
import type { ReportItem } from 'models/Report';

const { width: viewportWidth } = Dimensions.get('window');

type Props = {
  navigation: NavigationScreenProp,
}

type State = {
}

const FullWidthImage = styled.Image`
  height: 275px;
`;

const Title = styled.Text`
  font-family: ${fonts.semiBold};
  font-size: ${fontSizes.heading};
  color: ${colors.black};
  margin-top: 20px;
`;

const InfoRow = styled.View`
  margin-top: 20px;
  flex-direction: row;
`;

const InfoText = styled.Text`
  font-family: ${fonts.light};
  font-size: ${fontSizes.medium};
  color: ${colors.black};
  text-transform: uppercase;
`;

const Description = styled.Text`
  font-family: ${fonts.light};
  font-size: ${fontSizes.content};
  color: ${colors.darkGrey};
  margin-top: 20px;
`;

class ReportDetailsScreen extends PureComponent<Props, State> {
  static navigationOptions = (params) => screenWithTransparentHeaderNavigationParams(
    params,
    { title: null },
  );

  reportItem: ReportItem;

  constructor(props: Props) {
    super(props);
    this.reportItem = props.navigation.getParam('item');
  }

  renderCarouselImage = ({ item }) => {
    return (
      <FullWidthImage
        source={{ uri: item }}
        resizeMode="cover"
      />
    );
  };

  render() {
    const {
      createdAt,
      title,
      content,
      address,
      images,
    } = this.reportItem;
    return (
      <ScrollView>
        <Carousel
          data={images}
          renderItem={this.renderCarouselImage}
          sliderWidth={viewportWidth}
          itemWidth={viewportWidth}
          slideStyle={{ width: viewportWidth }}
          containerCustomStyle={{ flexGrow: 0 }}
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
          loop
        />
        <ContentWrapper>
          <Title>{title}</Title>
          <InfoRow>
            <Icon name="evil.clock" size={27} />
            <InfoText>{moment(createdAt * 1000).format('MMMM D, HH:mm')}</InfoText>
          </InfoRow>
          <InfoRow>
            <Icon name="evil.location" size={27} />
            <InfoText>{address}</InfoText>
          </InfoRow>
          <Description>{content}</Description>
        </ContentWrapper>
      </ScrollView>
    );
  }
}

export default ReportDetailsScreen;
