import React, { Component } from 'react';
import { TopBar } from './TopBar';
import { Home } from './Home';
import { Article1 } from './article1';
import { Article2 } from './article2';
import { Jidanmian } from './jidanmian';
import { Sing } from './sing';
import { Chat } from './chat';
import { Wakeup } from './Wakeup';
import { Switch, Route, BrowserRouter } from 'react-router-dom'


class App extends Component {
 render() {
   return (
     <div className="App">
       <TopBar/>
       <BrowserRouter basename="/">
               <Switch>
                 <Route exact path='/' component={Home} />
                 <Route path='/article1' component={Article1} />
                 <Route path='/article2' component={Article2} />
                 <Route path='/jidanmian' component={Jidanmian} />
                 <Route path='/sing' component={Sing} />
                 <Route path='/chat' component={Chat} />
                 <Route path='/wakeup' component={Wakeup} />
               </Switch>
       </BrowserRouter>

       <footer className="footer">
           <p>Created by: SparklingBing, LLC</p>
           <p>Contact information: <a href="https://www.linkedin.com/in/yibing-zhang-006323149/">
           My Linkedin</a>.</p>
       </footer>
     </div>
   );
 }
}

export default App;