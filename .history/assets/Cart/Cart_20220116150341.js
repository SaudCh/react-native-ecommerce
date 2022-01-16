import { StyleSheet, Text, FlatList, View } from 'react-native'
import { useContext, useState, useEffect } from 'react'
import { CartContext } from './CartContext'
import { FontAwesome5 } from '@expo/vector-icons';
import { Button } from 'native-base'


const Cart = () => {
    const cart = useContext(CartContext)

    const [total, setTotal] = useState(0);
    useEffect(() => {
        let tot = 0;
        cart.cart.map((e) => (tot = parseInt(e.price) * e.quantity + tot));
        setTotal(tot);
    }, [cart.cart]);

    return (
        <View>
            <View style={{ ...styles.totalContainer }}>
                <Text>Total: {total}</Text>
                <Button style={{ backgroundColor: 'transparent' }}>
                    Order Now
                </Button>
            </View>
            <FlatList
                data={cart.cart}
                renderItem={
                    ({ item }) => (
                        <Text style={{ fontWeight: 'bold', fontSize: 18, marginVertical: 5 }}>
                            <Text style={{ color: '#A5A5A5' }}>{item.quantity} </Text>
                            {item.name} PKR {item.price}{" "}
                            <FontAwesome5 onPress={() => cart.removeCart(item.id)} name="trash" size={20} color="#FF0000" />
                        </Text>
                    )
                }
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        padding: 20,

    }
})
