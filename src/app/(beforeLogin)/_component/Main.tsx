import Image from "next/image";
import Link from "next/link";
import styles from "@/app/(beforeLogin)/_component/main.module.css";
import zzi from "../../../../public/zzi.jpg";
export default function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Image src={zzi} alt="logo" />
      </div>
      
      <div className={styles.bottom}>
        
        <h2>회원가입 하세요.</h2>
        
        <Link href="/I/flow/signup" className={styles.signup}>
          계정 만들기
        </Link>

        <h3>이미 가입하셨다면?</h3>

        <Link href="/login" className={styles.login}>
          로그인
        </Link>
      </div>
    </div>
  )
}