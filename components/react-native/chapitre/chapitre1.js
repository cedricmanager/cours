import React from 'react'
import {Modal, Text, Button, ScrollView,View, StyleSheet, Image} from 'react-native' 
import { useNavigation, useRoute } from '@react-navigation/native'
import imagePackage from '../../images/package.jpg'
import choco from '../../images/chocolateyy.png'
import ImageZoom from 'react-native-image-pan-zoom';

export default function Chapitre1() {
    
    const navigation = useNavigation()

        return(
            <ScrollView style={styles.vue} minimumZoomScale={1} maximumZoomScale={5}>
                 <Text style={styles.titre}>Installation</Text>
                 <Text style={styles.titre2}>A. Gestionnaire de paquet</Text>
                 <Text style={styles.text}>
                     Afin d'utiliser React-native, il nous faut au préalable un gestionnaire de paquets qui nous permettra de créer les dossiers et fichiers nécessaires à la création d'une application et d'installer les dépendances dont aura besoin.     
                </Text>
                     <Image source={imagePackage} style={styles.image} />
                <Text style={styles.text}>Chocolatey très populaire pour les installations Windows</Text>
                <Text style={styles.text}>https://chocolatey.org/install</Text>
                
                <Image source={choco} style={styles.image}/>
                <Text style={styles.titre2}>B. nodeJs et openjdk11</Text>
                <Text style={styles.text}>Ouvrer un terminal en tant qu'administrateurs et taper</Text>
                <Text style={styles.text2}>choco install -y nodejs-lts openjdk11</Text>
                <Text style={styles.text}>Installer aussi un autre getionnaire de paquet : npx </Text>
                <Text style={styles.text2}>npm i npx</Text>
                <Text style={styles.titre2}>C. Android développement </Text>
                <Text style={styles.text}>Télécharger et installer la dernière version d'android studio</Text>
                <Text style={styles.text2}>https://developer.android.com/studio/index.html</Text>
                <Text style={styles.text}>
                    Vérifier lors de l'installation d'installer{"\n"}{"\n"}
                   <Text style={{color:"blue"}}>a.</Text>  Android SDK {"\n"}
                   <Text style={{color:"blue"}}>b.</Text> Android SDK Platform {"\n"}
                   <Text style={{color:"blue"}}>c.</Text>  Android Virtual Device
                </Text>
                <Text style={styles.text}>Cliqué ensuite sur configure et sélectionné SDK Manager
                  {"\n"} Peut être trouvé dans Préférences, ( Apparence et comportement + Paramètre système + Android SDK)
                  {"\n"} Sélectionné SDK PlatForm dans le gestionnaire SDK puis cochez dans (Afficher les détails du package) Android 12 (s){"\n"}
                  Android SDK Platform 31{"\n"}{"\n"}
                  Intel x86 Atom_64 System Image ou Google APIs Intel x86 Atom System Image{"\n"}{"\n"}
                Ensuite, dans Outils SDK vérifier qu'Android SDK Build-Tools assurez-vous qu'elle est de minimum 31.0.0{"\n"}
                Cliquez sur Appliquer
                </Text>
                <Text style={styles.titre2}>Configure la variable d'environnement Android_Home</Text>
                <Text style={styles.text}>
                <Text style={{color:"blue"}}>1.</Text>  Aller dans Modifier les variables d'environnement Système. (dans recherche écriver path){"\n"}
                <Text style={{color:"blue"}}>2.</Text>  Cliquez sur "variables d'environnement" et dans variables système cliquez sur nouvelle{"\n"}{"\n"}
                    <Text style={styles.text2}>Variable name: ANDROID_HOME{"\n"}{"\n"} </Text>
                        
                        <Text style={styles.text2}>  Variable value: c:\Users\votreNom\AppData\Local\Android\Sdk
                    
                    </Text>
                    
                 </Text>
                 <Text style={{padding:20}}>Vérifier bien que le dossier est bien à l'endroit dans variable value en le vérifiant manuellement</Text>
                 <Text style={styles.titre}>Création d'un projet{"\n"}</Text>
                 <Text style={styles.text2}>npx react-native init nomProjet</Text>
                 <Text style={styles.titre2}>Lancer android</Text>
                 <Text style={styles.text}>Vous si vous n'avez pas de AVD (virtual android) lorsque vous lanceriez la commande suivante il vous demandra d'en télécharger une sinon vous pouvez en télécharger une via android studio</Text>
                 <Text style={styles.text2}>npx react-native run-android</Text>

                 



                      


               
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
        backgroundColor:"#ECE4E2"
    }

})

