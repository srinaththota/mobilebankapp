import React from 'react';
import { View , Text ,StyleSheet , Button} from 'react-native';

const offers = props=>{
    return(
        <View style={styles.screen}>
            <Text>
                Offers
            </Text>
          <Button title="go back" onPress={()=>{
              props.navigation.goBack();
          }} />
        </View>
    );
}
offers.navigationOptions={
title:'Offers for you exclusively',
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
export default offers;