import React from "react";
import { View, Text } from "react-native";
import { StyleProvider, Container, Content, Footer, FooterTab, Left, Body, Right, Button, Icon, Title } from "native-base";
import ChatScreen from "./chat";
import ChildPage from "./child";
import PersonScreen from "./person";
import HomeScreen from "./home";
import Swiper from "react-native-swiper";

let currentIndex = 0;

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            route: "index",
            more: <View />,
            title: "",
        };
        this.set = this.set.bind(this);
        this.back = this.back.bind(this);
        this.go = this.go.bind(this);
    }
    set(obj) {
        this.setState(obj);
    }
    back() {
        this.setState({
            route: "index",
        });
    }
    go(index) {
        this.viewPager.scrollBy(index - currentIndex, true);
        currentIndex = index;
    }
    render() {
        if (this.state.route !== "index") {
            return (
                <ChildPage title={this.state.title} callback={this.back}>
                    {this.state.more}
                </ChildPage>
            );
        } else {
            return (
                <Container>
                    <Content>
                        <Swiper bounces={true } showsButtons={false} index={currentIndex} scrollEnabled={false} showsPagination={false} loop={true} ref={viewPager => { this.viewPager = viewPager; }} >
                            <HomeScreen set={this.set} />
                            <View>
                                <Button onPress={this.go} style={{backgroundColor: "red"}} />
                            </View>
                            <ChatScreen set={this.set}/>
                            <PersonScreen set={this.set}/>
                        </Swiper>
                    </Content>
                    <View>
                        <Footer>
                            <FooterTab>
                                <Button onPress={() => {
                                    this.go(0);
                                    }}><Icon name="paper" /></Button>
                                <Button onPress={() => {
                                    this.go(1);
                                    }}><Icon name="camera" /></Button>
                                <Button onPress={() => {
                                    this.go(2);
                                    }}><Icon name="chatboxes" /></Button>
                                <Button onPress={() => {
                                    this.go(3);
                                    }}><Icon name="person" /></Button>
                            </FooterTab>
                        </Footer>
                    </View>
                </Container>
            )
        }
    }
}
