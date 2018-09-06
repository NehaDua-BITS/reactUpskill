import React, {PropTypes} from 'react';

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [
        { id: 10, name: "Ruby Mazzola" },
        { id: 11, name: "Lashaun Leroy" },
        { id: 12, name: "Alphonse Chaney" },
        { id: 13, name: "Joleen Albus" },
        { id: 14, name: "Kristal Gallman" },
        { id: 15, name: "Scarlett Hogg" },
        { id: 16, name: "Hang Wrona" },
        { id: 17, name: "Ferne Vines" },
        { id: 18, name: "Ena Herbert" },
        { id: 19, name: "Alaine Sackett" },
        { id: 20, name: "Loida Holdman" },
        { id: 21, name: "Yaeko Yost" },
        { id: 22, name: "Susanne Ruzicka" },
        { id: 23, name: "Hong Alfred" },
        { id: 24, name: "Kerrie Welcher" },
        { id: 25, name: "Shawanda Furby" },
        { id: 26, name: "Heike Dendy" },
        { id: 27, name: "Jacinda Tomita" },
        { id: 28, name: "Don Hansell" },
        { id: 29, name: "Lauralee Gebhart" }
      ]
    }
  }

	render()
	{
		let listItems = []
		for (let key in this.state.data) {
			listItems.push(
		  <li>{this.state.data[key].name}</li>
		}
	}

	return {
	<div>
	{this.state.data.map((item, index) => {
		return <ListItem key="index} item={item> Name </ListItem>
	}}}


  
  render() {
    return (

        <div>
	<ul>
            {
                this.state.data.map((item, index) => {
                    return <li key={index}> {item.name} </li>
                })
            }
	</ul>
        </div>);
  }

}
