var React = require('react');

var ReactAnimateNumber = React.createClass({
    
    getInitialState() {
        return {number: 0};
    },

    componentDidMount() {
        var { number, speed } = this.props;
        number && this.animate(number, speed);
    },

    componentWillUnmount() {
        clearInterval(this.timer);
    },

    animate(number, speed){
        this.timer = setInterval(
            function(){
                if(this.state.number < number){
                    this.setState({number: this.state.number + 1})
                } else {
                    clearInterval(this.timer);
                }

            }.bind(this), speed);
    },

    render() {
        var displayNumber = this.state.number;
        return (
            <span>{displayNumber}</span>
        );
    }

});

export default ReactAnimateNumber;
