import React from 'react'
import {Modal, Text, Button, ScrollView,View,StyleSheet,Image,Dimensions} from 'react-native' 
import { useNavigation, useRoute } from '@react-navigation/native'
import ImageZoom from 'react-native-image-pan-zoom';

import state  from '../../images/state.png'

export default function Chapitre4() {
    
    const navigation = useNavigation()

        return(
            <ScrollView style={styles.vue} minimumZoomScale={1} maximumZoomScale={5}>
                    <Text style={styles.titre}>C'est quoi un state</Text>
                    <Text style={styles.text}>

                        Un state est tout simplement une variable qui lors de sa modification change directement sa valeur partout ou il est utilisé.{"\n"}{"\n"}
                        Comme nous utilisons des components fonctionnels, nous allons utilisés useState de react{"\n"}{"\n"}
                        Dans notre exemple nous allons créés un petit programme avec un bouton et lorsqu'on click dessus, on incrémentera un nombre qui sera affiché directement
                    </Text>
                    <Text style={styles.titre2}> Les imports</Text>
                    <Text style={styles.text}> Pour se faire, nous devons importer useState de react, un button et view pour englober le tout de react-native</Text>
                    <Text style={styles.text}>Pour cette exemple je vous mets directement le code si dessous vous pouvez le tester dans une nouvelle page et n'oublier pas de l'importer dans le App.js pour le tester{"\n"}</Text>
                    <ImageZoom  cropWidth={Dimensions.get('window').width-40}
                       cropHeight={300}
                       imageWidth={340}
                       imageHeight={400} >
                        <Image source={state} style={styles.image} />
                    </ImageZoom>
                    <Text style={styles.text}>Ici nous avons créé un state increment et setIncrement permet de le modifier
                        {"\n"}{"\n"}
                        Ensuite nous créons deux functions une qui rajouter de 1 la valeur de "increment" et 1 qui "desincrement".{"\n"}{"\n"}
                        Tout ce qui se trouve dans return doit être engloblé donc, nous utiliserons un View pour cela.{"\n"}{"\n"}
                        Nous affichons dans la balise Text notre state car tout ce qui est de type string doit être dans la balise text{"\n"}{"\n"}
                        Et pour finir nous ajoutons les boutons qui appelerons avec onPress les fonctions créent précedament et voilà le tour et joué
                    </Text>
                    <Text style={{fontStyle:"italic",padding:10}}>Dans le chapitre suivant nous allons voir toutes les balises et leurs utilités</Text>
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
        fontSize:30,
        marginTop:10,
        marginBottom:20,
        marginLeft:5,
        fontFamily:"cursive",
        padding:10
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

