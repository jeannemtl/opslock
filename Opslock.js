import React from "react"
import {
  View,
  Text,

} from 'react-native';

export default class Explore extends React.Component {

constructor(props){
    super(props);
    this.state={
      usershifts: [],
      globalshifts: [],
    },
    this.function = this.function.bind(this);
  }


componentDidMount = async () =>{
  fetch(""
  "method": "GET",
	"headers": {

        	}
        })
  .then(response => response.json()
  )
  .then(json =>{
          this.setState({items: json.results.map(item => ({
            usershiftsStart: item.start,
            usershiftsEnd: item.end
        }))
      })
  })
  .catch(err => {
  	console.log(err);
  });


  fetch(""
  "method": "GET",
	"headers": {

        	}
        })
  .then(response => response.json()
  )
  .then(json =>{
          this.setState({items: json.results.map(item => ({
            globalShiftListStart: item.start,
            globalShiftListEnd: item.end
        }))
      })
  })
  .catch(err => {
  	console.log(err);
  });
  });

function = async(user, start, end) =>{
if (start > this.state.usershiftend && start > this.state.globalshiftListEnd)  {
await firebase.database().ref('Schedule').child(user).set({start: start, end: end})
this.setState({
  //update state
})
}else{
  alert("you're scheduled for something else at that time")
}
.catch(err => {
  console.log(err);
});
}

render() {
	return(
      <View style={styles.container}>
        <TextInput style = {styles.textInput}
        placeholder = "Enter start time"
        onChangeText={start=> this.setState({start})}/>
        <TextInput style = {styles.textInput}
        placeholder = "Enter end time"
        onChangeText={end=> this.setState({end})}/>

          <View>
            <Text style={styles.signUpUsingEmailText}
            onPress={() => this.function(this.state.start, this.state.end)}>
            SCHEDULE</Text>
          </View>
        </View>
	}
}

const styles = StyleSheet.create({

})
