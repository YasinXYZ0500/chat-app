import React, { Component } from 'react';

class ClassEvent extends Component {
   constructor(){
      super();
      this.state = {
        text: "",
        option: "option2"
      }
   }

   clickHandler = () => {
      this.setState({

      })
   }

   // این 'فانکشن' وقتی اجرا میشه که کاربر چیزی رو در اینپوت تغییر میده
   // و میگیم وقتی چیزی در اینپوت تغییر کرد متن رو چیزی قرار بده که کاربر داره مینویسه

   changeHandler = event => {
      this.setState({
          text: event.target.value
      })
      console.log(event.target.value)
   }

   selectHandler = event => {
      this.setState ({
         option: event.target.value
      })
      console.log(event.target.value)
   }

   // در ریکت وقتی میخواید 'یو آی' رو تغییر بدید از استیت ها استفاده کنید

   submitHandler = event => {
      event.preventDefault();
      console.log(this.state.text);
      console.log(this.state.option);

   }

   render() {
      const {text, option} = this.state;
      return (
         <form onSubmit={this.submitHandler}>
            <input type="text" value={text} onChange={this.changeHandler}/>
            <br/>
            <br/>
            <select value={option} onChange={this.selectHandler}>
               <option value="option1">Option 1</option>
               <option value="option2">Option 2</option>
               <option value="option3">Option 3</option>
               <option value="option4">Option 4</option>
            </select>
            <br/>
            <br/>
            <button type="submit">Submit</button>
         </form>
      );
   }
}

export default ClassEvent;