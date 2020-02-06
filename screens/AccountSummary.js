import React from 'react';
import { View , Text ,StyleSheet} from 'react-native';

const accountSummary = props=>{
    return(
        <View style={styles.screen}>
            <Text>
            account Summary Screen
            </Text>
        </View>
    );
}

const styles=StyleSheet.create(
    {
        screen:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        }
    }
)
export default accountSummary;