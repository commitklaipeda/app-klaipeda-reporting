// @flow
import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import ListItemReportTicket from 'components/ListItem/ListItemReportTicket';
import { fetchReportTicketsAction } from 'actions/reportTicketsActions';
import type { ReportTicket } from 'models/ReportTicket';

type Props = {
  reportTickets: ReportTicket[],
  fetchReportTickets: Function,
}

class FeedScreen extends PureComponent<Props> {
  componentDidMount() {
    const { fetchReportTickets } = this.props;
    fetchReportTickets();
  }

  render() {
    const { reportTickets } = this.props;
    return (
      <FlatList
        data={reportTickets}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ListItemReportTicket item={item} />}
      />
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
