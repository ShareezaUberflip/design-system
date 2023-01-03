
import './App.css';
import './components/style-config/style.css';
import { useState } from 'react';
import Header from  './components/header';

// defined component 
// always have wrap with return statement when using state in order for init
/*const CounterComponent = () => {
  const [count, setCount] = useState(0);
  return (
  <>
  <p> I clicked {count} times </p>
  <button onClick={() => setCount(count + 1)}>
  Click me
 </button>
 </>
  );
};*/
//<Header iconBtnid='1' iconBtnClasses='uf-icon-btn' iconBtnHandler='' iconClass='fa fas' iconId='1' linkHref='www.google.com' linkClass='uf-link--underline' linkValue='Menu 1' />
function App(props) {

  return (
    <>
     <main className='component'>
      <section className='component-dashboard'>
      <h2>My Components</h2>
       <div>Header Component</div>
      </section>
      <section className='component-view'> <h2>The View Area </h2>
      <Header/>
      </section>
      <section className='component-content'> <h2> Componnet Content </h2>
      </section>
      </main>
    </>
  );
}



export default App;
