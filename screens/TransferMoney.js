import React from 'react';
import { View , Text ,StyleSheet , Button} from 'react-native';
import { useSelector } from 'react-redux';
const transferMoney = props=>{

    const transferStatus=useSelector(state=>state.transfer.transferStatusfromStore);
    return(
        <View style={styles.screen}>
            <Text>
                TransferMoney {transferStatus}
            </Text>
         
        </View>
    );
}
transferMoney.navigationOptions={
title:'Transfer money',
headerStyle:{
 backgroundColor:'red'
},
headerTintColor:'white'
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
export default transferMoney;