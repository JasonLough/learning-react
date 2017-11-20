import React from 'react';

let styles = {
    'catBox' : {
        'padding' : '20px',
        'margin' : '5px',
        'border' : '1px solid #666',
        'boxShadow': '10px 10px 10px #999',
        'borderRadius' : '5px'
    }    
}


class Mod extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        let imgArr = this.props.data.imgs.map( (e,i) => 
            <Img 
                img={`./img/${e}.jpg`} 
                key={i} 
            />
        )

        return (
            <div>            
                {imgArr}
            </div>
        )

    }
}


class Img extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            small: false
        }
    }

    clicked() {
        this.setState({
            small: !this.state.small
        })
    }

    render() {

        let size = this.state.small ? 'short' : 'tall';
        let myclasses = [size].join(' ') //you could have n other classes to add

        return (
            <img 
                style={styles.catBox} 
                src={`${this.props.img}`} 
                onClick={this.clicked.bind(this)}
                className={myclasses}
            />
        )
    }

}

export default Mod;