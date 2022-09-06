import React from 'react'
import {Modal, Text, Button, ScrollView,View, Image, StyleSheet,Dimensions} from 'react-native' 
import { useNavigation, useRoute } from '@react-navigation/native'
import ImageZoom from 'react-native-image-pan-zoom';
//image
    import imageClass from '../../images/appClass.png'
    import imageFunction from '../../images/appFunction.jpg'
    import bonjour from '../../images/bonjour.png'
    import bonjourAndroid from '../../images/bonjourAndroid.png'
    import home from '../../images/home.png'
    import prop from '../../images/props.png'
    import propNom from '../../images/propsNom.png'


export default function Chapitre3() {
    
    const navigation = useNavigation()
    const premier = "import {Text} from 'react-native'"
        return(
            <ScrollView style={styles.vue} minimumZoomScale={1} maximumZoomScale={5}>
                <Text style={styles.titre}>Premier hello world</Text>
                <Text style={styles.text}>Avant de parler des props nous allons d'abord créés notre premier affichage hello world ce qui va nous permettre de mieux comprendre les props.
                    {"\n"} Tout d'abord aller dans le fichier principale App.js 
                     Il faut préciser que nous utiliserons des composants fonctionnels plutôt que les composants de classes car elles consistuent une façilités et une meilleure manière de créer une application. 
                </Text> 

                <Text style={styles.titre2}>Composant de class</Text>
                <ImageZoom  cropWidth={Dimensions.get('window').width-40}
                       cropHeight={300}
                       imageWidth={340}
                       imageHeight={400} >
    
                    <Image source={imageClass} style={styles.image2} />
                </ImageZoom>
                <Text style={styles.titre2}>Composant fonctionnel</Text>
                <ImageZoom  cropWidth={Dimensions.get('window').width-40}
                       cropHeight={300}
                       imageWidth={340}
                       imageHeight={400} >
                    <Image source={imageFunction} style={styles.image} />
                </ImageZoom>
                <Text style={styles.text}>
                    En haut de votre App.js assurez-vous d'importer le Text de react-native : {"\n"}{"\n"}
                    <Text style={styles.text2}>{premier}</Text>{"\n"}{"\n"} 
                    Une fois vérifié effacer ce qu'il y'a dans return () et écriver dans les balises Text Bienvenue enregistrer et regarder votre simulateur{"\n"}
                    Si votre emulateur n'est pas encore lancé n'oublier pas la commande.{"\n"}{"\n"} <Text style={styles.text2}>npx run android</Text>
                </Text>

                       
                <Text style={styles.titre2}>Votre app.js</Text>
                <ImageZoom  cropWidth={Dimensions.get('window').width-40}
                       cropHeight={300}
                       imageWidth={340}
                       imageHeight={400} >
                    <Image source={bonjour} style={styles.image2} />
                </ImageZoom>
                <Text style={styles.titre2}> Le résultat dans votre imulateur</Text>
                <ImageZoom  cropWidth={Dimensions.get('window').width-40}
                       cropHeight={300}
                       imageWidth={340}
                       imageHeight={400} >
                    <Image source={bonjourAndroid} style={styles.image3} />
                </ImageZoom>
                <Text style={styles.text}>Voilà nous avons notre première application Bonjour{"\n"}
                        Nous pouvons  voir à présent à quoi sert un props{"\n"}
                        Mais pour cela nous allons créés un nouveau dossier à la racine de notre projet appelé le <Text style={{color:"blue"}}>componants</Text>  c'est ici que nous allons créés toutes nos pages.{"\n"}
                        Dans ce dossier créé deux fichiers javascript par exemple <Text style={{color:"blue"}}>home.js</Text>  et <Text style={{color:"blue"}}>adresse.js</Text>{"\n"}
                        Alors c'est simple à l'intérieur de home.js on écrit : {"\n"}      
                </Text> 
           
                    <ImageZoom  cropWidth={Dimensions.get('window').width-40}
                       cropHeight={300}
                       imageWidth={340}
                       imageHeight={400} >
                         <Image source={home} style={styles.image} />
                    </ImageZoom>
                        <Text style={styles.text}>
                            Maintenant dans le fichier app.js faite un import de votre fichier home {"\n"}{"\n"}
                            <Text style={styles.text2}>import Home from './components/home.js</Text>{"\n"}{"\n"}
                            une fois importé, enfin veuillez écrire la balise home avec l'attribut nom comme ceci:
                            
                        </Text>
                        <ImageZoom  cropWidth={Dimensions.get('window').width-40}
                         cropHeight={300}
                         imageWidth={340}
                         imageHeight={400} >
                            <Image source={prop} style={styles.image} />
                        </ImageZoom>
                         <Text style={styles.text}>  Enregistrer et regardé votre imulateur.{"\n"}
                            Et voilà on a transmis la valeur "thor" à travers l'attribut nom, voici ce qu'est un props
                        </Text> 
                        <ImageZoom  cropWidth={Dimensions.get('window').width-40}
                                cropHeight={300}
                                imageWidth={340}
                                imageHeight={400} >
                            <Image source={propNom} style={styles.image3} />
                        </ImageZoom>

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
        width:"98%",
        height:300,
        justifyContent : 'center',
        borderWidth: 4,
        borderColor:'black',
        justifyContent: 'space-between',
        resizeMode: 'contain',
        margin:6

    },
    image2 :{
        width:"98%",
        height:230,
        justifyContent : 'center',
        borderWidth: 4,
        borderColor:'black',
        justifyContent: 'space-between',
        resizeMode: 'contain',
        margin:6

    },
    image3 :{
        width:"48%",
        height:300,
        justifyContent : 'center',
        borderWidth: 4,
        borderColor:'black',
        justifyContent: 'space-between',
        resizeMode: 'contain',
        margin:6,
        

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
        marginRight:20
    },
    vue:{
        backgroundColor:"#ECE4E2"
    }

})
