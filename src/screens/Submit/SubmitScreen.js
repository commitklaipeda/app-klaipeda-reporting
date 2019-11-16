// @flow
import React from 'react';
import { screenWithRightDismissNavigationParams } from 'utils/navigation';
import ContentWrapper from 'components/ContentWrapper';
import { colors, fontSizes } from 'utils/variables';
import InputWrapper from 'components/InputWrapper';
import TextInput from 'components/TextInput';
import SelectInput from 'components/SelectInput';
import Button from 'components/Button';
import Icon from 'components/Icon';

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
        <Button
          title="Įkelk nuotraukas"
          backgroundColor={colors.white}
          borderColor={colors.blue}
          textColor={colors.black}
          center
          contentLeft={(
            <Icon
              name="simpleline.camera"
              color={colors.blue}
              size={fontSizes.content}
            />
          )}
        />
        <InputWrapper labelText="Adresas">
          <TextInput
            placeholder="Gatvė, namo numeris"
            onChangeText={(value) => this.handleTextChange('address', value)}
          />
        </InputWrapper>
        <InputWrapper labelText="Kategorija">
          <SelectInput
            onSelectOption={(value) => this.handleTextChange('category', value)}
          />
        </InputWrapper>
        <InputWrapper labelText="Problemos aprašymas">
          <TextInput
            placeholder="Keliais sakiniais apibūdinkite problemą"
            onChangeText={(value) => this.handleTextChange('description', value)}
            inputHeight={140}
            multiline
          />
        </InputWrapper>
        <Button title="Pranešti" fulllWidth />
      </ContentWrapper>
    );
  }
}
