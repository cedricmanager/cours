import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View,Image, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
//logo
import LogoVue from './images/vue.png'
import LogoReactNative from './images/reactNative.png'
import LogoReactjs from './images/reactJs.png'
import LogoAngular from './images/angular.png'
import LogoSymfony from './images/symfony.png'
import LogoLaravel from './images/laravel.png'
import LogoPhp from './images/php.png'
import LogoJavascript from './images/javascript.png'

export default function Home(){
    const navigation = useNavigation()

    return(
        <ScrollView >  
            <View style={style.page}>
            <Text style={style.text}>Front-end FrameWork android</Text>
                    <TouchableOpacity onPress={ () =>navigation.push('React-native')}>

                    <Image source={LogoReactNative} style={style.image2}/>
                     </TouchableOpacity>
            </View>
            <Text style={style.text2}> Afin de s'atisfaire la pluspart des internautes nous mettrons en ligne plusieurs langages de programmations et mettrons des Quizz variés </Text>
          
               {/* 
                <Text style={style.text}> Base langage</Text>
                <TouchableOpacity onPress={ () =>navigation.navigate('Php')}>
                        <Image source={LogoPhp} style={style.image} />
                    </TouchableOpacity>  
                <TouchableOpacity onPress={ () =>navigation.push('Javascript')}>
                        <Image source={LogoJavascript} style={style.image} />
                </TouchableOpacity>  

                <Text style={style.text}>Front-end FrameWork</Text>
                    <TouchableOpacity onPress={ () =>navigation.push('Vue')}>
                        <Image source={LogoVue} style={style.image} />
                    </TouchableOpacity>  
                    <TouchableOpacity onPress={ () =>navigation.push('ReactJs')}>

                        <Image source={LogoReactjs} style={style.image} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={ () =>navigation.push('Angular')}>

                         <Image source={LogoAngular} style={style.image}/>
                    </TouchableOpacity>

                <Text style={style.text}>Back-end FrameWork</Text>
                    <TouchableOpacity onPress={ () =>navigation.push('Symfony')}>

                    <Image source={LogoSymfony} style={style.image}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () =>navigation.push('Laravel')}>

              
                    <Image source={LogoLaravel} style={style.image}/>
                    </TouchableOpacity>
             */}
         
        </ScrollView>
    )
}

const style = StyleSheet.create({
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
    image2:{
        width:400,
        height:700,
        justifyContent : 'center',
        borderWidth: 4,
        borderColor:'black',
        justifyContent: 'space-between',
        resizeMode: 'contain',
        margin:6
    },
    page : {
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        justifyContent: 'space-between',
        backgroundColor:'black'
        
    },
    text :{
        fontSize:20,
        margin:3,
        justifyContent:'space-between',
        color:'white'

    },    text2:{
        fontSize:20,
        fontFamily:"serif",
       
        backgroundColor:"#F2E1DE",
         margin:10,
        padding:4
    },
})