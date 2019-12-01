import React from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import SectionPage from './pages/section-page/section-page.component';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <Header />

            <Route exact path='/dishwasher'>
                <SectionPage 
                  sectionTitle='Dishwasher'
                />
            </Route>
                        
            <Route exact path='/range'>
                <SectionPage 
                  sectionTitle='Range'
                />
            </Route>
                        
            <Route exact path='/refrigerator'>
                <SectionPage 
                  sectionTitle='Refrigerator'
                />
            </Route>
                        
            <Route exact path='/dryer'>
                <SectionPage 
                  sectionTitle='Dryer'
                />
            </Route>
                        
            <Route exact path='/washer'>
                <SectionPage 
                  sectionTitle='Washer'
                />
            </Route>
                        
            <Route exact path='/miscellaneous'>
                <SectionPage 
                  sectionTitle='Miscellaneous'
                />
            </Route>
                        
          </div>
      </BrowserRouter>
    );  
  }
}

export default App;
