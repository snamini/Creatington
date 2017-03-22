// importing the component class from the react library
import React, { Component } from 'react';
import Header from '../components/Header';
// import SideNav from '../components/SideNav';
import Slider from '../components/Slider';
import SearchBS from '../components/SearchBS';
import FeaturedArtists from '../components/FeaturedArtists';
// import Button from '../components/Button';
// import Dropdown from '../components/Dropdown';
import DisplayCard from '../components/DisplayCard';
import FloatBtn from '../components/FloatBtn';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';
import { Row, Col} from 'react-materialize';
// then we use that component class that we just imported to make our special components
// // Home inherited a bunch of things from the component
class Home extends Component {
    render() {
      return (
                   <div>

{/*------------------------------------nav bar header---------------------------------------*/}
                <Header isLoggedIn={this.props.route.isLoggedIn}/>


{/*-------------------------Title, Search Bar, Drop Down Genre, Followers button--------------------*/}
                    <div>
                      <h1 className="title">Creatington</h1>
                      <Slider />

                      <Row>
                         <Col s={12} className='search-bar'>
                          <SearchBS />
                        </Col>
                      </Row>


{/*-------------------------Card Section------------------*/}
<h1>Featured Artists</h1>
                      <FeaturedArtists />


{/*-------------------------Footer-----------------------*/}
                <Footer/>
            </div>
</div>
        );
    }
}

export default Home;
