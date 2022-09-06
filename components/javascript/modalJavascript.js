import React from 'react'
import {Modal, Text, Button,TouchableOpacity} from 'react-native' 

class modalJavascript extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){

        
        return(
            <Modal animationType= {"slide"} transparent= {false}  visible= {this.props.etat}>
                <Text>Javascript Chapitre</Text>
                
                <TouchableOpacity onPress={ () =>navigation.push('Autre')}>
                     <Text>salut</Text>
                </TouchableOpacity>          
             
             <Text>salut</Text>

             <Text>salut</Text>

             <Text>salut</Text>
             <Text>salut</Text>
             <Text>salut</Text>
             <Text>salut</Text>
             <Text>salut</Text>
             <Text>salut</Text>
             <Text>salut</Text>
             <Button
              onPress={ () => this.props.changer()}
              title="Close"
              color="red"
            />
           </Modal>
        )
    }
}
export default modalJavascript;