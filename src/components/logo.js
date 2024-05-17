import Image from 'next/image';

export const Logo = () => {

  return (
    <Image
      alt="Logo"
      layout="responsive"
      src="/assets/logoTienda.jpeg"
      width={64}
      height={45}
      style={{ borderRadius: "50%" }}
    />
  );
};
