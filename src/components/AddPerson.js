import React from "react";

class AddPerson extends React.Component {

    personAdd = {}

    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            biography: "",
            age: 1
        }
    }

    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input placeholder="firstname" onChange={(e) => this.setState({firstname: e.target.value})}/>
                <input placeholder="lastname" onChange={(e) => this.setState({lastname: e.target.value})}/>
                <textarea placeholder="biography" onChange={(e) => this.setState({biography: e.target.value})}></textarea>
                <input placeholder="age" onChange={(e) => this.setState({age: e.target.value})}/>
                <button type="button" onClick={() => {
                    this.myForm.reset()
                    this.personAdd = {
                        firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        biography: this.state.biography,
                        age: this.state.age
                    }
                    if (this.props) {
                        this.personAdd.id = this.props.person.id
                    }
                    this.props.onAdd(this.personAdd)
                }}>Add
                </button>
            </form>
        )
    }


}

export default AddPerson