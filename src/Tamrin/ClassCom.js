import React, { Component } from 'react';
import axios from "axios"
import Post from "./Post"
class ClassCom extends Component {

    constructor(){
        super();
        this.state = {
            postData:[],
            title: ""
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => this.setState({
                postData: response.data
            }))
    }

    changeHandler = event => {
        this.setState({
            title: event.target.value
        })
    }
    render() {
        const { postData, title } = this.state;
        return (
            <div>
                <input type='text' value={title} onChange={this.changeHandler}/>
                {postData.map(post => <Post key={post.id} title={post.title} body={post.body}/>)}
            </div>
        );
    }
}

export default ClassCom;