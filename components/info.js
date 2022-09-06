import React from 'react';
import { StyleSheet, Text, ScrollView,Modal,Button,Linking,View,Dimensions } from 'react-native';
import Clipboard from '@react-native-community/clipboard'
const bitcoin = "bitcoin:35UHKw1NgJveAUCKut6DFV8Dhra68y7Yrn"
const supportedURL = "https://paypal.me/devoplink?country.x=BE&locale.x=fr_FR";
const copyToClipboard = () => {
    Clipboard.setString('hello world')
  }
class Info extends React.Component{
   
    render(){
        return(
            <Modal animationType= {"slide"} transparent= {false}  visible= {this.props.etat}>
            
            <ScrollView style={styles.vue}>
                <Text>{"\n"}</Text>
                <Text style={styles.titre}> Bienvenue dans Apprendre la programmation</Text>
                <Text style={styles.text}> 
                    L'application essai de fournire toutes les possibilités que vous avez à savoir afin d'avoir les bases de la programmation avec exercices en mode de quiz, cela vous permettra d'être opérationnel afin de crée n'importe quelle application 
                </Text>
                <Text style={styles.text}>
                    Nos programmeurs sont bénévoles afin de nous permettre l'ajout d'autres langages de programmation et soutenir notre projet une donation sera la bienvenue
                </Text>
                <Text style={styles.titre}> faire un don {"\n"}</Text>
               
                <Button title="Paypal" color="green" onPress={ ()=>Linking.openURL(supportedURL)} />
                <Text>{"\n"}</Text>
<Button title="Bitcoin link donnation" color="orange" onPress={ () =>copyToClipboard()}/>

<View style={styles.bot}>
                <Button style={{position:"relative",marginTop:100}}
              onPress={ () => this.props.changer("reactNative")}
              title="Close"
              color="red"
            /></View>
            </ScrollView>
            </Modal>
        )
    }
}
export default Info;
const styles = StyleSheet.create({
    direct:{
        display:"flex",
        flexDirection:"row",
        height:Dimensions.get('screen').height
        
       
       
    },
    bot:{
        position: 'absolute',
        top:0,
        right:0,
    },
    premier:{
       
        fontWeight:"bold",
        color:"blue",
        fontSize:20,
        display: 'flex',
        justifyContent:'center',
        alignItems:'center'
        

    },
    deuxieme:{
        
        fontSize:20,
        justifyContent:"center",
        display: 'flex',
        
        alignItems:'center'
      
    },
   
    content:{
        display:"flex",
        alignItems:"center",
        height:40
    },
    image :{
        width:400,
        height:300,
        justifyContent : 'center',
        borderWidth: 4,
        borderColor:'black',
        justifyContent: 'space-between',
        resizeMode: 'contain',
        margin:6

    },
    titre:{
        fontSize:30,
        marginTop:10,
        
        marginLeft:10,
        fontWeight:"bold",
        fontFamily:"cursive"
        
    },
    titre2:{
        fontSize:25,
        marginTop:50,
        marginBottom:20,
        marginLeft:5,
        fontFamily:"cursive"
    },
    text:{
        fontSize:20,
        fontFamily:"serif",
        margin:10,
        backgroundColor:"#F2E1DE",
        
        padding:4
    },
    text2:{
        fontSize:20,
        backgroundColor:"black",
        color:"white",
        marginLeft:20,
        marginRight:20,
      
        padding:10
    },
    vue:{
        backgroundColor:"#ECE4E2",
        height:Dimensions.get('screen').height,
        
    }

})

