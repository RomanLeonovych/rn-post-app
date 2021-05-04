import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const PostScreen = ({route}) => {

    const {postId, date} = route.params

    return (<View style={styles.center}>
        <Text>{date}</Text>
    </View>)
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
