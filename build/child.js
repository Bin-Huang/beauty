import React from "react";
import { Container, Header, Content, Footer, FooterTab, Left, Body, Right, Button, Icon, Title } from "native-base";
import { TouchableHighlight } from "react-native";

// const themeColor = "rgb(220,33,112)";

// props: {
//     title: string,
//     children: object(Element),
//     callback: function
// }
export default class ChildPage extends React.Component {
    /**
     * 二级基础页面
     * @param {*} props title:string, children: obj, callback:f
     */
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={this.props.callback}>
                            <Icon name="arrow-back" />
                            <Title> {this.props.title}</Title>
                        </Button>
                    </Left>
                    {/*<Body>
                    </Body>*/}
                </Header>
                {this.props.children}
            </Container>
        );
    }
}
