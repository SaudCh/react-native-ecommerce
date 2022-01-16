import { StyleSheet, Text, View } from 'react-native'

const Product = (props) => {
    const { route } = props;
    const { product } = route.params;

    return (
        <View style={{ ...styles.container }}>
            <Image
                style={{ ...styles.img }}
                source={{ uri: product.image }}
            />
            <Center>
                <Button
                    style={{ ...styles.cardButton }} _text={{
                        color: COLORS.dPink,
                        fontSize: "xl"
                    }}>
                    To Cart
                </Button>
                <Heading>{product.name}</Heading>
                <Text style={{ fontSize: 20, color: '#A9A9A9' }}>PKR {product.price}</Text>
            </Center>

        </View>
    )
}

export default Product

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
        margin: 10,
    },
    img: {
        width: 300,
        height: 200,
        alignSelf: 'center'
    },
    cardButton: {
        backgroundColor: 'transparent',
        color: COLORS.dPink
    }
});
