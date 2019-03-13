import React from 'react';
import { StyleSheet} from 'react-native';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Container,
          Header, 
          Title, 
          Content,
            Text, 
            Body, 
            Left, 
            Right,
            Button, 
            Icon,
            Form,
            Item,
            Label,
            Toast,
            Input } from 'native-base';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      text: 'Seu texto aparecerá aqui.',
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ fontLoaded: true })
  }

  showToast = () => {
    Toast.show({
      text: 'Seu texto em um toast: '+this.state.text,
      buttonText: 'Fechar',
    });
  }


  render() {
    return (
      this.state.fontLoaded ? (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon name='menu'></Icon>
            </Button>
          </Left>
          <Body>
            <Title>
              Hello World
            </Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.container}>
          <Text style={styles.title}>
            Primeiro aplicativo em react agora com Native-Base(UI Lib).
          </Text>
      
       
          <Form>
            <Item floatingLabel>
              <Label>Escreve qualquer coisa ai: </Label>
              <Input onChangeText={(inputText) => this.setState({text: inputText})} />
             
            </Item>
             
          </Form>
          <Button onPress={this.showToast}><Text>Clique aqui</Text></Button>
            <Text style={styles.seuTexto}>{this.state.text}</Text>
         
        </Content>
      </Container> ) : null
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    color: '#de1133',
  },
  parag: {
    color: '#44AAEE',
  },
  header: {
    backgroundColor: '#130f40',
  },
  body:{
    backgroundColor: '#30336b',
  },
  seuTexto: {
    marginTop: 30,
    marginLeft: 10,
  }
});

