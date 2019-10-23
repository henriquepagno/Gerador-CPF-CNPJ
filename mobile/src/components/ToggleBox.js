import React from "react";
import { View } from 'react-native';

class ToggleBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			opened: false,
		};
		this.toggleBox = this.toggleBox.bind(this);
		
		//Define uma variável global para encontrar o togglebox.
		window.toggleBoxComponent = this;
	}

	toggleBox() {
		const { opened } = this.state;
		this.setState({
			opened: !opened,
		});
	}

	toggleBoxDisable(){
		this.setState({
			opened: false,
		})
	}

	toggleBoxEnable(){
		this.setState({
			opened: true,
		})
	}
  
	render() {
		var { children } = this.props;
		const { opened } = this.state;

		return (
			<View>
				{opened && (
					<View>
						{children}
					</View>
				)}
			</View>
		);
	}
}

export default ToggleBox;