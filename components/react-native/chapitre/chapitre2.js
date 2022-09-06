import React from 'react'
import {Modal, Text, Button, ScrollView,View, StyleSheet, Image} from 'react-native' 
import { useNavigation, useRoute } from '@react-navigation/native'
import image from '../../images/androidBase.png'

export default function Chapitre2() {
    
    const navigation = useNavigation()

        return(
            <ScrollView style={styles.vue} minimumZoomScale={1} maximumZoomScale={5}>
               <Text style={styles.titre}>Architecture</Text>
               <Text style={styles.titre2}><Text style={{color:"blue"}}>A.</Text>Android && Ios</Text>
               <Text style={styles.text}>
                    Le fichier android regroupera tous ceux qui va permettre à la compilation (mise en marche de l'application), on y retrouve bien entendu le gradle(Permet de construire des projets en c++,Scala, Java et Groovy). {"\n"}
                    On ne s'occupera pas de ce dossier il se met automatiquement à jour via les lignes de commandes.
               </Text>
               <Text style={styles.titre2}><Text style={{color:"blue"}}>B.</Text>Buckconfig</Text>
               <Text style={styles.text}>
                   Permets l'analyse des fichiers de configuration. {"\n"}
                   Nous utiliserons celle par défaut donc nous changerons rien pour plus d'informations sur ces possibilités voir:{"\n"}{"\n"}
                  <Text style={styles.text2}>https://buck.build/files-and-dirs/buckconfig.html</Text>

               </Text>
               <Text style={styles.titre2}><Text style={{color:"blue"}}>C.</Text>gitattributes && .gitignore</Text>
               <Text style={styles.text}>
                   Git est un système de contrôle de versions le plus utilisé.{"\n"}
                   Il permet en deux mots d'avoir un contrôle de l'évolution du projet en faisant des commits.{"\n"}
                   Et facilite le travail de groupe pour un projet donné.

               </Text>
                <Text style={styles.titre2}><Text style={{color:"blue"}}>D.</Text>App.js </Text>
                <Text style={styles.text}>Est le fichier de base  qui rendra le rendu de l'application </Text>
                <Image source={image} style={styles.image} />
                <Text style={styles.titre2}><Text style={{color:"blue"}}>E.</Text>app.json</Text>
                <Text style={styles.text}>Ici on met la configuration personnelle du projet
                        {"\n"}<Text style={{fontStyle:"italic",color:"blue"}}>name :</Text> Le nom de votre projet
                        {"\n"}<Text style={{fontStyle:"italic",color:"blue"}}>slug :</Text> l'identifiant
                        {"\n"}<Text style={{fontStyle:"italic",color:"blue"}}>version :</Text> "1.0.0" definisser quelle est votre version
                        {"\n"}<Text style={{fontStyle:"italic",color:"blue"}}>assetBundlePatterns :</Text>
                </Text>
                <Text style={styles.titre2}><Text style={{color:"blue"}}>F.</Text>Babel.config.js</Text>
                <Text style={styles.text}>
                        <Text style={styles.text}>Babel se divise en 3 parties {"\n"}
                        <Text style={{fontStyle:"italic",color:"blue"}}><Text style={{color:"blue"}}>1.</Text>le Parser :</Text>Il lit le code source et crée un AST (représentation du code sous forme d'arbre){"\n"}
                        <Text style={{fontStyle:"italic",color:"blue"}}><Text style={{color:"blue"}}>2.</Text>Transformations :</Text>Traverse l'arbre tout en conservant le sens de notre code{"\n"}
                        <Text style={{fontStyle:"italic",color:"blue"}}><Text style={{color:"blue"}}>3.</Text>Generator :</Text>Génére le code source final{"\n"}
                        Nous utiliserons le fichier par défaut!
                        </Text>
                </Text>
                <Text style={styles.titre2}><Text style={{color:"blue"}}>G.</Text>index.js</Text>
                <Text style={styles.text}>
                    C'est le point de départ pour l'application mais qui pointe vers App.js.

                </Text>
                <Text style={styles.titre2}><Text style={{color:"blue"}}>H.</Text>metro.config.js</Text>
                <Text style={styles.text}>
                    Permets de créé un les liens pour le package{"\n"}

                </Text>
                <Text style={styles.titre2}><Text style={{color:"blue"}}>I.</Text>package-lock.json</Text>
                <Text style={styles.text}>
                        Gère les packages, les caches, serveur etc.. on s'en occupe pas.{"\n"}
                        Pour plus d'informations <Text style={{fontStyle:'italic',color:"blue"}}>facebook.github.io/metro/docs/configuration</Text>
                </Text>
                <Text style={styles.titre2}><Text style={{color:"blue"}}>J.</Text>package.json</Text>
                <Text style={styles.text}>
                    Permets de voir et d'installer en dehors de ligne de commande tous les packages nécessaires pour la création de notre application.
                </Text>
                <Text style={styles.titre2}><Text style={{color:"blue"}}>K.</Text> yarn.lock</Text>
                <Text style={styles.text}>
                    Créé avec précision les versions des dépendances des packages au lieu d'utiliser  package.json{"\n"}
                    Il est créé par npm install
                </Text>
                <Text style={styles.titre2}><Text style={{color:"blue"}}>Resumer </Text></Text>
                <Text style={styles.text}>
                    Les fichiers qui nous intéressent ici sont :{"\n"}{"\n"}
                    <Text style={styles.text2}>App.js  et package.json </Text> 
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
        borderRadius:10,
        padding:10,
        
    },
    vue:{
        backgroundColor:"#ECE4E2"
    }

})

