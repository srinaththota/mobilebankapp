import React, { useState } from 'react';
import { View , TextInput ,StyleSheet , Button , ScrollView , Text} from 'react-native';

const input = props=>{
    const [cId,setCusId]=useState('');

    const customerIdHandler=id=>{
        setCusId(id);
    }
    return(
        <ScrollView>
           
        <View style={styles.form}>
        <Text style={styles.label}>Customer ID</Text>
           <TextInput style={styles.textinput}  
           keyboardType='numeric'
           onChangeText={customerIdHandler} 
           value={cId}/>
           <Text style={styles.label}>MPin</Text>
           <TextInput style={styles.textinput}  keyboardType='numeric'/>
           <Button title="Login" style={styles.button} onPress={()=>{
               props.navigation.push('dashboard');
           }}/>
          
        </View>
        </ScrollView>
    );
}
input.navigationOptions={
title:'Please Login',
headerStyle:{
 backgroundColor:'red'
},
headerTintColor:'white'
}

const styles=StyleSheet.create(
    {
        form:{
            margin:30
            
        },
        label:{
            fontSize:18,
            marginBottom:15
        },
        textinput:{
            borderBottomColor:'#ccc',
            borderBottomWidth:1,
            marginBottom:15,
            paddingVertical:4,
            paddingHorizontal:2
        },
        button:{
            maxHeight:40
        }

    }
)
export default input;