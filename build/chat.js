import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { Container, Content,Text, Thumbnail, ListItem, Footer, FooterTab, Left, Body, Right, Button, Icon, Title } from "native-base";
import { ChildPage } from "./child";

const user = {
    2: {
        name: "小公举",
        avatar: require("../img/xgj.jpg"),
        history: [
            {
                _id: 5,
                text: "略~不告诉你",
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: "我",
                    // avatar: "http://tva3.sinaimg.cn/crop.0.0.750.750.180/6e48db9ejw8fbx2jwlc5yj20ku0kuq3m.jpg",
                },
            },      
            {
                _id: 4,
                text: "什么App这么神奇？？",
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: "小公举",
                    avatar: "http://tva3.sinaimg.cn/crop.0.0.750.750.180/6e48db9ejw8fbx2jwlc5yj20ku0kuq3m.jpg",
                },
            },
            {
                _id: 3,
                text: "用App试衣服呀",
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: "我",
                    // avatar: "http://tva3.sinaimg.cn/crop.0.0.750.750.180/6e48db9ejw8fbx2jwlc5yj20ku0kuq3m.jpg",
                },
            },      
            {
                _id: 2,
                text: "在干嘛",
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: "小公举",
                    avatar: "http://tva3.sinaimg.cn/crop.0.0.750.750.180/6e48db9ejw8fbx2jwlc5yj20ku0kuq3m.jpg",
                },
            },           
            {
                _id: 1,
                text: "hello",
                createdAt: new Date(Date.UTC(2017, 4, 22, 21, 20, 0)),
                user: {
                    _id: 2,
                    name: "小公举",
                    avatar: "http://tva3.sinaimg.cn/crop.0.0.750.750.180/6e48db9ejw8fbx2jwlc5yj20ku0kuq3m.jpg",
                },
            },



        ],
    },
    3: {
        name: "大头死变态",
        avatar: require("../img/dtsbt.jpg"),
        history: [
            {
                _id: 1,
                text: "hello",
                createdAt: new Date(Date.UTC(2017, 4, 22, 21, 20, 0)),
                user: {
                    _id: 3,
                    name: "大头死变态",
                    avatar: "http://tva4.sinaimg.cn/crop.0.0.664.664.180/70140c81jw8f3fpp7z316j20ig0igwfs.jpg",
                },
                // image: "https://facebook.github.io/react/img/logo_og.png",
            },
        ],
    },
    4: {
        name: "书记",
        avatar: require("../img/sj.jpg"),
        history: [
            {
                _id: 1,
                text: "hello",
                createdAt: new Date(Date.UTC(2017, 4, 22, 21, 20, 0)),
                user: {
                    _id: 4,
                    name: "书记",
                    avatar: "http://tvax1.sinaimg.cn/crop.13.0.613.613.180/006f9d6wly8fedggj9395j30hs0h1t97.jpg",
                },
                // image: "https://facebook.github.io/react/img/logo_og.png",
            },
        ],
    },
    5: {
        name: "马老板",
        avatar: require("../img/mlb.jpg"),
        history: [
            {
                _id: 1,
                text: "hello",
                createdAt: new Date(Date.UTC(2017, 4, 22, 21, 20, 0)),
                user: {
                    _id: 5,
                    name: "马老板",
                    avatar: "http://tva1.sinaimg.cn/crop.0.0.180.180.180/7fde8b93jw1e8qgp5bmzyj2050050aa8.jpg",
                },
                // image: "https://facebook.github.io/react/img/logo_og.png",
            },
        ],
    },
    6: {
        name: "宝宝",
        avatar: require("../img/bb.jpg"),
    },
    7: {
        name: "未命名用户",
        avatar: require("../img/mg.jpg"),
    },
    8: {
        name: "用户未命名",
        avatar: require("../img/mg2.jpg"),
    },
    9: {
        name: "未命名用户9",
        avatar: require("../img/mg3.jpg"),
    },
    10: {
        name: "未命名用户3",
        avatar: require("../img/mg4.jpg"),
    },
    11: {
        name: "未命名用户2",
        avatar: require("../img/mg5.jpg"),
    },
};

export default class ChatScreen extends React.Component {
    constructor(props) {
        super(props);
        this.handlePress = this.handlePress.bind(this);
    }
    handlePress(id) {
        this.props.set({
            route: "page",
            title: user[id].name,
            more: <ChatBox id={id} />,
        });
    }
    render() {
        return (
            <Container>
                <Content>
                    <ChatItem id="2" handlePress={this.handlePress}/>
                    <ChatItem id="3" handlePress={this.handlePress}/>
                    <ChatItem id="4" handlePress={this.handlePress}/>
                    <ChatItem id="5" handlePress={this.handlePress}/>
                    <ChatItem id="6" handlePress={this.handlePress}/>
                    <ChatItem id="7" handlePress={this.handlePress}/>
                    <ChatItem id="8" handlePress={this.handlePress}/>
                    <ChatItem id="9" handlePress={this.handlePress}/>
                    <ChatItem id="10" handlePress={this.handlePress}/>
                    <ChatItem id="11" handlePress={this.handlePress}/>
                </Content>
            </Container>
        )
    }
}

class ChatItem extends React.Component {
    /**
     * List Item for ChatScreen
     * @param {*} props {id: number(user)}
     */
    constructor(props) {
        super(props);
    }
    render() {
        let history = user[this.props.id].history;
        let avatar = user[this.props.id].avatar;
        let lastTalk = "Doing what you like will always keep you happy . ";
        return (
            <ListItem avatar onPress={() => {this.props.handlePress(this.props.id)}}>
                <Left>
                    <Thumbnail source={avatar} />
                </Left>
                <Body>
                    <Text>{user[this.props.id].name}</Text>
                    <Text note>{lastTalk}</Text>
                </Body>
                <Right>
                    <Text note>3:43 pm</Text>
                </Right>
            </ListItem>
        )
    }
}

// props: {
//    id: number 
// }
class ChatBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: user[this.props.id].history };
        this.onSend = this.onSend.bind(this);
        this.sendImg = this.sendImg.bind(this);
    }
    sendImg() {
        let mes = {
            _id: Math.random(),
            createdAt: new Date(),
            user: {
                _id: 1,
                name: "我",
            },
            image: "https://img.alicdn.com/bao/uploaded/i4/TB1elHiPVXXXXacXpXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg",
        };
        mes = [ mes ];
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, mes),
            };
        });
    }
    onSend(messages = []) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, messages),
            };
        });
        user[this.props.id].history = GiftedChat.append(this.state.messages, messages);
    }
    render() {
        return (
            <GiftedChat onPressActionButton={this.sendImg}  messages={this.state.messages} onSend={this.onSend} user={{
                 _id: 1,
                 name: "我",
            }}
            />
        );
    }
}
