import React from "react";
import AddPerson from "./AddPerson";
import {IoCloseCircleSharp, IoHammerSharp} from "react-icons/io5";

class Person extends React.Component {

    person = this.props.person

    constructor(props) {
        super(props);
        this.state = {
            editForm: false
        }
    }

    render() {
        return (
            <div className="person">
                <IoCloseCircleSharp className="delete-icon" onClick={() => this.props.onDelete(this.person.id)}/>
                <IoHammerSharp className="edit-icon" onClick={() => {
                    this.setState({editForm: !this.state.editForm})
                }}/>
                <h3>{this.person.firstname} {this.person.lastname}</h3>
                <p>{this.person.biography}</p>

                {this.state.editForm && <AddPerson person={this.person} onAdd={this.props.onEdit}/>}
            </div>
        )
    }


}

export default Person