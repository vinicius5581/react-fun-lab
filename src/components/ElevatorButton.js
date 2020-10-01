import React from 'react';

/**
 * <ElevatorButton
 *     id={5}    
 *     isOn={true}
 *     label={'Botao das galaxias'}
 *   />
 */

class ElevatorButton extends React.Component {
    render() {
        return (
            <button
                id={this.props.id}
                onClick={(e) => console.dir(e.target)}
                className={`${this.props.isOn ? 'buttonOn' : 'buttonOff'}`}
            >
                {this.props.label}
            </button>
        )
    }
}

export default ElevatorButton;