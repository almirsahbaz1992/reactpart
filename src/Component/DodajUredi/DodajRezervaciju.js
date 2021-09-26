import axios from 'axios';
import React, { Component } from 'react'
import './DodajUredi.css'
class DodajRezervaciju extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: "",
            Password: "",
            
        }
        this.handleUsername = this.handleUsername.bind(this);

        this.handlePassword = this.handlePassword.bind(this);
       this.handleSubmit=this.handleSubmit.bind(this);
      
    }
    handleUsername(event) {
        this.setState({ Username: event.target.value });
        console.log(this.state);
     
    }
    handlePassword(event) {
        this.setState({ Password: event.target.value });
       
    }
   
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);

        axios.post("http://localhost:56415/api/AdminApi ", this.state)
            .then(function (response) {
                console.log(response);
            })
        this.props.history.replace({ pathname: '/rezervacije' });


    }

    render() {

        return <div>
            <button onClick={() => { this.props.history.goBack() }} className="button">Prethodno</button>

            <div id="Pocetna">
                <div id="Slika">
                </div>
                <form >
                   
                    <div>
                        <label>KorisnickoIme</label>
                        <input type="text" className="input_polje" value={this.state.Username} onChange={this.handleUsername} />
                    </div>
                    <div>
                        <label>Sifra</label>
                        <input type="text" className="input_polje" value={this.state.Password} onChange={this.handlePassword} />
                    </div>
                  
                    <input type="submit" value="Submit" id="Submit" onClick={this.handleSubmit} />
                </form >
            </div >
        </div>
    }
}

export default DodajRezervaciju;