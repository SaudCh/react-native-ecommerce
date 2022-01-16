import { StyleSheet, Text, FlatList, View } from 'react-native'
import { useContext } from 'react'
import { CartContext } from './CartContext'

const Cart = () => {
    const cart = useContext(CartContext)

    return (
        <View>
            <FlatList
                data={cart.cart}
                renderItem={
                    ({ item }) => (
                        <Text style={{ fontWeight: 'bold', fontSize: 18, marginVertical: 5 }}><Text>{item.quantity}</Text> {item.name} PKR {item.price}</Text>
                    )
                }
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({})
