import React from 'react';
import { StyleSheet} from 'react-native';
import {Container, Header, Title, Content, Text} from 'native-base';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Title>
            Hello World
          </Title>
        </Header>
        <Content>
          <Text style={styles.title}>
            Primeiro aplicativo em react agora com Native-Base(UI Lib).
          </Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#de1133',
  },
  parag: {
    color: '#44AAEE',
  }
});
