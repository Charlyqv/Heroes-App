import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from "../../ui/components";
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages';
import { Themes } from "../../ui/components";
import '../../ui/App.css';


export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <Themes />

      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  )
}
