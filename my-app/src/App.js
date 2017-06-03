import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import {loadData} from './actions/tinder';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Cards, {Card} from 'react-swipe-card'
const config = {
    headers: {
        'Content-Type': 'application/json',
    }
};
const data = ['Alexandre', 'Thomas', 'Lucien'];

class App extends Component {
    /*
     getRecommendations(){

     axios.post('http://localhost:8081/app/tinder/recommendations', {
     authToken: '9d5a7a38-1d86-49a1-a9aa-cfe70d664249' }, config)
     .then( (response) =>{
     this.parseRecommendations(response);
     })
     .catch(function (error) {
     console.log(error);
     });
     }
     */

    likePerson(userId,contentHash ) {
        axios.post('http://localhost:8081/app/tinder/like', {
            userToken: '7317e1df-cd49-4989-bf15-77dad4c2bf74',userID : userId  , hash : contentHash}, config);

    }
    passPerson(userId,contentHash ) {
        axios.post('http://localhost:8081/app/tinder/pass', {
            userToken: '7317e1df-cd49-4989-bf15-77dad4c2bf74',userID : userId  , hash : contentHash}, config);

    }

    componentDidMount() {
        this.props.loadData();

    }

    /* parseRecommendations(jsonRecommendations){
     console.log("hola",jsonRecommendations.data[0]);

     }
     */
    render() {
        if (this.props.tinder.loading) {
            return <div>Loading...</div>
        }

        else if (!this.props.tinder.data) {
            return <div>No Data</div>
        }

        return (
            <div>
                <Cards onEnd={this.props.loadData} className='master-root'>
                    {this.props.tinder.data.map(item =>
                        <Card key={item.name}
                              onSwipeLeft={() => this.passPerson(item._id, item.content_hash)}
                              onSwipeRight={() => this.likePerson(item._id, item.content_hash)}>
                            <h2 onClick={() => console.log(item._id)}>{item.name}</h2>
                            <img src={item.photos[0].url} />
                        </Card>
                    )}
                </Cards>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return ({tinder: state.tinder});

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({loadData, }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
