import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input } from 'native-base'
import { COLORS } from '../Const/color'
import { Button } from "native-base"
import { CartContext } from '../Cart/CartContext'

const Details = () => {
    const cart = useContext(CartContext)
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [date, setDate] = useState("")
    const [cvc, setCvc] = useState("")

    const confirmOrder = () => {
        console.log(name, number, date, cvc)
    }

    return (
        <View style={{ ...styles.container }}>
            <Text style={{ color: COLORS.dPink, fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Card Details</Text>
            <View>
                <Text style={{ ...styles.inputText }}>Name</Text>
                <Input variant="underlined"
                    placeholder="Full Name"
                    value={name}
                    onChangeText={setName}
                    secureTextEntry
                />
            </View>
            <View>
                <Text style={{ ...styles.inputText }}>CARD NUMBER</Text>
                <Input variant="underlined"
                    placeholder="1234 5678 1234"
                    value={number}
                    onChangeText={setNumber}
                />
            </View>
            <View>
                <Text style={{ ...styles.inputText }}>Expiry</Text>
                <Input variant="underlined"
                    placeholder="MM/YY"
                    value={date}
                    onChangeText={setDate}
                />
            </View>
            <View>
                <Text style={{ ...styles.inputText }}>CVC/CCV</Text>
                <Input variant="underlined"
                    placeholder="CVC"
                    value={cvc}
                    onChangeText={setCvc}
                />
            </View>
            <Button onPress={() => confirmOrder()} style={{ marginTop: 10 }}>
                Proceed to Payment
            </Button>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        padding: 20,
        borderRadius: 10

    }
})
