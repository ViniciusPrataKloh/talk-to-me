import { messageType } from "./chat";

export default function Message({ username, time, message }: messageType) {
  return (
    <div className="p-3 space-y-2 bg-gray-500 rounded">
      <div className="md:flex items-center text-primary sm:flex-col sm:items-start sm:justify-start sm:gap-1">
        <strong>{username}</strong>
        <span className="text-xs">{time}</span>
      </div>

      <p className="text-sm">
        {message}
      </p>
    </div>
  )
}