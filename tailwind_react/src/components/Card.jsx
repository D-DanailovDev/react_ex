const Card = ({ username = "Jane Smith", post = "Not assigned yet" }) => {
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-28 h-28 rounded-full mx-auto"
          src="https://images.pexels.com/photos/127438/pexels-photo-127438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          width="500"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-me">
              “Tailwind CSS is the only framework that I have seen scale on
              large teams. It’s easy to customize, adapts to any design, and the
              build size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <div>{username}</div>
            <div>{post}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Card;
