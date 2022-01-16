import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { fireStore } from '../../firebase'
import Card from './Card'

export default function Home(props) {
    const { navigation } = props
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true);

    var newArray = [];

    useEffect(() => {
        fireStore.collection('products')
            .get()
            .then(querySnapshot => {
                //console.log('Total users: ', querySnapshot.size);
                querySnapshot.forEach(documentSnapshot => {
                    //console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                    let newProd = documentSnapshot.data()
                    newProd['id'] = documentSnapshot.id

                    newArray.push(newProd);
                    //console.log(newArray)
                });
                setData(newArray);

            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {
                setLoading(false)
                console.log('Experiment completed');
            });
        //console.log(data)
    }, []);

    return (
        <View style={{ height: "100%" }}>
            {isLoading ? (
                <View style={{ ...styles.activityContainer }}>
                    <ActivityIndicator size="large" color="red" />
                </View>
            ) : (<FlatList
                data={data}
                renderItem={
                    ({ item }) => (
                        <Card data={item} navigation={navigation} />
                    )
                }
                keyExtractor={item => item.id}
            />)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    activityContainer: {
        height: 400,
        alignContent: "center",
        justifyContent: "center",
    },
});
