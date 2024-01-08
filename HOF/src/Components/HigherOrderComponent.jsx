import {Component} from "react";

export default class HigherOrderComponent extends Component {

    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ],
            filteredData :[],
            filteredWithNames :[],
            filteredWithAge :[],
            total:0

        }

        var filteredData = this.state.userData.filter( (element) => element.user_type === 'Designer');
        var filteredWithNames = this.state.userData.filter( (element) => element.name[0] == 'J')
        var filteredWithAge = this.state.userData.filter( (element) => element.age > 28 && element.age <= 50)
        var sum = this.state.userData.reduce( (accumlator, element) => {
            if (element.user_type === "Designer"){
                accumlator += element.years;
            }
            return accumlator
        }, 0);

        this.state.filteredWithNames = filteredWithNames;
        this.state.filteredWithAge = filteredWithAge;
        this.state.filteredData = filteredData;
        this.state.total = sum;
    }

    render(){
        return(
            <div style={{width: "80%", textAlign: "initial  "}}>
                <h1>Display All Items</h1>
                {this.state.userData.map((element) => (
                    <div key={element.id} style={{width: "70%"}}>
                        <ul>
                            <li>ID : {element.id} Name : {element.name} Type : {element.user_type}</li>
                        </ul>
                    </div>
                ))}


                <h1>Display all Data Based on UserType </h1>
                {this.state.filteredData.map((element) => (
                    <div key={element.id}>
                    <ul>
                        <li>ID : {element.id} Name : {element.name} Type : {element.user_type}</li>
                    </ul>
                </div>

                ))}


               <h1>Filtered all the Data based on greater than 20 and less than 50 </h1>
                {this.state.filteredWithAge.map((element) => (
                    <div key={element.id}>
                    <ul>
                        <li>ID : {element.id} Name : {element.name} Type : {element.user_type}</li>
                    </ul>
                </div>

                ))}

               <h1>Display all the data starting with letter J </h1>
                {this.state.filteredWithNames.map((element) => (
                    <div key={element.id}>
                    <ul>
                        <li>ID : {element.id} Name : {element.name} Type : {element.user_type}</li>
                    </ul>
                </div>

                ))}


                <h1>Find the total years of Designer</h1>
                <h2>{this.state.total}</h2>
            </div>

        )

    }
}