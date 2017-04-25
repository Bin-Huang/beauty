import React, { Component } from "react";
import { TouchableHighlight, Image, ScrollView } from "react-native";
import { Footer, FooterTab, Container, H2, Content, ActionSheet, Button, Card, CardItem, Thumbnail, Body, Right, Left, Text, Icon, Toast } from "native-base";


export default class CameraScreen extends React.Component {
    constructor(props) {
        super(props);
        this.set = this.props.set;
    }
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require("../img/dp5.jpg")} />
                                <Body>
                                    <Text>智能试衣</Text>
                                    <Text note>拍照就能试衣服！</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Text note>只需要你的一张照片</Text>
                        </CardItem>
                        <CardItem>
                            <Text note>就能全自动获得你的身形相貌数据</Text>
                        </CardItem>
                        <CardItem>
                            <Text note>并模拟出试穿任何衣服时的着装效果</Text>
                        </CardItem>
                        <CardItem />
                        <CardItem />
                   </Card>
                    <Card>
                        <Button block light onPress={() => {
                            Toast.show({
                                text: "功能暂未开放，敬请期待",
                                position: "top",
                                buttonText: "知道了",
                            });
                            }} >
                            <Icon name="camera" active />
                            <Text>拍一张照</Text>
                        </Button>
                    </Card>
                    <Card>
                        <Button block light onPress={() => {
                            Toast.show({
                                text: "功能暂未开放，敬请期待",
                                position: "top",
                                buttonText: "知道了",
                            });
                            }} >
                            <Icon name="grid" active />
                            <Text>从相册中选择</Text>
                        </Button>
                    </Card>
                    <Card>
                        <Button block light onPress={() => {
                            this.set({
                                route: "page",
                                title: " ",
                                more: <CameraPage />
                            })
                            }} >
                            <Icon name="bookmarks" active />
                            <Text>教程演示(可使用)</Text>
                        </Button>
                    </Card>
                </Content>
            </Container>
        )
    }
}

class CameraPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: require("../img/yy1.jpg"),
        }
    }
    render() {
        return (
            <Container >
                {/*<Content>*/}
                    <Card>
                        <Image style={{ resizeMode: "cover", width: null }} source={this.state.current} />
                    </Card>

                {/*</Content>*/}
                <Footer>

                    <ScrollView horizontal={true}>
                        <FooterTab style={{backgroundColor: "white"}}>
                            <Button light transparent onPress={() => {
                                this.setState({current: require("../img/yy1.jpg")});                                
                            }}>
                                <Image source={require("../img/xx1.jpg")} />
                            </Button>
                        </FooterTab>

                        <FooterTab style={{backgroundColor: "white"}}>
                            <Button light transparent onPress={() => {
                                this.setState({current: require("../img/yy2.jpg")});                                
                            }}>
                                <Image source={require("../img/xx2.jpg")} />
                            </Button>
                        </FooterTab>

                        <FooterTab style={{backgroundColor: "white"}}>
                            <Button light transparent onPress={() => {
                                this.setState({current: require("../img/yy3.jpg")});                                
                            }}>
                                <Image source={require("../img/xx3.jpg")} />
                            </Button>
                        </FooterTab>
                        <FooterTab style={{backgroundColor: "white"}}>
                            <Button light transparent onPress={() => {
                                this.setState({current: require("../img/yy4.jpg")});                                
                            }}>
                                <Image source={require("../img/xx4.jpg")} />
                            </Button>
                        </FooterTab>
                        <FooterTab style={{backgroundColor: "white"}}>
                            <Button light transparent onPress={() => {
                                this.setState({current: require("../img/yy5.jpg")});                                
                            }}>
                                <Image source={require("../img/xx5.jpg")} />
                            </Button>
                        </FooterTab>
                        <FooterTab style={{backgroundColor: "white"}}>
                            <Button light transparent onPress={() => {
                                this.setState({current: require("../img/yy6.jpg")});                                
                            }}>
                                <Image source={require("../img/xx6.jpg")} />
                            </Button>
                        </FooterTab>
                        <FooterTab style={{backgroundColor: "white"}}>
                            <Button light transparent onPress={() => {
                                this.setState({current: require("../img/yy7.jpg")});                                
                            }}>
                                <Image source={require("../img/xx7.jpg")} />
                            </Button>
                        </FooterTab>
                    </ScrollView>

                </Footer>
            </Container>
        )
    }
}