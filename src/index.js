import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const movie = {
  title: "Star Wars",
  image: "https://lumiere-a.akamaihd.net/v1/images/sw9-teaser_large_36e65ed3.jpeg?region=0%2C0%2C960%2C1422&width=600",
  overview: "Star Wars is an American epic space-opera media franchise created by George Lucas.",
  vote_average: 9.9
}

function Image(props){
  return(
    <img width="100%" src={props.src} alt={props.title} />
  )
}

class MovieItem extends React.Component{
  constructor(){
    super()

    this.state = {
      show: false,
      like: false
    };
  }

  toggleOverview = () => {
    this.setState({
      show: !this.state.show
    })
  };

  handleLike = () => {
     this.setState({
      like: !this.state.like
    })
  }

  render(){
    const {data: {title, vote_average, image, overview}} = this.props;
    return(
      <div style={{width: "300px"}}>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <button 
            type="button" 
            onClick={this.toggleOverview}
          >
            {this.state.show ? "Hide" : "Show"}
          </button>
          <button 
            type="button" 
            onClick={this.handleLike}
            className= {this.state.like ? "btn-like" : ""}
          >
            Like
          </button>
        </div>
        {this.state.show ? <p>{overview}</p> : null}
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <MovieItem data={movie}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
