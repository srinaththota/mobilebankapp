import React from 'react';
import { View , Text ,StyleSheet , Button , ScrollView , KeyboardAvoidingView} from 'react-native';
import { HeaderStyleInterpolators } from 'react-navigation-stack';

const login = props=>{
    console.log(props);
    return(
        <View style={styles.screen}>
            <Text>
                Login Screen       
            </Text>
            <Button  title="Click" onPress={()=>{
                props.navigation.push('Loan');          
            }}/>
            <Button  title="Click" onPress={()=>{
                props.navigation.navigate({routeName:'Loan'});          
            }}/>
            <Button  title="Click" onPress={()=>{
                props.navigation.navigate({routeName:'Loan'});          
            }}/>
        </View>
    );
}
login.navigationOptions={
    title:'welcome to the Sample Bank',
    
    headerStyle:{
        backgroundColor:'red',
        alignItems:'center'
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

export default login;