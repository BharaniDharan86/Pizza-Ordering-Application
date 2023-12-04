import { useSelector } from 'react-redux';

function UserName() {
  const { userName } = useSelector((store) => store.user);
  return (
    <div className="hidden text-sm font-semibold text-stone-800 md:block">
      {userName}
    </div>
  );
}

export default UserName;
