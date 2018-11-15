import React, { Component } from 'react'
import { ApolloConsumer } from 'react-apollo'
export default class EditMode extends Component {
    render() {
        const {isEditMode}=this.props;
        console.log('is', isEditMode)
        return (
            <div>
                <ApolloConsumer>
                    {
                        client => (<button onClick={()=>client.writeData({ data: { isEditMode: !isEditMode } })}>Toggel edit mode</button>)
                    }
                </ApolloConsumer>
            </div>
        )
    }
}
