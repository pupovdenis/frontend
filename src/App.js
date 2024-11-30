import React from "react";
import Header from "./components/Header";
import Persons from "./components/Persons";
import AddPerson from "./components/AddPerson";
import axios from "axios";

const baseUrl = "http://localhost:7777/persons"

class App extends React.Component {

    constructor(props) {
        super(props);

        axios.get(baseUrl).then((res) => {
            this.setState({persons: res.data})
        })

        this.state = {
            persons: []
        }
        this.addPerson = this.addPerson.bind(this)
        this.deletePerson = this.deletePerson.bind(this)
        this.editPerson = this.editPerson.bind(this)
    }

    render() {
        return (<div>
            <Header title="Список личностей"/>
            <main>
                <Persons persons={this.state.persons} onDelete={this.deletePerson} onEdit={this.editPerson}/>
            </main>
            <aside>
                <AddPerson onAdd={this.addPerson}/>
            </aside>
        </div>)
    }

    addPerson(person) {
        const id = this.state.persons.length + 1
        this.setState({persons: [...this.state.persons, {id, ...person}]})
    }

    editPerson(person) {
        let allPersons = this.state.persons
        allPersons[person.id - 1] = person

        this.setState({person: []}, () => {
            this.setState({persons: [...allPersons]})
        })
    }

    deletePerson(id) {
        this.setState({
            persons: this.state.persons.filter((el) => el.id !== id)
        })
    }

}

export default App