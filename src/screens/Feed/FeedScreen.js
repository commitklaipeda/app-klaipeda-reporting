// @flow
import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import { SectionList } from 'react-native';
import type { NavigationScreenProp } from 'react-navigation';
import moment from 'moment';

// actions
import { fetchReportItemsAction } from 'actions/reportItemsActions';

// components
import ListItem from 'components/ListItem';
import ContentWrapper from 'components/ContentWrapper';
import ListSectionHeader from 'components/ListSectionHeader';

// constants
import { REPORT_DETAILS } from 'constants/navigationConstants';

// models
import type { ReportItem } from 'models/Report';

type Props = {
  reportItems: ReportItem[],
  fetchReportItems: Function,
  isFetchingReportItems: boolean,
  navigation: NavigationScreenProp,
}

const today = moment();

const getDateSectionTitle = (timestamp) => {
  if (moment(timestamp).isSame(today, 'day')) return 'Šiandien';
  return 'Ankstesni';
};

class FeedScreen extends PureComponent<Props> {
  componentDidMount() {
    const { fetchReportItems } = this.props;
    fetchReportItems();
  }

  renderListItem = ({ item }: ReportItem) => {
    const { navigation } = this.props;
    const { title, content, thumbnail } = item;
    return (
      <ListItem
        title={title}
        content={content}
        image={thumbnail}
        onPress={() => navigation.navigate(REPORT_DETAILS, { item })}
      />
    );
  };

  renderSectionHeader = ({ section: { title } }) => <ListSectionHeader title={title} />;

  render() {
    const {
      reportItems,
      fetchReportItems,
      isFetchingReportItems,
    } = this.props;
    const sectionedReportedItems = reportItems
      .sort((a, b) => b.createdAt - a.createdAt)
      .reduce((list, report) => {
        const { createdAt } = report;
        const title = getDateSectionTitle(createdAt * 1000);
        if (!(list[title])) {
          list[title] = {
            title,
            data: [report],
          };
        } else {
          list[title] = {
            ...list[title],
            data: [...list[title].data, report],
          };
        }
        return list;
      }, {});
    const sectionedList = Object.values(sectionedReportedItems);
    return (
      <ContentWrapper>
        <SectionList
          sections={sectionedList}
          keyExtractor={({ id }) => `item-${id}`}
          renderItem={this.renderListItem}
          renderSectionHeader={this.renderSectionHeader}
          refreshing={isFetchingReportItems}
          onRefresh={() => fetchReportItems()}
        />
      </ContentWrapper>
    );
  }
}

const mapStateToProps = ({
  reportItems: {
    data: reportItems,
    isFetching: isFetchingReportItems,
  },
}) => ({
  reportItems,
  isFetchingReportItems,
});
const mapDispatchToProps = dispatch => ({
  fetchReportItems: () => dispatch(fetchReportItemsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen);
