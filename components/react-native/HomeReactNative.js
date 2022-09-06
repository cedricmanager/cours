    import React from 'react'
    import {Image ,Modal, Text, Button, ScrollView,View, StyleSheet,Dimensions} from 'react-native' 
    import { useNavigation, useRoute } from '@react-navigation/native'
    import ImageZoom from 'react-native-image-pan-zoom';

//image

    import zoukenberg from '../images/zoukenberg.jpg'
    import codeReact from '../images/code_reactNative.png'

export default function HomeReactNative() {
    
    const navigation = useNavigation()

        return(
            <ScrollView >
                <View style={styles.vue}>
                <Text style={styles.titre}> Histoire</Text>
                
                <Text style={styles.text}>
                    Framework d'applications mobiles créé par Facebook en 2015. {"\n"}{"\n"}
                    Il permet de créer des applications pour IOS, Android et UWP ( UMP:toute plateforme d'applications créées par Microsoft).{"\n"}



                </Text>
                <Image source={zoukenberg} style={styles.image}/>
                <Text style={styles.titre}> Fonctionnement </Text>
                <Text style={styles.text}>
                    React-native fonctionne comme son frère React.js à la seule différence qu'il n'utilise pas le Dom mais s'exécute par un interpréteur en arrière-plan et communique avec la plate-forme native (selon la marque du gsm).{"\n"}{"\n"}
                    Ainsi react native n'utilise pas du HTML mais des composants Javascripts afin de manipuler les vues.{"\n"}
                    
                </Text>
                <ImageZoom  cropWidth={Dimensions.get('window').width}
                       cropHeight={300}
                       imageWidth={Dimensions.get('window').width}
                       imageHeight={400}>
                    <Image source={codeReact} style={styles.image}/>
                </ImageZoom>
                <Text style={{fontFamily:'cursive',margin:4,fontSize:18,textAlign:'center'}}>Possibilité de tester en ligne sur snack.expo.dev</Text>
                <Text style={styles.titre}>Prérequis</Text>
                <Text style={styles.text}>
                    Connaître le strict minimum de Javascript, HTML et Css peuvent être un avantage dans l'apprentissage de React-native mais n'est pas indispensable.

                </Text>
                </View>
            </ScrollView>
        )
    
}

const styles = StyleSheet.create({
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
        marginTop:50,
        marginBottom:20,
        marginLeft:10,
        fontWeight:"bold",
        fontFamily:"cursive"
        
    },
    text:{
        fontSize:20,
        fontFamily:"serif",
        margin:10,
        backgroundColor:"#F2E1DE",
        
        padding:4
    },
    vue:{
        backgroundColor:"#ECE4E2"
    }

})


