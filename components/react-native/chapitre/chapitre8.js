import React,{useState} from 'react'
import {Modal, Text, Button, ScrollView,View,StyleSheet,Alert} from 'react-native' 
import { useNavigation, useRoute } from '@react-navigation/native'
import { Checkbox } from 'react-native-paper';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react';


export default function Chapitre4() {



   //question 1
    const [premier,setPremier] = useState(false)
    const [premier1,setPremier1] = useState(false)
    const [premier2,setPremier2] = useState(false)
    const [premier3,setPremier3] = useState(false)
   //question2
    const [deuxieme,setDeuxieme] = useState(false)
    const [deuxieme1,setDeuxieme1] = useState(false)
    const [deuxieme2,setDeuxieme2] = useState(false)
    const [deuxieme3,setDeuxieme3] = useState(false)
   //question3
    const [troisieme,setTroisieme] = useState(false)
    const [troisieme1,setTroisieme1] = useState(false)
    const [troisieme2,setTroisieme2] = useState(false)
    const [troisieme3,setTroisieme3] = useState(false)
   //question 4
    const [quatrieme,setQuatrieme] = useState(false)
    const [quatrieme1,setQuatrieme1] = useState(false)
    const [quatrieme2,setQuatrieme2] = useState(false)
    const [quatrieme3,setQuatrieme3] = useState(false)
   //question 5
    const [cinquieme,setCinquieme] = useState(false)
    const [cinquieme1,setCinquieme1] = useState(false)
    const [cinquieme2,setCinquieme2] = useState(false)
    const [cinquieme3,setCinquieme3] = useState(false)
   //question 6
    const [sixieme,setSixieme] = useState(false)
    const [sixieme1,setSixieme1] = useState(false)
    const [sixieme2,setSixieme2] = useState(false)
    const [sixieme3,setSixieme3] = useState(false)
   //question 7
    const [septieme,setSeptieme] = useState(false)
    const [septieme1,setSeptieme1] = useState(false)
    const [septieme2,setSeptieme2] = useState(false)
    const [septieme3,setSeptieme3] = useState(false)
   //question 8
    const [huitieme,setHuitieme] = useState(false)
    const [huitieme1,setHuitieme1] = useState(false)
    const [huitieme2,setHuitieme2] = useState(false)
    const [huitieme3,setHuitieme3] = useState(false)
   //question 9
    const [neuvieme,setNeuvieme] = useState(false)
    const [neuvieme1,setNeuvieme1] = useState(false)
    const [neuvieme2,setNeuvieme2] = useState(false)
    const [neuvieme3,setNeuvieme3] = useState(false)
   //question 10
    const [dixieme,setDixieme] = useState(false)
    const [dixieme1,setDixieme1] = useState(false)
    const [dixieme2,setDixieme2] = useState(false)
    const [dixieme3,setDixieme3] = useState(false)
   
    const deuxiemeQuestion = "<div><Text>bonjour hello</Text></div>"
    const deuxiemeQuestion1= "<div> bonjour hello </div>"
    const deuxiemeQuestion2= "<Text> bonjour hello </Text>"
    const deuxiemeQuestion3= "<View><Text>bonjour hello</Text></View>"

    const huitiemeQuestion = "while(variable){}"
    const huitiemeQuestion1 = "for(variable in variable){}"
    const huitiemeQuestion2 = "for(variable=0;variable<10;variable++){}"
    const huitiemeQuestion3 = "<Flatlist  data={variable} renderItem={} keyExtractor={} />"

    const neuviemeQuestion = "const nom = new state()"
    const neuviemeQuestion1 = "const nom = state(false)"
    const neuviemeQuestion2 = "const [nom,setNom] = useState('tesre')"

    const dixiemeQuestion = "<div> 127+10  </div>"
    const dixiemeQuestion1 = "<div><Text> 127+10</Text></div>"
    const dixiemeQuestion2 = "<Text> {127+10} </Text>"
    const dixiemeQuestion3 = "<View> {127+10} </View>"


    function reponse(){
        let calcule = 0;
        if(!premier && premier1 && !premier2 && !premier3){
            calcule++;
        }
        if(!deuxieme && !deuxieme1 && deuxieme2 && deuxieme3){
            calcule++
        }
        if(troisieme && troisieme1 && !troisieme2 && troisieme3){
            calcule++
        } 
        if(!quatrieme && quatrieme1 && !quatrieme2 && quatrieme3){
            calcule++
        }
        if(!cinquieme && !cinquieme1 && !cinquieme2 && cinquieme3){
            calcule++
        }
        if(!sixieme && sixieme1 && sixieme2 && !sixieme3){
            calcule++
        }
        if(!septieme && !septieme1 && septieme2 && !septieme3){
            calcule++
        }
       
        if(!huitieme && !huitieme1 && !huitieme2 && huitieme3){
            calcule++
        }
        if(!neuvieme && !neuvieme1 && neuvieme2){
            calcule++
        }
        if(!dixieme && !dixieme1 && dixieme2 && !dixieme3){
            calcule++
        }
       let messageReponse =" "
        calcule = (calcule *10)
        if(calcule<=50){
            messageReponse = "Courage il y a des erreurs recommence"
        }
        else if (calcule>= 50 && calcule <=80){
            messageReponse=" C'est déja pas mal mais recommence"
        }
        else if (calcule>80){
            messageReponse="Ouaw félicitation !!"
        }

        Alert.alert(
            'Vous avez '+calcule+' %',
            messageReponse,  
            [
               {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
               {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
       )
    }
    


    const navigation = useNavigation()


        return(
            <ScrollView style={styles.vue}>
                    <Text style={styles.titre}>Quizz</Text>
                    <Text style={styles.text}>
                        C'est un petit quizz afin de voir si vous avez compris les fondamentaux de React native Bonne chance!{"\n"}
                        Plusieurs choix sont possibles
                    </Text>
                    <Text style={styles.question}>
                        <Text style={styles.titre2}>React-native est créé par : </Text>{"\n"}{"\n"}
                        Steve Jobs <Checkbox status={premier ? 'checked' : 'unchecked'} onPress={ ()=>{setPremier(!premier)}} />{"\n"}
                        Mark Zuckerberg <Checkbox status={premier1 ? 'checked' : 'unchecked'} onPress={ ()=>{setPremier1(!premier1)}} />{"\n"}
                        Fabien Potencier<Checkbox status={premier2 ? 'checked' : 'unchecked'} onPress={ ()=>{setPremier2(!premier2)}} />{"\n"}
                        Britney Spears <Checkbox status={premier3 ? 'checked' : 'unchecked'} onPress={ ()=>{setPremier3(!premier3)}} />{"\n"}

                    </Text>
                    <Text style={styles.question}>
                        <Text style={styles.titre2}>Comment afficher un 'bonjour hello' dans un return: </Text>{"\n"}{"\n"}
                        {deuxiemeQuestion} <Checkbox status={deuxieme ? 'checked' : 'unchecked'} onPress={ ()=>{setDeuxieme(!deuxieme)}} />{"\n"}
                        {deuxiemeQuestion1} <Checkbox status={deuxieme1 ? 'checked' : 'unchecked'} onPress={ ()=>{setDeuxieme1(!deuxieme1)}} />{"\n"}
                        {deuxiemeQuestion2}<Checkbox status={deuxieme2 ? 'checked' : 'unchecked'} onPress={ ()=>{setDeuxieme2(!deuxieme2)}} />{"\n"}
                        {deuxiemeQuestion3} <Checkbox status={deuxieme3 ? 'checked' : 'unchecked'} onPress={ ()=>{setDeuxieme3(!deuxieme3)}} />{"\n"}

                    </Text>
                    <Text style={styles.question}>
                        <Text style={styles.titre2}>npx sert à quoi? : </Text>{"\n"}{"\n"}
                        Installer des packets <Checkbox status={troisieme ? 'checked' : 'unchecked'} onPress={ ()=>{setTroisieme(!troisieme)}} />{"\n"}
                        Lancer notre application <Checkbox status={troisieme1 ? 'checked' : 'unchecked'} onPress={ ()=>{setTroisieme1(!troisieme1)}} />{"\n"}
                        Afficher du text<Checkbox status={troisieme2 ? 'checked' : 'unchecked'} onPress={ ()=>{setTroisieme2(!troisieme2)}} />{"\n"}
                        Mettre à jours nos packets<Checkbox status={troisieme3 ? 'checked' : 'unchecked'} onPress={ ()=>{setTroisieme3(!troisieme3)}} />{"\n"}

                    </Text>
                    <Text style={styles.question}>
                        <Text style={styles.titre2}>React-native permet : </Text>{"\n"}{"\n"}
                        La création d'un site web <Checkbox status={quatrieme ? 'checked' : 'unchecked'} onPress={ ()=>{setDeuxieme(!quatrieme)}} />{"\n"}
                        La création d'une application android <Checkbox status={quatrieme1 ? 'checked' : 'unchecked'} onPress={ ()=>{setQuatrieme1(!quatrieme1)}} />{"\n"}
                        Mettre en ligne un site web<Checkbox status={quatrieme2 ? 'checked' : 'unchecked'} onPress={ ()=>{setQuatrieme2(!quatrieme2)}} />{"\n"}
                        La création d'une application IOS <Checkbox status={quatrieme3 ? 'checked' : 'unchecked'} onPress={ ()=>{setQuatrieme3(!quatrieme3)}} />{"\n"}

                    </Text>
                    <Text style={styles.question}>
                        <Text style={styles.titre2}>Dans quel fichier de base est le rendu de notre app </Text>{"\n"}{"\n"}
                        index.js <Checkbox status={cinquieme ? 'checked' : 'unchecked'} onPress={ ()=>{setCinquieme(!cinquieme)}} />{"\n"}
                        app.json <Checkbox status={cinquieme1 ? 'checked' : 'unchecked'} onPress={ ()=>{setCinquieme1(!cinquieme1)}} />{"\n"}
                        metro.config.js<Checkbox status={cinquieme2 ? 'checked' : 'unchecked'} onPress={ ()=>{setCinquieme2(!cinquieme2)}} />{"\n"}
                        App.js <Checkbox status={cinquieme3 ? 'checked' : 'unchecked'} onPress={ ()=>{setCinquieme3(!cinquieme3)}} />{"\n"}

                    </Text>
                    <Text style={styles.question}>
                        <Text style={styles.titre2}>Les props servent à quoi : </Text>{"\n"}{"\n"}
                        à écrire du text <Checkbox status={sixieme ? 'checked' : 'unchecked'} onPress={ ()=>{setSixieme(!sixieme)}} />{"\n"}
                        à envoyer une fonction <Checkbox status={sixieme1 ? 'checked' : 'unchecked'} onPress={ ()=>{setSixieme1(!sixieme1)}} />{"\n"}
                        à envoyer des messages<Checkbox status={sixieme2 ? 'checked' : 'unchecked'} onPress={ ()=>{setSixieme2(!sixieme2)}} />{"\n"}
                        à compiler  <Checkbox status={sixieme3 ? 'checked' : 'unchecked'} onPress={ ()=>{setSixieme3(!sixieme3)}} />{"\n"}

                    </Text>
                    <Text style={styles.question}>
                        <Text style={styles.titre2}>Les stats servent à quoi : </Text>{"\n"}{"\n"}
                        une variable simple <Checkbox status={septieme ? 'checked' : 'unchecked'} onPress={ ()=>{setSeptieme(!septieme)}} />{"\n"}
                        une variable global <Checkbox status={septieme1 ? 'checked' : 'unchecked'} onPress={ ()=>{setSeptieme1(!septieme1)}} />{"\n"}
                        une variable changeante instantané<Checkbox status={septieme2 ? 'checked' : 'unchecked'} onPress={ ()=>{setSeptieme2(!septieme2)}} />{"\n"}
                        une variable multiple<Checkbox status={septieme3 ? 'checked' : 'unchecked'} onPress={ ()=>{setSeptieme3(!septieme3)}} />{"\n"}

                    </Text>
                    <Text style={styles.question}>
                        <Text style={styles.titre2}>comment faire une boucle : </Text>{"\n"}{"\n"}
                        {huitiemeQuestion} <Checkbox status={huitieme ? 'checked' : 'unchecked'} onPress={ ()=>{setHuitieme(!huitieme)}} />{"\n"}
                        {huitiemeQuestion1} <Checkbox status={huitieme1 ? 'checked' : 'unchecked'} onPress={ ()=>{setHuitieme1(!huitieme1)}} />{"\n"}
                        {huitiemeQuestion2}<Checkbox status={huitieme2 ? 'checked' : 'unchecked'} onPress={ ()=>{setHuitieme2(!huitieme2)}} />{"\n"}
                        {huitiemeQuestion3}<Checkbox status={huitieme3 ? 'checked' : 'unchecked'} onPress={ ()=>{setHuitieme3(!huitieme3)}} />{"\n"}

                    </Text>
                    <Text style={styles.question}>
                        <Text style={styles.titre2}>Comment crée un state : </Text>{"\n"}{"\n"}
                        {neuviemeQuestion} <Checkbox status={neuvieme ? 'checked' : 'unchecked'} onPress={ ()=>{setNeuvieme(!neuvieme)}} />{"\n"}
                        {neuviemeQuestion1} <Checkbox status={neuvieme1 ? 'checked' : 'unchecked'} onPress={ ()=>{setNeuvieme1(!neuvieme1)}} />{"\n"}
                        {neuviemeQuestion2}<Checkbox status={neuvieme2 ? 'checked' : 'unchecked'} onPress={ ()=>{setNeuvieme2(!neuvieme2)}} />{"\n"}

                    </Text>
                    <Text style={styles.question}>
                        <Text style={styles.titre2}> écrire une addition '127+10' pour obtenir 137 : </Text>{"\n"}{"\n"}
                        {dixiemeQuestion} <Checkbox status={dixieme ? 'checked' : 'unchecked'} onPress={ ()=>{setDixieme(!dixieme)}} />{"\n"}
                        {dixiemeQuestion1} <Checkbox status={dixieme1 ? 'checked' : 'unchecked'} onPress={ ()=>{setDixieme1(!dixieme1)}} />{"\n"}
                        {dixiemeQuestion2}<Checkbox status={dixieme2 ? 'checked' : 'unchecked'} onPress={ ()=>{setDixieme2(!dixieme2)}} />{"\n"}
                        {dixiemeQuestion3} <Checkbox status={dixieme3 ? 'checked' : 'unchecked'} onPress={ ()=>{setDixieme3(!dixieme3)}} />{"\n"}

                    </Text>
                    <Button  color="orange" title="valider" onPress={reponse}/>


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
       
        borderColor:"black",
     
          flexDirection:"row",
     
        textAlign:"center",
       
        backgroundColor:"#F2E1DE",

        
  
    },
    question:{
       
        fontSize:20, 
        fontFamily:"serif",
        borderWidth:4,
        borderColor:"black",
     
          flexDirection:"row",
     
        
        borderRadius:10,
       
        backgroundColor:"#F5E8DC",

        padding:20,
        margin:5
        
  
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
    titre2:{
        backgroundColor:"brown",
        textAlign:"center",
        fontSize:20,
        borderWidth: 4,
        borderColor:'white',
        color:'white',
        padding:100,
      
        width:"100%",
        
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
    item: {
        backgroundColor: '#ECE4E2',
        padding: 20,
        borderWidth: 4,
        borderColor:'black',
       
      },
    
  })
