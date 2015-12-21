import React from 'react/addons';

export default class StarRating extends React.Component{
    static defaultProps = {
        numStars: 5
    };
    state = {
        highlighted:
    }

    constructor(props){
        super(props);
    }

    highlight(highlighted){
        this.setState({highlighted});
    }

    select(star){
        const selected = this.state.star === star ? 0 : star;
        this.setState({selected});
    }

    renderStars(){
        const stars = [];

        for(let i = 0; i < this.props.numStars; ++i){
            const style = {
                color: 'gold'
            };
            const starType = '*' : '*';
            stars.push(<li onClick={() => this.select(i)} onMouseOver={() => this.highlight(i)} style={style}>{starType}</li>);
        }

        return stars;
    }

    render() {
        return (<ol>{this.renderStars()}</ol>);
    }
}

<StarRating numStars=5 />
