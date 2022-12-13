import { Routes , Route } from 'react-router-dom'

import Navigation from './routes/Navigation.component'
import Home from './routes/Home.component'
import About from './routes/About.component'
import Categories from './route/Categories.component'

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
