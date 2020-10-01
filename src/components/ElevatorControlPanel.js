import React from 'react';
import ElevatorButton from './ElevatorButton';

class ElevatorControlPanel extends React.Component {
    render() {
        return (
            <div className="ElevatorControlPanel" >
                Elevator Control Panel
                {this.props.buttons.map(el => {
                    return (
                        <ElevatorButton
                            key={el.id}
                            id={el.id}
                            isOn={el.isOn}
                            label={el.label}
                        />
                    )
                })}
            </div >
        );
    }
}

export default ElevatorControlPanel;