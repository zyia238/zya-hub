import { Routes , Route } from 'react-router-dom'

import Navigation from './routes/Navigation/Navigation.component'
import Home from './routes/Home/Home.component'
import About from './routes/About/About.component'
import Categories from './routes/Categories/Categories.component'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='about' element={<About/>}/>
        <Route path='categories' element={<Categories/>}/>
      </Route>
    </Routes>
  );
}

export default App;
