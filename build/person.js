import React, { Component } from "react";
import { Text } from "react-native";
import { Container, Switch, Content, ListItem, Left, Right, Body, Icon} from "native-base";

export default class PersonScreen extends Component {
    constructor(props) {
        super(props);
        this.handlePress = this.handlePress.bind(this);
    }
    handlePress(title, Element) {
        this.props.set({
            route: "page",
            title: title,
            more: Element,
        });
    }
    render() {
        return (
            <Container>
                <ListItem itemDivider>
                    <Text>用户</Text>
                </ListItem>  
                <ListItem>
                    <Thumbnail square size={80} source={require('../img/me.jpg')} />
                    <Body>
                        <Text>Liki</Text>
                        <Text note>A center aspect designed for efficient representation of vertically scrolling lists of changing data. </Text>
                    </Body>
                </ListItem>

                <ListItem itemDivider>
                    <Text>用户</Text>
                </ListItem>  
                <ListItem icon>
                    <Left>
                        <Icon name="cart" />
                    </Left>
                    <Body>
                        <Text>购物车</Text>
                    </Body>
                    <Right>
                        <Text> </Text>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>
                <ListItem icon>
                    <Left>
                        <Icon name="star-half" />
                    </Left>
                    <Body>
                        <Text>绑定银行卡</Text>
                    </Body>
                    <Right>
                        <Text> </Text>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>
            </Container>
        );
    }
}

// import Icon from "react-native-vector-icons/FontAwesome";
// const myIcon = (<Icon name="rocket" size={30} color="#900" />
// )
class OptionScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<Container>
                <Content>
                    <ListItem icon>
                        <Left>
                            <Icon name="eye"/>
                        </Left>
                        <Body>
                          <Text>Airplane Mode</Text>
                        </Body>
                        <Right>
                            <Switch value={false}/>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="eye"/>
                        </Left>
                        <Body>
                          <Text>Wi-Fi</Text>
                        </Body>
                        <Right>
                            <Text>GeekyAnts</Text>
                            <Icon name="eye"/>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="eye"/>
                        </Left>
                        <Body>
                          <Text>Bluetooth</Text>
                        </Body>
                        <Right>
                            <Text>On</Text>
                            <Icon name="eye"/>
                        </Right>
                    </ListItem>
                </Content>
            </Container>);
    }
}
