import React from 'react'
import {ScrollView,StyleSheet,Text, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import debug from '../../images/debugger.png'
export default function Chapitre7() {
  const navigation = useNavigation()

  return(
     
          <ScrollView>
              <Text style={styles.titre}>Debugger</Text>
              <Text style={styles.text}>
                appuyer simultanément ctrl + m dans votre simulateur{"\n"}

                
              </Text>
              <Image source={debug} style={styles.Image} minimumZoomScale={1} maximumZoomScale={5}/>
              <Text style={{textAlign:"center",color:"blue",fontSize:20,padding:20}}>
                 Ici vous avez les options possibles afin d'avoir un meilleur contrôle du debug
              </Text>
           
          </ScrollView>         
         
            
        )
    
}

const styles = StyleSheet.create({
 
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
      
      textAlign:"justify",
     
      borderColor:"black"
  },
  text:{
     
      fontSize:20, 
      fontFamily:"serif",
      borderWidth:4,
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
      width:"100%",
      height:300,
      justifyContent : 'center',
      borderWidth: 4,
      borderColor:'gray',
      justifyContent: 'space-between',
      resizeMode: 'contain',
      margin:6
      

  },

  
})
