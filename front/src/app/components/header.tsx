import Image from 'next/image';
import Container from './container';

export default function Header() {
  return (
    <header className='w-full bg-gray-600 p-4'>
      <Container>
        <div className='flex flex-row items-center justify-between'>
          <Image src='/logo.svg' alt='Logo do Talk to Me' className='' width={150} height={150} />
          <Image src='hero.svg' alt='Logo do Hero Code' className='' width={60} height={60} />
        </div>
      </Container>
    </header>
  )
}