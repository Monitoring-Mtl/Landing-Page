import Image from "next/image";

export default function Partenaires() {
  return (
    <>
      <h1>Partenaires</h1>
      <Image
        src="/cloudcampus-logo.png"
        alt="Logo cloud campus"
        width={300}
        height={300}
      />
    </>
  );
}
