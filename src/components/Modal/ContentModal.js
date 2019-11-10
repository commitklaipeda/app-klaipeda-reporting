// @flow
import React from 'react';
// import styled from 'styled-components/native';
import Modal from 'react-native-modal';

type Props = {
  isVisible: boolean,
  children: any,
};

const ContentModal = (props: Props) => {
  const { isVisible, children } = props;
  return (
    <Modal isVisible={isVisible}>
      {children}
    </Modal>
  );
};

export default ContentModal;
