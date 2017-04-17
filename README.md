# react-phone-input
A simple react component to format a phone number as the user types.

![alt tag](http://i.giphy.com/l41m24L5YTSOifyW4.gif)

## Installation:

```shell-script
npm install react-phone-input --save
```
  
## Usage:

```jsx
React.render(
  <ReactPhoneInput defaultCountry={'us'} 
  value="+1 514 421 8123"
  onChange{handleOnChange)/>,
  document.getElementById('content'));
```

If you want to provide a default value, then pass in the optional ``value`` attribute. If the value is updated via a state change in the parent component, then it is reflected in the field. If the phone number is not prefixed by '+', then it will be prefixed by the dialing code of the default country.

Your handler for the ``onChange`` event should expect a string as
parameter, where the value is that of the entered phone number. For example:

```jsx
function handeOnChange(value) {
   this.setState({
      phone: value
   });
}
```
## Options:

| Name | Description          |
| :------------- | :----------- |
| defaultCountry | country code to initialize the component|
| excludeCountries | array of country codes to be excluded e.g. ['cu','cw','kz']|
| onlyCountries | array of country codes to be included e.g. ['cu','cw','kz']|
| preferredCountries | array of country codes to be preferred (highlighted at the top) e.g. ['cu','cw','kz']|
| value | initial phone number to be used. numbers without '+' will use default country dialing code |
| onChange | handler for onChange event, which specfies the field value, e.g. ``onChange={(phoneNumber) => { } }`` | 

## License

[MIT](https://opensource.org/licenses/MIT)