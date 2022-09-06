import React from 'react'
import {StyleSheet,Modal, Text, Button,TouchableOpacity, View,Linking} from 'react-native' 
import { useNavigation, useRoute } from '@react-navigation/native'
import Clipboard from '@react-native-community/clipboard'
const supportedURL = "https://paypal.me/devoplink?country.x=BE&locale.x=fr_FR";
const bitcoin = "bitcoin:35UHKw1NgJveAUCKut6DFV8Dhra68y7Yrn"

export default function modalNative(props){
const copyToClipboard = () => {
    Clipboard.setString('hello world')
  }
    const navigation = useNavigation();

    function Home(){
        navigation.navigate('React-native')
        props.changer()
    }
    function Chapitre1(){
        navigation.navigate('ReactNative1')
        props.changer()
    }
    function Chapitre2(){
        navigation.navigate('ReactNative2')
        props.changer()
    }
    function Chapitre3(){
        navigation.navigate('ReactNative3')
        props.changer()
    }
    function Chapitre4(){
        navigation.navigate('ReactNative4')
        props.changer()
    }
    function Chapitre5(){
        navigation.navigate('ReactNative5')
        props.changer()
    }
    function Chapitre6(){
        navigation.navigate('ReactNative6')
        props.changer()
    }
    function Chapitre7(){
        navigation.navigate('ReactNative7')
        props.changer()
    }
    function Chapitre8(){
        navigation.navigate('ReactNative8')
        props.changer()
    }
    function Chapitre9(){
        navigation.navigate('ReactNative9')
        props.changer()
    }
    function Chapitre10(){
        navigation.navigate('ReactNative10')
        props.changer()
    }
   
    return(
        
<Modal    animationType= {"slide"} transparent= {false}  visible= {props.etat}>
    <View style={styles.vue}>
                <Text style={styles.titre}>React-native Chapitre</Text>
    
                <TouchableOpacity onPress={ () =>Home()}>
                     <Text style={styles.lien}><Text style={{color:"blue"}}>1.</Text>   Introduction</Text>
                </TouchableOpacity>          
             
                <TouchableOpacity onPress={ () =>Chapitre1()}>
                     <Text style={styles.lien}><Text style={{color:"blue"}}>2.</Text>   Installation</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () =>Chapitre2()}>
                     <Text style={styles.lien}><Text style={{color:"blue"}}>3.</Text>   Architecture</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () =>Chapitre3()}>
                     <Text style={styles.lien}><Text style={{color:"blue"}}>4.</Text>   Props</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () =>Chapitre4()}>
                     <Text style={styles.lien}><Text style={{color:"blue"}}>5.</Text>   Stats</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () =>Chapitre5()}>
                     <Text style={styles.lien}><Text style={{color:"blue"}}>6.</Text>   Balises</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () =>Chapitre6()}>

                     <Text style={styles.lien}><Text style={{color:"blue"}}>7.</Text>   Router</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () =>Chapitre7()}>
                     <Text style={styles.lien}><Text style={{color:"blue"}}>8.</Text>   Debug</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () =>Chapitre8()}>
                     <Text style={styles.lien} ><Text style={{color:"blue"}}>9.</Text>   Quizz</Text>
                </TouchableOpacity>
                {/*
                <TouchableOpacity onPress={ () =>Chapitre5()}>
                     <Text style={style.lien} Style={{color:"green"}}>10. Quizz</Text>
                </TouchableOpacity>
                */}
<Text>{"\n"}{"\n"}</Text>
<Button title=" Donnation Paypal" color="green" onPress={ ()=>Linking.openURL(supportedURL)} />
<Text>{"\n"}</Text>
<Button title="Bitcoin link donnation" color="orange" onPress={ () =>copyToClipboard()}/>
<Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text>
<View style={styles.bot}>
            <Button style={{height:5,position:"absolute",left:0,right:0,bottom:0}}
              onPress={ () => props.changer()}
              title="Close"
              color="red"
              position="absolute"
            />
</View>
            </View>
           </Modal>
    )
}

const styles= StyleSheet.create({
vue:{
    backgroundColor:"#F2E1DE",
    height:"100%"
},
titre:{
    fontSize:30,
    marginTop:50,
    marginBottom:20,
    marginLeft:10,
    fontWeight:"bold",
    fontFamily:"cursive"

    
},
bot:{
    position: 'absolute',
    top:0,
    right:0,
},
lien:{
    fontSize:20,
 
    margin:10

}

})
