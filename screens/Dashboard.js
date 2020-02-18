import React, { useCallback } from 'react';
import { View , Text ,StyleSheet , Button , ScrollView , KeyboardAvoidingView} from 'react-native';
import { HeaderStyleInterpolators } from 'react-navigation-stack';
import { useDispatch } from 'react-redux';
import  * as transferAction  from '../store/actions/transferActions';
const dashboard = props=>{
    
    const dispatch=useDispatch();
    const transferMoneyHandler = ()=>{
        dispatch(transferAction.transferMoneyAction());     
        props.navigation.push('transfer'); 
    }

    return(
        <View style={styles.screen}>
        <View >
            <Text>
                Select your Option       
            </Text>
        </View> 
        <View style={styles.buttonContainer}>
            <View style={styles.button}><Button  title="Summary" onPress={()=>{
                props.navigation.push('Summary');          
            }}/></View> 
            <View style={styles.button}><Button  title="Transfer" onPress={transferMoneyHandler}/></View>
            </View> 
            <View style={styles.buttonContainer}>
            <View style={styles.button}><Button  title="Loan" onPress={()=>{
                props.navigation.push('Loan');          
            }}/></View> 
            <View style={styles.button}><Button  title="CreditCard" onPress={()=>{
                props.navigation.push('creditCards');          
            }}/></View>
            </View>
            <View style={styles.buttonContainer}>
            <View style={styles.button}><Button  title="Transactions" onPress={()=>{
                props.navigation.push('Transactions');          
            }}/></View> 
            <View style={styles.button}><Button  title="Offers" onPress={()=>{
                props.navigation.push('offers');          
            }}/></View>
            </View>                      
        </View>

    );
}
dashboard.navigationOptions={
    title:'welcome to the Sample Bank',
    
    headerStyle:{
        backgroundColor:'red',
    }
}

const styles=StyleSheet.create(
    {
        screen:{
            flex:1,
            flexDirection:'column',
            alignItems:'center',
            
            marginVertical:90
        },
        buttonContainer:{
            flexDirection:'row',
            width:400,
            justifyContent:'space-between',
            padding:30,
            marginHorizontal:0
        },
        button:{
            width:130
        }

    }
)

export default dashboard;