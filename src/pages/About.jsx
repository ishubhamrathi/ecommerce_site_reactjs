import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Wrapper>
      <h2>About Our Company</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus, neque a finibus tristique, erat ante aliquam tellus, vel dignissim risus tellus id nibh. Duis eu eleifend purus. Nulla a lorem bibendum, faucibus diam eu, convallis augue. Fusce pharetra auctor ex, nec placerat magna pellentesque quis. Etiam suscipit quam eget mi lacinia ullamcorper. In non tellus non sem sodales egestas id vel eros. Nunc ullamcorper eget lacus in bibendum. Donec finibus risus mi, vel tincidunt lacus efficitur nec. Nam gravida malesuada quam vitae scelerisque. </p>
      <p>Sed lacinia arcu vel nunc lacinia, eu convallis metus iaculis. Donec malesuada dolor et nisl accumsan, eget euismod elit dictum. Ut nec massa libero. Sed laoreet imperdiet ligula, in gravida elit vestibulum ut. Duis varius justo eu quam bibendum, quis rutrum purus finibus. Aliquam eget lorem in velit vestibulum blandit. Nunc volutpat auctor mauris, ac facilisis est tristique id. Nam congue lobortis ante, in rutrum velit consectetur at. Integer eget sagittis nibh, vel mattis justo. </p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  font-size: 24px;
  line-height: 1.5;
  margin: 50px;
`;
export default About;
