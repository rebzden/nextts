import React from 'react';
import styled from 'styled-components';

export default class extends React.Component {
  render() {
    const StyledHeader = styled.div`
      color: red;
    `
    return (
      <StyledHeader>Hello Next.js</StyledHeader>
    )
  }
}