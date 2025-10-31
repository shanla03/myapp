import logo from './logo.svg';
import './App.css';
import Header from './component/Header.jsx';
import Footer from './component/Footer.jsx';
import Home from './page/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArrowFunction from './component/Es6/ArrowFunction.jsx'
import About from './component/About.jsx';
import Es6 from './page/Es6.jsx';
import ArrayMethod from './component/Es6/ArrayMethod.jsx';
import Destructuring from './component/Es6/Destructuring.jsx';
import SpreadOperator from './component/Es6/SpreadOperator.jsx';
import Import from './component/Es6/Import.jsx'
// import Login from './component/Login.jsx'
import TernaryOperator from './component/Es6/TernaryOperator.jsx';
import Parent from './component/Parent.jsx';
import UseState from './component/UseState.jsx';
import UseEffect from './component/UseEffect.jsx';
import AddProduct from './component/AddProduct.jsx';
import ViewProduct from './component/ViewProduct.jsx'
import ProductList from './component/ProductList.jsx';
import SingleView from './component/SingleView.jsx';
import Student from './component/Student.jsx';
import Vstudent from './component/Vstudent.jsx';
import UpdateStud from './component/UpdateStud.jsx';
import Register from './component/Register.jsx';
import UserLogin from './component/UserLogin.jsx';


function App() {
  return (
    <div>
      
      <BrowserRouter>
       <Header/>
      <Routes>

        
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/UserLogin' element={<UserLogin/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Es6' element={<Es6/>}/>
        <Route path='/ArrowFunction' element={<ArrowFunction/>}/>
        <Route path='/ArrayMethod' element={<ArrayMethod/>}/>
        <Route path='/Destructuring' element={<Destructuring/>}/>
        <Route path='/SpreadOperator' element={<SpreadOperator/>}/>
        <Route path='/Import' element={<Import/>}/>
        <Route path='/TernaryOperator' element={<TernaryOperator/>}/>
        <Route path='/props' element={<Parent/>}/>
        <Route path='/UseState' element={<UseState/>}/>
        <Route path='/UseEffect' element={<UseEffect/>}/>
        <Route path='/AddProduct' element={<AddProduct/>}/>
        <Route path='/ViewProduct' element={<ViewProduct/>}/>
        <Route path='/ProductList' element={<ProductList/>}/>
        <Route path='/SingleView/:id' element={<SingleView/>}/>
        <Route path='/Student' element={<Student/>}/>
        <Route path='/Vstudent' element={<Vstudent/>}/>
        <Route path='/UpdateStud/:id' element={<UpdateStud/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
