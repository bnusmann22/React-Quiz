import reactLOGO from '../asset/reactLG.png';
function Header() {
  return (
    <header className='app-header'>
      <img src= {reactLOGO} alt='React logo' />
      <h1>The React Quiz</h1>
    </header>
  );
}

export default Header;
