import { Routes , Route } from 'react-router-dom'

import Navigation from './routes/Navigation/Navigation.component'
import Home from './routes/Home/Home.component'
import About from './routes/About/About.component'
import Categories from './routes/Categories/Categories.component'

import HeroProvider from './context/Hero/Hero.context'

import './assets/scss/global.scss'

function App() {
  return (
    <HeroProvider>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About/>}/>
          <Route path='categories' element={<Categories/>}/>
        </Route>
      </Routes>
    </HeroProvider>
  );
}

export default App;
