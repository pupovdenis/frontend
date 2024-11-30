import React from "react";
import Person from "./Person";

class Persons extends React.Component {

    render() {
        if (this.props.persons.length > 0) {
            return (<div>
                {this.props.persons.map((el) => (
                    <Person key={el.id} person={el} onDelete={this.props.onDelete} onEdit={this.props.onEdit}/>
                ))}
            </div>)
        } else {
            return (<div className="person">
                <h3>Список личнойстей пуст</h3>
            </div>)
        }
    }


}

export default Persons