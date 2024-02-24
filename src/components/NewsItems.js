import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class NewsItems extends Component {
  render() {
    let {title,description,imgurl,newsurl,date,author,source}=this.props
    return (
       
      <div >
        
        {/* first bracket is for js and second is for onject */}
      <Card style={{ marginLeft:'10%',width: '22rem',boxShadow:'3px 3px 3px yellow',height:'32rem',margin:'2rem'}}>

        
      {/* <Badge  pill bg="danger">
        
      </Badge> */}
      <Card.Img variant="top" style={{ width: '22rem',height:'13rem'}} src={!imgurl?"https://c.ndtvimg.com/2023-10/2qs4gnig_jk-arnia-sector-pak-firing-bunkers_625x300_27_October_23.jpeg?ver-20231016.06":imgurl} />
      <span style={{zIndex:'2',left:'90%'}} className="position-absolute top-0  translate-middle bg-danger border border-light badge rounded-pill text-bg-dange rounded-circle">{source}
    <span className="visually-hidden"></span>
  </span>
      <Card.Body >
        <div>
        <Card.Title  >{title}...</Card.Title>
        <Card.Text style={{ width: '16rem',height:'5rem'}} >
          {description}...
        </Card.Text>
        <Card.Text>By {author?author:"Unknown"} on {new Date(date).toGMTString()}</Card.Text>
        <Button href={newsurl} target='_blank' variant="dark">Read More</Button>
        </div>
      </Card.Body>
      
    </Card>
      </div>
    )
  }
}

export default NewsItems
