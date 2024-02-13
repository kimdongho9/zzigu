import style from './post.module.css';
import Link from "next/link";

import 'dayjs/locale/ko';
import ActionButtons from "@/app/(afterLogin)/_component/ActionButtons";

// dayjs.locale('ko');
// dayjs.extend(relativeTime)

export default function Post() {
  const target = {
    User: {
      id: 'starwas',
      nickname: 'yoda',
      image: '/zzi.jpg'
    },
    content: '어렵다 이거..',
    createdAt: new Date(),
    Images: [],
  }




  return (
    <article className={style.post}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname}/>
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={style.postUserName}>{target.User.nickname}</span>
              
              <span className={style.postUserId}>@{target.User.id}</span>
              
              ·
            </Link>
            {/* <span className={style.postDate}>{dayjs(target.createdAt).fromNow(true)}</span> */}
          </div>
          <div>{target.content}</div>
          <div className={style.postImageSection}>

          </div>
          <ActionButtons />
        </div>
      </div>
    </article>
  )
}