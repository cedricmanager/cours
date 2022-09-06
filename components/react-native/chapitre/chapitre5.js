import React from 'react'
import {SafeAreaView,Image,FlatList,Modal, Text, Button, ScrollView,View,StyleSheet,Dimensions} from 'react-native' 
import { useNavigation, useRoute } from '@react-navigation/native'
import ImageZoom from 'react-native-image-pan-zoom';
//image

    import vue from '../../images/view.png'
    import text from '../../images/text.png'
    import image from '../../images/image.png'
    import textInput from '../../images/textInput.png'
    import scrollview from '../../images/scrollView.png'
    import stylesheet from '../../images/stylesheet.png'
    import button from '../../images/button.png'
    import flatList from '../../images/flatList.png'
    import activityIndicator from '../../images/activityIndicator.png'
  const windoW=Dimensions.get('window').width
    const windowH=Dimensions.get('window').height

 const Data =[
        {
            id:"View",
            text:"Correspond en HTML à une div, elle est conçue pour être imbriqué, elle peut avoir plusieurs enfants de n'importe quel type",
            image:vue,
            sintaxe:"<View> ... </View>"
        },
        {
            id:"Text",
            text:"Permets d'afficher du texte",
            image:text,
            sintaxe:"<Text onPress={..}> bonjour </Text>"
        },
        {
            id:"Image",
            text:"Permets d'afficher une image de votre dossier ou du web",
            image:image,
            sintaxe:"<Image source='./images/images2.png' />"
        },
        {
            id:"TextInput",
            text:"Permets à l'utilisateur de saisir du texte",
            image:textInput,
            sintaxe:"<TextInput value='default' onChangeText={} />"

        },
        {
            id:"ScrollView",
            text:"Permets à l'utilisateur de scroller l'écran de haut en bas",
            image:scrollview,
            sintaxe:"<ScrollView> .. </ScrollView>"

        },
        {
            id:"Stylesheet",
            text:"Permets d'établir du CssPermet d'établir du Css",
            image:stylesheet,
            sintaxe: "const nom = Stylesheet.create({})"
        },
        {
            id:"Button",
            text:"Créé un bouton d'interaction comme on a vu dans les chapitres des states",
            image:button,
            sintaxe: "<Button title='default titre' onPress={action} />"

        },
        {
            id:"Flatlist",
            text:"Permets d'afficher une liste scrollable",
            image:flatList,
            sintaxe: "<Flatlist data={source} renderItem={function} keyExtractor={item=>item.id} />"
        },
        {
            id:"ActivityIndicator",
            text:"Affiche un cercle tournant qui peut permettre d'indiquer un chargement en cours",
            image:activityIndicator,
            sintaxe:"<ActivityIndicator size='large' color='blue' />"
        }
    
     ];


     const Item = ({ title,texte,im, stx }) => (
        <View style={styles.item} minimumZoomScale={1} maximumZoomScale={5}>
          <Text style={styles.titre}>{title}</Text>
            <Text style={styles.text}>{texte}</Text>
            <Text style={styles.sintaxe}>{stx}</Text>
            
             <ImageZoom  cropWidth={Dimensions.get('window').width-40}
                       cropHeight={300}
                       imageWidth={340}
                       imageHeight={400} >
                    <Image source={im} style={styles.image} />
             </ImageZoom>
             <Text style={styles.sintaxe} style={{color:"red",textAlign:"center",fontStyle:"italic"}}>Zoom actif</Text>
        </View>
      );
export default function Chapitre5() {
    const render = ({ item }) => (
        <Item title={item.id} texte={item.text} im={item.image} stx={item.sintaxe}/>
      );
    const navigation = useNavigation()

   
  
        return(
            <SafeAreaView style={styles.vue}> 
               <FlatList
                    data={Data}
                    renderItem={render}
                    keyExtractor={item =>item.id}
                />
            </SafeAreaView>
        )
    
}

const styles = StyleSheet.create({
    premier:{
      
       
        textAlign:"justify",
        alignItems:"stretch",
       
   
        flexWrap:"wrap",
        

    },
    sintaxe:{
        fontSize:20,
        color:"black",
        backgroundColor:"green",
        textAlign:"center",
        marginTop:4,
        borderWidth:4,
        borderRadius:10,
        borderColor:"gray",
        padding:5
    },  
    vue:{
        backgroundColor:"#ECE4E2",
        width:Dimensions.get('window').width,
        textAlign:"justify",
       
        borderColor:"black"
    },
    text:{
       
        fontSize:20, 
        fontFamily:"serif",
       
        borderColor:"black",
     
          flexDirection:"row",
     
        textAlign:"center",
       
        backgroundColor:"#F2E1DE",
        

    },
    titre:{
        backgroundColor:"gray",
        textAlign:"center",
        fontSize:20,
        borderWidth: 4,
        borderColor:'white',
        color:'white',
        padding:10
        
    },
    image :{
        width:400,
        height:300,
        justifyContent : 'center',
        borderWidth: 4,
        borderColor:'black',
        justifyContent: 'space-between',
        resizeMode: 'contain',
        marginTop:60,
        
        
        

       
        
        
        
        

    },
    item: {
        backgroundColor: '#ECE4E2',
        padding: 20,
        borderWidth: 4,
        borderColor:'black',
       
      },
    
})