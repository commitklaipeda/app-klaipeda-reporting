// @flow
import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import { SectionList } from 'react-native';
import ListItemReportTicket from 'components/ListItem/ListItemReportTicket';
import ContentWrapper from 'components/Wrapper/ContentWrapper';
import ListSectionHeader from 'components/ListSectionHeader';
// import Button from 'components/Button';
import { fetchReportTicketsAction } from 'actions/reportTicketsActions';

import type { ReportTicket } from 'models/ReportTicket';

type Props = {
  reportTickets: ReportTicket[],
  fetchReportTickets: Function,
}

class FeedScreen extends PureComponent<Props> {
  static navigationOptions = {
    // headerRight: <Button icon="entypo.funnel" />,
  };

  componentDidMount() {
    const { fetchReportTickets } = this.props;
    fetchReportTickets();
  }

  render() {
    const { reportTickets } = this.props;
    const sectionedList = [{
      title: 'Šiandien',
      data: reportTickets,
    }];
    return (
      <ContentWrapper noSidePadding>
        <SectionList
          contentContainerStyle={{
            paddingTop: 20,
            paddingBottom: 50,
          }}
          sections={sectionedList}
          keyExtractor={({ id }) => `item-${id}`}
          renderItem={({ item }) => <ListItemReportTicket item={item} />}
          renderSectionHeader={({ section }) => <ListSectionHeader title={section.title} />}
        />
      </ContentWrapper>
    );
  }
}

const mapStateToProps = ({
  reportTickets: { data: reportTickets },
}) => ({
  reportTickets,
});
const mapDispatchToProps = dispatch => ({
  fetchReportTickets: () => dispatch(fetchReportTicketsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen);
