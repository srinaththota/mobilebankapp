import React from 'react';
import { View , Text ,StyleSheet , Button} from 'react-native';

const credifCards = props=>{
    return(
        <View style={styles.screen}>
            <Text>
            credifCards
            </Text>
          <Button title="go back" onPress={()=>{
              props.navigation.goBack();
          }} />
        </View>
    );
}
credifCards.navigationOptions={
title:'Credit card details',
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
export default credifCards;