import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='fixed top-0 max-w-5xl w-full'>
      <menu className='text-center m-7'>
        {/* <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><g fillRule="evenodd"><path d="M2 5a1.5 1.5 0 0 1 1.5-1.5H8A4.5 4.5 0 0 1 12.5 8v11.625a1.5 1.5 0 0 1-1.5 1.5H3.5a1.5 1.5 0 0 1-1.5-1.5V5Zm1.5-.5A.5.5 0 0 0 3 5v14.625a.5.5 0 0 0 .5.5H11a.5.5 0 0 0 .5-.5V8A3.5 3.5 0 0 0 8 4.5H3.5Z"/><path d="M2 17.063a.5.5 0 0 1 .5-.5h5.938a4.062 4.062 0 0 1 4.062 4.062.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5v-3.563Zm1 .5v2.562h8.46a3.063 3.063 0 0 0-3.023-2.563H3Z"/><path d="M22 17.063a.5.5 0 0 0-.5-.5h-5.938a4.062 4.062 0 0 0-4.062 4.062.5.5 0 0 0 .5.5h9.5a.5.5 0 0 0 .5-.5v-3.563Zm-1 .5v2.562h-8.46a3.063 3.063 0 0 1 3.023-2.563H21Z"/><path d="M22 5a1.5 1.5 0 0 0-1.5-1.5H16A4.5 4.5 0 0 0 11.5 8v11.625a1.5 1.5 0 0 0 1.5 1.5h7.5a1.5 1.5 0 0 0 1.5-1.5V5Zm-1.5-.5a.5.5 0 0 1 .5.5v14.625a.5.5 0 0 1-.5.5H13a.5.5 0 0 1-.5-.5V8A3.5 3.5 0 0 1 16 4.5h4.5Z"/></g></svg></div> */}
        <Link to="/">
          <h1 className='text-3xl font-bold'>Book Finder</h1>
        </Link>
      </menu>
    </header>
  )
}

export default Header