import Link from "next/link";

const signupPage = () => {
  return (
    <div className="flex flex-col gap-5 h-screen mx-5 justify-center">
      <Link href="/signup/worker">
        <button className="bg-primary w-full text-white rounded-lg px-7 py-3">
          Signup as User
        </button>
      </Link>
      <Link href="/signup/worker">
        <button className="bg-secondary w-full text-white rounded-lg px-7 py-3">
          Signup as Worker
        </button>
      </Link>
    </div>
  );
};

export default signupPage;
