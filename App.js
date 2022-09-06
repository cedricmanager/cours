import { StatusBar } from 'expo-status-bar';
import React, { useState,Component } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { navigation,useNavigation, useRoute } from '@react-navigation/native'


const Stack = createNativeStackNavigator();

//page
  import home from './components/home';
  import ModalHome from './components/info'
//Javascript
  import JavascriptPage from './components/javascript/homeJavascript'
  import ModalJavascript from './components/javascript/modalJavascript'
//Laravel
  import LaravelPage from './components/laravel/HomeLaravel'
  import ModalLaravel from './components/laravel/modalLaravel'
//Php
  import PhpPage from './components/php/HomePhp'
  import ModalPhp from './components/php/modalPhp'
//react.js
  import ReactJsPage from './components/react-js/HomeReactJs'
  import ModalReactJs from './components/react-js/modalReactJs'
//react-native
  import ReactNativePage from './components/react-native/HomeReactNative'
  import ModalReactNative from './components/react-native/modalNative'
  import reactNative1 from './components/react-native/chapitre/chapitre1'
  import reactNative2 from './components/react-native/chapitre/chapitre2'
  import reactNative3 from './components/react-native/chapitre/chapitre3'
  import reactNative4 from './components/react-native/chapitre/chapitre4'
  import reactNative5 from './components/react-native/chapitre/chapitre5'
  import reactNative6 from './components/react-native/chapitre/chapitre6'
  import reactNative7 from './components/react-native/chapitre/chapitre7'
  import reactNative8 from './components/react-native/chapitre/chapitre8'
  import reactNative9 from './components/react-native/chapitre/chapitre9'
  import reactNative10 from './components/react-native/chapitre/chapitre10'
//Symfony
  import SymfonyPage from './components/symfony/HomeSymfony'
  import ModalSymfony from './components/symfony/modalSymfony'

//Vue
  import VuePage from './components/vue/HomeVue'
  import ModalVue from './components/vue/modalVue'

//Angular
  import AngularPage from './components/angular/HomeAngular'
  import ModalAngular from './components/angular/modalAngular'

import Autre from './components/autre';
import Content from './components/menu';

export default function App(){
  
  const [reactNative, setReactNative] = useState(false)
  const [modalHome, setModalHome] = useState(false)
  const [modalJavascript, setModalJavascript] = useState(false)
  const [modalPhp, setModalPhp] = useState(false)
  const [modalVue, setModalVue]= useState(false)
  const [modalAngular, setModalAngular]= useState(false)
  const [modalReactJs, setModalReactJs]= useState(false)
  const [modalSymfony, setModalSymfony]= useState(false)
  const [modalLaravel, setModalLaravel]= useState(false)

// le menu pour chaque cours
 function changerReactNative(){
    setReactNative(false)
  }
  function changerModalHome(){
    setModalHome(false)
  }
  function changerModalJavascript(){
    setModalJavascript(false)
  }
  function changerModalPhp(){
    setModalPhp(false)
  }
  function changerModalVue(){
    setModalVue(false)
  }
  function changerModalAngular(){
    setModalAngular(false)
  }
  function changerModalReactJs(){
    setModalReactJs(false)
  }
   function changerModalSymfony(){
    setModalSymfony(false)
  }
   function changerModalLaravel(){
    setModalLaravel(false)
  }
 
 

   


    return(
      <NavigationContainer>

          <ModalReactNative changer={changerReactNative}  etat={reactNative}/>
          <ModalHome changer={changerModalHome} etat={modalHome} />
          <ModalAngular changer={changerModalAngular} etat={modalAngular}/>
          <ModalJavascript changer={changerModalJavascript} etat={modalJavascript}/>
          <ModalLaravel changer={changerModalLaravel} etat={modalLaravel}/>
          <ModalPhp changer={changerModalPhp} etat={modalPhp}/>
          <ModalReactJs changer={changerModalReactJs} etat={modalReactJs}/>
          <ModalSymfony changer={changerModalSymfony} etat={modalSymfony}/>
          <ModalVue changer={changerModalVue} etat={modalVue}/>

              <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={home}
                    options={{ title: 'Acceuil',
                    headerStyle:{
                      backgroundColor:'black'
                    },
                    headerTintColor:'white',
                    headerTitleAlign:'center',
                    
                    headerRight: () => (
                      <Button
                        onPress={() => setModalHome(true)}
                        title="Info"
                        color="blue"
                      />
                    ),
                   }}
                />
                <Stack.Screen
                  name="Laravel"
                  component={LaravelPage}
                  options={({navigation})=>({
                    headerLeft: () => (
                <Button
                  onPress={() => navigation.navigate('Home')}
                  title="Acceuil"
                  color="blue" // call .navigate on navigation
                />
                  ), 
                    
                    title:'Laravel',
                  headerStyle:{
                    backgroundColor:'black'
                  },
                  headerTintColor:'white',
                  headerTitleAlign:'center',

                  headerRight: () => (
                    <Button
                      onPress={() => setModalLaravel(true)}
                      title="Info"
                      color="#00cc00"
                    />
                  ),
                })}
                />
                <Stack.Screen
                  name="Symfony"
                  component={SymfonyPage}
                  options={({navigation})=>({
                    headerLeft: () => (
                <Button
                  onPress={() => navigation.navigate('Home')}
                  title="Acceuil"
                  color="blue" // call .navigate on navigation
                />
                  ), 
                    
                    title:'Symfony',
                  headerStyle:{
                    backgroundColor:'black'
                  },
                  headerTintColor:'white',
                  headerTitleAlign:'center',      
                  headerRight: () => (
                    <Button
                      onPress={() => this.props.navigation.push('Home')}
                      title="Chapitre"
                      color="#00cc00"
                    />
                  ),
                })}
                />
                <Stack.Screen
                  name="React-native"
                  component={ReactNativePage}
                  options={({navigation})=>({
                    headerLeft: () => (
                <Button
                  onPress={() => navigation.navigate('Home')}
                  title="Acceuil"
                  color="blue" // call .navigate on navigation
                />
                  ),  
                    
                    title:'React-native',
                  headerStyle:{
                    backgroundColor:'black'
                  },
                  headerTintColor:'white',
                  headerTitleAlign:'center',

                  headerRight: () => (
                    <Button
                      onPress={() => setReactNative(true)}
                      title="Chapitre"
                      color="#00cc00"
                    />
                  ),
                })}
                />
                <Stack.Screen
                  name="ReactJs"
                  component={ReactJsPage}
                  options={({navigation})=>({
                    headerLeft: () => (
                <Button
                  onPress={() => navigation.navigate('Home')}
                  title="Acceuil"
                  color="blue" // call .navigate on navigation
                />
                  ),   
                    title:'React.js',
                  headerStyle:{
                    backgroundColor:'black'
                  },
                  headerTintColor:'white',
                  headerTitleAlign:'center',

                  headerRight: () => (
                    <Button
                      onPress={() => setModalReactJs(true)}
                      title="Chapitre"
                      color="#00cc00"
                    />
                  ),
                })}
                />
                <Stack.Screen
                  name="Javascript"
                  component={JavascriptPage}
                  options={({navigation})=>({
                    headerLeft: () => (
                <Button
                  onPress={() => navigation.navigate('Home')}
                  title="Acceuil"
                  color="blue" // call .navigate on navigation
                />
                  ),  
                  title:'Javascript',
                  headerStyle:{
                    backgroundColor:'black'
                  },
                  headerTintColor:'white',
                  headerTitleAlign:'center',

                  headerRight: () => (
                    <Button
                      onPress={() => setModalJavascript(true)}
                      title="Chapitre"
                      color="#00cc00"
                    />
                  ),
                })}
                />
                <Stack.Screen
                  name="Php"
                  component={PhpPage}
                  options={({navigation})=>({
                    headerLeft: () => (
                <Button
                  onPress={() => navigation.navigate('Home')}
                  title="Acceuil"
                  color="blue" // call .navigate on navigation
                />
                  ), 
                  title:'Php',
                  headerStyle:{
                    backgroundColor:'black'
                  },
                  headerTintColor:'white',
                  headerTitleAlign:'center',

                  headerRight: () => (
                    <Button
                      onPress={() => setModalPhp(true)}
                      title="Chapitre"
                      color="#00cc00"
                    />
                  ),
                })}
                />
                <Stack.Screen
                  name="Vue"
                  component={VuePage}
                  options={({navigation})=>({
                    headerLeft: () => (
                <Button
                  onPress={() => navigation.navigate('Home')}
                  title="Acceuil"
                  color="blue" // call .navigate on navigation
                />
                  ),
                  title:'Vue.js',
                  headerStyle:{
                    backgroundColor:'black'
                  },
                  headerTintColor:'white',
                  headerTitleAlign:'center',

                  headerRight: () => (
                    <Button
                      onPress={() => setModalVue(true)}
                      title="Chapitre"
                      color="#00cc00"
                    />
                  ),
                })}
                />
                <Stack.Screen
                  name="Angular"
                  component={AngularPage}
                 
                  options={({navigation})=>({
                      headerLeft: () => (
                  <Button
                    onPress={() => navigation.navigate('Home')}
                    title="Acceuil"
                    color="blue" // call .navigate on navigation
                  />
                ),
                  title:'Angular',
                  headerStyle:{
                    backgroundColor:'black'
                  },
                  headerTintColor:'white',
                  headerTitleAlign:'center',

                  headerRight: () => (
                    <Button
                      onPress={() => setModalAngular(true)}
                      title="Chapitre"
                      color="#00cc00"
                    />
                  ),
               
                })}
                />

                
                {/*
                 react native screen

                */}
                <Stack.Screen
                  name="ReactNative1"
                  component={reactNative1}
                 
                  options={({navigation})=>({
                      headerLeft: () => (
                  <Button
                    onPress={() => navigation.navigate('Home')}
                    title="Acceuil"
                    color="blue" // call .navigate on navigation
                  />
                ),
                  title:'Introduction',
                  headerStyle:{
                    backgroundColor:'black'
                  },
                  headerTintColor:'white',
                  headerTitleAlign:'center',

                  headerRight: () => (
                    <Button
                      onPress={() => setReactNative(true)}
                      title="Chapitre"
                      color="#00cc00"
                    />
                  ),
               
                })}
                />

                <Stack.Screen
                  name="ReactNative2"
                  component={reactNative2}
                 
                  options={({navigation})=>({
                      headerLeft: () => (
                  <Button
                    onPress={() => navigation.navigate('Home')}
                    title="Acceuil"
                    color="blue" // call .navigate on navigation
                  />
                ),
                  title:'Architecture',
                  headerStyle:{
                    backgroundColor:'black'
                  },
                  headerTintColor:'white',
                  headerTitleAlign:'center',

                  headerRight: () => (
                    <Button
                      onPress={() => setReactNative(true)}
                      title="Chapitre"
                      color="#00cc00"
                    />
                  ),
               
                })}
                />
                 <Stack.Screen
                  name="ReactNative3"
                  component={reactNative3}
                 
                  options={({navigation})=>({
                      headerLeft: () => (
                  <Button
                    onPress={() => navigation.navigate('Home')}
                    title="Acceuil"
                    color="blue" // call .navigate on navigation
                  />
                ),
                  title:'Props',
                  headerStyle:{
                    backgroundColor:'black'
                  },
                  headerTintColor:'white',
                  headerTitleAlign:'center',

                  headerRight: () => (
                    <Button
                      onPress={() => setReactNative(true)}
                      title="Chapitre"
                      color="#00cc00"
                    />
                  ),
               
                })}
                />
                    <Stack.Screen
                  name="ReactNative4"
                  component={reactNative4}
                 
                  options={({navigation})=>({
                      headerLeft: () => (
                  <Button
                    onPress={() => navigation.navigate('Home')}
                    title="Acceuil"
                    color="blue" // call .navigate on navigation
                  />
                ),
                  title:'Stats',
                  headerStyle:{
                    backgroundColor:'black'
                  },
                  headerTintColor:'white',
                  headerTitleAlign:'center',

                  headerRight: () => (
                    <Button
                      onPress={() => setReactNative(true)}
                      title="Chapitre"
                      color="#00cc00"
                    />
                  ),
               
                })}
                />
                    <Stack.Screen
                  name="ReactNative5"
                  component={reactNative5}
                 
                  options={({navigation})=>({
                      headerLeft: () => (
                  <Button
                    onPress={() => navigation.navigate('Home')}
                    title="Acceuil"
                    color="blue" // call .navigate on navigation
                  />
                ),
                  title:'Balises',
                  headerStyle:{
                    backgroundColor:'black'
                  },
                  headerTintColor:'white',
                  headerTitleAlign:'center',

                  headerRight: () => (
                    <Button
                      onPress={() => setReactNative(true)}
                      title="Chapitre"
                      color="#00cc00"
                    />
                  ),
               
                })}
                />
                    <Stack.Screen
                  name="ReactNative6"
                  component={reactNative6}
                 
                  options={({navigation})=>({
                      headerLeft: () => (
                  <Button
                    onPress={() => navigation.navigate('Home')}
                    title="Acceuil"
                    color="blue" // call .navigate on navigation
                  />
                ),
                  title:'Router',
                  headerStyle:{
                    backgroundColor:'black'
                  },
                  headerTintColor:'white',
                  headerTitleAlign:'center',

                  headerRight: () => (
                    <Button
                      onPress={() => setReactNative(true)}
                      title="Chapitre"
                      color="#00cc00"
                    />
                  ),
               
                })}
                />
                    <Stack.Screen
                  name="ReactNative7"
                  component={reactNative7}
                 
                  options={({navigation})=>({
                      headerLeft: () => (
                  <Button
                    onPress={() => navigation.navigate('Home')}
                    title="Acceuil"
                    color="blue" // call .navigate on navigation
                  />
                ),
                  title:'Debug',
                  headerStyle:{
                    backgroundColor:'black'
                  },
                  headerTintColor:'white',
                  headerTitleAlign:'center',

                  headerRight: () => (
                    <Button
                      onPress={() => setReactNative(true)}
                      title="Chapitre"
                      color="#00cc00"
                    />
                  ),
               
                })}
                />
                    <Stack.Screen
                  name="ReactNative8"
                  component={reactNative8}
                 
                  options={({navigation})=>({
                      headerLeft: () => (
                  <Button
                    onPress={() => navigation.navigate('Home')}
                    title="Acceuil"
                    color="blue" // call .navigate on navigation
                  />
                ),
                  title:'Quizz',
                  headerStyle:{
                    backgroundColor:'black'
                  },
                  headerTintColor:'white',
                  headerTitleAlign:'center',

                  headerRight: () => (
                    <Button
                      onPress={() => setReactNative(true)}
                      title="Chapitre"
                      color="#00cc00"
                    />
                  ),
               
                })}
                />
                    <Stack.Screen
                  name="ReactNative9"
                  component={reactNative9}
                 
                  options={({navigation})=>({
                      headerLeft: () => (
                  <Button
                    onPress={() => navigation.navigate('Home')}
                    title="Acceuil"
                    color="blue" // call .navigate on navigation
                  />
                ),
                  title:'Debug',
                  headerStyle:{
                    backgroundColor:'black'
                  },
                  headerTintColor:'white',
                  headerTitleAlign:'center',

                  headerRight: () => (
                    <Button
                      onPress={() => setReactNative(true)}
                      title="Chapitre"
                      color="#00cc00"
                    />
                  ),
               
                })}
                />
                    <Stack.Screen
                  name="ReactNative10"
                  component={reactNative10}
                 
                  options={({navigation})=>({
                      headerLeft: () => (
                  <Button
                    onPress={() => navigation.navigate('Home')}
                    title="Acceuil"
                    color="blue" // call .navigate on navigation
                  />
                ),
                  title:'Quizz',
                  headerStyle:{
                    backgroundColor:'black'
                  },
                  headerTintColor:'white',
                  headerTitleAlign:'center',

                  headerRight: () => (
                    <Button
                      onPress={() => setReactNative(true)}
                      title="Chapitre"
                      color="#00cc00"
                    />
                  ),
               
                })}
                />
 
            
              </Stack.Navigator>
        
    </NavigationContainer>
    );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vue:{
    backgroundColor:"#F2E1DE",
  }
});
