import React, { Component } from 'react'
import propTypes from 'proptypes';
export default class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title:this.props.post.title ||  '',
            body:this.props.post.body ||  '',
            id:this.props.post.id || ''
        }
    }
    static propTypes={
        onSubmit:propTypes.func.isRequired,
        post:propTypes.object
    }
    static defaultProps = {
        post:{}
    }
    handleInput = e => {
        const formData = {};
        formData[e.target.name] = e.target.value;
        this.setState({ ...formData })
    }
    render() {
        const { title, body, id } = this.state
        const {onSubmit} = this.props
        return (
            <div>
                <form onSubmit={(e) => {
                            e.preventDefault();
                            onSubmit({
                                variables:{
                                    title,
                                    body,
                                    id
                                }
                            }).then(() => {
                                this.setState({
                                    title: '',
                                    body: ''
                                })
                            }).catch(e=>console.log(e))
                            
                        }}>
                            <input type="text"
                                name="title"
                                onChange={this.handleInput}
                                value={title}
                                placeholder='title' />

                            <textarea
                                type="text"
                                name="body"
                                onChange={this.handleInput}
                                value={body}
                                placeholder="body" />

                            <button className="button">Submit</button>
                        </form>
            </div>
        )
    }
}

