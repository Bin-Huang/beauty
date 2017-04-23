import React from "react";
import { View } from "react-native";
import { Container, Content, Footer, FooterTab, Left, Body, Right, Button, Icon, Title } from "native-base";
import ChatScreen from "./chat";
import ChildPage from "./child";
import PersonScreen from "./person";

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            route: "index",
            current: "home",
            more: <View />,
            title: "",
        };
        this.set = this.set.bind(this);
        this.back = this.back.bind(this);
    }
    set(obj) {
        this.setState(obj);
    }
    back() {
        this.setState({
            route: "index",
            current: this.state.current,
        });
    }
    render() {
        if (this.state.route !== "index") {
            return (
                <ChildPage title={this.state.title} callback={this.back}>
                    {this.state.more}
                </ChildPage>
            );
        } else {
            let MyContent = Content;
            if (this.state.current === "chat") {
                MyContent = ChatScreen;
            } else if (this.state.current === "person") {
                MyContent = PersonScreen;
            }
            return (
                <Container>
                    <MyContent set={this.set} />
                    <Footer>
                        <FooterTab>
                            <Button active={this.state.current === "home" ? true : false}
                            onPress={() => {this.setState({current: "home"}); }}>
                                <Icon name="paper" />
                            </Button>
                            <Button active={this.state.current === "camera" ? true : false}
                            onPress={() => {this.setState({current: "camera"}); }}>
                                <Icon name="camera" />
                            </Button>
                            <Button active={this.state.current === "chat" ? true : false}
                            onPress={() => {this.setState({current: "chat"}); }}>
                                <Icon name="chatboxes" />
                            </Button>
                            <Button active={this.state.current === "person" ? true : false}
                            onPress={() => {this.setState({current: "person"}); }}>
                                <Icon name="person" />
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            );
        }
    }
}
