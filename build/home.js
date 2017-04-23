import React from "react";
import { Image } from 'react-native';
import { Container, Icon, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';
import ChildPage from "./child";

const cards = [
    {
        text: "春季职场新套路",
        id: 0,
        name: 'One',
        desc: '',
        heart: 987,
        love: false,
        image: require('../img/dp1.jpg'),
    },
    {
        text: 'Liki斩男百搭',
        id: 1,
        name: 'two',
        desc: '',
        heart: 577,
        love: false,
        image: require('../img/dp2.jpg'),
    },
    {
        text: '韩都衣舍少女百搭',
        id: 2,
        name: 'three',
        desc: '',
        heart: 701,
        love: false,
        image: require('../img/dp3.jpg'),
    },
];
export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        let loves = [];
        let nums = [];
        cards.map((item) => {
            if (item.love) {
                loves.push(true);
            } else {
                loves.push(false);
            }
            nums.push(item.heart);
        });
        this.state = {
            cards: cards,
            loves: loves,
            nums: nums,
        }
    }
    render() {
            return (
                <Container>
                    <View>
                        <DeckSwiper
                            dataSource={this.state.cards}
                            renderItem={item =>
                                <Card style={{ elevation: 3 }}>
                                    <CardItem>
                                        <Left>
                                            <Thumbnail source={item.image} />
                                            <Body>
                                                <Text>{item.text}</Text>
                                                <Text note>{item.desc}</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem cardBody>
                                        <Image  source={item.image} />
                                    </CardItem>
                                    <CardItem>
                                        <Icon name="heart" style={{ 
                                            color: this.state.loves[item.id] ? "#ED4A6A" : "gray"
                                            }} onPress={() => {
                                                cards[item.id].love = ! cards[item.id].love;
                                                let loves = this.state.loves;
                                                loves[item.id] = ! loves[item.id];

                                                let nums = this.state.nums;
                                                if (loves[item.id]) {
                                                    cards[item.id].heart ++;
                                                    nums[item.id] ++;
                                                } else {
                                                    cards[item.id].heart --;
                                                    nums[item.id] --;
                                                }
                                                this.setState({
                                                    loves: loves,
                                                    nums: nums,
                                                });
                                            }} />
                                        <Text>{"" + item.heart}</Text>
                                    </CardItem>
                                </Card>
                            }
                        />
                    </View>
                </Container>
            );
        }
}