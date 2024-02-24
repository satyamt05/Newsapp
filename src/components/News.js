// //rce
import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    //changes the title as per the category
    document.title = this.props.category;
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });

    //shubhi
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=88eec9747b6e4342bc26cc45fa9d34df&page=${this.state.page}&pagesize=${this.props.pageSize}`;

    // this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    setTimeout(() => {
      this.setState({
        articles: this.state.articles.concat(parseddata.articles),
        totalResults: parseddata.totalResults,
        loading: false,
      });
    }, 500);
  };

  async updatedata() {
    this.props.setprogress(30);

    //shubhi
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;

    this.setState({ loading: true });

    //FETCHING DATA FORM API
    let data = await fetch(url);
    this.props.setprogress(50);

    // CONVERING FETCHED DATA INTO JSON FORMAT
    let parseddata = await data.json();
    this.props.setprogress(70);

    //SETTING THE VARIABLES DECLARED IN THE CNSTRUCTOR
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false,
    });
    this.props.setprogress(100);
  }

  //AFTER THE REDER IT WILL EXECUTE AND UPDATEDATA WILL RUN
  async componentDidMount() {
    this.updatedata();
  }

  render() {
    return (
      <div>
        <h1 className="text-center " style={{ marginTop: "5rem" }}>
          <u>Fire News - Top {this.props.category} Headlines </u>
        </h1>
        {this.state.loading && <Spinner />}
        <br />

        {/* REFER REACT INFINITE SCROLL DOCS*/}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={!this.state.loading && <Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.length > 0
                ? this.state.articles.map((element) => (
                    <div className="col md-4" key={element.url}>
                      <NewsItems
                        title={
                          element.title
                            ? element.title.slice(0, 42)
                            : "Latest News"
                        }
                        description={
                          element.description
                            ? element.description.slice(0, 88)
                            : "See the detailed description"
                        }

                        //DATA COMMING FROM API
                        imgurl={element.urlToImage}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                        newsurl={element.url}
                      />
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;

//29910
// const url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=933d97740a004b1fbb5c8395f826d7e4&page=${this.state.page}&pagesize=${this.props.pageSize}`;

//satyam
// let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=046052746b2d49ba98fb830f9336cb3d&page=${this.state.page}&pagesize=${this.props.pageSize}`;

//shubhi
//  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;

// ---------------------------------------------------------------------------------------------------------

// PREVIOUS

// handleprevclick = async () => {
//   console.log("Prev was clicked");

//   // if (!(this.state.page + 1 >Math.ceil(this.props.totalResults / this.props.pageSize))) {
//   //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=046052746b2d49ba98fb830f9336cb3d&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
//   //   this.setState({ loading: true });
//   //   let data = await fetch(url);
//   //   let parseddata = await data.json();
//   //   this.setState((prevState) => ({
//   //     page: prevState.page - 1,
//   //     articles: parseddata.articles,
//   //     loading: false,
//   //   }));
//   // }

//   this.setState({ page: this.state.page - 1 });
//   this.updatedata();
// };

// NEXT

// handlenextclick = async () => {
//   console.log("Next was clicked");

//   // if (!(this.state.page * this.props.pageSize >= this.state.totalResults)) {
//   //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=046052746b2d49ba98fb830f9336cb3d&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
//   //   this.setState({ loading: true });
//   //   let data = await fetch(url);
//   //   let parseddata = await data.json();
//   //   this.setState((prevState) => ({
//   //     page: prevState.page + 1,
//   //     articles: parseddata.articles,
//   //     loading: false,
//   //   }));
//   // }
//   this.setState({ page: this.state.page + 1 });
//   if (!(this.state.page + 1 > Math.ceil(this.props.totalResults / this.props.pageSize)))
//     this.updatedata();
// };

/* <div className="d-flex justify-content-between">
            <Button
              variant="dark"
              disabled={this.state.page <= 1}
              onClick={this.handleprevclick}
            >
              &larr; Previous
            </Button>{" "}
            <div>
              Page No:
              {this.state.page}
            </div>
            <Button
              variant="dark"
              // disabled={
              //   this.state.page * this.props.pageSize >= this.state.totalResults
              // }
              disabled={this.state.page * this.props.pageSize >= this.state.totalResults || this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)}
              onClick={this.handlenextclick}
            >
              Next &rarr;
            </Button>{" "}
          </div> */
