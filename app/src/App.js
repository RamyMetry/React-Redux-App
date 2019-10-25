import React,{useEffect} from 'react';
import './App.css';
import {connect} from "react-redux"
import {FetchImage} from "../src/actions/splach"

function App(props) {
  useEffect(()=>{
    props.FetchImage()
  },[])
  return(
    <div>{props.image.map((item)=>(
      <div key={item.id}>
        
        <img src={item.urls.small}/>
        <h3>  {item.likes} likes</h3><br/>
      </div>
    ))}</div>
  )
}

function mapStateToProps(state){
  return {
    isLoading :state.splash.isLoading,
    image : state.splash.image
  }
}

const mapDispatchToProps ={
  FetchImage
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
