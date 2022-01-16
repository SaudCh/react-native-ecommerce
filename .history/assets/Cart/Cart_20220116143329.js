import { StyleSheet, Text, FlatList, View } from 'react-native'
import { useContext } from 'react'
import { CartContext } from './CartContext'
import { FontAwesome5 } from '@expo/vector-icons';


const Cart = () => {
    const cart = useContext(CartContext)

    return (
        <View>
            <FlatList
                data={cart.cart}
                renderItem={
                    ({ item }) => (
                        <Text style={{ fontWeight: 'bold', fontSize: 18, marginVertical: 5 }}>
                            <Text style={{ color: '#A5A5A5' }}>{item.quantity} </Text>
                            {item.name} PKR {item.price}{" "}
                            <FontAwesome5 name="trash" size={20} color="#FF0000" />
                        </Text>
                    )
                }
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({})
