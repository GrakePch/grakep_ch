import friends from "../data/friends";

export default function Friends() {
  const sortedFriends = [...friends].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="grid gap-4">
      {sortedFriends.map((friend, index) => (
        <div key={index} className="flex items-center gap-4 py-4">
          <img
            src={friend.avatar}
            alt={`${friend.name}'s avatar`}
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div>
            <h2 className="text-lg font-bold">{friend.name}</h2>
            {friend.bio && <p className="text-stone-600 dark:text-stone-400">{friend.bio}</p>}
            {friend.links && (
              <div className="flex gap-x-2">
                {friend.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-red-700 dark:text-red-400 underline underline-offset-2"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
