import { useRouter } from 'next/router';

export default function Nav() {
  const router = useRouter();
  const route = router.pathname.substring(1);

  
  return (
    <nav className={`bg-white shadow ${route === 'login' ?'flex justify-around ':''}`}>
      <div className={`max-w-7xl ${route === 'login' ?'':'mx-auto'} py-6 px-4 sm:px-6 lg:px-8`}>
        <h1 className="text-3xl font-bold text-gray-900 capitalize">{route}</h1>
      </div>
      <div className='flex items-center	 gap-4'>
      {
          route === 'login' &&(
            <>
            <p>Usuario default ➡️</p>
            <p className="text-sm text-gray-900 mt-0"><strong>admin@mail.com</strong></p>
            <p className="text-sm text-gray-900 mt-0"><strong>admin123</strong></p>
            </>
          )
        }
      </div>
    </nav>
  );
}
