// @flow
import React from 'react';
import { Picker } from 'react-native';
import { screenWithRightDismissNavigationParams } from 'utils/navigation';
import ContentWrapper from 'components/ContentWrapper';
import { colors } from 'utils/variables';
import InputWrapper from 'components/InputWrapper';
import TextInput from 'components/TextInput';

type State = {
  formValues: Object,
};

export default class SubmitScreen extends React.Component<Props, State> {
  static navigationOptions = screenWithRightDismissNavigationParams;

  state = {
    formValues: {},
  };

  handleTextChange = (key: string, value: ?string) => {
    const { formValues } = this.state;
    this.setState({ formValues: { ...formValues, [key]: value } });
  };

  render() {
    return (
      <ContentWrapper backgroundColor={colors.creamGrey}>
        <InputWrapper labelText="Adresas">
          <TextInput
            placeholder="Gatvė, namo numeris"
            onChangeText={(value) => this.handleTextChange('address', value)}
          />
        </InputWrapper>
        <InputWrapper labelText="Adresas">
          <Picker mode="dialog">
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </InputWrapper>
        <InputWrapper labelText="Problemos aprašymas">
          <TextInput
            placeholder="Keliais sakiniais apibūdinkite problemą"
            onChangeText={(value) => this.handleTextChange('description', value)}
            inputHeight={140}
            multiline
          />
        </InputWrapper>
      </ContentWrapper>
    );
  }
}
