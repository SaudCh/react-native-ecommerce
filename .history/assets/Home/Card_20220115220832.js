import React from "react"
import { Center, Heading, Button } from "native-base"
import { View, Text, StyleSheet, Image } from 'react-native'
import { COLORS } from "../Const/color"

const Card = (props) => {
    const { data } = props
    const imgUrl = "../uploads/Images/" + data.image;
    console.log(imgUrl)
    return (
        <View style={{ ...styles.container }}>
            <Image
                style={{ ...styles.img }}
                source={require(imgUrl)}
            />
            <Center>
                <Heading>{data.name}</Heading>
                <Text style={{ fontSize: 20, color: '#A9A9A9' }}>PKR {data.price}</Text>
            </Center>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button
                    style={{ ...styles.cardButton }}
                    _text={{
                        color: COLORS.dPink,
                        fontSize: "xl"
                    }}>
                    View Details
                </Button>
                <Button
                    style={{ ...styles.cardButton }} _text={{
                        color: COLORS.dPink,
                        fontSize: "xl"
                    }}>
                    To Cart
                </Button>
            </View>
        </View>
    )
}

export default Card
const styles = StyleSheet.create({
    container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        borderRadius: 10,

        backgroundColor: COLORS.white,
        padding: 20,
    },
    img: {
        width: 300,
        height: 200
    },
    cardButton: {
        backgroundColor: 'transparent',
        color: COLORS.dPink
    }
});