import React from 'react'
import {Modal, Text, Button, ScrollView,View,StyleSheet,Image,Dimensions} from 'react-native' 
import { useNavigation, useRoute } from '@react-navigation/native'
import ImageZoom from 'react-native-image-pan-zoom';

import img from '../../images/stack2.png'
import adresse from '../../images/adresse.png'

export default function Chapitre4() {
    
   // const navigation = useNavigation()
    const native = " import { NavigationContainer } from '@react-navigation/native'"
    const stack="import { createNativeStackNavigator } from '@react-navigation/native-stack'"
    const home=" import Home from './components/home"
    const adresses="import adresse from './components/adresse"
    const init="const Stack = createNativeStackNavigator();"
    const lien="import { useNavigation } from '@react-navigation/native'"
    const navigationn="const navigation = useNavigation()"
    const touchable="import {View,TouchableOpacity} from 'react-native'"

        return(
            <ScrollView style={styles.vue}>
                    <Text style={styles.titre}>La navigation</Text>
                    <Text style={styles.text}>
                       Jusqu'ici nous avons vue comment écrire du texte, à quoi servent les props et les stats voire même l'utilisation d'un bouton{"\n"}
                       Mais comment faire pour passer d'une page à une autre ceux qui est le plus essentiel dans la création d'une application pour se faire nous allons utiliser {"\n"}
                      <Text style={{color:"blue"}}>
                          1. @react-navigation/native{"\n"}
                          2. @react-navigation/native-stack
                      </Text>

                    </Text>
                    <Text style={styles.titre2}>Installation</Text>
                    <Text style={styles.text}>
                        Dans la console dans la base de notre projet veuillez écrire : {"\n"}{"\n"}
                        <Text style={styles.text2}>
                             npm install @react-navigation/native-stack @react-navigation/native{"\n"}{"\n"}
                        </Text>
                        ou séparément {"\n"}{"\n"}
                        <Text style={styles.text2}>
                             npm install @react-navigation/native-stack
                        </Text>{"\n"} {"\n"}
                        <Text style={styles.text2}>
                             npm i install @react-navigation/native
                        </Text>
                    </Text>  
                    <Text style={styles.text}>
                        Dans notre fichier App.js nous allons initialiser nos deux pages homme et adresse{"\n"}
                        N'oubliez pas de faire un import{"\n"}{"\n"}
                      <Text style={{color:"blue"}}>{native} </Text>  {"\n"}{"\n"}
                      <Text style={{color:"blue"}}>{stack}</Text>{"\n"}{"\n"}
                       Ainsi que les deux pages{"\n"}{"\n"}
                       <Text style={{color:"blue"}}>{home} </Text>  {"\n"}{"\n"}
                      <Text style={{color:"blue"}}>{adresses}</Text>{"\n"}{"\n"}
                       et juste après nous allons initialiser
                    </Text>
                    <Text style={styles.text}>
                        Nous allons créés notre stack{"\n"}{"\n"}
                        <Text style={{color:"blue"}}>{init}</Text>
                    </Text>
                    <ImageZoom  cropWidth={Dimensions.get('window').width-40}
                       cropHeight={300}
                       imageWidth={350}
                       imageHeight={400} >
                      <Image source={img} style={styles.image} />
                    </ImageZoom>
                    <Text style={styles.text}>
                        La page de garde sera le premier stack!{"\n"}
                        Dirigez-vous dans la page Home et écrivez ceci
                    </Text>
                    <ImageZoom  cropWidth={Dimensions.get('window').width-40}
                       cropHeight={300}
                       imageWidth={350}
                       imageHeight={400} >
                    <Image source={adresse} style={styles.image} />
                    </ImageZoom>
                    <Text style={styles.text}>
                        Comme vous pouvez le voir nous importons useNavigation{"\n"}{"\n"}
                        <Text style={styles.text2}>{lien}</Text>{"\n"}
                        et dans la fonction nous créons une navigation {"\n"}{"\n"}
                        <Text style={styles.text2}>{navigationn}</Text>{"\n"}{"\n"}
                        comme vous Pouvez le voir nous avons importé ToucheOpacity qui permt de faire une clique dans ceux qui sont mis à l'intérieur pour éviter d'utiliser un bouton{"\n"}{"\n"}
                        <Text style={styles.text2}>{touchable}</Text>{"\n"}{"\n"}
                        Une fois fait ben enregistré et cliqué sur le lien et hope vous vous retrouvez dans la page "adresse" félicitation.
                    </Text>


            </ScrollView>
        )
    
}
const styles = StyleSheet.create({
    direct:{
        display:"flex",
        flexDirection:"row",
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
       
        backgroundColor:"#F2E1DE",
         margin:10,
        padding:4
    },
    text2:{
        fontSize:20,
        backgroundColor:"black",
        color:"white",
        marginLeft:20,
        marginRight:20
    },
    vue:{
        backgroundColor:"#ECE4E2"
    }

})


