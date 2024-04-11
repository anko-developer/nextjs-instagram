'use client';

import { DetailUser } from '@/model/user';
import Link from 'next/link';
import { PropagateLoader } from 'react-spinners';
import useSWR from 'swr';
import Avatar from '../Avatar/Avatar';
import ScrollabelBar from '../ui/ScrollabelBar';

export default function FollowingBar() {
  const { data, isLoading: loading, error } = useSWR<DetailUser>('/api/me');
  const users = data?.following;

  // 1. 클라이언트 컴포는트에서 백엔드에게 api/me 사용자의 정보를 얻어옴 - 로그인을 했다면 JWT 를 통해 받아오게 될 것임
  // 2. 백엔드에서는 현재 로그인된 사용자의 세션 정보를 이용해서
  // 3. 백엔드에서 사용자의 상세 정보를 Sanity에서 가지고 옴(followings)
  // 4. 여기에서, 클라이언트 컴포넌트에서 followings의 정보를 UI에 보여줌
  // (image, username)
  return (
    <section className="w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto relative z-0">
      {loading ? (
        <PropagateLoader size={8} color="red" />
      ) : (
        (!users || users.length === 0) && <p>{`You don't hav following`}</p>
      )}
      {users && users.length > 0 && (
        <ScrollabelBar>
          {users.map(({ image, username }) => (
            <Link
              key={username}
              className="flex flex-col items-center w-20"
              href={`/user/${username}`}
            >
              <Avatar image={image} size="lg" highlight />
              <p className="w-full text-sm text-ellipsis overflow-hidden text-center">
                {username}
              </p>
            </Link>
          ))}
        </ScrollabelBar>
      )}
    </section>
  );
}
