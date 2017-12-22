import React from "react"
import { StatusBar } from "react-native"
import { 
  Container, 
  Header, 
  Title, 
  Left, 
  Icon, 
  Right, 
  Button, 
  Body, 
  Content,
  Text, 
  Card, 
  CardItem 
} from "native-base"
import { NavigationBar, Icon } from '@shoutem/ui' 

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <NavigationBar 
            centerComponent={<Title>Cryptocurrency Tracker</Title>}
            leftComponent={<Icon name='sidebar' />} 
          />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Chat App to talk some awesome people!</Text>
              </Body>
            </CardItem>
          </Card>
          <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Chat")}>
            <Text>Chat With People</Text>
          </Button>
          <Button full rounded primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Profile")}>
            <Text>Goto Profiles</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
