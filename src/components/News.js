import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinr from './Spinr';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country: 'in',
    pagesize:8,
    category:'general',
    headline:'',
    
  }
  static propTypes={
    country: PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string,
    headline:PropTypes.string,


  }
constructor()
{
  super();
  console.log("hello I am constructor from Newscomponent");
  this.state={
    articles:[],
    loading:false,
    page:1
  }
}
async componentDidMount(){
  try{     
    let url=  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8cc9b0dc45d547628b836e695fb3d711&page=1&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    this.setState({
        articles: data.articles,
        loading:false

        
    });
}
catch(e) {
    console.log("something is not working");
}
}
HandleNextclick= async ()=>{
  console.log("Next");
  let url=  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8cc9b0dc45d547628b836e695fb3d711&page=${this.state.page+1}&pagesize=${this.props.pagesize}`
  this.setState({loading:true});
  let res = await fetch(url);
  let data = await res.json();
  this.setState({
    page:this.state.page+1,
    articles: data.articles,
    loading:false
  })


}
Handleprevclick=async()=>{
  console.log("previous")
  let url=  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8cc9b0dc45d547628b836e695fb3d711&page=${this.state.page-1}&pagesize=$this.props.pagesize}`
  this.setState({loading:true})
  let res = await fetch(url);
  let data = await res.json();
  this.setState({
    page:this.state.page-1,
    articles: data.articles,
    loading:false
  })

}


  render() {
    return (

<div className="container my-4">
  <h1 className="text-center">NewsDekho - Top {this.props.headline} Headlines</h1>
  {this.state.loading && <Spinr/>}
   
         
     <div className="row">
     {!this.state.loading && this.state.articles.map((element)=>{
         return <div className="col-md-4" key={element.url }>
        <NewsItem title ={element.title} description={element.description} imageUrl={element.urlToImage} newsurl={element.url}/>
        </div>
       })
       
     }
     </div>
     <div className="container d-flex justify-content-between" >
     <button disabled={this.state.page<=1} type="button" className="btn btn-dark"  onClick={this.Handleprevclick}>previous</button>
     <button  type="button" className="btn btn-dark" onClick={this.HandleNextclick}>Next</button>


     </div>
      
</div>
    )
  }
}

export default News
