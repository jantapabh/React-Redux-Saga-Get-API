import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { requestApiData, receiveApiData } from './actions'
import './Home.css'

class Home extends Component {

    componentDidMount() {
        this.props.requestApiData();
    }

    person = (x, i) => (
        <div key={x.id.value}>
            <h1>{x.gender}</h1>
            <h1>{x.name.first}</h1>
            <h1>{x.name.last}</h1>
            <img src={x.picture.medium} />
        </div>
    )


    render() {

        const { results = [] } = this.props.data
        console.log('result ---> ', this.props.data);

        return results.length  ? (
            <div className="home-container">
                {results.map(this.person)}
            </div>
        ) : <h1>No Result !!!!</h1>
    }
}

const mapStateToProps = state => ({ data: state.data });
const mapDispatchToProps = dispatch => bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home)

