import Image from "next/image";
import {Nanum_Pen_Script} from "next/font/google"

const geist = Nanum_Pen_Script({
  subsets: ['latin'],
  weight: '400'
})

export default function NextImagePage() {
  return (
    <>
      <Image 
        className="dark:invert"
        src="/test.png"
        alt="Picture of the author"
        width={360}
        height={218}
      />

      <p className={`p4 text-4xl ${geist.className}`}>한글 나눔 펜 스크립트 폰트가 적용된 블로그2 페이지입니다.</p>
    </>
  );
}