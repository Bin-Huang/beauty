import React, { Component } from "react";
import { Text, TouchableHighlight } from "react-native";
import { Container,Thumbnail, List, Toast, Switch, Button, Content, Card, CardItem, ListItem, Left, Right, Body, Icon, Form, Item, Input,Label} from "native-base";

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
                <ListItem onPress={() => {this.handlePress("用户设置", <UserScreen />)}}>
                    <Thumbnail square size={80} source={require("../img/me.jpg")} />
                    <Body>
                        <Text>  测试用户 1</Text>
                        <Text note>  A center aspect.</Text>
                    </Body>
                </ListItem>

                <ListItem itemDivider>
                    <Text>搭配</Text>
                </ListItem>  
                <ListItem icon onPress={() => {this.handlePress("购物车", <GouScreen />)}}>
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
                <ListItem icon onPress={() => {this.handlePress("收藏", <ShouScreen />)}}>
                    <Left>
                        <Icon name="star-half" />
                    </Left>
                    <Body>
                        <Text>收藏</Text>
                    </Body>
                    <Right>
                        <Text> </Text>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>

                <ListItem itemDivider>
                    <Text>设置</Text>
                </ListItem>
                <ListItem icon onPress={() => this.handlePress("用户设置", <UserScreen />)}>
                    <Left>
                        <Icon name="rose" />
                    </Left>
                    <Body>
                        <Text>账号设置</Text>
                    </Body>
                    <Right>
                        <Text> </Text>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>
                <ListItem icon onPress={() => this.handlePress("APP设置", <OptionScreen />)}>
                    <Left>
                        <Icon name="settings" />
                    </Left>
                    <Body>
                        <Text>APP设置</Text>
                    </Body>
                    <Right>
                        <Text> </Text>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>

                <ListItem itemDivider>
                    <Text>关于</Text>
                </ListItem>  
                <ListItem icon onPress={() => {this.handlePress("开发者信息", <DevScreen />)}}>
                    <Left>
                        <Icon name="glasses" />
                    </Left>
                    <Body>
                        <Text>开发者信息</Text>
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
        this.state = {
            onlywifi: false,
            alert: true,
            ad: true,
            hot: true,
        }
        this.set = this.set.bind(this);
    }
    set(obj) {
        this.setState(obj);
    }
    render() {
        return (<Container>
                <Content>
                    <ListItem icon>
                        <Left>
                            <Icon name="wifi"/>
                        </Left>
                        <Body>
                          <Text>仅在wifi下加载图片</Text>
                        </Body>
                        <Right>
                            <Switch value={this.state.onlywifi} onValueChange={() => {
                                this.set({onlywifi: !this.state.onlywifi});
                                }} />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="eye"/>
                        </Left>
                        <Body>
                          <Text>消息提醒</Text>
                        </Body>
                        <Right>
                            <Switch value={this.state.alert} onValueChange={() => {
                                this.set({alert: !this.state.alert});
                                }} />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="flame"/>
                        </Left>
                        <Body>
                          <Text>每日热门提醒</Text>
                        </Body>
                        <Right>
                            <Switch value={this.state.hot} onValueChange={() => {
                                this.set({hot: !this.state.hot});
                                }} />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="wine"/>
                        </Left>
                        <Body>
                          <Text>显示广告</Text>
                        </Body>
                        <Right>
                            <Switch value={this.state.ad} onValueChange={() => {
                                this.set({ad: !this.state.ad});
                                }} />
                        </Right>
                    </ListItem>
                </Content>
            </Container>);
    }
}

class UserScreen extends Component {
    render() {
        return (
            <Container>
                    <Content>
                        <Form>
                            <Item floatingLabel>
                                <Label>用户名</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel last>
                                <Label>密码</Label>
                                <Input />
                            </Item>
                        </Form>
                        <Button block>
                            <Text>确定</Text>
                        </Button>
                    </Content>
                </Container>
        );
    }
}

class DevScreen extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                          <Body>
                            <Text>
                                欢迎合作交流勾搭，加我注明来路、来意
                                微信: 980502459
                           </Text>
                          </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

class ShouScreen extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem onPress={() => {
                            Toast.show({
                                text: "无法连接服务器，因为还没有服务器",
                                position: "top",
                                buttonText: "OK"
                            });
                            }}>
                            <Thumbnail square size={80} source={require('../img/dp5.jpg')} />
                            <Body>
                                <Text>  春天的单品推荐</Text>
                                <Text note>  极简，不费脑，穿上就走</Text>
                            </Body>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem onPress={() => {
                            Toast.show({
                                text: "无法连接服务器，因为还没有服务器",
                                position: "top",
                                buttonText: "OK"
                            });
                            }}>
                            <Thumbnail square size={80} source={require('../img/dp4.jpg')} />
                            <Body>
                                <Text>  夏天的单品推荐</Text>
                                <Text note>  极简，不费脑，穿上就走</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

class GouScreen extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem onPress={() => {
                            Toast.show({
                                text: "无法连接服务器，因为还没有服务器",
                                position: "top",
                                buttonText: "OK"
                            });
                            }}>
                            <Thumbnail square size={80} source={require('../img/dp5.jpg')} />
                            <Body>
                                <Text>  内套维多利亚风格蕾丝衫</Text>
                                <Text note>  也是一套甜x酷，femininey的搭配。</Text>
                            </Body>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem onPress={() => {
                            Toast.show({
                                text: "无法连接服务器，因为还没有服务器",
                                position: "top",
                                buttonText: "OK"
                            });
                            }}>
                            <Thumbnail square size={80} source={require('../img/dp2.jpg')} />
                            <Body>
                                <Text>  外搭长款针织开衫</Text>
                                <Text note>  整体颜色都比较冷调</Text>
                            </Body>
                        </ListItem>
                        <ListItem onPress={() => {
                            Toast.show({
                                text: "无法连接服务器，因为还没有服务器",
                                position: "top",
                                buttonText: "OK"
                            });
                            }}>
                            <Thumbnail square size={80} source={require('../img/dp1.jpg')} />
                            <Body>
                                <Text>  小樱桃</Text>
                                <Text note>  可以驾驭长裙的姑娘不要错过</Text>
                            </Body>
                        </ListItem>
                        <ListItem onPress={() => {
                            Toast.show({
                                text: "无法连接服务器，因为还没有服务器",
                                position: "top",
                                buttonText: "OK"
                            });
                            }}>
                            <Thumbnail square size={80} source={require('../img/dp3.jpg')} />
                            <Body>
                                <Text>  水墨色长款针织开衫</Text>
                                <Text note>  格格的小心机</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}