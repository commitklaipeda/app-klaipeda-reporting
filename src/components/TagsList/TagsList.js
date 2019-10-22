// @flow
import React from 'react';
import { Text } from 'react-native';

import type { Tag } from 'models/Tag';

type Props = {
  tags: Tag[],
}

const TagsList = (props: Props) => {
  return props.tags.map(({ title }) => <Text>{title}</Text>);
};

export default TagsList;
