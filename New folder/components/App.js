import React ,{Component} from 'react';
//import {robots} from '../robots';
import CardList from './cardList';
import SearchBox from './searchBox';
class App extends Component{
    constructor(){
        super();
        this.state={
            robots:[],
            searchfield:""
        }
    }
    componentDidMount(){
        
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}));
    }
    onSearchChange =(event) => {
       this.setState({searchfield:event.target.value});
   
      
        
    }
    
    render(){
        const filteredRobots = this.state.robots.filter(robo =>{
            return robo.name.toLowerCase().includes(this.state.searchfield.toLowerCase());  
        })
       
     if(this.state.robots.length <= 0)
     {
     return    <h1>loading</h1>
     }
     else{

        return(
            <div className="tc">
                <h1>JUNIOR ROBO's</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                 <CardList robots={filteredRobots}/>

            </div>
           
        );
     }


        
    
    }

}
export default App;