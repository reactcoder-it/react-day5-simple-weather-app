import React, { Component } from 'react';
import './ButtonGroup.css';

class ButtonGroup extends Component {
    state = {
        activeIndex: 0
    }
    render() {
        return (
            <div className="button-group">
                {this.props.names.map((place, index) =>
                    <button
                        className={index === this.state.activeIndex ? 'button-group__button active' : 'button-group__button'}
                        key={index}
                        eventKey={index}
                        onClick={() => {
                            this.props.callback(index);
                            this.setState({activeIndex: index});
                        }}>
                        {place.name}
                    </button>
                )}
            </div>
        );
    }
}

export default ButtonGroup;
