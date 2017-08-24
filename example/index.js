import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ReactPhoneInput from '../src';

class ExampleUsageComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phone: ''
        };
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(phone) {
        this.setState({
            phone: phone
        });
    }

    render () {
        return (
            <div>
                <h3>Example 1</h3>
                <p>Demonstrates usages of 'preferredCountries' option, in conjunction with 'excludeCountries'</p>
                <pre className="example">&lt;ReactPhoneInput defaultCountry='us' preferredCountries={['us', 'de']} excludeCountries={'in'}/&gt;</pre>
                <ReactPhoneInput defaultCountry='us' preferredCountries={['us', 'de']} excludeCountries={'in'}/>
                <h3>Example 2</h3>
                <p>Demonstrates usages of 'preferredCountries' option only</p>                
                <pre className="example">&lt;ReactPhoneInput defaultCountry='de' preferredCountries={['it']}/&gt;</pre>                
                <ReactPhoneInput defaultCountry='de' preferredCountries={['it']}/>
                <h3>Example 3</h3>
                <p>Demonstrates usages of <span className="tt">onChange</span> event handler</p>
                <pre className="example">&lt;ReactPhoneInput onChange={'{this.handleChange}'} /&gt;</pre>
                <ReactPhoneInput onChange={this.handleChange} />
                <p>You entered: {this.state.phone}</p>
            </div>
        );
    }

}

ReactDOM.render(
	<ExampleUsageComponent />,
	document.getElementById('app')
);