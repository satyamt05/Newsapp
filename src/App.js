//rcep
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import PropTypes from "prop-types";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export class App extends Component {
  //INITIALSING THE PROPS HERE 
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "technology",
  };

  //DATTA TYPE OF PROPS 
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number, //ptn
    category: PropTypes.string, //pts
  };


  //STATE FOR THE ABOVE LOADING BAR 
  state = {
    progress: 0,
  };
  setprogress = (progress) => {
    this.setState({
      progress: progress,
    });
  };
  pagesize = 15;

  //TAKING THE API KEY FROM .EVA.LOCAL
  apikey = process.env.REACT_APP_NEWS_API;

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />

            {/* <Route exact
              path="/"
              key={"General"}
              element={
                 element={<News
                  setprogress={this.setprogress}
                  apikey={this.apikey}
                  pagesize={this.pagesize}
                  country={this.props.country}
                  category="General"
                />
              }
            />
            <Route exact
              path="/Home"
              key="General"

              element={
                 element={<News
                  setprogress={this.setprogress}
                  apikey={this.apikey}
                  pagesize={this.pagesize}
                  country={this.props.country}
                  category="General"
                />
              }
            />
            <Route exact
              path="/Business"
              key="business"

              element={
                 element={<News
                  setprogress={this.setprogress}
                  apikey={this.apikey}
                  pagesize={this.pagesize}
                  country={this.props.country}
                  category="Business"
                />
              }
            />
            <Route exact
            key="Entertainment"
              path="Entertainment"
              element={
                 element={<News
                  setprogress={this.setprogress}
                  apikey={this.apikey}
                  pagesize={this.pagesize}
                  country={this.props.country}
                  category="Entertainment"
                />
              }
            />
            <Route exact
            key="Health"

              path="/Health"
              element={
                 element={<News
                  setprogress={this.setprogress}
                  apikey={this.apikey}
                  pagesize={this.pagesize}
                  country={this.props.country}
                  category="Health"
                />
              }
            />
            <Route exact
              path="/Science"
              element={
                 element={<News
                  setprogress={this.setprogress}
                  apikey={this.apikey}
                  pagesize={this.pagesize}
                  country={this.props.country}
                  category="Science"
                />
              }
            />
            <Route exact
              path="/Sports"
              element={
                 element={<News
                  setprogress={this.setprogress}
                  apikey={this.apikey}
                  pagesize={this.pagesize}
                  country={this.props.country}
                  category="Sports"
                />
              }
            />
            <Route exact
              path="/Technology"
              element={
                 element={<News
                  setprogress={this.setprogress}
                  pagesize={this.pagesize}
                  country={this.props.country}
                  category="Technology"
                />
              }
            /> */} 
          <Routes>
          <Route exact  path="/Home" element={<News setprogress={this.setprogress} apikey={this.apikey} key="general" pagesize={this.pagesize} country="in" category="General"/>}/>
          <Route exact path="/Business" element={<News setprogress={this.setprogress} apikey={this.apikey} key="business" pagesize={this.pagesize} country="in" category="Business"/>}/> 
          <Route exact path="/entertainment" element={<News setprogress={this.setprogress} apikey={this.apikey} key="entertainment" pagesize={this.pagesize} country="in" category="Entertainment"/>}/> 
          <Route exact path="/health" element={<News setprogress={this.setprogress} apikey={this.apikey} key="health" pagesize={this.pagesize} country="in" category="Health"/>}/> 
          <Route exact path="/science" element={<News setprogress={this.setprogress} apikey={this.apikey} key="science" pagesize={this.pagesize} country="in" category="Science"/>}/> 
          <Route exact path="/sports" element={<News setprogress={this.setprogress} apikey={this.apikey} key="sports" pagesize={this.pagesize} country="in" category="Sports"/>}/> 
          <Route exact path="/technology" element={<News setprogress={this.setprogress} apikey={this.apikey} key="technology" pagesize={this.pagesize} country="in" category="Technology"/>}/> 

          </Routes>

          {/*  element={<News setprogress={this.setprogress}  pagesize={6} country={this.props.country} category={this.props.category}/> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
