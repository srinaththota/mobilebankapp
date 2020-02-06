import React from 'react';
import { View , Text ,StyleSheet , Button} from 'react-native';

const applyLoan = props=>{
    return(
        <View style={styles.screen}>
            <Text>
                apply Loan Screen
            </Text>
          <Button title="go back" onPress={()=>{
              props.navigation.goBack();
          }} />
        </View>
    );
}
applyLoan.navigationOptions={
title:'Apply for loan in 10 secs',
headerStyle:{
 backgroundColor:'red'
}
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
export default applyLoan;