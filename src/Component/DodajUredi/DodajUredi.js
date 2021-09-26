import axios from 'axios';
import React, { Component } from 'react'
import './DodajUredi.css'
class DodajUredi extends Component {
    constructor(props){
        super(props);
    this.state = {
        Username: "",
            Password: "",
            Id: "",
        

    }
    this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);



}
handleUsername(event) {
    this.setState({ Username: event.target.value });
}
handlePassword(event) {
    this.setState({ Password: event.target.value });
}

      handleSubmit(event){
        event.preventDefault();
        console.log(this.state);

          axios.put("http://localhost:56415/api/AdminApi/",this.state)
              .then(function (response) {
                console.log(response);
              })

      }
 
      componentDidMount(){
        
        axios.get("http://localhost:56415/api/AdminApi/"+this.props.match.params.id).then(result=>(
            this.setState({

                Username:result.data.username,
                Password:result.data.password,
                Id:result.data.id
                
            })
        ));
      }
      render() {

        return <div>
            
       <button onClick={()=>{this.props.history.goBack()}} className="button">Prethodno</button>

            <div id="Pocetna">
                <div id="Slika">
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Ime</label>
                        <input type="text" className="input_polje" value={this.state.Username} onChange={this.handleUsername} />
                    </div>
                    <div>
                        <label>Sifra</label>
                        <input type="text" className="input_polje" value={this.state.Password} onChange={this.handlePassword}/>
                    </div>
                  
                    <input type="submit" value="Submit" id="Submit"/>
                </form >
            </div >
        </div>
    }
}

export default DodajUredi;